// import React, { useEffect, useState } from 'react';

// const ResultsTable = () => {
//     const [results, setResults] = useState([]);

//     useEffect(() => {
//         const fetchResults = async () => {
//             try {
//                 const response = await fetch('http://localhost:5001/results');
//                 const data = await response.json();
//                 setResults(data);
//             } catch (error) {
//                 console.error('Error fetching results:', error);
//             }
//         };

//         fetchResults();
//     }, []);

//     return (
//         <div className="p-6">
//             <h2 className="text-2xl font-semibold mb-4">Quiz Results</h2>
//             <table className="min-w-full bg-white">
//                 <thead>
//                     <tr>
//                         <th className="py-2 px-4 border-b">Name</th>
//                         <th className="py-2 px-4 border-b">Correct Answers</th>
//                         <th className="py-2 px-4 border-b">Total Questions</th>
//                         <th className="py-2 px-4 border-b">Score</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {results.map((result, index) => (
//                         <tr key={index}>
//                             <td className="py-2 px-4 border-b text-center">{result.userName}</td>
//                             <td className="py-2 px-4 border-b text-center">{result.correctAnswers}</td>
//                             <td className="py-2 px-4 border-b text-center">{result.totalQuestions}</td>
//                             <td className="py-2 px-4 border-b text-center">{result.score}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ResultsTable;



import React, { useEffect, useState } from 'react';

const ResultsTable = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await fetch('http://localhost:5001/results');
                const data = await response.json();
                setResults(data);
            } catch (error) {
                console.error('Error fetching results:', error);
            }
        };

        fetchResults();
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Quiz Results</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Correct Answers</th>
                        <th className="py-2 px-4 border-b">Total Questions</th>
                        <th className="py-2 px-4 border-b">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border-b text-center">{result.userName}</td>
                            <td className="py-2 px-4 border-b text-center">{result.correctAnswers}</td>
                            <td className="py-2 px-4 border-b text-center">{result.totalQuestions}</td>
                            <td className="py-2 px-4 border-b text-center">{result.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResultsTable;
