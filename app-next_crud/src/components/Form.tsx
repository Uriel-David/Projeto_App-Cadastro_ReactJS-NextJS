import { useState } from "react";
import Input from "./Input";
import Client from "../core/Client"
import Button from "./Button";

interface FormProps {
    client: Client
    clientChange?: (client: Client) => void
    cancel?: () => void
}

export default function Form(props: FormProps) {
    
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)

    return(
        <div>
            {id ? (
                <Input text="code" value={id} onlyread className="mb-4" />
            ): false}
            <Input text="name" value={name} changeValue={setName} className="mb-5" />
            <Input text="age" type="number" value={age} changeValue={setAge} />

            <div className="flex justify-end mt-7">
                <Button color="blue" className="mr-2" onClick={() => props.clientChange?.(new Client(name, age, id))}>
                    {id ? 'Edit' : 'Save'}
                </Button>
                <Button color="gray" onClick={props.cancel}>
                    Back
                </Button>
            </div>
        </div>
    )
}