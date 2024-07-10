// import React from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// const HeaderButtons = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const auth = localStorage.getItem('user');
//     const showButtons = location.pathname === '/';

//     const handleLogout = () => {
//         localStorage.removeItem('user');
//         localStorage.removeItem('token');
//         navigate('/');
//     };

//     return (
//         <div className="absolute top-0 right-0 m-4 flex space-x-4">
//             {showButtons && !auth && (
//                 <>
//                     <Link to="/Signup">
//                         <button className="py-2 px-4 bg-teal-700 text-white rounded-lg hover:bg-white hover:border-2 hover:border-teal-700 hover:text-teal-700 ">Signup</button>
//                     </Link>
//                     <Link to="/Admin">
//                         <button className="py-2 px-4 bg-teal-700 text-white rounded-lg hover:bg-white hover:border-2 hover:border-teal-700 hover:text-teal-700 ">Admin</button>
//                     </Link>
//                 </>
//             )}
//             {auth && (
//                 <button onClick={handleLogout} className="py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-white hover:border-2 hover:border-red-700 hover:text-red-700">Logout</button>
//             )}
//         </div>
//     );
// };

// export default HeaderButtons;



import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const HeaderButtons = ({ setUserName }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');
    const showButtons = location.pathname === '/';

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('userName'); // Clear the username from local storage
        setUserName(''); // Clear the username state
        navigate('/');
    };

    return (
        <div className="absolute top-0 right-0 m-4 flex space-x-4">
            {showButtons && !auth && (
                <>
                    <Link to="/Signup">
                        <button className="py-2 px-4 bg-teal-700 text-white rounded-lg hover:bg-white hover:border-2 hover:border-teal-700 hover:text-teal-700 ">Signup</button>
                    </Link>
                    <Link to="/Admin">
                        <button className="py-2 px-4 bg-teal-700 text-white rounded-lg hover:bg-white hover:border-2 hover:border-teal-700 hover:text-teal-700 ">Admin</button>
                    </Link>
                </>
            )}
            {auth && (
                <button onClick={handleLogout} className="py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-white hover:border-2 hover:border-red-700 hover:text-red-700">Logout</button>
            )}
        </div>
    );
};

export default HeaderButtons;