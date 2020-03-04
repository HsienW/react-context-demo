// import React from 'react'
// import {ThemedButton} from './AppChildren';
//
// export const CommonLayoutContext = React.createContext({path: ''});
//
// export class CommonLayoutProvider extends React.Component {
//
//     state = {
//         showLoading: false,
//     };
//
//     toggleShowLoading = (toggleState) => {
//         this.setState({
//             showLoading: toggleState,
//         });
//     };
//
//     render() {
//         return (
//             <CommonLayoutContext.Provider
//                 value={{
//                     showLoading: this.state.showLoading,
//                     toggleShowLoading: this.toggleShowLoading
//                 }}
//             >
//                 <ThemedButton />
//             </CommonLayoutContext.Provider>
//         );
//     }
// }
