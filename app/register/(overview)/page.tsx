"use client";

import TypeWriter from "@/app/ui/register/typewriter";
import {
  EnvelopeIcon,
  UserCircleIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

export default function Register() {
  return (
    <div className="flex flex-col justify-center items-center border rounded-xl border-indigo-700 bg-gradient-to-tr from-indigo-700/30 p-5 mx-5 mt-56 max-w-xl sm:mx-auto">
      <Image
        src="/saturn_fjstudio_white_512x512.png"
        width={82}
        height={82}
        alt="Galaxy - Icon by Freepik"
      />
      <p className="text-2xl italic text-center my-5 max-w-md">
        <TypeWriter
          text="Welcome to Solart, let us being your adventure in this vast infinite universe"
          delay={40}
        />
      </p>
      <RegisterFormState />
    </div>
  );
}

type User = {
  email: string;
  password: string;
  username: string;
};

function RegisterFormState() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>();
  const onSubmit: SubmitHandler<User> = (data) => console.log(data);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [usernameBlockElem, setUsernameBlockElem] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="flex flex-col mb-6">
        <div className="flex mb-1">
          <EnvelopeIcon className="mr-1 w-5" />
          <span>Enter your email*</span>
        </div>
        <div className="flex flex-col sm:flex-row">
          <input
            className={clsx(
              "h-10 rounded-lg border border-indigo-700 py-[9px] text-center sm:text-left sm:pl-4 sm:mr-2 text-black outline-2 placeholder:text-gray-500",
              {
                "border-2 border-red-600": errors.email !== undefined,
              }
            )}
            id="email"
            type="email"
            value={email}
            placeholder="Email address"
            accept="UTF-8"
            formMethod="post"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              onChange(event) {
                setEmail(event.target.value);
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          <button
            id="register-email-btn"
            type="submit"
            className={clsx(
              "h-10 rounded-lg bg-indigo-700/25 font-medium border transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-700 px-4 mt-2 sm:mt-0",
              {
                "bg-gray-700/25 border-gray-600 text-gray-400 hover:bg-gray-700/25":
                  email === "",
                "border-red-600 text-red-500 hover:bg-indigo-700/25":
                  errors.email !== undefined,
                "border-green-600 text-green-400 hover:bg-green-700/25":
                  errors.email === undefined,
              }
            )}
            disabled={errors.email ? true : false || !email ? true : false}
            onClick={(click) => setUsernameBlockElem(true)}
          >
            <span>Continue</span>
          </button>
        </div>
        {errors.email?.type === "pattern" && (
          <span className="text-yellow-500 mt-1 mx-auto sm:mx-0">
            This email is invalid
          </span>
        )}
        {errors.email?.type === "required" && (
          <span className="text-yellow-500 mt-1 mx-auto sm:mx-0">
            Please enter an email address
          </span>
        )}
      </div>

      <div
        className={clsx("flex-col mb-6", {
          "hidden": !usernameBlockElem ? true : false,
        })}
      >
        <div className="flex mb-1">
          <UserCircleIcon className="mr-1 w-5" />
          <span>Enter your username*</span>
        </div>
        <div className="flex flex-col sm:flex-row">
          <input
            className="h-10 rounded-md sm:rounded-r-none border border-indigo-700 py-[9px] text-center sm:text-left sm:pl-4 text-black outline-2 placeholder:text-gray-500"
            id="username"
            type="text"
            value={username}
            placeholder="Username"
            accept="UTF-8"
            formMethod="post"
            {...register("username", {
              minLength: 3,
              maxLength: 32,
              required: true,
              onChange(event) {
                setUsername(event.target.value);
              },
            })}
          />
          <button
            type="submit"
            className={clsx(
              "h-10 rounded sm:rounded-l-none bg-indigo-700/25 px-4 font-medium border transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-700 mt-2 sm:mt-0",
              {
                "border-green-600 text-green-400 hover:bg-green-700/25":
                  errors.email === undefined,
                "border-red-600 text-red-500 hover:bg-red-700/25":
                  errors.email !== undefined,
              }
            )}
            hidden={!username ? true : false}
            disabled={!username ? true : false}
          >
            <span>Continue</span>
          </button>
        </div>
        {errors.username && (
          <span className="text-yellow-500 mt-1 mx-auto sm:mx-0">
            This username is invalid
          </span>
        )}
      </div>
    </form>
  );
}
