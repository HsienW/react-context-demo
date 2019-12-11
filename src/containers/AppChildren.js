import React from 'react'
import {ToggleConsumer} from './App';

export class AppChildren extends React.Component {

    render() {
        console.log(this.props);
        return (
            <ToggleConsumer>
                AppChildren
            </ToggleConsumer>
        )
    }
}
