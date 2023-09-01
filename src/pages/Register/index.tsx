import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import logoUrl from "../../assets/images/logo.svg";
import illustrationUrl from "../../assets/images/illustration.svg";
import { FormInput, FormCheck } from "../../base-components/Form";
import Button from "../../base-components/Button";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Lucide from "../../base-components/Lucide";

type Inputs = {
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  passwordConfirmation: string,
  agree: boolean,
};

function Main() {
  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors, isLoading } } = useForm<Inputs>();

  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [showPassword, setshowPassword] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    if (data.email === "admin@admin.com" && data.password === "admin") {
      navigate("/");
    } else {
      alert("Wrong email or password");
    }
  };

  const viewPassword = () => {
    setshowPassword(!showPassword);
  };

  const checkPasswordStrength = (password: string) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$&*])(?=.*[A-Z])[a-zA-Z\d]{8,20}$/;

    let score = 0;

    if (password.length >= 8) {
      score++;
    }

    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
      score++;
    }

    if (/(?=.*[!@#$&*])/.test(password)) {
      score++;
    }

    if (/\d/.test(password)) {
      score++;
    }

    return score;
  };

  const checkPasswordConfirmation = (password: string, passwordConfirmation: string) => {
    if (password === passwordConfirmation) {
      return true;
    } else {
      return false;
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
                  A few more clicks to <br />
                  sign up to your account.
                </div>
                <div className="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-slate-400">
                  Manage all your e-commerce accounts in one place
                </div>
              </div>
            </div>
            {/* END: Register Info */}
            {/* BEGIN: Register Form */}
            <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
              <div className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">
                  Sign Up
                </h2>
                <div className="mt-2 text-center intro-x text-slate-400 dark:text-slate-400 xl:hidden">
                  A few more clicks to sign in to your account. Manage all your
                  e-commerce accounts in one place
                </div>
                <div className="mt-8 intro-x">
                  <FormInput
                    type="text"
                    className="block px-4 py-3 intro-x min-w-full xl:min-w-[350px]"
                    placeholder="First Name"
                    {...register("firstname", { required: true, maxLength: 20, minLength: 2, pattern: /^[A-Za-z]+$/i })}
                  />
                  <p className="text-rose-500">
                    {errors["firstname"] && (
                      <span>
                        {errors["firstname"].type === "required" && ("Firstname is required")}
                        {errors["firstname"].type === "maxLength" && ("Max length exceeded")}
                        {errors["firstname"].type === "minLength" && ("Min length exceeded")}
                        {errors["firstname"].type === "pattern" && ("Only letters allowed")}
                      </span>
                    )}
                  </p>
                  <FormInput
                    type="text"
                    className="block px-4 py-3 mt-4 intro-x min-w-full xl:min-w-[350px]"
                    placeholder="Last Name"
                    {...register("lastname", { required: true, maxLength: 20, minLength: 2, pattern: /^[A-Za-z]+$/i })}
                  />
                  <p className="text-rose-500">
                    {errors["lastname"] && (
                      <span>
                        {errors["lastname"].type === "required" && ("Lastname is required")}
                        {errors["lastname"].type === "maxLength" && ("Max length exceeded")}
                        {errors["lastname"].type === "minLength" && ("Min length not reached")}
                        {errors["lastname"].type === "pattern" && ("Only letters allowed")}
                      </span>
                    )}
                  </p>
                  <FormInput
                    type="text"
                    className={`block px-4 py-3 mt-4 intro-x min-w-full xl:min-w-[350px]
                      ${errors["email"] ? 'border-rose-600' : 'border-neutral-300'}
                      ${errors["email"] ? 'focus:border-rose-600' : 'focus:border-black'}
                    `}
                    placeholder="Email"
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  />
                  <p className="text-rose-500">
                    {errors["email"] && (
                      <span>
                        {errors["email"].type === "required" && ("Email is required")}
                        {errors["email"].type === "pattern" && ("Email is invalid")}
                      </span>
                    )}
                  </p>
                  <FormInput
                    type={showPassword ? 'text': "password"}
                    className={`block px-4 py-3 mt-4 intro-x min-w-full xl:min-w-[350px]
                      ${errors["password"] ? 'ring-4 focus:ring-rose-600 focus:ring-opacity-20 focus:border-rose-500 focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-rose-700 dark:focus:ring-opacity-50' : 'border-neutral-300'}
                      ${errors["password"] ? 'focus:ring-4 focus:ring-rose-600 focus:ring-opacity-20 focus:border-rose-500 focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50' : 'focus:border-black'}
                    `}
                    placeholder="Password"
                    icon={<Lucide icon={showPassword ? "EyeOff": "Eye"} className="hover:cursor-pointer" onClick={() => viewPassword()} />}
                    {...register("password", { required: true, minLength: 8, maxLength: 20, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$&*])(?=.*[A-Z])[a-zA-Z\d]{8,20}$/, onChange: (e) => setPassword(e.target.value) })}
                  />
                  <p className="text-rose-500">
                    {errors["password"] && (
                      <span>
                        {errors["password"].type === "required" && ("Password is required")}
                        {errors["password"].type === "minLength" && ("Min length not reached")}
                        {errors["password"].type === "maxLength" && ("Max length exceeded")}
                        {errors["password"].type === "pattern" && ("Password must contain at least one uppercase letter, one lowercase letter and one number")}
                      </span>
                    )}
                  </p>
                  <div className="grid w-full h-1 grid-cols-12 gap-4 mt-3 intro-x">
                    {+checkPasswordStrength(password) === 0 && (
                      <>
                        <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
                        <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
                        <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
                        <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
                      </>
                    )}
                    {+checkPasswordStrength(password) === 1 && (
                      <>
                        <div className="h-full col-span-3 rounded bg-danger"></div>
                        <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
                        <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
                        <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
                      </>)}
                    {+checkPasswordStrength(password) === 2 && (
                      <>
                        <div className="h-full col-span-3 rounded bg-orange-400"></div>
                        <div className="h-full col-span-3 rounded bg-orange-400"></div>
                        <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
                        <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
                      </>
                    )}
                    {+checkPasswordStrength(password) === 3 && (
                      <>
                        <div className="h-full col-span-3 rounded bg-yellow-400"></div>
                        <div className="h-full col-span-3 rounded bg-yellow-400"></div>
                        <div className="h-full col-span-3 rounded bg-yellow-400"></div>
                        <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
                      </>
                    )}
                    {+checkPasswordStrength(password) === 4 && (
                      <>
                        <div className="h-full col-span-3 rounded bg-success"></div>
                        <div className="h-full col-span-3 rounded bg-success"></div>
                        <div className="h-full col-span-3 rounded bg-success"></div>
                        <div className="h-full col-span-3 rounded bg-success"></div>
                      </>
                    )}
                  </div>
                  <a
                    href=""
                    className="block mt-2 text-xs intro-x text-slate-500 sm:text-sm"
                  >
                    What is a secure password?
                  </a>
                  <div>
                    <FormInput
                      type="text"
                      className="block px-4 py-3 mt-4 intro-x min-w-full xl:min-w-[350px]"
                      placeholder="Password Confirmation"
                      {...register("passwordConfirmation", { required: true, onChange: (e) => setPasswordConfirmation(e.target.value) })}
                    />

                    <i className="w-4 h-4 text-slate-500 dark:text-slate-400" data-feather="lock">
                      {checkPasswordConfirmation(password, passwordConfirmation) && (
                        <i className="w-4 h-4 text-success" data-feather="check"></i>
                      )}

                      {!checkPasswordConfirmation(password, passwordConfirmation) && (
                        <i className="w-4 h-4 text-danger" data-feather="x"></i>
                      )}
                    </i>
                  </div>
                </div>
                <div className="flex items-center mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm">
                  <FormCheck.Input
                    id="remember-me"
                    type="checkbox"
                    className="mr-2 border"
                    {...register("agree", { required: true })}
                  />
                  <label
                    className="cursor-pointer select-none"
                    htmlFor="remember-me"
                  >
                    I agree to the Envato
                  </label>
                  <a className="ml-1 text-primary dark:text-slate-200" href="">
                    Privacy Policy
                  </a>
                  .
                </div>
                <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
                  <Button
                    variant="primary"
                    className="w-full px-4 py-3 align-top xl:w-32 xl:mr-3"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Register
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className="w-full px-4 py-3 mt-3 align-top xl:w-32 xl:mt-0"
                    onClick={() => navigate("/login")}
                  >
                    Sign in
                  </Button>
                </div>
              </div>
            </div>
            {/* END: Register Form */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
