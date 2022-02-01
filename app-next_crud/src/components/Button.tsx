interface ButtonProps {
    className?: string
    children: any
    color?: 'blue' | 'green' | 'gray'
    onClick?: () => void
}

export default function Button(props: any) {
    return(
        <button onClick={props.onClick} className={`
            bg-gradient-to-r ${props.color == 'blue' ? 'from-blue-400' : 'from-green-400'} ${props.color == 'blue' ? 'to-blue-700' : 'to-green-700'}
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}
