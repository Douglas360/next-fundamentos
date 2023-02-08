import { Button } from "../components/Button";
import { Form } from "../components/Form";
import Layout from "../components/Layout";
import { Table } from "../components/Table";
import Client from "../core/Client";

const clients = [
  new Client('Douglas H', 29, '1'),
  new Client('Douglas', 29, '2'),
]

const selectedClient = (client: Client) => {
  console.log(client.name)

}

const deletedClient = (client: Client) => {
  console.log(" Excluir: " + client.name)

}

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center bg-slate-800">
      <Layout title="Cadastro Simples">
        <div className="flex justify-end">
          <Button className="mb-4" children={"Novo Cliente"} />
        </div>

        <Table
          clients={clients}
          selectedClient={selectedClient}
          deletedClient={deletedClient} />
        <Form id={clients[1]} />

      </Layout>

    </div>
  )
}