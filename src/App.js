// import React, {useState} from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate, Link, useLocation } from 'react-router-dom';
// import FantasyQuiz from './components/FantasyQuiz';
// import SignUp from './components/Signup';
// import Admin from './components/Admin';
// import ResultsTable from './components/Resultstable';
// import ResultsModal from './components/ResultsModel'; // Your ResultsModal component


// const Home = ({userName}) => {
//     const navigate = useNavigate();

//     const handleClick = () => {
//         navigate('/0');
//     };

//     return (
//         <div className="flex justify-center items-center h-screen bg-gray-100">
//             {userName && <h1 className="text-2xl mb-4">Welcome, {userName}!</h1>}
//             <button 
//                 onClick={handleClick}
//                 className='flex justify-center items-center w-80 py-2 bg-teal-700 text-white text-xl rounded-lg hover:bg-teal-800 transition'
//             >
//                 Welcome to the Fantasy Quiz!
//             </button>
//         </div>
//     );
// };

// const HeaderButtons = () => {
//     const location = useLocation();
//     const showButtons = location.pathname === '/';

//     return showButtons ? (
//         <div className="absolute top-0 right-0 m-4 flex space-x-4">
//             <Link to="/Signup">
//                 <button className="py-2 px-4 bg-teal-700 text-white rounded-lg hover:bg-white hover:border-2 hover:border-teal-700 hover:text-teal-700 ">Signup</button>
//             </Link>
//             <Link to="/Admin">
//             <button className="py-2 px-4 bg-teal-700 text-white rounded-lg hover:bg-white hover:border-2 hover:border-teal-700 hover:text-teal-700 ">Admin</button>
//             </Link>
//         </div>
//     ) : null;
// };

// const App = () => {
//     const [userName, setUserName] = useState('');
//     return (
//         <Router>
//             <div className="relative h-screen">
//                 <HeaderButtons />
//                 <Routes>
//                     <Route path='/Signup' element={<SignUp setUserName={setUserName} />} />
//                     <Route path="/results" element={<ResultsModal />} />
//                     <Route path='/Admin' element={<Admin />} />
//                     <Route path='/Resultstable' element={<ResultsTable />}/>
//                     <Route path="/:questionIndexParam" element={<FantasyQuiz userName={userName}/>} />
//                     <Route path="/" element={<Home userName={userName}/>} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// export default App;


import React, { useState } from 'react';
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
        <div className="flex justify-center items-center h-screen bg-gray-100">
            {userName && <h1 className="text-2xl mb-16 ml-40">Welcome, {userName}!</h1>}
            <button
                onClick={handleClick}
                className='flex justify-center items-center w-80 py-2 bg-teal-700 text-white text-xl rounded-lg hover:bg-teal-800 transition'
            >
                Welcome to the Fantasy Quiz!
            </button>
        </div>
    );
};

const App = () => {
    const [userName, setUserName] = useState('');

    return (
        <Router>
            <div className="relative h-screen">
                <HeaderButtons />
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
