import React, { createContext, useState } from 'react';
import TicketSelection from '../TicketSelection/TicketSelection';

// TODO: Improve styles
const styles = {
  backgroundColor: 'white',
  display: 'flex',
  width: '90%',
  height: '90%'
};

// TODO: update to use API
const tickets = [
  {
    name: 'General Admission',
    id: 'general',
    price: 45,
    fee: 4.37,
    tax: 4.2
  },
  {
    name: 'VIP',
    id: 'vip',
    price: 80,
    fee: 6.5,
    tax: 7.35
  }
];

// Not sure if this is the right choice
const TicketContext = createContext();
// TODO: add in state handler to collect numbers
const TicketSelectionContext = createContext();

// TODO: add image from the event API
export default function Checkout() {
  return(
    <div role="dialog" aria-labelledby="checkout" style={styles}>
      <TicketContext.Provider value={tickets}>
        <TicketSelectionContext.Provider value={null}>
          <TicketSelection />
          <div style={{ width: '40%'}}>
            <picture>
              <source srcSet="/public/img/eventImage.jpg" />
              <img style={{ width: '100%' }} />
            </picture>
          </div>
        </TicketSelectionContext.Provider>
      </TicketContext.Provider>
    </div>
  )
}
