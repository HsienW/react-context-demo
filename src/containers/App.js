import React, {createContext} from 'react'

const ToggleContext = createContext(
    {
        toggle: true,
        handleToggle: () => {
        }
    });

export default class ToggleProvider extends React.Component {

    handleToggle = () => {
        this.setState({toggle: !this.state.toggle})
    };

    state = {
        toggle: true,
        handleToggle: this.handleToggle
    };

    render() {
        return (
            <ToggleContext.Provider value={this.state}>
                {this.props.children}
            </ToggleContext.Provider>
        )
    }
}
