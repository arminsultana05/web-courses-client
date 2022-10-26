import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import Loading from '../../Components/Loading/Loading';

const Register = () => {
    const navigate = useNavigate();


    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);



    const onSubmit = async (data) => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully register',
            showConfirmButton: false,
            timer: 1500
        })
        navigate('/')




    }
    if (gLoading || loading || updating) {
        return <Loading></Loading>

    }
    let signInError;
    if (gError || error || updateError) {
        signInError = <p className='text-red-500'><small>{updateError?.message || error?.message || gError?.message}</small></p>
    }

    if (gUser || user) {
        navigate('/')
    }
    return (
        <div className='flex justify-center items-center rounder-xl  h-screen'>
            <div class=" w-96 bg-base-100 shadow-xl ">
                <div class="card-body ">
                    <h2 class="text-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">

                                <span class="label-text-alt">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"

                                    },

                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}



                            </label>

                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">

                                <span class="label-text-alt">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"

                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>

                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">

                                <span class="label-text-alt">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Your password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"

                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters is longer'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>

                        </div>


                        <input className='btn w-full text-white' type="submit" value='Register ' />
                    </form>
                    <p>Already have an account?<Link to='/login' className='text-orange-500'> Please Login </Link></p>
                    <div className="divider ">OR</div>
                    <button
                        class="btn btn-outline" onClick={() => signInWithGoogle()}>
                        Continue with google</button>

                </div>
            </div>

        </div>
    );
};

export default Register;