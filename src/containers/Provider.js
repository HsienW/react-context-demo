import React, {createContext, Fragment, useContext} from 'react'
import {Children} from './ProviderChildren';

// const AppContext = React.createContext({
//     theme: 'light',
//     size: '2x',
// });
//
// const TwoAppContext = React.createContext({
//     name: 'hello',
// });

// const Toolbar = () => {
//     return (
//         <div>
//             <ThemedButton/>
//         </div>
//     );
// };

// export const ConsumerDemo= AppContext.Consumer;

const name = 'LULU';
export const UserContext = createContext(name);


export const Provider = () => {
    return (
        <Children/>
    );
};

// export const MyContext = AppContext;
// export const TwoMyContext = TwoAppContext;
