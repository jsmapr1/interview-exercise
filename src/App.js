import React, { useEffect, useState } from 'react';
import Checkout from './components/Checkout/Checkout';
import Modal from './components/Modal/Modal';

export default function App() {
    const [serverMessage, setServerMessage] = useState('Calling API...');
    const [buy, setBuy] = useState(false);

    useEffect(() => {
        fetch('./api').then(
            response => response.json()
        ).then(
            payload => setServerMessage(payload.message)
        );
    }, []);

    return (
        <section className="eds-l-mar-all-4">
            <h1>This is your App ! Yay</h1>
            <p>{serverMessage}</p>
            <button onClick={setBuy} type="button">Buy Tickets</button>
            {buy &&
              <Modal handleBackgroundClick={() => setBuy(false)}>
                <Checkout />
              </Modal>
            }
        </section>
    );
}
