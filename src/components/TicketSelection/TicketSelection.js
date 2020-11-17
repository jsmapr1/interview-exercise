import React from 'react';
import Tickets from '../Tickets/Tickets';


//TODO: make EventName

const styles = {
  display: 'flex',
  flexDirection: 'column',
  width: '60%'
}

export default function TicketSelection() {
  return(
    <form style={styles}>
      <div style={{ borderBottom: 'gray solid 1px'}}>
        <h3> Engineering at Eventbrite</h3>
      </div>
      <Tickets />
      <div style={{ borderBottom: 'gray solid 1px'}}>
        <button type="submit">Buy</button>
      </div>
    </form>
  )
}
