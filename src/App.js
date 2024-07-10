// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import FantasyQuiz from './components/FantasyQuiz';
// import SignUp from './components/Signup';
// import Admin from './components/Admin';
// import ResultsTable from './components/Resultstable';
// import ResultsModal from './components/ResultsModel'; // Your ResultsModal component
// import HeaderButtons from './components/HeaderButtons';

// const Home = ({ userName }) => {
//     const navigate = useNavigate();

//     const handleClick = () => {
//         navigate('/0');
//     };

//     return (
//         <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
//             {userName && (
//                 <div className="mb-4">
//                     <h1 className="text-2xl">Welcome, {userName}!</h1>
//                 </div>
//             )}
//             <button
//                 onClick={handleClick}
//                 className="w-80 py-2 bg-teal-700 text-white text-xl rounded-lg hover:bg-teal-800 transition"
//             >
//                 Welcome to the Fantasy Quiz!
//             </button>
//         </div>
//     );
// };

// const App = () => {
//     const [userName, setUserName] = useState('');

//     return (
//         <Router>
//             <div className="relative h-screen">
//                 <HeaderButtons setUserName={setUserName} />
//                 <Routes>
//                     <Route path='/Signup' element={<SignUp setUserName={setUserName} />} />
//                     <Route path="/results" element={<ResultsModal />} />
//                     <Route path='/Admin' element={<Admin />} />
//                     <Route path='/Resultstable' element={<ResultsTable />} />
//                     <Route path="/:questionIndexParam" element={<FantasyQuiz userName={userName} />} />
//                     <Route path="/" element={<Home userName={userName} />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import FantasyQuiz from './components/FantasyQuiz';
import SignUp from './components/Signup';
import Admin from './components/Admin';
import ResultsTable from './components/Resultstable';
import ResultsModal from './components/ResultsModel'; // Your ResultsModal component
import HeaderButtons from './components/HeaderButtons';

const Home = ({ userName }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/0');
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            {userName && (
                <div className="mb-4">
                    <h1 className="text-2xl">Welcome, {userName}!</h1>
                </div>
            )}
            <button
                onClick={handleClick}
                className="w-80 py-2 bg-teal-700 text-white text-xl rounded-lg hover:bg-teal-800 transition"
            >
                Welcome to the Fantasy Quiz!
            </button>
        </div>
    );
};

const App = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);

    return (
        <Router>
            <div className="relative h-screen">
                <HeaderButtons setUserName={setUserName} />
                <Routes>
                    <Route path='/Signup' element={<SignUp setUserName={setUserName} />} />
                    <Route path="/results" element={<ResultsModal />} />
                    <Route path='/Admin' element={<Admin />} />
                    <Route path='/Resultstable' element={<ResultsTable />} />
                    <Route path="/:questionIndexParam" element={<FantasyQuiz userName={userName} />} />
                    <Route path="/" element={<Home userName={userName} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;