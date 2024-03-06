/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Button, Input } from "../../components";

const Signup = () => {
    return (
        <div className='flex justify-center items-center h-screen'>

            {/* Login Form  */}
            <div className="login_Form bg-pink-50 px-4 lg:px-10 py-6 border border-pink-100 rounded-xl shadow-md w-full max-w-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-pink-500 '>
                        Signup
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <Input
                        type="text"
                        placeholder='Full Name'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <Input
                        type="email"
                        placeholder='Email Address'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <Input
                        type="password"
                        placeholder='Password'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <Button
                        type='button'
                        className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                        Signup
                    </Button>
                </div>

                <div>
                    <h2 className='text-black'>Have an account <Link className=' text-pink-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Signup;
