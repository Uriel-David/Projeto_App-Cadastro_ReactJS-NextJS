import Client from "../core/Client";
import ButtonIcon from "./ButtonIcons";
import { IconEdit, IconTrash } from "./Icons";

interface TableProps {
    client: Client[]
    clientSelect?: (client: Client) => void
    clientDelete?: (client: Client) => void
}

export default function Table(props: TableProps) {

    const showAction = props.clientDelete || props.clientSelect

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

    function renderActions(client: Client) {
        return(
            <td className="flex justify-center">
                {props.clientSelect ? (
                    /* <ButtonIcon onClick={() => props.clientSelect?.(client)}>
                        {IconEdit}
                    </ButtonIcon> */
                    <button onClick={() => props.clientSelect?.(client)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        {IconEdit}
                    </button>
                ) : false}

                {props.clientSelect ? (
                    /* <ButtonIcon onClick={() => props.clientDelete?.(client)}>
                        {IconTrash}
                    </ButtonIcon> */
                    <button onClick={() => props.clientDelete?.(client)} className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        {IconTrash}
                    </button>
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