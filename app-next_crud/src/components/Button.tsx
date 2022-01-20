interface ButtonProps {
    className?: string
    children: any
}

export default function Button(props: ButtonProps) {
    return(
        <button className={`
            bg-gradient-to-r from-green-400 to-green-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}
