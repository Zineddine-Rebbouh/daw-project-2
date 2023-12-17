import React from 'react'
import { FaUser } from "react-icons/fa6";
import { FaUnlock } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const login = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm();

    const handlePasswordChange = async () => {

        await fetch( `http://localhost:3000/auth/Forgetpassword`,
            {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                },
            } );

    }

    const onSubmit = async ( data ) => {
        console.log( data );
        try
        {
            const res = await fetch( `http://localhost:8080/login`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify( data ),
            } );

            const responseData = await res.json();

            console.log( responseData );

            if ( responseData.errors )
            {
                responseData.errors.forEach( ( error ) => {
                    setError( error.path, {
                        type: 'server',
                        message: error.msg,
                    } );
                } );
                console.log( errors );

                return;
            }

            // When the user logs in successfully
            localStorage.setItem( 'jwtToken', responseData.token );


            toast.success( 'Congratulations, you have successfully Sign In!', {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            } );
            setTimeout( () => {
                navigate( '/' );
                window.location.reload()

            }, 3700 );
            // Add your success logic here

        } catch ( error )
        {
            console.error( 'Error submitting form:', error );
        }
    }


    return (
        <div class="flex h-[80vh] flex-col justify-center items-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 class="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={ 5000 }
                hideProgressBar={ false }
                newestOnTop={ false }
                closeOnClick
                rtl={ false }
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" action="#" method="POST" onSubmit={ handleSubmit( onSubmit ) } >
                    <div>
                        <label for="email" class="block text-lg font-medium leading-6 text-gray-900">Email address</label>
                        {
                            errors?.email &&
                            (
                                < div className='text-red-400 text-lg'>{ errors?.email?.message }</div>
                            )
                        }
                        <div class="mt-2 relative flex items-center">
                            <input { ...register( 'email' ) } id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2 text-xl" placeholder='' />
                        </div>
                    </div>

                    <div>
                        <div class="flex flex-col justify-between">
                            <label for="password" class="block text-lg font-medium leading-6 text-gray-900">Password</label>

                            {/* <button type='submit' className='text-blue-600' onClick={ handlePasswordChange }>Forget Password</button> */ }

                            {
                                errors?.password &&
                                (
                                    < div className='block text-red-400 text-lg'>{ errors?.password?.message }</div>
                                )
                            }
                            {/* <div class="text-sm">
                                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div> */}
                        </div>
                        <div class="mt-2 relative flex items-center">
                            <input { ...register( 'password' ) } id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2" placeholder='' />
                        </div>
                    </div>

                    <div class="mt-6 flex w-full items-center justify-end gap-x-6">
                        { isSubmitting ? (
                            <div className='w-full flex items-center justify-center bg-indigo-600 px-3 py-2'>
                                <div className="w-6 h-6 flex items-center justify-center border-t-4 border-r-4 border-blue-500 rounded-full animate-spin"></div>
                            </div>
                        ) : (
                            <button type="submit" class="w-full rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>

                        ) }
                    </div>
                </form>
            </div>
        </div>


    );
};


export default login


