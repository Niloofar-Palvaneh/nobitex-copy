import Link from "next/link";


export default function Button(props){
    return(
        <>
        <Link href={"#"}
         className={`px-4 py-2 ${props.res} rounded-md  text-${props.text} text-center w-${props.w}
          border bg-${props.bg} hover:bg-${props.hover}
           border-${props.border} outline-none`}>
        {props.title}
        </Link>
        </>
    )
}