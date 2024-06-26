'use client'
import { SubmitHandler, useForm } from "react-hook-form";
import React from "react";
import { useState } from "react";

import style from "./form.module.scss";

type Inputs = {
    example: string;
    exampleRequired: string;
}

export const Form = () =>{

    const [validPassword, setValidPassword] = useState(false)

    const{
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) =>{
        data.password == data.password2 ? setValidPassword(true) : setValidPassword(false)
    }

    return(
        <div>
            {/* {validPassword ? <p>User has not been found</p> : <p>Wrong password</p>} */}
            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <div className={style.input}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.125C7.58375 3.125 5.625 5.08375 5.625 7.5C5.625 9.91625 7.58375 11.875 10 11.875C12.4162 11.875 14.375 9.91625 14.375 7.5C14.375 5.08375 12.4162 3.125 10 3.125ZM4.375 7.5C4.375 4.3934 6.8934 1.875 10 1.875C13.1066 1.875 15.625 4.3934 15.625 7.5C15.625 10.6066 13.1066 13.125 10 13.125C6.8934 13.125 4.375 10.6066 4.375 7.5Z" fill="#BDBDBD" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99998 13.1245C8.57362 13.1245 7.17239 13.5 5.93716 14.2132C4.70193 14.9265 3.67622 15.9523 2.96315 17.1877C2.79059 17.4866 2.40836 17.5891 2.10941 17.4165C1.81046 17.2439 1.708 16.8617 1.88056 16.5628C2.70333 15.1374 3.88684 13.9537 5.31211 13.1307C6.73738 12.3078 8.35418 11.8745 9.99998 11.8745C11.6458 11.8745 13.2626 12.3078 14.6879 13.1307C16.1131 13.9537 17.2966 15.1374 18.1194 16.5628C18.292 16.8617 18.1895 17.2439 17.8906 17.4165C17.5916 17.5891 17.2094 17.4866 17.0368 17.1877C16.3237 15.9523 15.298 14.9265 14.0628 14.2132C12.8276 13.5 11.4263 13.1245 9.99998 13.1245Z" fill="#BDBDBD" />
                </svg>
                <input 
                type="username"
                placeholder="Username"
                /*style={{borderColor: errors.username ? 'red' : 'initial'}}*/
                {...register("username",{
                    required: {
                        value: true,
                        message: "Этот пункт обязателен для заполнения!",
                    },
                })}/>
            </div>
            <div className={style.input}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.875 4.375C1.875 4.02982 2.15482 3.75 2.5 3.75H17.5C17.8452 3.75 18.125 4.02982 18.125 4.375V15C18.125 15.3315 17.9933 15.6495 17.7589 15.8839C17.5245 16.1183 17.2065 16.25 16.875 16.25H3.125C2.79348 16.25 2.47554 16.1183 2.24112 15.8839C2.0067 15.6495 1.875 15.3315 1.875 15V4.375ZM3.125 5V15H16.875V5H3.125Z" fill="#BDBDBD" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.03928 3.95268C2.27253 3.69823 2.66788 3.68104 2.92233 3.91428L10 10.4021L17.0777 3.91428C17.3321 3.68104 17.7275 3.69823 17.9607 3.95268C18.194 4.20713 18.1768 4.60248 17.9223 4.83573L10.4223 11.7107C10.1834 11.9298 9.81663 11.9298 9.57768 11.7107L2.07768 4.83573C1.82323 4.60248 1.80604 4.20713 2.03928 3.95268Z" fill="#BDBDBD" />
            </svg>
            <input 
                type="email"
                placeholder="Email Address"
                {...register("email",{
                    required: {
                        value: true,
                        message: "Этот пункт обязателен для заполнения!",
                    },
                })}/>
            </div>
            <div className={style.input}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 10C9.48223 10 9.0625 10.4197 9.0625 10.9375C9.0625 11.4553 9.48223 11.875 10 11.875C10.5178 11.875 10.9375 11.4553 10.9375 10.9375C10.9375 10.4197 10.5178 10 10 10ZM7.8125 10.9375C7.8125 9.72938 8.79188 8.75 10 8.75C11.2081 8.75 12.1875 9.72938 12.1875 10.9375C12.1875 12.1456 11.2081 13.125 10 13.125C8.79188 13.125 7.8125 12.1456 7.8125 10.9375Z" fill="#BDBDBD" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 11.875C10.3452 11.875 10.625 12.1548 10.625 12.5V14.375C10.625 14.7202 10.3452 15 10 15C9.65482 15 9.375 14.7202 9.375 14.375V12.5C9.375 12.1548 9.65482 11.875 10 11.875Z" fill="#BDBDBD" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 7.5C2.5 6.80964 3.05964 6.25 3.75 6.25H16.25C16.9404 6.25 17.5 6.80964 17.5 7.5V16.25C17.5 16.9404 16.9404 17.5 16.25 17.5H3.75C3.05964 17.5 2.5 16.9404 2.5 16.25V7.5ZM16.25 7.5H3.75V16.25H16.25V7.5Z" fill="#BDBDBD" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.875C9.41984 1.875 8.86344 2.10547 8.4532 2.5157C8.04297 2.92594 7.8125 3.48234 7.8125 4.0625V6.875C7.8125 7.22018 7.53268 7.5 7.1875 7.5C6.84232 7.5 6.5625 7.22018 6.5625 6.875V4.0625C6.5625 3.15082 6.92466 2.27648 7.56932 1.63182C8.21398 0.987164 9.08832 0.625 10 0.625C10.9117 0.625 11.786 0.987164 12.4307 1.63182C13.0753 2.27648 13.4375 3.15082 13.4375 4.0625V6.875C13.4375 7.22018 13.1577 7.5 12.8125 7.5C12.4673 7.5 12.1875 7.22018 12.1875 6.875V4.0625C12.1875 3.48234 11.957 2.92594 11.5468 2.5157C11.1366 2.10547 10.5802 1.875 10 1.875Z" fill="#BDBDBD" />
            </svg>
            <input 
                type="password"
                placeholder="Password"
                {...register("password",{
                    required: {
                        value: true,
                        message: "Этот пункт обязателен для заполнения!",
                    },
                })}/>
            </div>
            <div className={style.input}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 10C9.48223 10 9.0625 10.4197 9.0625 10.9375C9.0625 11.4553 9.48223 11.875 10 11.875C10.5178 11.875 10.9375 11.4553 10.9375 10.9375C10.9375 10.4197 10.5178 10 10 10ZM7.8125 10.9375C7.8125 9.72938 8.79188 8.75 10 8.75C11.2081 8.75 12.1875 9.72938 12.1875 10.9375C12.1875 12.1456 11.2081 13.125 10 13.125C8.79188 13.125 7.8125 12.1456 7.8125 10.9375Z" fill="#BDBDBD" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 11.875C10.3452 11.875 10.625 12.1548 10.625 12.5V14.375C10.625 14.7202 10.3452 15 10 15C9.65482 15 9.375 14.7202 9.375 14.375V12.5C9.375 12.1548 9.65482 11.875 10 11.875Z" fill="#BDBDBD" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 7.5C2.5 6.80964 3.05964 6.25 3.75 6.25H16.25C16.9404 6.25 17.5 6.80964 17.5 7.5V16.25C17.5 16.9404 16.9404 17.5 16.25 17.5H3.75C3.05964 17.5 2.5 16.9404 2.5 16.25V7.5ZM16.25 7.5H3.75V16.25H16.25V7.5Z" fill="#BDBDBD" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.875C9.41984 1.875 8.86344 2.10547 8.4532 2.5157C8.04297 2.92594 7.8125 3.48234 7.8125 4.0625V6.875C7.8125 7.22018 7.53268 7.5 7.1875 7.5C6.84232 7.5 6.5625 7.22018 6.5625 6.875V4.0625C6.5625 3.15082 6.92466 2.27648 7.56932 1.63182C8.21398 0.987164 9.08832 0.625 10 0.625C10.9117 0.625 11.786 0.987164 12.4307 1.63182C13.0753 2.27648 13.4375 3.15082 13.4375 4.0625V6.875C13.4375 7.22018 13.1577 7.5 12.8125 7.5C12.4673 7.5 12.1875 7.22018 12.1875 6.875V4.0625C12.1875 3.48234 11.957 2.92594 11.5468 2.5157C11.1366 2.10547 10.5802 1.875 10 1.875Z" fill="#BDBDBD" />
            </svg>
            <input 
                type="password"
                placeholder="Confirm Password"
                style={{borderColor: errors.password2 ? 'red' : 'initial'}}
                {...register("password2",{
                    required: {
                        value: true,
                        message: "Этот пункт обязателен для заполнения!",
                    },
                })}/>
            </div>
            <button type="submit" className={style.btn}>
                <span>Create account</span>
            </button>
        </form>
        </div>
        
    )
}