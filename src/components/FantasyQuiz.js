// import React, { useState, useEffect } from 'react';
// import ResultsModal from './ResultsModel'; // Import the results modal component

// const FantasyQuiz = () => {
//     const [quizData, setQuizData] = useState(null);
//     const [selected, setSelected] = useState(null);
//     const [questionIndex, setQuestionIndex] = useState(0);
//     const [correctAnswers, setCorrectAnswers] = useState(0);
//     const [totalQuestions, setTotalQuestions] = useState(0);
//     const [showResults, setShowResults] = useState(false); // State to manage modal visibility

//     const fetchQuizData = async () => {
//         console.log(`Starting fetch request for question ${questionIndex + 1}`);
//         try {
//             const response = await fetch(/api/, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });
//             console.log('Fetch response received:', response);
//             if (!response.ok) {
//                 throw new Error(`Network response was not ok: ${response.statusText}`);
//             }
//             const data = await response.json();
//             console.log('Fetched data:', data); // Log the fetched data
            
//             // Extract the question data based on the questionIndex
//             const questionData = data.DATA.questions[questionIndex];
//             const options = [
//                 { id: 'A', name: 'A', value: questionData.ans_a },
//                 { id: 'B', name: 'B', value: questionData.ans_b },
//                 { id: 'C', name: 'C', value: questionData.ans_c },
//                 { id: 'D', name: 'D', value: questionData.ans_d },
//             ];

//             setQuizData({ 
//                 id: questionData.question_id, 
//                 question: questionData.question, 
//                 options, 
//                 correctAnswer: questionData.answer // Store the correct answer
//             });

//             // Set the total number of questions once
//             if (totalQuestions === 0) {
//                 setTotalQuestions(data.DATA.questions.length);
//             }
//         } catch (error) {
//             console.error('Error fetching quiz data:', error);
//             alert('There was an error fetching quiz data. Please try again later.');
//         }
//     };

//     useEffect(() => {
//         fetchQuizData(); // Call the fetch function when the component mounts
//     }, [questionIndex]); // Fetch new question when questionIndex changes

//     const handleSelect = (optionId) => {
//         setSelected(optionId);
//     };

//     const handleContinue = () => {
//         if (selected !== null) {
//             // Check if the selected answer is correct
//             const selectedAnswer = quizData.options.find(option => option.id === selected).value;
//             if (selectedAnswer === quizData.correctAnswer) {
//                 setCorrectAnswers(prevCount => prevCount + 1);
//             }

//             // Move to the next question or finish quiz
//             if (questionIndex < totalQuestions - 1) {
//                 setSelected(null); // Reset selected option
//                 setQuestionIndex((prevIndex) => prevIndex + 1); // Move to next question
//             } else {
//                 setShowResults(true); // Show results modal
//             }
//         }
//     };

//     const closeResultsModal = () => {
//         setShowResults(false);
//         setQuestionIndex(0); // Reset quiz
//         setCorrectAnswers(0); // Reset correct answers count
//         setQuizData(null); // Reset quiz data
//     };

//     if (!quizData) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="flex justify-center items-center h-screen bg-gray-100">
//             <div className="bg-[#EDE8E3] rounded-lg shadow-lg p-6 w-full h-full max-w-sm">
//                 <div className="flex justify-between items-center mb-4">
//                     <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">{quizData.id}</span>
//                     <h1 className="text-lg font-bold">Fantasy Quiz #{quizData.id}</h1>
//                     <button className="text-gray-400 hover:text-gray-600">✖</button>
//                 </div>
//                 <div className="mb-4">
//                     <div className="bg-gray-200 rounded-full h-1 w-full">
//                         <div className="bg-green-500 h-1 rounded-full" style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}% `}}></div>
//                     </div>
//                 </div>
//                 <h2 className="text-md font-semibold mb-4">{quizData.question}</h2>
//                 <div className="space-y-3">
//                     {quizData.options.map(option => (
//                         <button
//                             key={option.id}
//                             onClick={() => handleSelect(option.id)}
//                             className={`w-full flex justify-between items-center p-4 rounded-lg border ${
//                                 selected === option.id ? 'bg-blue-50 border-blue-500' : 'bg-gray-50 border-gray-200'
//                             }`}
//                         >
//                             <span>{option.name}</span>
//                             <span className="font-medium">{option.value}</span>
//                         </button>
//                     ))}
//                 </div>
//                 <button
//                     className="w-full mt-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
//                     disabled={!selected}
//                     onClick={handleContinue}
//                 >
//                     {questionIndex < totalQuestions - 1 ? 'CONTINUE' : 'FINISH'}
//                 </button>
//             </div>

//             {showResults && (
//                 <ResultsModal
//                     correctAnswers={correctAnswers}
//                     totalQuestions={totalQuestions}
//                     onClose={closeResultsModal}
//                 />
//             )}
//         </div>
//     );
// };

// export default FantasyQuiz;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import ResultsModal from './ResultsModel'; // Make sure the import path is correct

// const FantasyQuiz = () => {
//     const { questionIndexParam } = useParams();
//     const navigate = useNavigate();
//     const questionIndex = parseInt(questionIndexParam) || 0;
//     const [quizData, setQuizData] = useState(null);
//     const [selected, setSelected] = useState(null);
//     const [correctAnswers, setCorrectAnswers] = useState(0);
//     const [totalQuestions, setTotalQuestions] = useState(0);
//     const [showResults, setShowResults] = useState(false); // State to manage modal visibility

//     const fetchQuizData = async () => {
//         console.log(`Starting fetch request for question ${questionIndex + 1}`);
//         try {
//             const response = await fetch('/api/', {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });
//             console.log('Fetch response received:', response);
//             if (!response.ok) {
//                 throw new Error(`Network response was not ok: ${response.statusText}`);
//             }
//             const data = await response.json();
//             console.log('Fetched data:', data); // Log the fetched data
            
//             // Extract the question data based on the questionIndex
//             const questionData = data.DATA.questions[questionIndex];
//             const options = [
//                 { id: 'A', name: 'A', value: questionData.ans_a },
//                 { id: 'B', name: 'B', value: questionData.ans_b },
//                 { id: 'C', name: 'C', value: questionData.ans_c },
//                 { id: 'D', name: 'D', value: questionData.ans_d },
//             ];

//             setQuizData({ 
//                 id: questionData.question_id, 
//                 question: questionData.question, 
//                 options, 
//                 correctAnswer: questionData.answer // Store the correct answer
//             });

//             // Set the total number of questions once
//             if (totalQuestions === 0) {
//                 setTotalQuestions(data.DATA.questions.length);
//             }
//         } catch (error) {
//             console.error('Error fetching quiz data:', error);
//             alert('There was an error fetching quiz data. Please try again later.');
//         }
//     };

//     useEffect(() => {
//         fetchQuizData(); // Call the fetch function when the component mounts
//     }, [questionIndex]); // Fetch new question when questionIndex changes

//     const handleSelect = (optionId) => {
//         setSelected(optionId);
//     };

//     const handleContinue = () => {
//         if (selected !== null) {
//             // Check if the selected answer is correct
//             const selectedAnswer = quizData.options.find(option => option.id === selected).value;
//             if (selectedAnswer === quizData.correctAnswer) {
//                 setCorrectAnswers(prevCount => prevCount + 1);
//             }

//             // Move to the next question or finish quiz
//             if (questionIndex < totalQuestions - 1) {
//                 setSelected(null); // Reset selected option
//                 navigate(`/${questionIndex + 1}`); // Navigate to the next question
//             } else {
//                 setShowResults(true); // Show results modal
//             }
//         }
//     };

//     const closeResultsModal = () => {
//         setShowResults(false);
//         navigate('/quiz/0'); // Reset to the first question
//         setCorrectAnswers(0); // Reset correct answers count
//         setQuizData(null); // Reset quiz data
//     };

//     if (!quizData) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="flex justify-center items-center h-screen bg-gray-100">
//             <div className="bg-[#EDE8E3] rounded-lg shadow-lg p-6 w-full h-full max-w-sm">
//                 <div className="flex justify-between items-center mb-4">
//                     <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">{quizData.id}</span>
//                     <h1 className="text-lg font-bold">Fantasy Quiz #{quizData.id}</h1>
//                     <button className="text-gray-400 hover:text-gray-600">✖</button>
//                 </div>
//                 <div className="mb-4">
//                     <div className="bg-gray-200 rounded-full h-1 w-full">
//                         <div className="bg-green-500 h-1 rounded-full" style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}% `}}></div>
//                     </div>
//                 </div>
//                 <h2 className="text-xl font-semibold mb-4 mt-11">{quizData.question}</h2>
//                 <div className="space-y-3 mt-16">
//                     {quizData.options.map(option => (
//                         <button
//                             key={option.id}
//                             onClick={() => handleSelect(option.id)}
//                             className={`w-full flex justify-between items-center p-4 rounded-lg border ${
//                                 selected === option.id ? 'bg-blue-50 border-blue-500' : 'bg-gray-50 border-gray-200'
//                             }`}
//                         >
//                             <span>{option.name}</span>
//                             <span className="font-medium">{option.value}</span>
//                         </button>
//                     ))}
//                 </div>
//                 <button
//                     className="w-full mt-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
//                     disabled={!selected}
//                     onClick={handleContinue}
//                 >
//                     {questionIndex < totalQuestions - 1 ? 'CONTINUE' : 'FINISH'}
//                 </button>
//             </div>

//             {showResults && (
//                 <ResultsModal
//                     correctAnswers={correctAnswers}
//                     totalQuestions={totalQuestions}
//                     onClose={closeResultsModal}
//                 />
//             )}
//         </div>
//     );
// };

// export default FantasyQuiz;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ResultsModal from './ResultsModel'; // Make sure the import path is correct

const FantasyQuiz = () => {
    const { questionIndexParam } = useParams();
    const navigate = useNavigate();
    const questionIndex = parseInt(questionIndexParam) || 0;
    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState(null);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [showResults, setShowResults] = useState(false); // State to manage modal visibility

    const fetchQuizData = async () => {
        console.log(`Starting fetch request for question ${questionIndex + 1}`);
        try {
            const response = await fetch('/api/', {
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
            const questionData = data.DATA.questions[questionIndex];
            const options = [
                { id: 'A', name: 'A', value: questionData.ans_a },
                { id: 'B', name: 'B', value: questionData.ans_b },
                { id: 'C', name: 'C', value: questionData.ans_c },
                { id: 'D', name: 'D', value: questionData.ans_d },
            ];

            setQuizData({ 
                id: questionData.question_id, 
                question: questionData.question, 
                options, 
                correctAnswer: questionData.answer // Store the correct answer
            });

            // Set the total number of questions once
            if (totalQuestions === 0) {
                setTotalQuestions(data.DATA.questions.length);
            }
        } catch (error) {
            console.error('Error fetching quiz data:', error);
            alert('There was an error fetching quiz data. Please try again later.');
        }
    };

    useEffect(() => {
        fetchQuizData(); // Call the fetch function when the component mounts
    }, [questionIndex]); // Fetch new question when questionIndex changes

    const handleSelect = (optionId) => {
        setSelected(optionId);
    };

    const handleContinue = () => {
        if (selected !== null) {
            // Check if the selected answer is correct
            const selectedAnswer = quizData.options.find(option => option.id === selected).value;
            if (selectedAnswer === quizData.correctAnswer) {
                setCorrectAnswers(prevCount => prevCount + 1);
            }

            // Move to the next question or finish quiz
            if (questionIndex < totalQuestions - 1) {
                setSelected(null); // Reset selected option
                navigate(`/${questionIndex + 1}`); // Navigate to the next question
            } else {
                setShowResults(true); // Show results modal
            }
        }
    };

    const closeResultsModal = () => {
        setShowResults(false);
        navigate('/quiz/0'); // Reset to the first question
        setCorrectAnswers(0); // Reset correct answers count
        setQuizData(null); // Reset quiz data
    };

    const handleCrossClick = () => {
        navigate('/'); // Navigate to the homepage
    };

    if (!quizData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-[#EDE8E3] rounded-lg shadow-lg p-6 w-full h-full max-w-sm">
                <div className="flex justify-between items-center mb-4">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">{quizData.id}</span>
                    <h1 className="text-lg font-bold">Fantasy Quiz #{quizData.id}</h1>
                    <button className="text-gray-400 hover:text-gray-600" onClick={handleCrossClick}>✖</button>
                </div>
                <div className="mb-4">
                    <div className="bg-gray-200 rounded-full h-1 w-full">
                        <div className="bg-green-500 h-1 rounded-full" style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}% `}}></div>
                    </div>
                </div>
                <h2 className="text-xl font-semibold mb-4 mt-11">{quizData.question}</h2>
                <div className="space-y-3 mt-16">
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
                    className="w-full mt-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    disabled={!selected}
                    onClick={handleContinue}
                >
                    {questionIndex < totalQuestions - 1 ? 'CONTINUE' : 'FINISH'}
                </button>
            </div>

            {showResults && (
                <ResultsModal
                    correctAnswers={correctAnswers}
                    totalQuestions={totalQuestions}
                    onClose={closeResultsModal}
                />
            )}
        </div>
    );
};

export default FantasyQuiz;
