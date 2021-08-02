import { FunctionComponent, ReactNode } from 'react';

type ButtonProps = {
  color?: 'green' | 'blue' | 'gray';
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

const Button: FunctionComponent<ButtonProps> = ({
  children,
  color,
  className,
  onClick,
}) => {
  const choseColor = color ?? 'gray';

  return (
    <button
      onClick={onClick}
      className={`
        bg-gradient-to-r from-${choseColor}-400 to-${choseColor}-700
        text-white px-4 py-2 rounded-md 
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export { Button };
