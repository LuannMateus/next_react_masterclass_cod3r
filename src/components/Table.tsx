import { FunctionComponent } from 'react';
import Client from '../core/Model/Client';
import { EditIcon, TrashIcon } from './Icon';

type TableProps = {
  clients: Client[];
  handleClient?: (client: Client) => void;
  removeClient?: (client: Client) => void;
};

const Table: FunctionComponent<TableProps> = ({
  clients,
  handleClient,
  removeClient,
}) => {
  const showActions = handleClient || removeClient;

  const renderHeader = () => {
    return (
      <tr>
        <th className="text-left p-3">Code</th>
        <th className="text-left p-3">Name</th>
        <th className="text-left p-3">Age</th>
        {showActions && <th className="text-left p-3">Actions</th>}
      </tr>
    );
  };

  const renderBody = () => {
    return clients?.map((client, index) => {
      return (
        <tr
          key={`${client.id}_${Math.random()}`}
          className={`
          ${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
        `}
        >
          <td className="text-left p-3">{client.id || ++index} </td>
          <td className="text-left p-3">{client.name}</td>
          <td className="text-left p-3">{client.age}</td>
          {showActions && renderActions(client)}
        </tr>
      );
    });
  };

  const renderActions = (client: Client) => {
    return (
      <td className="flex">
        {handleClient ? (
          <button
            onClick={() => handleClient(client)}
            className={`
            flex justify-center items-center 
          text-green-600 rounded-full hover:bg-purple-50
            p-2 m-1`}
          >
            <EditIcon />
          </button>
        ) : (
          false
        )}

        {removeClient ? (
          <button
            onClick={() => removeClient(client)}
            className={`
            flex justify-center items-center 
          text-red-500 rounded-full hover:bg-purple-50
            p-2 m-1`}
          >
            <TrashIcon />
          </button>
        ) : (
          false
        )}
      </td>
    );
  };

  return (
    <table
      className={`
    w-full rounded-xl overflow-hidden
    `}
    >
      <thead
        className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}
      >
        {renderHeader()}
      </thead>
      <tbody>{renderBody()}</tbody>
    </table>
  );
};

export { Table };
