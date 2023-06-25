import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../services/axios.services';
import  { TokenContext } from '../context/TokenContext';

const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setToken } = useContext(TokenContext)
    const navigate = useNavigate();

        const submitHandle = (e) => {
        e.preventDefault()
        login(username, password).then((response)=>{
            // console.log(response) 
            const token = response?.data?.token;
            // const rele = response?.data?.role;
            setToken(response?.data?.token);
            setUserName('');
            setPassword('');
            navigate("/admin")
          }).catch((error)=>{
            setUserName('');
            setPassword('');
            alert(error.response.data) 
          })
    }
    return (
        <>  
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <p>username:mor_2314 && password:83r5^_</p>
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Login to Admin Panel</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <form action="submit" autoComplete='off'>

                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative">
                                            <input autoComplete="off" value={username} id="email" name="email" type="text" onChange={(e) => { setUserName(e.target.value) }} className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                        </div>
                                        <div className="relative">
                                            <input autoComplete="off" value={password} id="password" name="password" type="password" onChange={(e) => { setPassword(e.target.value) }} className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                            <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                        </div>
                                        <div className="relative">
                                            <button className="bg-blue-500 text-white rounded-md px-2 py-1" onClick={(e) => { submitHandle(e) }}>Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login