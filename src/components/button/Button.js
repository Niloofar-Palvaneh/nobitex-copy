import Link from "next/link";


export default function Button(props){
    return(
        <>
        <Link href={"#"}
         className={`px-4 py-2 rounded-md border bg-${props.bg} hover:bg-${props.hover} border-${props.border} outline-none`}>
        {props.title}
        </Link>
        </>
    )
}