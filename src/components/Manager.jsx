import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef()
    const [showPass, setShowPass] = useState(false)
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const copyText = (text) => {
        navigator.clipboard.writeText(text)
        toast.success('Copied  to Clipboard!', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const showPassword = () => {
        // alert("Your Password is: 123456")
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
            setShowPass(!showPass)
        } else {
            ref.current.src = "icons/eyecross.png"
            setShowPass(!showPass)
        }
    }

    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            setForm({ site: "", username: "", password: "" })
            toast.success('Saved Successfully', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast.error('Please fill all the fields', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        }
    }

    const deletePassword = (id) => {
        let c = confirm("Are you sure you want to delete this?")
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
            toast.success('Deleted Successfully', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    const editPassword = (id) => {
        setForm(passwordArray.filter(item => item.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <>
            <ToastContainer />

            <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>




            <div className="  md:mycontainer rounded-3xl text-violet-100 min-h-[77.8vh]">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-violet-500'>&lt;</span>
                    <span className='inline-flex animate-background-shine bg-[linear-gradient(110deg,#ECDDFF,45%,#fff,55%,#ECDDFF)] bg-[length:250%_100%] bg-clip-text text-4xl text-transparent'>
                        Save
                    </span>
                    <span className='text-violet-500'>IT/&gt;</span></h1>
                <p className='text-violet-100 text-lg text-center'>Secure Your Secrets</p>

                <div className="flex flex-col p-4 text-violet-100 gap-8 items-center">
                    <input
                        value={form.site}
                        onChange={handleChange}
                        placeholder="Website URL"
                        className="rounded-full border border-violet-900 bg-slate-800 w-full px-4 py-2 focus:bg-slate-800 active:bg-slate-800 appearance-none"
                        type="text"
                        name="site"
                        id='site'
                        autoComplete="off"
                    />
                    <div className="flex flex-col md:flex-row w-full gap-6">
                        <input
                            value={form.username}
                            onChange={handleChange}
                            placeholder="Username"
                            className="rounded-full border border-violet-900 bg-slate-800 px-4 py-2 flex-1 focus:bg-slate-800 active:bg-slate-800 appearance-none"
                            type="text"
                            name="username"
                            id='username'
                            autoComplete="off"
                        />
                        <div className="relative flex-1">
                            <input
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="rounded-full border border-violet-900 bg-slate-800 w-full px-4 py-2 focus:bg-slate-800 active:bg-slate-800 appearance-none"
                                type={showPass ? "text" : "password"}
                                name="password"
                                id='password'
                                autoComplete="off"
                            />
                            <span className="absolute right-3 top-1 cursor-pointer" onClick={showPassword}>
                                <img ref={ref} className="p-1 invert" width={34} src="/icons/eyecross.png" alt="" />
                            </span>
                        </div>
                    </div>



                    <button onClick={savePassword} className='transition-background inline-flex h-12 w-fit gap-2 items-center justify-center rounded-full border border-gray-800 bg-gradient-to-r from-gray-100 via-[#c7d2fe] to-[#8678f9] bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium text-gray-950 duration-500 hover:bg-[100%_200%] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Save
                    </button>
                </div>
                <div className="passwords p-4">
                    <h2 className='font-bold text-2xl py-4 text-center'>Your Credentials</h2>
                    {passwordArray.length === 0 && <div className='text-center'>No Information to show</div>}
                    {passwordArray.length != 0 &&
                        <div className="overflow-x-auto"> 
                            <table className="table-auto w-full min-w-[640px] overflow-hidden rounded-md mb-5"> 
                                <thead className='text-violet-100 bg-slate-900 '>
                                    <tr>
                                        <th className='py-2'>Site</th>
                                        <th className='py-2'>Username</th>
                                        <th className='py-2'>Password</th>
                                        <th className='py-2'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-slate-950'>
                                    {passwordArray.map((item, index) => {
                                        return <tr key={index}>
                                            <td className='flex justify-between px-4 items-center gap-2 text-center border border-violet-50 border-opacity-15 py-3 '>
                                                <a href={item.site} target="_blank">{item.site}</a>
                                                <FontAwesomeIcon onClick={() => { copyText(item.site) }} className='cursor-pointer w-6 h-6 hover:scale-110 hover:text-violet-500 transition-all duration-200' icon={faCopy} />
                                            </td>
                                            <td className='text-center border border-violet-50 border-opacity-15 py-3 '>
                                                <div className='flex items-center justify-between px-4'>
                                                    <span>{item.username}</span>
                                                    <FontAwesomeIcon onClick={() => { copyText(item.username) }} className='cursor-pointer w-6 h-6 hover:scale-110 hover:text-violet-500 transition-all duration-200' icon={faCopy} />
                                                </div>
                                            </td>
                                            <td className='text-center border border-violet-50 border-opacity-15 py-3 '>
                                                <div className='flex items-center justify-between px-4'>
                                                    <span>{item.password}</span>
                                                    <FontAwesomeIcon onClick={() => { copyText(item.password) }} className='cursor-pointer w-6 h-6 hover:scale-110 hover:text-violet-500 transition-all duration-200' icon={faCopy} />
                                                </div>
                                            </td>
                                            <td className='text-center border border-violet-50 border-opacity-15 py-3 '>
                                                <div className='flex items-center justify-center'>
                                                    <FontAwesomeIcon onClick={() => editPassword(item.id)} className='cursor-pointer px-2 w-6 h-6 hover:scale-110 hover:text-green-400 transition-all duration-200' icon={faPenToSquare} />
                                                    <FontAwesomeIcon onClick={() => deletePassword(item.id)} className='cursor-pointer px-2 w-6 h-6 hover:scale-110 hover:text-red-400 transition-all duration-200' icon={faTrash} />
                                                </div>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div> 
    }
                </div>

            </div>
        </>
    )
}

export default Manager