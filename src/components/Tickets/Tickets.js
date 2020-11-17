import React from 'react';
import Ticket from '../Ticket/Ticket';

export default function Tickets() {
  return (
    <div style={{ flexGrow: 1 }}>
      {tickets.map(ticket => <Ticket {...ticket} />)}
    </div>
  )
}
