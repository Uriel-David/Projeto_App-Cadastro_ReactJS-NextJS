import { IconEdit } from "./Icons";

export default function ButtonIcon(props) {
    return(
        <button className={`
            ${props.children == IconEdit ? 'text-green-600' : 'text-red-500'}
            flex justify-center items-center
            rounded-full p-2 m-1
            hover:bg-purple-50
        `}>
            {props.children}
        </button>
    )
}
