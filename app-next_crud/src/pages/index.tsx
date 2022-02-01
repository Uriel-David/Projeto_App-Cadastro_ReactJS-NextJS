import { useEffect, useState } from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import useClients from '../hooks/useClients'

export default function Home() {

  const {
    client,
    clients,
    tableVisibale,
    showTable,
    clientSelect,
    clientDelete,
    newClient,
    saveClient,
  } = useClients()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {tableVisibale ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4" onClick={newClient}>
                New Client
              </Button>
            </div>
            <Table client={clients}
                  clientSelect={clientSelect}
                  clientDelete={clientDelete} />
          </>
        ) : (
          <Form client={client}
                cancel={showTable}
                clientChange={saveClient} />
        )}
      </Layout>
    </div>
  )
}
