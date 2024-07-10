// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import ReCAPTCHA from "react-google-recaptcha";

// const SignUp = ({ setUserName }) => {
//     const [name, setName] = useState("");
//     const [password, setPassword] = useState("");
//     const [email, setEmail] = useState("");
//     const [recaptchaVerified, setRecaptchaVerified] = useState(false);
//     const [emailError, setEmailError] = useState("");
//     const navigate = useNavigate();

//     useEffect(() => {
//         const auth = localStorage.getItem('user');
//         if (auth) {
//             navigate('/');
//         }
//     }, [navigate]);

//     const collectData = async () => {
//         if (!name || !email || !password || !recaptchaVerified) {
//             return; // Exit the function if any required field is empty or ReCAPTCHA is not verified
//         }

//         console.warn(name, email, password);
//         let result = await fetch('http://localhost:5001/Signup', {
//             method: 'post',
//             body: JSON.stringify({ name, email, password }),
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         });
//         result = await result.json();
//         console.warn(result);
//         localStorage.setItem("user", JSON.stringify(result.result));
//         localStorage.setItem("token", JSON.stringify(result.auth));
//         if (result) {
//             setUserName(name);
//             navigate('/');
//         }
//     };

//     const onRecaptchaChange = (value) => {
//         if (value) {
//             setRecaptchaVerified(true);
//         } else {
//             setRecaptchaVerified(false);
//         }
//     };

//     const handleEmailChange = (e) => {
//         const emailValue = e.target.value;
//         setEmail(emailValue);

//         if (!emailValue.includes('@')) {
//             setEmailError("Email must include @ symbol.");
//         } else {
//             setEmailError("");
//         }
//     };

//     return (
//         <div className="grid justify-items-center mt-40">
//             <h1 className="text-xl font-sans font-semibold text-teal-900">Register</h1>
//             <input 
//                 className="inputbox block m-4 p-2 w-80 border-2 border-teal-700" 
//                 type="text"
//                 value={name} 
//                 onChange={(e) => setName(e.target.value)} 
//                 placeholder="Enter Name" 
//                 required 
//             />
//             <input 
//                 className={`inputbox block m-4 p-2 w-80 border-2 ${emailError ? 'border-red-500' : 'border-teal-700'}`} 
//                 type="email"
//                 value={email} 
//                 onChange={handleEmailChange} 
//                 placeholder="Enter Email" 
//                 required
//             />
//             {emailError && <p className="text-red-500">{emailError}</p>}
//             <input 
//                 className="inputbox block m-4 p-2 w-80 border-2 border-teal-700" 
//                 type="password"
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//                 placeholder="Enter Password" 
//                 required
//             />
//             <ReCAPTCHA
//                 sitekey="6LeMqQwqAAAAAGKGKV6_J1-FHiqg__MUBEmDgipw" 
//                 onChange={onRecaptchaChange}
//                 required
//             />
//             <button 
//                 onClick={collectData} 
//                 className={` m-6 p-3 w-36 ${name && email && password && recaptchaVerified && !emailError ? 'bg-teal-700 border-teal-700 cursor-pointer text-white' : 'border-2 bg-teal-700 border-teal-700 cursor-not-allowed text-white'} border-2 font-semibold hover:bg-white hover:text-teal-700`} 
//                 type="button"
//                 disabled={!name || !email || !password || !recaptchaVerified || emailError}
//             > 
//                 Sign Up
//             </button>
//         </div>
//     );
// };

// export default SignUp;




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const SignUp = ({ setUserName }) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [recaptchaVerified, setRecaptchaVerified] = useState(false);
    const [emailError, setEmailError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, [navigate]);

    const collectData = async () => {
        if (!name || !email || !password || !recaptchaVerified) {
            return; // Exit the function if any required field is empty or ReCAPTCHA is not verified
        }

        console.warn(name, email, password);
        let result = await fetch('http://localhost:5001/Signup', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result.result));
        localStorage.setItem("token", JSON.stringify(result.auth));
        if (result) {
            setUserName(name);
            localStorage.setItem('userName', name); // Store the username in local storage
            navigate('/');
        }
    };

    const onRecaptchaChange = (value) => {
        if (value) {
            setRecaptchaVerified(true);
        } else {
            setRecaptchaVerified(false);
        }
    };

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);

        if (!emailValue.includes('@')) {
            setEmailError("Email must include @ symbol.");
        } else {
            setEmailError("");
        }
    };

    return (
        <div className="grid justify-items-center mt-40">
            <h1 className="text-xl font-sans font-semibold text-teal-900">Register</h1>
            <input 
                className="inputbox block m-4 p-2 w-80 border-2 border-teal-700" 
                type="text"
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter Name" 
                required 
            />
            <input 
                className={`inputbox block m-4 p-2 w-80 border-2 ${emailError ? 'border-red-500' : 'border-teal-700'}`} 
                type="email"
                value={email} 
                onChange={handleEmailChange} 
                placeholder="Enter Email" 
                required
            />
            {emailError && <p className="text-red-500">{emailError}</p>}
            <input 
                className="inputbox block m-4 p-2 w-80 border-2 border-teal-700" 
                type="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter Password" 
                required
            />
            <ReCAPTCHA
                sitekey="6LeMqQwqAAAAAGKGKV6_J1-FHiqg__MUBEmDgipw" 
                onChange={onRecaptchaChange}
                required
            />
            <button 
                onClick={collectData} 
                className={` m-6 p-3 w-36 ${name && email && password && recaptchaVerified && !emailError ? 'bg-teal-700 border-teal-700 cursor-pointer text-white' : 'border-2 bg-teal-700 border-teal-700 cursor-not-allowed text-white'} border-2 font-semibold hover:bg-white hover:text-teal-700`} 
                type="button"
                disabled={!name || !email || !password || !recaptchaVerified || emailError}
            > 
                Sign Up
            </button>
        </div>
    );
};

export default SignUp;