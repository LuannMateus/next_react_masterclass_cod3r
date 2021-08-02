import Client from '../Model/Client';

export interface ClientRepository {
  findAll(): Promise<Client[]>;

  save(client: Client): Promise<Client>;

  remove(client: Client): Promise<void>;
}
