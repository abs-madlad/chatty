import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div>
        <div>
            <div className='flex justify-center'>
                <div className='bg-gradient-to-r from-yellow-600 to-red-600 mx-1 p-5 w-[50%] flex justify-center'>
                    <div className='bg-white rounded-lg  w-[60%] p-2'>
                    <h3 className='text-orange-600 text-xl font-bold font-Roboto '>Login to your account</h3>
                    <br />

                        <div className='text-black'>
                            <input type="text" placeholder='Email' className='py-1 px-2 border border-gray-400 rounded-md' />
                        </div>
                        <br />
                        <div className='text-black'>
                            <input type="password" placeholder='Password' className='py-1 px-2 border border-gray-400 rounded-md' />
                        </div>
                        <br />
                        <div className='flex justify-center'>
                            <button className='px-2 py-1 border border-green-400 bg-green-400 rounded-lg transition-colors duration-300 hover:bg-green-500'>Sign in</button>
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-blue-600 to-violet-600 mx-1 p-1 w-[50%]'>
                    <div>
                        <h3 className='text-white font-extrabold text-center text-xl'>New here?</h3>
                    </div>
                    <br />
                    <div>
                        <p className='font-semibold'>Signup and Discover the chattiness of Chatty!!</p>
                    </div>
                    <div>
                        <p className=' font-semibold'>Chat with your buddies for absolutely Free of cost!!!</p>
                    </div>
                    <br />
                    <div className='flex justify-center'>
                        <Link href="/signup">
                        <div className='bg-white text-black border rounded-lg font-semibold p-1 transition-colors duration-300 hover:bg-gray-300'>Sign up</div>
                        </Link>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login