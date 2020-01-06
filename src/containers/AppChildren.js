import React from 'react'
import {CommonLayoutContext} from './App';

export class ThemedButton extends React.Component {

    static contextType = CommonLayoutContext;

    render() {
        console.log('[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[');
        console.log(this.context);
        return (
            <CommonLayoutContext.Consumer>
            </CommonLayoutContext.Consumer>
        );
    }
}
ThemedButton.contextType = CommonLayoutContext;
