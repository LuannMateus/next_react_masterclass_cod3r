import Client from '../../core/Model/Client';
import { ClientRepository } from '../../core/Repository/ClientRepository';

import firebase from '../config';

class ClientCollection implements ClientRepository {
  #conversion = {
    toFirestore(client: Client) {
      return {
        name: client.name,
        age: client.age,
      };
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ): Client {
      const data = snapshot.data(options);
      return new Client(data.name, data.age, snapshot.id);
    },
  };

  public async findAll(): Promise<Client[]> {
    const query = await this.collection().get();

    return query.docs.map((doc) => doc.data());
  }

  public async save(client: Client): Promise<Client> {
    if (client?.id) {
      await this.collection().doc(client.id).set(client);

      return client;
    } else {
      const docRef = await this.collection().add(client);
      const doc = await docRef.get();

      return doc.data() as Client;
    }
  }

  public async remove(client: Client): Promise<void> {
    return this.collection()
      .doc(client.id ?? undefined)
      .delete();
  }

  private collection() {
    return firebase
      .firestore()
      .collection('clients')
      .withConverter(this.#conversion);
  }
}

export { ClientCollection };
