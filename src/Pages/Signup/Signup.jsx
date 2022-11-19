import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useToken from '../../Hooks/useToken';

const Signup = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);

    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail)
    if (token) {
        navigate('/')
    }

    const [signUpError, setSignUPError] = useState('')
    const handleSignUp = (data) => {
        console.log(data);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.log(err));
                toast.success('User Created Successfully.')
                saveUser(data.name, data.email)

            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }
    const saveUser = (name, email) => {
        const user = { name, email }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setCreatedUserEmail(email)
                }
            })
    }


    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-lg shadow-gray-200 rounded'>
                <h1 className='text-center'>Login</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type='text' {...register("name", { required: "Name is required" })} className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600 text-xs'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type='email' {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600 text-xs'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type='password' {...register("password", { required: 'password is required', minLength: { value: 6, message: 'password should at least 8 characters' }, pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' } })} className="input input-bordered w-full " />
                        {
                            errors.password && <p className='text-red-500 text-xs'>{errors.password?.message}</p>
                        }
                    </div>
                    <div>
                        <input className='w-full bg-accent text-white mt-4 py-2 rounded' value='Sing Up' type="submit" />
                        {signUpError && <p className='text-red-600 text-xs'>{signUpError}</p>}
                    </div>
                </form>
                <p>Already Have an account?<Link className='text-secondary' to="/login"> please login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;