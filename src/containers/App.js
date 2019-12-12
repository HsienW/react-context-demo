import React from 'react'
import {ThemedButton} from './AppChildren';

const AppContext = React.createContext({
    theme: 'light',
    size: '2x',
});

const TwoAppContext = React.createContext({
    name: 'hello',
});

const Toolbar = () => {
    return (
        <div>
            <ThemedButton/>
        </div>
    );
};

// export const ConsumerDemo= AppContext.Consumer;

export class ProviderDemo extends React.Component {

    render() {
        return (
            <AppContext.Provider
                value={{
                    theme: 'eeeeeeeeeeeee',
                    size: '1x',
                }}
            >
                <TwoAppContext.Provider value={{name: 'Guest'}}>
                    <Toolbar/>
                </TwoAppContext.Provider>
            </AppContext.Provider>
        );
    }
}

export const MyContext = AppContext;
export const TwoMyContext = TwoAppContext;
