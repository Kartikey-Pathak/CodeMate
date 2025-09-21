import { h1 } from 'framer-motion/client';
import { useState, useEffect, useActionState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Create() {
     const [visible, setVisible] = useState(false);
    const [saved, exist] = useState();

    const navigate = useNavigate();


    const handleSubmit = async (prevdata, formdata) => {
        let name = formdata.get('name');
        let password = formdata.get('password');
        let email = formdata.get('email');

        if (!name || !password || !email) {
            return { error2: "Fill All The Details.." };
        }



        if (password.length < 3) {
            return { error3: "Password Too Short..." };
        }

        // Fetching the Api to save user data
        try {
            let resp = await fetch("https://blockchain-polygon.onrender.com/sign-up", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, password, email }),
            });
            const result = await resp.json();
            console.log(result);

            if (resp.status === 201) {
                console.log("Saved");
                localStorage.setItem('signupEmail', email);
                localStorage.setItem('user', JSON.stringify(result))
                navigate("/user/otp");
                return { msg: result.msg }

            } else if (resp.status === 400) {
                return { error: result.error };
            }
        } catch (err) {
            console.log(err);
        }



    }
    const [data, action, pending] = useActionState(handleSubmit, null);
    return (
        <div className="">
            <div className='flex justify-center items-center h-screen'>
                <div className='bg-[#151B23] border-gray-700 border-2 h-screen w-[22rem] md:h-[36rem] md:w-[24rem] rounded-2xl lg:w-[27rem] xl:h-[38rem] xl:w-[28rem]'>        {/* h-[39rem] w-[29rem] */}
                    <div className='flex justify-center mt-5'>
                        <h1 className=' font-semibold text-3xl text-white'>Create Account</h1>
                    </div>
                    <br />
                    <div className=' flex justify-center flex-col items-center mt-20'>
                        <form action={action}>
                            <div className='flex justify-center items-center gap-3'>
                                <label htmlFor="user"><i className="fa-solid fa-user text-xl text-white"></i></label>
                                <input type="text" defaultValue={data?.name} id='user' name='name' className=' text-xl lg:text-2xl border-b-2 border-b-white h-9 w-70 text-white focus:outline-none focus:border-blue-700 placeholder-white' placeholder='Enter Name' />
                            </div>

                            <div className='flex justify-center items-center gap-3 mt-20'>
                                <label htmlFor="email"><i className="fa-solid fa-envelope text-xl text-white"></i></label>
                                <input type="email" defaultValue={data?.email} id='email' name='email' className=' text-xl lg:text-2xl border-b-2 border-b-white h-9 w-70 text-white focus:outline-none focus:border-blue-700 placeholder-white' placeholder='Enter Email' />
                            </div>

                            <div className='flex justify-center items-center gap-3 mt-20 relative'>
                                <label htmlFor="pass"><i className="fa-solid fa-lock text-xl text-white"></i></label>
                                <input type={visible ? "text" : "password"} defaultValue={data?.pass} id='pass' name='password' className=' lg:text-2xl text-xl border-b-2 border-b-white h-9 w-70 text-white focus:outline-none focus:border-red-700 placeholder-white' placeholder='Create Password' />
                                <i onClick={() => setVisible(!visible)} className={`fa-solid ${visible ? "fa-eye-slash" : "fa-eye"}  absolute right-1 text-xl text-gray-600 cursor-pointer hover:text-gray-700 transition`}></i>
                            </div>
                            {
                                data?.msg && <span className=' absolute z-50 m-2 text-green-500'>{data.msg}</span>
                            }
                            {
                                data?.error && <span className=' absolute z-50 m-2 text-red-600'>{data.error}</span>
                            }
                            {
                                data?.error2 && <span className='absolute z-50 m-2 text-red-600'>Fill All The Details</span>
                            }
                            {
                                data?.error3 && <span className='absolute z-50 m-2 text-red-600'>{data.error3}</span>
                            }

                            {/* Submission button */}
                            <div className='flex justify-center items-center mt-10'>

                                <button disabled={pending} className='h-20 w-64 bg-green-600 rounded-4xl font-medium text-xl cursor-pointer hover:bg-green-700 transiton'>{pending ? 'Creating...' : 'Create Account'}</button>
                            </div>
                        </form>
                    </div>


                    <div className=' flex justify-center items-center gap-3 mt-5'>
                        <h1 className=' text-gray-500 font-medium'>Already have an account?</h1>
                        <Link to="/user">
                            <h1 className=" text-blue-600 hover:text-blue-800 transition font-medium underline">Log-In</h1>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Create;