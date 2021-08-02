import Head from 'next/head';

import { Button } from '../components/Button';
import { Form } from '../components/Form';
import { Layout } from '../components/Layout';
import { Table } from '../components/Table';

import { useClient } from '../hooks/useClient';

export default function Home() {
  const {
    client,
    clients,
    visible,
    handleNewClient,
    handleClient,
    handleChangeClient,
    removeClient,
    showTable,
  } = useClient();

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}
    >
      <Head>
        <title>Home | NEXT</title>
      </Head>
      <Layout title="Cadastro Simples">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4" onClick={handleNewClient}>
                New Client
              </Button>
            </div>
            <Table
              clients={clients}
              handleClient={handleClient}
              removeClient={removeClient}
            />
          </>
        ) : (
          <Form
            client={client}
            handleChangeClient={handleChangeClient}
            handleCancel={() => showTable()}
          />
        )}
      </Layout>
    </div>
  );
}
