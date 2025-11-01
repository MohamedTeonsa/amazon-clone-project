import React, { useState } from 'react'
import { logo } from '../assets'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Link } from 'react-router-dom'


const Registration = () => {
    const [clientName, setClientName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");

    // errors Messages start
    const [errClientName, setErrClientName] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");
    const [errCPassword, setErrCPassord] = useState("");

    // handle function start
    const handleName = (e) => {
        setClientName(e.target.value);
        setErrClientName('');
    }

    // hanlde email function
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrEmail("");
    }
    // handle password function
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setErrPassword("");
    }
    // handle Cpassword functionn
    const handleCPassword = (e) => {
        setCPassword(e.target.value);
        setErrCPassord("");
    }

    // Email validation start
    const emailValidation = (email) => {
        return String(email).toLowerCase().match(/^w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        if (!clientName) {
            setErrClientName("Enter your name");
        };
        if (!email) {
            setErrEmail("Enter your email");
        } else {
            if (emailValidation(email)) {
                setErrEmail("Enter a valid email");
            }
        };
        if (!password) {
            setErrPassword("Enter your password");
        } else {
            if (password.length < 6) {
                setErrPassword("Passwords must be at least 6 characters");
            }
        };
        if (!cPassword) {
            setErrCPassord("Confirm your password")
        } else {
            if (cPassword !== password) {
                setErrCPassord("password must match")
            }
        }
        if (clientName && email && emailValidation && password && password.length >= 6 && cPassword && cPassword === password) {
            console.log(clientName, email, password, cPassword);
            setClientName("");
            setEmail("");
            setPassword("");
            setCPassword("");
        }
    }
    return (
        <div className='w-full'>
            <div className='w-full bg-gray-100 pb-10'>
                <form className='w-[350px] mx-auto flex flex-col items-center'>
                    <img className='w-32 py-6' src={logo} alt='darkLogo' />
                    <div className='w-full border border-zinc-200 p-6'>
                        <h2 className='font-titleFont text-3xl font-medium mb-4'>Create Account</h2>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Your name</p>
                                <input
                                    onChange={handleName}
                                    value={clientName}
                                    type='text'
                                    className='w-full  py-1 border border-zinc-400 px-4 text-base rounded-sm outline-none focus-within:border-[#e77609] focus-within:shadow-amazonInput duration-100'
                                />
                                {
                                    errClientName && (
                                        <p
                                            className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'
                                        >
                                            <span className='italic font-titleFont font-extrabold text-base'>!</span>
                                            {errClientName}
                                        </p>
                                    )
                                }
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Email or mobile phone number </p>
                                <input
                                    onChange={handleEmail}
                                    value={email}
                                    type='email'
                                    className='w-full lowercase py-1 border border-zinc-400 px-4 text-base rounded-sm outline-none focus-within:border-[#e77609] focus-within:shadow-amazonInput duration-100'
                                />
                                {
                                    errEmail && (
                                        <p
                                            className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'
                                        >
                                            <span className='italic font-titleFont font-extrabold text-base'>!</span>
                                            {errEmail}
                                        </p>
                                    )
                                }
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Password</p>
                                <input
                                    onChange={handlePassword}
                                    value={password}
                                    type='password'
                                    className='w-full  py-1 border border-zinc-400 px-4 text-base rounded-sm outline-none focus-within:border-[#e77609] focus-within:shadow-amazonInput duration-100'
                                />
                                {
                                    errPassword && (
                                        <p
                                            className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'
                                        >
                                            <span className='italic font-titleFont font-extrabold text-base'>!</span>
                                            {errPassword}
                                        </p>
                                    )
                                }
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Re-enter Password</p>
                                <input
                                    onChange={handleCPassword}
                                    value={cPassword}
                                    type='password'
                                    className='w-full  py-1 border border-zinc-400 px-4 text-base rounded-sm outline-none focus-within:border-[#e77609] focus-within:shadow-amazonInput duration-100'
                                />
                                {
                                    errCPassword ? (
                                        <p
                                            className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'
                                        >
                                            <span className='italic font-titleFont font-extrabold text-base'>!</span>
                                            {errCPassword}
                                        </p>
                                    ) :
                                        <p className='text-xs text-gray-600'>Passowrd must be at last 6 characters.</p>

                                }
                            </div>
                            <button
                                onClick={handleRegistration}
                                className='w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'
                            >
                                Continue
                            </button>
                        </div>
                        <p className='text-xs text-black loading-4 mt-4'>By Continuing, you agree to Amazon's <span className='text-blue-600'>Conditions of Use</span> and <span className='text-blue-600'>Private Notice.</span></p>
                        <div>
                            <p className='text-xs text-black '>
                                Already have an account?
                                <Link to="/signin">
                                    <span className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Sign in <span><ArrowRightIcon /></span></span>
                                </Link>
                            </p>
                            <p className='text-xs text-black  -mt-2'>
                                Buying for work?
                                <span className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Create a free business account</span>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
            <div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col justify-center items-center gap-4 p-10'>
                <div className='flex items-center gap-6 '>
                    <p
                        className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer dutration-100 '
                    >
                        Conditions of Use
                    </p>
                    <p
                        className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer dutration-100 '
                    >
                        Privacy Notice
                    </p>
                    <p
                        className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer dutration-100 '
                    >
                        Privacy Notice
                    </p>
                </div>
                <p className='text-xs text-gray-600'>c 1996-2025, ReactBd.com, Inc, or its affiliate</p>
            </div>
        </div>
    )
}
export default Registration