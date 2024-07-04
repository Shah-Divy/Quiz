// // src/components/FantasyQuiz.js

// import React, { useState } from 'react';

// const options = [
//     { id: 'A', name: 'A', value: 'Narmada', change: '-0.31%' },
//     { id: 'B', name: 'B', value: 'Mahanadi', change: '-0.31%' },
//     { id: 'C', name: 'C', value: 'Son', change: '+2.12%' },
//     { id: 'D', name: 'D', value: 'Netravat', change: '+2.12%' },
// ];

// const FantasyQuiz = () => {
//     const [selected, setSelected] = useState(null);

//     const handleSelect = (optionId) => {
//         setSelected(optionId);
//     };

//     return (
//         <div className="flex justify-center items-center h-screen bg-gray-100">
//             <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
//                 <div className="flex justify-between items-center mb-4">
//                     <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">200</span>
//                     <h1 className="text-lg font-bold">Fantasy Quiz #156</h1>
//                     <button className="text-gray-400 hover:text-gray-600">✖</button>
//                 </div>
//                 <div className="mb-4">
//                     <div className="bg-gray-200 rounded-full h-1 w-full">
//                         <div className="bg-green-500 h-1 rounded-full" style={{ width: '20%' }}></div>
//                     </div>
//                 </div>
//                 <h2 className="text-md font-semibold mb-4">Which one of the following river flows between Vindhyan and Satpura ranges?</h2>
//                 <div className="space-y-3">
//                     {options.map(option => (
//                         <button
//                             key={option.id}
//                             onClick={() => handleSelect(option.id)}
//                             className={`w-full flex justify-between items-center p-4 rounded-lg border ${
//                                 selected === option.id ? 'bg-blue-50 border-blue-500' : 'bg-gray-50 border-gray-200'
//                             }`}
//                         >
//                             <span>{option.name}</span>
//                             <span className="font-medium">{option.value}</span>
//                             <span className={`text-sm ${
//                                 option.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
//                             }`}>{option.change}</span>
//                         </button>
//                     ))}
//                 </div>
//                 <button
//                     className="w-full mt-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//                     disabled={!selected}
//                 >
//                     CONTINUE
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default FantasyQuiz;


// import React, { useState, useEffect } from 'react';

// const FantasyQuiz = () => {
//     const [quizData, setQuizData] = useState(null);
//     const [selected, setSelected] = useState(null);

//     useEffect(() => {
//         const fetchQuizData = async () => {
//             try {
//                 const response = await fetch('https://practical.mytdigital.tech/');
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok.');
//                 }
//                 const data = await response.json();
//                 console.log('Fetched data:', data); // Log the fetched data
//                 setQuizData(data); // Assuming data has quiz data structure
//             } catch (error) {
//                 console.error('Error fetching quiz data:', error);
//             }
//         };

//         fetchQuizData(); // Call the fetch function when the component mounts
//     }, []); // Empty dependency array ensures useEffect runs only once on mount

//     const handleSelect = (optionId) => {
//         setSelected(optionId);
//     };

//     if (!quizData) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="flex justify-center items-center h-screen bg-gray-100">
//             <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
//                 <div className="flex justify-between items-center mb-4">
//                     <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">200</span>
//                     <h1 className="text-lg font-bold">Fantasy Quiz #{quizData.quizNumber}</h1>
//                     <button className="text-gray-400 hover:text-gray-600">✖</button>
//                 </div>
//                 <div className="mb-4">
//                     <div className="bg-gray-200 rounded-full h-1 w-full">
//                         <div className="bg-green-500 h-1 rounded-full" style={{ width: '20%' }}></div>
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
//                             <span className={`text-sm ${
//                                 option.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
//                             }`}>{option.change}</span>
//                         </button>
//                     ))}
//                 </div>
//                 <button
//                     className="w-full mt-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//                     disabled={!selected}
//                 >
//                     CONTINUE
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default FantasyQuiz;

//apiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii

// import React, { useState, useEffect } from 'react';

// const FantasyQuiz = () => {
//     const [quizData, setQuizData] = useState(null);
//     const [selected, setSelected] = useState(null);

//     useEffect(() => {
//         const fetchQuizData = async () => {
//             console.log('Starting fetch request');
//             try {
//                 const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
//                     mode: 'cors', // Ensure CORS mode is enabled
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 });
//                 console.log('Fetch response received:', response);
//                 if (!response.ok) {
//                     throw new Error(`Network response was not ok: ${response.statusText}`);
//                 }
//                 const data = await response.json();
//                 console.log('Fetched data:', data); // Log the fetched data
//                 setQuizData(data); // Assuming data has quiz data structure
//             } catch (error) {
//                 console.error('Error fetching quiz data:', error);
//                 alert('There was an error fetching quiz data. Please try again later.');
//             }
//         };

//         fetchQuizData(); // Call the fetch function when the component mounts
//     }, []); // Empty dependency array ensures useEffect runs only once on mount

//     const handleSelect = (optionId) => {
//         setSelected(optionId);
//     };

//     if (!quizData) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="flex justify-center items-center h-screen bg-gray-100">
//             <div className="bg-[#EDE8E3] rounded-lg shadow-lg p-6 w-full max-w-sm">
//                 <div className="flex justify-between items-center mb-4">
//                     <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">200</span>
//                     <h1 className="text-lg font-bold">Fantasy Quiz #1</h1>
//                     <button className="text-gray-400 hover:text-gray-600">✖</button>
//                 </div>
//                 <div className="mb-4">
//                     <div className="bg-gray-200 rounded-full h-1 w-full">
//                         <div className="bg-green-500 h-1 rounded-full" style={{ width: '20%' }}></div>
//                     </div>
//                 </div>
//                 <h2 className="text-md font-semibold mb-4">{quizData.title}</h2>
//                 <div className="space-y-3">
//                     <button
//                         onClick={() => handleSelect(1)}
//                         className={`w-full flex justify-between items-center p-4 rounded-lg border ${
//                             selected === 1 ? 'bg-blue-50 border-blue-500' : 'bg-gray-50 border-gray-200'
//                         }`}
//                     >
//                         <span>Option 1</span>
//                     </button>
//                 </div>
//                 <button
//                     className="w-full mt-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//                     disabled={!selected}
//                 >
//                     CONTINUE
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default FantasyQuiz;

//finallllllllllllllllllllllllllllllllllllllllllll

// import React, { useState, useEffect } from 'react';

// const FantasyQuiz = () => {
//     const [quizData, setQuizData] = useState(null);
//     const [selected, setSelected] = useState(null);
//     const [questionIndex, setQuestionIndex] = useState(1);

//     const fetchQuizData = async (index) => {
//         console.log(`Starting fetch request for todo ${index}`);
//         try {
//             const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${index}`, {
//                 mode: 'cors', // Ensure CORS mode is enabled
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
//             setQuizData(data); // Assuming data has quiz data structure
//         } catch (error) {
//             console.error('Error fetching quiz data:', error);
//             alert('There was an error fetching quiz data. Please try again later.');
//         }
//     };

//     useEffect(() => {
//         fetchQuizData(questionIndex); // Call the fetch function when the component mounts
//     }, [questionIndex]); // Fetch new question when questionIndex changes

//     const handleSelect = (optionId) => {
//         setSelected(optionId);
//     };

//     const handleContinue = () => {
//         if (selected !== null) {
//             setSelected(null); // Reset selected option
//             setQuestionIndex((prevIndex) => prevIndex + 1); // Move to next question
//         }
//     };

//     if (!quizData) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="flex justify-center items-center h-screen bg-gray-100">
//             <div className="bg-[#EDE8E3] rounded-lg shadow-lg p-6 w-full max-w-sm">
//                 <div className="flex justify-between items-center mb-4">
//                     <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">200</span>
//                     <h1 className="text-lg font-bold">Fantasy Quiz #{quizData.id}</h1>
//                     <button className="text-gray-400 hover:text-gray-600">✖</button>
//                 </div>
//                 <div className="mb-4">
//                     <div className="bg-gray-200 rounded-full h-1 w-full">
//                         <div className="bg-green-500 h-1 rounded-full" style={{ width: '20%' }}></div>
//                     </div>
//                 </div>
//                 <h2 className="text-md font-semibold mb-4">{quizData.title}</h2>
//                 <div className="space-y-3">
//                     <button
//                         onClick={() => handleSelect(1)}
//                         className={`w-full flex justify-between items-center p-4 rounded-lg border ${
//                             selected === 1 ? 'bg-blue-50 border-blue-500' : 'bg-gray-50 border-gray-200'
//                         }`}
//                     >
//                         <span>Option 1</span>
//                     </button>
//                 </div>
//                 <button
//                     className="w-full mt-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//                     disabled={!selected}
//                     onClick={handleContinue}
//                 >
//                     CONTINUE
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default FantasyQuiz;
import React, { useState, useEffect } from 'react';

const FantasyQuiz = () => {
    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState(null);
    const [questionIndex, setQuestionIndex] = useState(1);

    const fetchQuizData = async (index) => {
        console.log(`Starting fetch request for todo ${index}`);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${index}`, {
                mode: 'cors', // Ensure CORS mode is enabled
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
            
            // Create mock options for the quiz
            const options = [
                { id: 1, name: 'Option 1', value: 'A' },
                { id: 2, name: 'Option 2', value: 'B' },
                { id: 3, name: 'Option 3', value: 'C' },
                { id: 4, name: 'Option 4', value: 'D' },
            ];

            setQuizData({ ...data, options }); // Assuming data has quiz data structure
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
                <h2 className="text-md font-semibold mb-4">{quizData.title}</h2>
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
