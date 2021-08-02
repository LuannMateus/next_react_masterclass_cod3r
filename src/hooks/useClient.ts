import { useCallback, useEffect, useMemo, useState } from 'react';
import { ClientCollection } from '../backend/database/ClientCollection';
import Client from '../core/Model/Client';
import { useTableOrForm } from './useTableOrForm';

export const useClient = () => {
  const { visible, showTable, showForm } = useTableOrForm();

  const clientRepository = useMemo(() => new ClientCollection(), []);

  const [clients, setClients] = useState<Client[]>([]);
  const [client, setClient] = useState<Client>(Client.emptyClient());

  const findAllClients = useCallback(async () => {
    const clients = await clientRepository.findAll();
    setClients(clients);
  }, [clientRepository]);

  const handleNewClient = () => {
    setClient(Client.emptyClient());
    showForm();
  };

  const handleClient = (client: Client) => {
    setClient(client);
    showForm();
  };

  const removeClient = (client: Client) => {
    clientRepository.remove(client);
    findAllClients();
  };

  const handleChangeClient = (client: Client) => {
    clientRepository.save(client);
    findAllClients();
    showTable();
  };

  useEffect(() => {
    findAllClients();
  }, [findAllClients]);

  return {
    clients,
    client,
    visible,
    handleNewClient,
    handleClient,
    removeClient,
    handleChangeClient,
    showTable,
  };
};
