import React, { useContext, useState } from 'react';
import { SocketContext } from '../context/SocketContext';

export const BandAdd = () => {
  const [valor, setValor] = useState('');
  const { socket } = useContext(SocketContext);

  const onSubmit = (ev) => {
    ev.preventDefault();

    if (valor.trim().length > 0) {
      socket.emit('crear-banda', { nombre: valor });
      setValor('');
    }
  };

  return (
    <>
      <h3>Add Music Group</h3>

      <form onSubmit={onSubmit}>
        <input
          className="form-control"
          placeholder="New name of the music group"
          value={valor}
          onChange={(ev) => setValor(ev.target.value)}
        />
      </form>
    </>
  );
};
