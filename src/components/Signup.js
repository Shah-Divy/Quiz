// import React, { useState , useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import '../components/Signup.css';

// const SignUp = () => {
//     const [name, setName] = useState("");
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
//         console.warn(name, email, password);
//         let result = await fetch('http://localhost:5001/registers',{
//             method:'post',
//             body: JSON.stringify({name, email, password}),
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
//                 navigate('/home')
//             }
        
//     }

//     return (
//         <div className="register">
//             <h1>Register</h1>
//             <input className="inputbox" type="text"
//                 value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />

//             <input className="inputbox" type="text"
//                 value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />

//             <input className="inputbox" type="password"
//                 value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />

//             <button onClick={collectData} className="appbutton" type="button"> Sign Up</button>
//         </div>
//     )
// }

// export default SignUp;


import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth= localStorage.getItem('user');
        if(auth)
            {
                navigate('/')
            }
    })

    const collectData =async () => {
        console.warn(name, email, password);
        let result = await fetch('https://your-vercel-app-url.vercel.app/api/Signup',{
            method:'post',
            body: JSON.stringify({name, email, password}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result =await result.json()
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result.result));
        localStorage.setItem("token",JSON.stringify(result.auth));
        if(result)
            {
                navigate('/')
            }
        
    }

    return (
        <div className="grid justify-items-center mt-40">
            <h1 className="text-xl font-sans font-semibold text-teal-900">Register</h1>
            <input className="inputbox block m-4 p-2 w-80 border-2 border-teal-700" type="text"
                value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />

            <input className="inputbox block m-4 p-2 w-80 border-2 border-teal-700" type="text"
                value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />

            <input className="inputbox block m-4 p-2 w-80 border-2 border-teal-700" type="password"
                value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />

            <button onClick={collectData} className="appbutton m-6 p-3 w-36 bg-teal-700 border-2 border-teal-700 cursor-pointer text-white font-semibold  hover:bg-white hover:text-teal-700" type="button"> Sign Up</button>
        </div>
    )
}

export default SignUp;