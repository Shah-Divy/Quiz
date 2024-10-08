// import React, { useState , useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Admin = () => {
//     const [password, setPassword] = useState("");
//     const [email, setEmail] = useState("");
//     const navigate = useNavigate();

//     useEffect(()=>{
//         const auth= localStorage.getItem('user');
//         if(auth)
//             {
//                 navigate('/')
//             }
//     })

//     const collectData =async () => {
//         console.warn(email, password);
//         let result = await fetch('http://localhost:5001/login',{
//             method:'post',
//             body: JSON.stringify({ email, password}),
//             headers:{
//                 'Content-Type':'application/json'
//             },
//         });
//         result =await result.json()
//         console.warn(result);
//         localStorage.setItem("user",JSON.stringify(result.result));
//         localStorage.setItem("token",JSON.stringify(result.auth));
//         if(result)
//             {
//                 navigate('/Resultstable')
//             }
        
//     }

//     return (
//         <div className="grid justify-items-center mt-40">
//             <h1 className="text-xl font-sans font-semibold text-teal-900">Admin</h1>

//             <input className="inputbox block m-4 p-2 w-80 border-2 border-teal-700" type="text"
//                 value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />

//             <input className="inputbox block m-4 p-2 w-80 border-2 border-teal-700" type="password"
//                 value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />

//             <button onClick={collectData} className="appbutton m-6 p-3 w-36 bg-teal-700 border-2 border-teal-700 cursor-pointer text-white font-semibold  hover:bg-white hover:text-teal-700" type="button"> Admin</button>
//         </div>
//     )
// }

// export default Admin;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, [navigate]);

    const collectData = async () => {
        console.warn(email, password);
        let result = await fetch('http://localhost:5001/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result.result));
        localStorage.setItem("token", JSON.stringify(result.auth));
        if (result) {
            navigate('/Resultstable');
        }
    };

    return (
        <div className="grid justify-items-center mt-40">
            <h1 className="text-xl font-sans font-semibold text-teal-900">Admin</h1>
            <input className="inputbox block m-4 p-2 w-80 border-2 border-teal-700" type="text"
                value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputbox block m-4 p-2 w-80 border-2 border-teal-700" type="password"
                value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={collectData} className="appbutton m-6 p-3 w-36 bg-teal-700 border-2 border-teal-700 cursor-pointer text-white font-semibold hover:bg-white hover:text-teal-700" type="button"> Admin</button>
        </div>
    );
};

export default Admin;
