import { FunctionComponent, useState } from 'react';
import Client from '../core/Model/Client';
import { Button } from './Button';
import { Input } from './Input';

type FormProps = {
  client: Client;
  handleChangeClient?: (client: Client) => void;
  handleCancel: () => void;
};

const Form: FunctionComponent<FormProps> = ({
  client,
  handleChangeClient,
  handleCancel,
}) => {
  const id = client?.id;

  const [name, setName] = useState(client?.name ?? '');
  const [age, setAge] = useState(client?.age ?? 0);

  return (
    <div>
      {id && <Input readOnly text="Code" value={id} className="mb-5 mt-2" />}
      <Input text="Name" value={name} onChange={setName} className="mb-5" />
      <Input type="number" text="Age" value={age} onChange={setAge} />
      <div className="flex justify-end mt-7">
        <Button
          color="blue"
          className="mr-2"
          onClick={() => handleChangeClient?.(new Client(name, age, id))}
        >
          {id ? 'Change' : 'Save'}
        </Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </div>
    </div>
  );
};

export { Form };
