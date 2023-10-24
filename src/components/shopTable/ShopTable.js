import Image from "next/image"
import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function ShopTable() {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
    ];



    return (
        <>
            <div className="flex items-center justify-center">
                <table className="bg-white p-2 w-[90%] border-separate border table-auto sm:w-full ">
                    <div className="bg-white p-2 table-caption w-full">
                        <caption className="bg-white p-2 flex items-center justify-between sm:flex-col-reverse sm:gap-2">
                            <div className="flex items-center gap-4">
                                <h6>
                                    انتخاب بازار بر اساس
                                </h6>
                                <div>
                                    <button className="bg-gray-200 px-4 py-2 ">تومان</button>
                                    <button className="bg-gray-400 px-4 py-2">تتر</button>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">
                                    قیمت ارز های دیجیتال
                                </h3>
                            </div>
                        </caption>
                    </div>
                    <tr className="text-gray-400 text-sm table-row-group text-right gap-8 ">
                        <th>نام</th>
                        <th>آخرین قیمت</th>
                        <th>تغییر 24 ساعت</th>
                        <th className="sm:hidden">نمودار هفتگی</th>
                        <th></th>
                    </tr>
                    <tr className="border">
                        <td className="flex items-center  gap-4">
                            <Image src={"/img/btc.svg"} width={50} height={50} />
                            <div className="flex sm:flex-col gap-2">
                                <h5>BTC</h5>
                                <h6 className="text-gray-400 text-sm">بیت کوین</h6>
                            </div>
                        </td>
                        <td>1,561,585,318</td>
                        <td>
                            <span className="bg-green-100 p-2 rounded">
                                +3.22%
                            </span>
                        </td>
                        <td className="sm:hidden">
                            <LineChart width={90} height={90} data={data}>
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={1} dot={false} />
                            </LineChart>
                        </td>
                        <td>
                            <span className="border border-green-300 border-2 p-2
                            transition hover:bg-green-300 hover:text-white sm:hidden
                            text-green-500 block text-center " >
                                خرید و فروش
                            </span>
                            <div className="hidden sm:inline relative group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                                <div className="absolute bg-white shadow z-10 w-max flex flex-col gap-4 border p-2 rounded left-0 -top-[80px] hidden group-hover:flex">
                                    <Link href={"#"} > درباره بیت کوین</Link>
                                    <Link href={"#"}>خرید و فروش</Link>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="border">
                        <td className="flex items-center  gap-4">
                            <Image src={"/img/btc.svg"} width={50} height={50} />
                            <div className="flex sm:flex-col gap-2">
                                <h5>BTC</h5>
                                <h6 className="text-gray-400 text-sm">بیت کوین</h6>
                            </div>
                        </td>
                        <td>1,561,585,318</td>
                        <td>
                            <span className="bg-green-100 p-2 rounded">
                                +3.22%
                            </span>
                        </td>
                        <td className="sm:hidden">
                            <LineChart width={90} height={90} data={data}>
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={1} dot={false} />
                            </LineChart>
                        </td>
                        <td>
                            <span className="border border-green-300 border-2 p-2
                            transition hover:bg-green-300 hover:text-white sm:hidden
                            text-green-500 block text-center " >
                                خرید و فروش
                            </span>
                            <div className="hidden sm:inline relative group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                                <div className="absolute bg-white shadow z-10 w-max flex flex-col gap-4 border p-2 rounded left-0 -top-[80px] hidden group-hover:flex">
                                    <Link href={"#"} > درباره بیت کوین</Link>
                                    <Link href={"#"}>خرید و فروش</Link>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="border">
                        <td className="flex items-center  gap-4">
                            <Image src={"/img/btc.svg"} width={50} height={50} />
                            <div className="flex sm:flex-col gap-2">
                                <h5>BTC</h5>
                                <h6 className="text-gray-400 text-sm">بیت کوین</h6>
                            </div>
                        </td>
                        <td>1,561,585,318</td>
                        <td>
                            <span className="bg-green-100 p-2 rounded">
                                +3.22%
                            </span>
                        </td>
                        <td className="sm:hidden">
                            <LineChart width={90} height={90} data={data}>
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={1} dot={false} />
                            </LineChart>
                        </td>
                        <td>
                            <span className="border border-green-300 border-2 p-2
                            transition hover:bg-green-300 hover:text-white sm:hidden
                            text-green-500 block text-center " >
                                خرید و فروش
                            </span>
                            <div className="hidden sm:inline relative group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                                <div className="absolute bg-white shadow z-10 w-max flex flex-col gap-4 border p-2 rounded left-0 -top-[80px] hidden group-hover:flex">
                                    <Link href={"#"} > درباره بیت کوین</Link>
                                    <Link href={"#"}>خرید و فروش</Link>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="border">
                        <td className="flex items-center  gap-4">
                            <Image src={"/img/btc.svg"} width={50} height={50} />
                            <div className="flex sm:flex-col gap-2">
                                <h5>BTC</h5>
                                <h6 className="text-gray-400 text-sm">بیت کوین</h6>
                            </div>
                        </td>
                        <td>1,561,585,318</td>
                        <td>
                            <span className="bg-green-100 p-2 rounded">
                                +3.22%
                            </span>
                        </td>
                        <td className="sm:hidden">
                            <LineChart width={90} height={90} data={data}>
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={1} dot={false} />
                            </LineChart>
                        </td>
                        <td>
                            <span className="border border-green-300 border-2 p-2
                            transition hover:bg-green-300 hover:text-white sm:hidden
                            text-green-500 block text-center " >
                                خرید و فروش
                            </span>
                            <div className="hidden sm:inline relative group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                                <div className="absolute bg-white shadow z-10 w-max flex flex-col gap-4 border p-2 rounded left-0 -top-[80px] hidden group-hover:flex">
                                    <Link href={"#"} > درباره بیت کوین</Link>
                                    <Link href={"#"}>خرید و فروش</Link>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="border">
                        <td className="flex items-center  gap-4">
                            <Image src={"/img/btc.svg"} width={50} height={50} />
                            <div className="flex sm:flex-col gap-2">
                                <h5>BTC</h5>
                                <h6 className="text-gray-400 text-sm">بیت کوین</h6>
                            </div>
                        </td>
                        <td>1,561,585,318</td>
                        <td>
                            <span className="bg-green-100 p-2 rounded">
                                +3.22%
                            </span>
                        </td>
                        <td className="sm:hidden">
                            <LineChart width={90} height={90} data={data}>
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={1} dot={false} />
                            </LineChart>
                        </td>
                        <td>
                            <span className="border border-green-300 border-2 p-2
                            transition hover:bg-green-300 hover:text-white sm:hidden
                            text-green-500 block text-center " >
                                خرید و فروش
                            </span>
                            <div className="hidden sm:inline relative group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                                <div className="absolute bg-white shadow z-10 w-max flex flex-col gap-4 border p-2 rounded left-0 -top-[80px] hidden group-hover:flex">
                                    <Link href={"#"} > درباره بیت کوین</Link>
                                    <Link href={"#"}>خرید و فروش</Link>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="border">
                        <td className="flex items-center  gap-4">
                            <Image src={"/img/btc.svg"} width={50} height={50} />
                            <div className="flex sm:flex-col gap-2">
                                <h5>BTC</h5>
                                <h6 className="text-gray-400 text-sm">بیت کوین</h6>
                            </div>
                        </td>
                        <td>1,561,585,318</td>
                        <td>
                            <span className="bg-green-100 p-2 rounded">
                                +3.22%
                            </span>
                        </td>
                        <td className="sm:hidden">
                            <LineChart width={90} height={90} data={data}>
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={1} dot={false} />
                            </LineChart>
                        </td>
                        <td>
                            <span className="border border-green-300 border-2 p-2
                            transition hover:bg-green-300 hover:text-white sm:hidden
                            text-green-500 block text-center " >
                                خرید و فروش
                            </span>
                            <div className="hidden sm:inline relative group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                                <div className="absolute bg-white shadow z-10 w-max flex flex-col gap-4 border p-2 rounded left-0 -top-[80px] hidden group-hover:flex">
                                    <Link href={"#"} > درباره بیت کوین</Link>
                                    <Link href={"#"}>خرید و فروش</Link>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <div className="p-4 bg-white flex items-center justify-center table-caption  caption-bottom">
                        <div className="flex items-center justify-center gap-2 text-blue-500">
                            <h6>نمایش تمام ارز ها</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                className="w-6 h-6 animate-bounce">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </table>
            </div>

        </>
    )
}