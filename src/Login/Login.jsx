import { useState } from 'react'
import login from '../assets/img/login/login.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState("")
    const navigate = useNavigate()

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleChangePass = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        const payload = {
            username: username,
            password: password,
        }
        axios
            .post("https://api.mudoapi.tech/login", payload)
            .then((res) => {
                localStorage.setItem("token", res.data.data.token)
                navigate("/")
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
                setErr(err.response.data.message)
            })
    }

    const handleClose = () => {
        setErr("")
    }

    return (
        <div className='w-full h-screen flex items-start'>
            <div className='relatif w-1/2 h-full hidden md:block'>
                <div className='absolute text-white top-[15%] left-[4%] max-w-[70%]'>
                    <h1 className='font-primary text-[21px] md1:text-[25px]  lg:text-[28px] lg1:text-[33px]'>Delicious Taste Sensation with Every Bite</h1>
                    <p className='text-lg lg:text-xl'>Order Your Favorite Food Now</p>
                </div>
                <img src={login} className="h-full w-full object-cover" />
            </div>

            <div className='w-full md:w-1/2 h-full flex flex-col p-20  md:max-w-[550px]  mx-auto justify-between items-center'>
                <h1 className='text-xl mr-auto text-black '>Dahar</h1>
                <div className='w-full flex flex-col mb-5'>
                    <div className='w-full flex flex-col mb-2'>
                        <h2 className='text-3xl mb-2 font-semibold'>Login</h2>
                        <p className='mb-2'>Log in and Enjoy Your Order</p>
                    </div>

                    {!!err.length && (
                        <div className=' bg-red-300 p-2 rounded-md flex justify-between' >
                            <p>{err}</p>
                            <button onClick={handleClose} className=' pr-1'>X</button>
                        </div>
                    )}

                    <div className='w-full flex flex-col'>
                        <input
                            onChange={handleChangeUsername}
                            type="text"
                            placeholder='Username'
                            className='w-full py-2 my-2 text-black bg-transparent border-b border-black outline-none focus:outline-none' />
                        <input
                            onChange={handleChangePass}
                            type="password"
                            placeholder='Password'
                            className='w-full py-2 my-2 text-black bg-transparent border-b border-black outline-none focus:outline-none' />
                    </div>
                    <div className='w-full flex items-center mt-2'>
                        <input type="checkbox" className='w-4 h-4 mr-2' />
                        <p className='text-sm'>Remember Me</p>
                    </div>
                    <div className='w-full'>
                        <button onClick={handleSubmit} className='w-full bg-red-500 p-2 rounded-md text-white mt-10'>Log in</button>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center '>
                    <p className=' text-sm'>Dont have a account? <Link to="/register" className=' underline underline-offset-2 font-semibold'>Register for free</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;