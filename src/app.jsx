import react, { useState } from 'react';
import { Drawer } from '@alfalab/core-components/drawer';

import './app.css';

export const App = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button onClick={ () => setOpen(true) }>open side panel</button>
            <Drawer open={ open } onClose={ () => setOpen(false) }>
                <header className="header"></header>
                <button onClick={ () => setOpen(false) }>close side panel</button>
                {[1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12].map(item => <h2 key={ item }>{ item }</h2>)}
            </Drawer>
        </>
    );
};
