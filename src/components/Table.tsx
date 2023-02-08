import Client from "../core/Client"
import { EditIcon, TrashIcon } from "./Icons"

interface TableProps {
    clients: Client[]
    selectedClient?: (clients: Client) => void
    deletedClient?: (clients: Client) => void
}

export const Table = ({ clients, selectedClient, deletedClient }: TableProps) => {

    const tableAction = (client: Client) => {
        return (
            <td className="flex justify-center ">
                <button onClick={() => selectedClient?.(client)} className="flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50"><EditIcon /></button>
                <button onClick={() => deletedClient?.(client)} className="flex justify-center items-center text-red-600 rounded-full p-2 m-1 hover:bg-purple-50"><TrashIcon /></button>
            </td>
        )
    }

    const tableHead = () => {
        return (
            <tr>
                <th className="text-left p-4">Codigo</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                <th className="p-4">Idade</th>

            </tr>
        )
    }

    const tableRows = () => {
        return (
            clients?.map((client, index) => {
                return (
                    <tr key={client.id} className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                        <td className="text-left p-4">{client.id}</td>
                        <td className="text-left p-4">{client.name}</td>
                        <td className="text-left p-4">{client.age}</td>
                        {tableAction(client)}
                    </tr>
                )
            })
        )
    }



    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100 ">
                {tableHead()}
            </thead>
            <tbody>
                {tableRows()}
            </tbody>

        </table>
    )
}