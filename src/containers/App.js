import React from 'react'

const AppContext = React.createContext({
    theme: 'light',
    size: '2x',
});

const Toolbar = () => {
    return (
        <div>
            <ThemedButton/>
        </div>
    );
};

class ThemedButton extends React.Component {
    static contextType = AppContext;

    render() {
        const {theme, size} = this.context;
        return (
            <button theme={theme} size={size}>
                {theme}, {size}
            </button>
        );
    }
}

export class ProviderDemo extends React.Component {

    render() {
        return (
            <AppContext.Provider
                value={{
                    theme: 'dark',
                    size: '1x',
                }}
            >
                <Toolbar/>
            </AppContext.Provider>
        );
    }
}
