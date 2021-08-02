import { ChangeEvent, FunctionComponent } from 'react';

type InputProps = {
  type?: 'text' | 'number';
  text: string;
  value: string | number;
  readOnly?: boolean;
  onChange?: (value: any) => void;
  className?: string;
};

const Input: FunctionComponent<InputProps> = ({
  type,
  text,
  value,
  readOnly,
  onChange,
  className,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-4" htmlFor={text.toLowerCase()}>
        {text}
      </label>
      <input
        type={type}
        value={value}
        readOnly={readOnly}
        id={text.toLowerCase()}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChange?.(event.target.value)
        }
        className={`
          border border-purple-500 rounded-lg
          focus:outline-none bg-gray-50 px-4 py-2 
          ${readOnly ? '' : 'focus:bg-white'}
        `}
      />
    </div>
  );
};

export { Input };
