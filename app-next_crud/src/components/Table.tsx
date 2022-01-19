import Cliente from "../core/Cliente";
import ButtonIcon from "./ButtonIcons";
import { IconEdit, IconTrash } from "./Icons";

interface TableProps {
    client: Cliente[]
    clientSelect?: (client: Cliente) => void
    clientDelete?: (client: Cliente) => void
}

export default function Table(props: TableProps) {

    const showAction = props.clientSelect || props.clientSelect

    function renderHeader() {
        return(
            <tr>
                <th className="text-left p-4">Code</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Age</th>
                {showAction ? <th className="p-4">Actions</th> : false}
            </tr>
        )
    }

    function renderDatas() {
        return props.client?.map((client, i) => {
            return(
                <tr key={client.id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {showAction ? renderActions(client) : false}
                </tr>
            )
        })
    }

    function renderActions(client: Cliente) {
        return(
            <td className="flex justify-center">
                {props.clientSelect ? (
                    <ButtonIcon onClick={() => props.clientSelect?.(client)}>
                        {IconEdit}
                    </ButtonIcon>
                ) : false}

                {props.clientSelect ? (
                    <ButtonIcon onClick={() => props.clientDelete?.(client)}>
                        {IconTrash}
                    </ButtonIcon>
                ) : false}
            </td>
        )
    }

    return(
        <table className="w-full overflow-hidden">
            <thead className={`

                bg-gradient-to-r from-purple-500 to-purple-800
                text-gray-100
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderDatas()}
            </tbody>
        </table>
    )
}