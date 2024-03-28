/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Loader } from "../../components";
import { useContext, useState } from "react";
import MyContext from "../../context/MyContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { collection, query, onSnapshot, where } from "firebase/firestore";

const Login = () => {

    const context = useContext(MyContext);
    const {loading, setLoading} = context;
    const navigate = useNavigate();

    const [userSignin, setUserSignin] = useState({
        email: '',
        password: ''
    })

    const validateEmail = (email) => {
        // Regular expression for a simple email validation
        const emailRegex = /^[^\s@]+@gmail\.com$/;
        return emailRegex.test(email);
      };
    const isValidate = validateEmail(userSignin.email);  

    const userSigninFunction = async () => {
        if(userSignin.email === '' || userSignin.password === ''){
            return toast.error('All Fields are Required');
        }
        else if(!isValidate){
            return toast.error('Please Enter Valid Email');
        }
        else{
            try {
                setLoading(true);
                const users = await signInWithEmailAndPassword(auth, userSignin.email, userSignin.password);
                console.log(users.user);
                try {
                    const q = query(
                        collection(fireDB, 'user'),
                        where('uid', '==' , users?.user?.uid)
                    )

                    const data = onSnapshot(q, (QuerySnapshot) => {
                        let user;
                        QuerySnapshot.forEach((doc) => (user = doc.data()));
                        localStorage.setItem("users", JSON.stringify(user));

                        if(user?.role === 'user'){
                            navigate('/user-dashboard');
                        }
                        else{
                            navigate('/admin-dashboard');
                        }

                        setUserSignin({
                            email: '',
                            password: ''
                        })

                        setLoading(false);

                         toast.success("Login Successfull");

                    })

                    return() => data;

                } catch (error) {
                    console.log('error');
                    setLoading(false);
                }
            } catch (error) {
                console.log('error');
                setLoading(false);
                toast.error('Login Failed')
            }
        }
        

    }


    return (
        <div className='flex justify-center items-center h-screen'>
            {/* Login Form  */}
            {loading && <Loader />}
            <div className="login_Form bg-pink-50 px-4 lg:px-10 py-6 border border-pink-100 rounded-xl shadow-md w-full max-w-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-pink-500 '>
                        Login
                    </h2>
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <Input
                        type="email"
                        value= {userSignin.email}
                        onChange = {(e)=>(setUserSignin({
                            ...userSignin,
                            email: e.target.value
                        }))}
                        placeholder='Email Address'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <Input
                        type="password"
                        value = {userSignin.password}
                        onChange = {(e)=> (setUserSignin({
                            ...userSignin,
                            password: e.target.value
                        }))}
                        placeholder='Password'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Login Button  */}
                <div className="mb-5">
                    <Button
                        type='button'
                        onClick={userSigninFunction}
                        className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                        Login
                    </Button>
                </div>

                <div>
                    <h2 className='text-black'>Don't have an account <Link className=' text-pink-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Login;
