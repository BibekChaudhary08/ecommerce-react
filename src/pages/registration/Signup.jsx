/* eslint-disable react/no-unescaped-entities */
import { Button, Input, Loader} from '../../components/index'
import { useContext, useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import MyContext from "../../context/MyContext";
import { toast } from "react-hot-toast"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import { auth, fireDB } from "../../firebase/FirebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth";



const Signup = () => {

    const context = useContext(MyContext);
    const {loading, setLoading} = context;
    const navigate = useNavigate();

    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    })

    const validateEmail = (email) => {
        // Regular expression for a simple email validation
        const emailRegex = /^[^\s@]+@gmail\.com$/;
        return emailRegex.test(email);
      };

    const isValidate = validateEmail(userSignup.email);  


    const userSignupFunction = async () => {
        if(userSignup.name == '' || userSignup.email == '' || userSignup.password == ''){
             return toast.error('All Fields are required'); 
        }
        else if(!isValidate){
            return toast.error('Please Enter a Valid Email');
        }
        else{
            try {
                
            setLoading(true);
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString("en-US",{
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                })
            }

            // create user reference
            const userRef = collection(fireDB, "user")

            // create document for each user

            addDoc(userRef, user);

            // after succcessfully creating document of each user

            setUserSignup({
                name: '',
                email: '',
                password: '',
            })

            setLoading(false);

            toast.success("Signup Successful")

            navigate('/login');

            

        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                toast.error("Email is already in use. Please use a different email address.");

                setUserSignup({
                    name: '',
                    email: '',
                    password: '',
                })
                setLoading(false);
            }
                console.log('error');
        }
        }
    }


    return (
        <div className='flex justify-center items-center h-screen'>

        {loading && <Loader />}

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
                        value= {userSignup.name}
                        onChange = {(e) => (setUserSignup({
                            ...userSignup,
                            name: e.target.value
                        }))}
                        placeholder='Full Name'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <Input
                        type="email"
                        value= {userSignup.email}
                        onChange = {(e) => (setUserSignup({
                            ...userSignup,
                            email: e.target.value
                        }))}
                        placeholder='Email'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <Input
                        type="password"
                        value = {userSignup.password}
                        onChange = {(e) => (setUserSignup({
                            ...userSignup,
                            password: e.target.value
                        }))}
                        placeholder='Password'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <Button
                        type='button'
                        onClick = {userSignupFunction}
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
