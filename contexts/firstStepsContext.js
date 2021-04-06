import React from 'react';
export const FirstStepsContext = React.createContext();

class FirstStepsProvider extends React.Component {
    constructor(props) {
        super(props);
        const { data, hash = '#small' } = this.props;
        this.state = {
            productCover: data[hash].productCover,
            allContent: (contentId) => this.getFirstStepsContent(contentId),
        };
        this.getFirstStepsContent = this.getFirstStepsContent.bind(this);
    }

    getFirstStepsContent(contentId) {
        const { data } = this.props;
        this.setState({
            productCover: data[contentId].productCover,
        });
    };
    render() {
        return (<FirstStepsContext.Provider
            key="provider"
            value={{
                ...this.state,
                ...this.props.value,
            }}
        >
            {this.props.children}
        </FirstStepsContext.Provider>);
    };
}
export default FirstStepsProvider;
