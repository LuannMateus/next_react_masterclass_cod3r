import { useState } from 'react';

export const useTableOrForm = () => {
  const [visible, setVisible] = useState<'table' | 'form'>('table');

  const showTable = () => {
    setVisible('table');
  };

  const showForm = () => {
    setVisible('form');
  };

  return {
    visible,
    showTable,
    showForm,
  };
};
