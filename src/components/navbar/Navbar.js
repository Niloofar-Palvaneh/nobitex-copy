import Image from "next/image"
import Button from "../button/Button"

export default function Navbar() {
    return (
        <>
            <div className="text-white bg-black flex items-center justify-center p-4">
                <div className="w-[95%] flex items-center justify-between ">
                    <div className="">
                        <ul className="flex items-center gap-12 ">
                            <Image src={"/logo.svg"} width={100} height={90} alt="logo" />
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
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <Button title="ورود" bg="transparent" border="none" hover=""/>
                        <Button title="ثبت نام" bg="main" border="none" hover="mainB" />
                    </div>
                </div>
            </div>
        </>
    )
}