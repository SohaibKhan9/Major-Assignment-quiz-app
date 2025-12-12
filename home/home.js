import { fetchQuestions } from '../shared/api.js';

const difficulties = ['Easy', 'Medium', 'Hard'];
let selectedDifficulty = 'Medium';

// Render Difficulty Buttons
const grid = document.getElementById('difficulty-grid');
grid.innerHTML = difficulties.map(d => `
    <button type="button" class="difficulty-btn w-full py-3 rounded-xl border-2 border-slate-100 text-slate-600 font-medium ${d === 'Medium' ? 'active' : ''}" onclick="selectDiff('${d}')">
        ${d}
    </button>
`).join('');

window.selectDiff = (val) => {
    selectedDifficulty = val;
    document.querySelectorAll('.difficulty-btn').forEach(b => {
        b.classList.toggle('active', b.textContent.trim() === val);
    });
};

document.getElementById('generator-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const topic = document.getElementById('topic').value.trim();
    const btn = document.getElementById('generate-btn');
    const btnText = document.getElementById('btn-text');

    btn.disabled = true;
    btnText.textContent = "Fetching...";

    try {
        const questions = await fetchQuestions(topic, selectedDifficulty);
        sessionStorage.setItem('quizData', JSON.stringify({
            topic,
            questions,
            score: 0,
            currentQuestionIndex: 0,
            userAnswers: []
        }));
        window.location.href = 'quiz.html';
    } catch (error) {
        window.location.href = 'error.html';
    }
});

lucide.createIcons();