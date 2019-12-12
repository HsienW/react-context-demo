import React from 'react'
import {MyContext} from './App';

export class ThemedButton extends React.Component {

    render() {
        return (
            <MyContext.Consumer>
                {({theme, size, name}) => (
                    <button theme={theme} size={size}>
                        {theme}, {size}, {name}
                    </button>
                )}
            </MyContext.Consumer>
        );
    }
}
