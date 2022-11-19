import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useToken from '../../Hooks/useToken';

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [errorLogin, setErrorLogin] = useState('')
    const [loginUserEmail, setLoginUserEmail] = useState('')
   
    //get token
    const [token] = useToken(loginUserEmail)

    const { register, formState: { errors }, handleSubmit } = useForm()
    const { signIn } = useContext(AuthContext)
    if (token) {
        navigate(from, { replace: true });
    }
    const onSubmit = data => {
        console.log(data)
        setErrorLogin('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Sign in successfully')
                setLoginUserEmail(data.email)
            })
            .catch(error => {
                setErrorLogin(error.message)
            })
    }
    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-lg shadow-gray-200 rounded'>
                <h1 className='text-center'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type='text' {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600 text-xs'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type='password' {...register("password", { required: 'password is required' })} className="input input-bordered w-full " />
                        {
                            errors.password && <p className='text-red-500 text-xs'>{errors.password?.message}</p>
                        }
                    </div>
                    <div>
                        <input className='w-full bg-accent text-white mt-4 py-2 rounded' value='Login' type="submit" />
                        {
                            errorLogin && <p className='text-red-500 text-xs'>{errorLogin}</p>
                        }
                    </div>
                </form>
                <p>New to Doctors Portal <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;