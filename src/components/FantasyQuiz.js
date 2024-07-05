import React, { useState, useEffect } from 'react';

const FantasyQuiz = () => {
    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState(null);
    const [questionIndex, setQuestionIndex] = useState(1);

    const fetchQuizData = async (index) => {
        console.log(`Starting fetch request for question ${index}`);
        try {
            const response = await fetch(`/api/`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Fetch response received:', response);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const data = await response.json();
            console.log('Fetched data:', data); // Log the fetched data
            
            // Extract the question data based on the questionIndex
            const questionData = data.DATA.questions[questionIndex - 1];
            const options = [
                { id: 'A', name: 'A', value: questionData.ans_a },
                { id: 'B', name: 'B', value: questionData.ans_b },
                { id: 'C', name: 'C', value: questionData.ans_c },
                { id: 'D', name: 'D', value: questionData.ans_d },
            ];

            setQuizData({ id: questionData.question_id, question: questionData.question, options });
        } catch (error) {
            console.error('Error fetching quiz data:', error);
            alert('There was an error fetching quiz data. Please try again later.');
        }
    };

    useEffect(() => {
        fetchQuizData(questionIndex); // Call the fetch function when the component mounts
    }, [questionIndex]); // Fetch new question when questionIndex changes

    const handleSelect = (optionId) => {
        setSelected(optionId);
    };

    const handleContinue = () => {
        if (selected !== null) {
            setSelected(null); // Reset selected option
            setQuestionIndex((prevIndex) => prevIndex + 1); // Move to next question
        }
    };

    if (!quizData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-[#EDE8E3] rounded-lg shadow-lg p-6 w-full max-w-sm">
                <div className="flex justify-between items-center mb-4">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">200</span>
                    <h1 className="text-lg font-bold">Fantasy Quiz #{quizData.id}</h1>
                    <button className="text-gray-400 hover:text-gray-600">✖</button>
                </div>
                <div className="mb-4">
                    <div className="bg-gray-200 rounded-full h-1 w-full">
                        <div className="bg-green-500 h-1 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                </div>
                <h2 className="text-md font-semibold mb-4">{quizData.question}</h2>
                <div className="space-y-3">
                    {quizData.options.map(option => (
                        <button
                            key={option.id}
                            onClick={() => handleSelect(option.id)}
                            className={`w-full flex justify-between items-center p-4 rounded-lg border ${
                                selected === option.id ? 'bg-blue-50 border-blue-500' : 'bg-gray-50 border-gray-200'
                            }`}
                        >
                            <span>{option.name}</span>
                            <span className="font-medium">{option.value}</span>
                        </button>
                    ))}
                </div>
                <button
                    className="w-full mt-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    disabled={!selected}
                    onClick={handleContinue}
                >
                    CONTINUE
                </button>
            </div>
        </div>
    );
};

export default FantasyQuiz;

