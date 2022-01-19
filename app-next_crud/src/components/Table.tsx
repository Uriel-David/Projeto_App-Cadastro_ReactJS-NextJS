import Cliente from "../core/Cliente";

interface TableProps {
    clientes: Cliente[]
}

export default function Table(props) {
    return(
        <table>
            <th>Code</th>
            <th>Name</th>
            <th>Age</th>
        </table>
    )
}