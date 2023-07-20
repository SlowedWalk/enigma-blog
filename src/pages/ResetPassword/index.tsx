import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInput, FormCheck, FormLabel } from "../../base-components/Form";
import illustrationUrl from "../../assets/images/illustration.svg";
import logoUrl from "../../assets/images/logo.svg";
import Button from "../../base-components/Button";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

type Inputs = {
    email: string,
    password: string,
};

function Main() {
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        if (data.email === "admin@admin.com" && data.password === "admin") {
            navigate("/");
        } else {
            alert("Wrong email or password");
        }
    };

    return (
        <>
            <div
                className={clsx([
                    "-m-3 sm:-mx-8 p-3 sm:px-8 relative h-screen lg:overflow-hidden bg-primary xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600",
                    "before:hidden before:xl:block before:content-[''] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400",
                    "after:hidden after:xl:block after:content-[''] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-primary after:rounded-[100%] after:dark:bg-darkmode-700",
                ])}
            >
                <DarkModeSwitcher />
                <MainColorSwitcher />

                <div className="container relative z-10 sm:px-10">
                    <div className="block grid-cols-2 gap-4 xl:grid">
                        {/* BEGIN: Register Info */}
                        <div className="flex-col hidden min-h-screen xl:flex">
                            <a href="" className="flex items-center pt-5 -intro-x">
                                <img
                                    alt="Midone Tailwind HTML Admin Template"
                                    className="w-6"
                                    src={logoUrl}
                                />
                                <span className="ml-3 text-lg text-white"> Rubick </span>
                            </a>
                            <div className="my-auto">
                                <img
                                    alt="Midone Tailwind HTML Admin Template"
                                    className="w-1/2 -mt-16 -intro-x"
                                    src={illustrationUrl}
                                />
                                <div className="mt-10 text-4xl font-medium leading-tight text-white -intro-x">
                                    Forgot your password? <br />
                                    No worries, we got you!
                                </div>
                                <div className="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-slate-400">
                                    Reset your password
                                </div>
                            </div>
                        </div>
                        {/* END: Register Info */}
                        {/* BEGIN: Register Form */}
                        <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
                            <div className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
                                <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">
                                    Change Password
                                </h2>
                                <div className="mt-2 text-center intro-x text-slate-400 dark:text-slate-400 xl:hidden">
                                    A few more clicks to sign in to your account. Manage all your
                                    e-commerce accounts in one place
                                </div>
                                <div className="mt-8 intro-x">

                                    <div className="mt-3">
                                        <FormLabel htmlFor="change-password-form-2">
                                            New Password
                                        </FormLabel>
                                        <FormInput
                                            id="change-password-form-2"
                                            type="password"
                                            placeholder="Input text"
                                        />
                                        <div className="grid w-full h-1 grid-cols-12 gap-4 mt-3 intro-x">
                                            <div className="h-full col-span-3 rounded bg-success"></div>
                                            <div className="h-full col-span-3 rounded bg-success"></div>
                                            <div className="h-full col-span-3 rounded bg-success"></div>
                                            <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
                                        </div>
                                        <a
                                            href=""
                                            className="block mt-2 text-xs intro-x text-slate-500 sm:text-sm hover:text-slate-700 dark:hover:text-darkmode-300"
                                        >
                                            What is a secure password?
                                        </a>
                                    </div>
                                    <div className="mt-3">
                                        <FormLabel htmlFor="change-password-form-3">
                                            Confirm New Password
                                        </FormLabel>
                                        <FormInput
                                            id="change-password-form-3"
                                            type="password"
                                            placeholder="Input text"
                                        />
                                    </div>

                                    <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
                                        <Button
                                            variant="primary"
                                            className="w-full px-4 py-3 align-top xl:w-32 xl:mr-3"
                                        >
                                            Change
                                        </Button>
                                        <Button
                                            variant="outline-secondary"
                                            className="w-full px-4 py-3 mt-3 align-top xl:w-32 xl:mt-0"
                                            onClick={() => {
                                                navigate("/login");
                                            }}
                                        >
                                            Login
                                        </Button>
                                    </div>

                                </div>

                            </div>
                        </div>
                        {/* END: Register Form */}
                    </div>
                </div>


                <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
                    {/* BEGIN: Change Password */}
                    <div className="intro-y box lg:mt-5">
                        <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                            <h2 className="mr-auto text-base font-medium">Change Password</h2>
                        </div>
                        <div className="p-5">

                        </div>
                    </div>
                    {/* END: Change Password */}
                </div>
            </div>
        </>
    );
}

export default Main;