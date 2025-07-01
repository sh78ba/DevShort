import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextField from './TextField';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import toast from 'react-hot-toast';
import { useStoreContext } from '../contextApi/ContextApi';

const Login = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const { setToken } = useStoreContext();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
        mode: "onTouched",
    });

    const loginHandler = async (data) => {
        setLoader(true);
        try {
            const { data: response } = await api.post(
                "/api/auth/public/login",
                data,
            );
            console.log(response.token);
            setToken(response.token);
            localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
            toast.success("Login Successful!");
            reset();
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            toast.error("Login Failed!");
        } finally {
            setLoader(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center bg-gray-50 px-4">
            <form
                onSubmit={handleSubmit(loginHandler)}
                className="sm:w-[450px] w-full max-w-sm bg-white shadow-md py-8 sm:px-8 px-4 rounded-md"
            >
                <h1 className="text-center font-serif text-blue-600 font-bold lg:text-3xl text-2xl">
                    Login Here
                </h1>

                <hr className="mt-2 mb-5 border-gray-300" />

                <div className="flex flex-col gap-3">
                    <TextField
                        label="UserName"
                        required
                        id="username"
                        type="text"
                        message="*Username is required"
                        placeholder="Type your username"
                        register={register}
                        errors={errors}
                    />

                    <TextField
                        label="Password"
                        required
                        id="password"
                        type="password"
                        message="*Password is required"
                        placeholder="Type your password"
                        register={register}
                        min={6}
                        errors={errors}
                    />
                </div>

                <button
                    disabled={loader}
                    type="submit"
                    className={`mt-5 w-full py-2 rounded-sm text-white font-semibold transition-colors duration-200 ${
                        loader
                            ? "bg-blue-400 cursor-not-allowed"
                            : "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
                    }`}
                >
                    {loader ? "Loading..." : "Login"}
                </button>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?{" "}
                    <Link
                        className="font-semibold underline text-blue-500 hover:text-blue-700"
                        to="/register"
                    >
                        SignUp
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
