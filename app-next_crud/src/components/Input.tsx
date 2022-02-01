interface InputProps {
    type?: 'text' | 'number'
    text: string
    value: any
    onlyread?: boolean
    className?: string
    changeValue?: (value: any) => void
}

export default function Input(props: InputProps) {
    return(
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">{props.text}</label>
            <input type={props.type ?? 'text'}
                    value={props.value}
                    readOnly={props.onlyread}
                    onChange={e => props.changeValue?.(e.target.value)}
                    className={`
                        border border-purple-500 rounded-lg
                        focus: outline-none bg-gray-50 px-4 py-2
                        ${props.onlyread ? '' : 'focus: bg-green'}
                    `} />
        </div>
    )
}