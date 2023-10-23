"use client"

import Image from "next/image"
import Button from "../button/Button"
import { useState } from "react";

export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const showMobileMenuHandler = () => {
        setShowMobileMenu(!showMobileMenu)
        console.log(showMobileMenu);
    }

    return (
        <>
            <div className={`bg-gray-300 w-full h-screen fixed top-0 brightness-50 contrast-50 blur-[5px] opacity-75  ${showMobileMenu ? "" : "hidden"}`}></div>
            {
                showMobileMenu && (
                    <div className="w-[65%] h-screen  bg-white fixed px-4">
                        <div className="flex flex-col items-center w-full gap-4 mt-[70px] flex-wrap">
                            <Button res="..." title="ورود" bg="transparent" border="border border-main" hover="" text="..." w="full" />
                            <Button res="..." title="ثبت نام" bg="main" border="none" hover="mainB" text="white" w="full" />
                        </div>
                        <ul className="text-sm mt-6 flex flex-col gap-8">
                            <li className="flex items-center gap-4 relative group transition ease-in-out  hover:text-main">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-gray-500 w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                                </svg>
                                <div className="flex items-center gap-1">
                                    قیمت لحظه ای رمز ارز ها
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                                <ul className="absolute bg-white z-10 hidden group-hover:inline-flex top-6
                                               flex flex-col p-2 gap-4 border rounded-xl shadow-xl">
                                    <li className="transition ease-in-out  hover:text-main text-black">بیت کوین</li>
                                    <li className="transition ease-in-out  hover:text-main text-black">تتر</li>
                                    <li className="transition ease-in-out  hover:text-main text-black">اتریوم</li>
                                    <li className="transition ease-in-out  hover:text-main text-black">ریپل</li>
                                    <li className="transition ease-in-out  hover:text-main text-black">سایر ارز های دیجیتال</li>
                                </ul>
                            </li>
                            <li className="flex items-center gap-4 relative group transition ease-in-out  hover:text-main">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-gray-500 w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                </svg>
                                راهنمای استفاده
                            </li>
                            <li className="flex items-center gap-4 relative group transition ease-in-out  hover:text-main">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-gray-500 w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                                مجله
                            </li>
                            <li className="flex items-center gap-4 relative group transition ease-in-out  hover:text-main">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-gray-500 w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                                معرفی به دوستان
                            </li>
                        </ul>
                    </div>
                )
            }

            <div className="text-white bg-black flex items-center justify-center p-4">
                <div className="w-[95%] flex items-center justify-between xl:w-full ">
                    <div className="flex items-center gap-12 sm:gap-4 ">

                        <div className="hidden sm:inline md:inline"
                            onClick={showMobileMenuHandler}
                        >
                            <button class="relative group">
                                <div className="bg-gray-500 text-white p-2 rounded-tr-[30px] flex flex-col justify-center items-center ">
                                    <div class=" w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">

                                        {
                                            showMobileMenu ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>

                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                                </svg>

                                            )
                                        }
                                    </div>
                                </div>
                            </button>
                        </div>


                        <Image src={"/logo.svg"} width={100} height={90} alt="logo" />
                        <ul className="flex items-center gap-12 sm:hidden md:hidden xl:gap-8 ">
                            <li className="relative group transition ease-in-out  hover:text-main">
                                <div className="flex items-center gap-1">
                                    قیمت لحظه ای رمز ارز ها
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                                <ul className="absolute bg-white hidden group-hover:flex 
                                flex flex-col p-2 gap-4 border rounded-xl shadow-xl
                                ">
                                    <li className="transition ease-in-out  hover:text-main text-black">بیت کوین</li>
                                    <li className="transition ease-in-out  hover:text-main text-black">تتر</li>
                                    <li className="transition ease-in-out  hover:text-main text-black">اتریوم</li>
                                    <li className="transition ease-in-out  hover:text-main text-black">ریپل</li>
                                    <li className="transition ease-in-out  hover:text-main text-black">سایر ارز های دیجیتال</li>
                                </ul>
                            </li>
                            <li className="transition ease-in-out  hover:text-main">
                                راهنمای استفاده
                            </li>
                            <li className="transition ease-in-out  hover:text-main">
                                مجله
                            </li>
                            <li className="transition ease-in-out  hover:text-main">
                                معرفی به دوستان
                            </li>
                        </ul>
                    </div >
                    <div className="flex items-center justify-center gap-4 w-max">
                        <Button res="sm:hidden" title="ورود" bg="transparent" border="none" hover="" w="max" />
                        <Button res="..." title="ثبت نام" bg="main" border="none" hover="mainB" w="max" />
                    </div>
                </div >
            </div >
        </>
    )
}