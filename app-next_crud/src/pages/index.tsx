import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Cliente from '../core/Cliente'
import styles from '../styles/Home.module.css'

export default function Home() {

  const clients = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4'),
  ]

  function clientSelect(client: Cliente) {
    //
  }

  function clientDelete(client: Cliente) {
    //
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <div className="flex justify-end">
          <Button className="mb-4">
            New Client
          </Button>
        </div>
        <Table client={clients}
                clientSelect={clientSelect}
                clientDelete={clientDelete}></Table>
      </Layout>
    </div>
  )
}
