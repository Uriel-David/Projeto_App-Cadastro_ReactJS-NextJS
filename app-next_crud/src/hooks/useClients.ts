import { useEffect, useState } from "react"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import CollectionClient from "../db/CollectionClient"
import useTableOrForm from "./useTableOrForm"

export default function useClients() {
    
    const repo: ClientRepository = new CollectionClient()

    const { showForm, showTable, tableVisibale } = useTableOrForm()

    const [client, setClient] = useState<Client>(Client.hollow())
    const [clients, setClients] = useState<Client[]>([])

    useEffect(findAll, [])

    function findAll() {
        repo.getAll().then(clients => {
            setClients(clients)
            showTable()
        })
    }

    function clientSelect(client: Client) {
        setClient(client)
        showForm()
    }

    async function clientDelete(client: Client) {
        await repo.delete(client)
        findAll()
    }

    function newClient(client: Client) {
        setClient(Client.hollow())
        showForm()
    }

    async function saveClient(client: Client) {
        await repo.save(client)
        findAll()
    }

    return {
        saveClient,
        newClient,
        clientDelete,
        clientSelect,
        findAll,
        showTable,
        tableVisibale,
        client,
        clients,
    }
}