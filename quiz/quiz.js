const data = JSON.parse(sessionStorage.getItem('quizData'));
if (!data) window.location.href = 'index.html';

let isRevealed = false;

function renderQuestion() {
    isRevealed = false;
    const q = data.questions[data.currentQuestionIndex];
    
    document.getElementById('question-text').textContent = q.text;
    document.getElementById('feedback-area').classList.add('hidden');
    
    // Progress
    const pct = ((data.currentQuestionIndex + 1) / data.questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${pct}%`;
    document.getElementById('progress-text').textContent = `Question ${data.currentQuestionIndex + 1}/${data.questions.length}`;

    // Options
    const container = document.getElementById('options-container');
    container.innerHTML = q.options.map((opt, idx) => `
        <button class="option-btn w-full text-left p-4 rounded-xl border-2 border-slate-100 transition-all font-medium text-slate-700" onclick="handleAnswer(${idx}, this)">
            <span class="mr-3 font-bold text-slate-400">${String.fromCharCode(65 + idx)}.</span> ${opt}
        </button>
    `).join('');
    
    lucide.createIcons();
}

window.handleAnswer = (idx, btn) => {
    if (isRevealed) return;
    isRevealed = true;
    
    const q = data.questions[data.currentQuestionIndex];
    const isCorrect = idx === q.correctIndex;
    
    data.userAnswers.push(idx);
    if (isCorrect) data.score++;

    // Style buttons
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((b, i) => {
        b.disabled = true;
        if (i === q.correctIndex) b.classList.add('correct');
        else if (i === idx && !isCorrect) b.classList.add('incorrect');
        else b.classList.add('opacity-50');
    });

    document.getElementById('feedback-text').textContent = q.explanation;
    document.getElementById('feedback-area').classList.remove('hidden');
};

document.getElementById('next-btn').addEventListener('click', () => {
    if (data.currentQuestionIndex < data.questions.length - 1) {
        data.currentQuestionIndex++;
        // Update storage so refresh doesn't lose progress
        sessionStorage.setItem('quizData', JSON.stringify(data));
        renderQuestion();
    } else {
        sessionStorage.setItem('quizData', JSON.stringify(data));
        window.location.href = 'results.html';
    }
});

renderQuestion();