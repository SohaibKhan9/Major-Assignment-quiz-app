export const API_KEY = 'd5RCVXrpcIPWdYU90jPxiywOjHpAV805WPtCSFbt';

export const fetchQuestions = async (topic, difficulty) => {
    const limit = 5;
    const url = `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&limit=${limit}&difficulty=${difficulty}&tags=${topic}&single_answer_only=true`;
    
    const response = await fetch(url);
    if (!response.ok) throw new Error("API_ERROR");
    
    const data = await response.json();
    if (!Array.isArray(data) || data.length === 0) throw new Error("NO_QUESTIONS");

    return data.map((item) => {
        const validOptions = [];
        const optionKeys = [];
        
        Object.entries(item.answers).forEach(([key, value]) => {
            if (value !== null) {
                validOptions.push(value);
                optionKeys.push(key);
            }
        });

        let correctIndex = -1;
        Object.entries(item.correct_answers).forEach(([key, value]) => {
            if (value === 'true') {
                const answerKey = key.replace('_correct', '');
                correctIndex = optionKeys.indexOf(answerKey);
            }
        });

        return {
            id: item.id,
            text: item.question,
            options: validOptions,
            correctIndex: correctIndex,
            explanation: item.explanation || "No explanation provided."
        };
    });
};