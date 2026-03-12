(function () {
    const CLASS_KEY = "roundOneSelectedClass";
    const COUNTER_PREFIX = "roundOneCounter::";

    function safePart(value, fallback) {
        return (value || fallback || "value")
            .toString()
            .trim()
            .replace(/[^\w\-]+/g, "_")
            .replace(/^_+|_+$/g, "") || fallback || "value";
    }

    function getClassFromURL() {
        try {
            const params = new URLSearchParams(window.location.search);
            return (params.get("class") || "").trim();
        } catch (e) {
            return "";
        }
    }

    function getSelectedClass() {
        const fromURL = getClassFromURL();
        if (fromURL) {
            try { localStorage.setItem(CLASS_KEY, fromURL); } catch (e) {}
            return fromURL;
        }
        try {
            return (localStorage.getItem(CLASS_KEY) || "").trim();
        } catch (e) {
            return "";
        }
    }

    function setSelectedClass(value) {
        const trimmed = (value || "").trim();
        try { localStorage.setItem(CLASS_KEY, trimmed); } catch (e) {}
        return trimmed;
    }

    function ensureClassSelected() {
        const selectedClass = getSelectedClass();
        if (!selectedClass) {
            window.location.href = "round-one-class.html";
            return "";
        }
        return selectedClass;
    }

    function getNextSubmissionNumber(selectedClass) {
        const key = COUNTER_PREFIX + selectedClass;
        let current = 0;
        try {
            current = parseInt(localStorage.getItem(key) || "0", 10) || 0;
            const next = current + 1;
            localStorage.setItem(key, String(next));
            return next;
        } catch (e) {
            return current + 1;
        }
    }

    function downloadJSON(obj, filename) {
        const blob = new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    }

    function extractQuestionNumber(questionElement) {
        const answer = questionElement?.querySelector(".answer[id]");
        const match = answer?.id?.match(/(\d+)/);
        if (match) return Number(match[1]);

        const prompt = questionElement?.querySelector("p");
        const promptMatch = prompt?.textContent?.trim()?.match(/^(\d+)/);
        if (promptMatch) return Number(promptMatch[1]);

        const allQuestions = Array.from(document.querySelectorAll(".question"));
        const index = allQuestions.indexOf(questionElement);
        return index >= 0 ? index + 1 : null;
    }

    function getSubjectName() {
        const title = document.title || "";
        if (title.includes(" - ")) {
            return title.split(" - ").pop().trim();
        }
        const heading = document.querySelector("h1")?.textContent || "";
        return heading.replace(/^Definition Contest\s*-\s*/i, "").trim() || "Subject";
    }

    function pickRandomQuestion() {
        const questions = Array.from(document.querySelectorAll(".question"));
        if (!questions.length) return null;

        const chosen = questions[Math.floor(Math.random() * questions.length)];
        questions.forEach((q) => {
            if (q !== chosen) q.style.display = "none";
        });

        if (!chosen.querySelector('#isCorrect')) {
            const grading = document.createElement("div");
            grading.style.marginTop = "10px";
            grading.style.padding = "10px";
            grading.style.border = "1px solid rgba(0,0,0,0.15)";
            grading.style.borderRadius = "8px";
            grading.innerHTML = `
                <label style="display:flex; gap:8px; align-items:center;">
                    <input id="isCorrect" type="checkbox">
                    <span><strong>Correct</strong> (tick if the answer is correct)</span>
                </label>
            `;
            chosen.appendChild(grading);
        }
        return chosen;
    }

    function updateSelectedClassUI(selectedClass) {
        const display = document.getElementById("selectedClassValue");
        if (display) display.textContent = selectedClass;

        const hiddenInput = document.getElementById("studentClass");
        if (hiddenInput) hiddenInput.value = selectedClass;
    }

    function whenReady(callback) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", callback, { once: true });
        } else {
            callback();
        }
    }

    function buildRoundOneURL(selectedClass) {
        return 'round-one.html?class=' + encodeURIComponent(selectedClass);
    }

    function buildSubjectURL(href, selectedClass) {
        const base = (href || '').split('#')[0].split('?')[0];
        return base + '?class=' + encodeURIComponent(selectedClass);
    }

    function wireClassSelectionPage() {
        whenReady(function () {
            const form = document.getElementById('classSelectionForm');
            const input = document.getElementById('classSelectionInput');
            const error = document.getElementById('classSelectionError');
            const recent = getSelectedClass();
            if (input && recent) input.value = recent;

            function submitClass(event) {
                if (event) event.preventDefault();
                const value = (input?.value || '').trim();
                if (!value) {
                    if (error) error.textContent = 'Please select a class first.';
                    if (input) input.focus();
                    return;
                }
                if (error) error.textContent = '';
                const selected = setSelectedClass(value);
                window.location.href = buildRoundOneURL(selected);
            }

            if (form) form.addEventListener('submit', submitClass);
            const continueBtn = document.getElementById('classSelectionContinue');
            if (continueBtn) continueBtn.addEventListener('click', submitClass);
        });
    }

    function wireRoundOneSubjectMenu() {
        whenReady(function () {
            const selectedClass = ensureClassSelected();
            if (!selectedClass) return;
            updateSelectedClassUI(selectedClass);

            document.querySelectorAll('.subject-list a').forEach(function (link) {
                const href = link.getAttribute('href') || '';
                link.setAttribute('href', buildSubjectURL(href, selectedClass));
            });

            const changeBtn = document.getElementById('changeClassBtn');
            if (changeBtn) {
                changeBtn.addEventListener('click', function () {
                    window.location.href = 'round-one-class.html?class=' + encodeURIComponent(selectedClass);
                });
            }
        });
    }

    function wireRoundOneSubjectPage() {
        whenReady(function () {
            const selectedClass = ensureClassSelected();
            if (!selectedClass) return;
            updateSelectedClassUI(selectedClass);

            const chosenQuestion = pickRandomQuestion();
            const btn = document.getElementById('submitBtn');
            if (!btn) return;

            btn.addEventListener('click', function () {
                const isCorrect = !!document.getElementById('isCorrect')?.checked;
                const subject = getSubjectName();
                const submissionNumber = getNextSubmissionNumber(selectedClass);
                const questionId = extractQuestionNumber(chosenQuestion);

                const result = {
                    class: selectedClass,
                    submission_number: submissionNumber,
                    subject: subject,
                    question_id: questionId,
                    is_correct: isCorrect,
                    submitted_at: new Date().toISOString()
                };

                const safeClass = safePart(selectedClass, 'class');
                const safeSubject = safePart(subject, 'subject');
                const filename = `${safeClass}_${submissionNumber}_${safeSubject}.json`;

                downloadJSON(result, filename);
                setTimeout(function () {
                    window.location.href = buildRoundOneURL(selectedClass);
                }, 600);
            }, { once: true });
        });
    }

    window.RoundOneFlow = {
        getSelectedClass,
        setSelectedClass,
        ensureClassSelected,
        wireClassSelectionPage,
        wireRoundOneSubjectMenu,
        wireRoundOneSubjectPage
    };
})();
