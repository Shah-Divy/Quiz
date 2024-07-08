// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import FantasyQuiz from './components/FantasyQuiz';
// import SignUp from './components/Signup';
// import Admin from './components/Admin';

// const Home = () => {
//     const navigate = useNavigate();

//     const handleClick = () => {
//         navigate('/0');
//     };

//     return (
//         <div className="flex justify-center items-center h-screen bg-gray-100">
//             <button 
//                 onClick={handleClick}
//                 className='flex justify-center items-center w-96 py-2 bg-teal-700 text-xl text-white rounded-lg hover:bg-teal-900 transition'
//             >
//                 Welcome to the Fantasy Quiz!
//             </button>
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                <Route path='/Signup' element={<SignUp/>}/>
//                 <Route path='/Admin' element={<Admin/>}/>
//                 <Route path="/:questionIndexParam" element={<FantasyQuiz />} />
//                 <Route path="/" element={<Home />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Link, useLocation } from 'react-router-dom';
import FantasyQuiz from './components/FantasyQuiz';
import SignUp from './components/Signup';
import Admin from './components/Admin';

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/0');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <button 
                onClick={handleClick}
                className='flex justify-center items-center w-80 py-2 bg-teal-700 text-white text-xl rounded-lg hover:bg-teal-800 transition'
            >
                Welcome to the Fantasy Quiz!
            </button>
        </div>
    );
};

const HeaderButtons = () => {
    const location = useLocation();
    const showButtons = location.pathname === '/';

    return showButtons ? (
        <div className="absolute top-0 right-0 m-4 flex space-x-4">
            <Link to="/Signup">
                <button className="py-2 px-4 bg-teal-700 text-white rounded-lg hover:bg-white hover:border-2 hover:border-teal-700 hover:text-teal-700 ">Signup</button>
            </Link>
            <Link to="/Admin">
            <button className="py-2 px-4 bg-teal-700 text-white rounded-lg hover:bg-white hover:border-2 hover:border-teal-700 hover:text-teal-700 ">Admin</button>
            </Link>
        </div>
    ) : null;
};

const App = () => {
    return (
        <Router>
            <div className="relative h-screen">
                <HeaderButtons />
                <Routes>
                    <Route path='/Signup' element={<SignUp />} />
                    <Route path='/Admin' element={<Admin />} />
                    <Route path="/:questionIndexParam" element={<FantasyQuiz />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;