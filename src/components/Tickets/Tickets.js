import React from 'react';
import Ticket from '../Ticket/Ticket';

const tickets = [];
export default function Tickets() {
  return (
    <div style={{ flexGrow: 1 }}>
      {tickets.map(ticket => <Ticket {...ticket} />)}
    </div>
  )
}
