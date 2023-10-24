import Button from "../button/Button"
import ShopTable from "../shopTable/ShopTable"

export default function Header() {
    return (
        <>
            <div className="bg-[url('/bg-header.svg')] flex flex-col gap-80 bg-top bg-no-repeat">
                <div className="flex flex-col gap-8 items-center justify-center">
                    <div className="flex flex-col gap-4 items-center justify-center w-full pt-24">
                        <h1 className="font-bold text-3xl">
                            خرید و فروش امن بیت‌کوین و ارزهای دیجیتال
                        </h1>
                        <h2 className="text-2xl">
                            به بزرگترین بازار ارز دیجیتال ایران بپیوندید
                        </h2>
                    </div>
                    <div className="flex items-center justify-center gap-4 w-full ">
                        <Button res="sm:hidden" title="ورود" bg="transparent" border="main" hover="" w="max" text="main" />
                        <Button res="..." title="ثبت نام" bg="main" border="none" hover="mainB" w="max" text="white" />
                    </div>
                    <div className="flex items-center justify-center ">
                        <button className="group relative h-12 w-[280px] overflow-hidden rounded-lg bg-white text-lg shadow border">
                            <span className="relative text-black group-hover:text-white text-main">نوبیتکس چطور کار میکند؟</span>
                            <div className="absolute inset-0 w-6 bg-main transition-all duration-[450ms] ease-out group-hover:w-full z-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-white w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                <ShopTable/>
            </div>
        </>
    )
}