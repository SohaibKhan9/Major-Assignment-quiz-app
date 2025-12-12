const data = JSON.parse(sessionStorage.getItem('quizData'));
if (!data) window.location.href = 'index.html';

const total = data.questions.length;
const percent = Math.round((data.score / total) * 100);

document.getElementById('score').textContent = `${data.score}/${total}`;
document.getElementById('percent').textContent = `${percent}%`;

const list = document.getElementById('review-list');
list.innerHTML = data.questions.map((q, i) => {
    const isCorrect = data.userAnswers[i] === q.correctIndex;
    return `
    <div class="review-card bg-white p-6 rounded-2xl border ${isCorrect ? 'border-green-200' : 'border-red-200'} shadow-sm">
        <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}">${i + 1}</div>
            <div>
                <p class="font-semibold text-slate-900 mb-2">${q.text}</p>
                <p class="text-sm text-slate-500">Correct Answer: <span class="font-medium text-indigo-600">${q.options[q.correctIndex]}</span></p>
            </div>
        </div>
    </div>`;
}).join('');

lucide.createIcons();