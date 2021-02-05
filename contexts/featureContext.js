import React from 'react';

export const FeatureContext = React.createContext();

class FeatureProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productCover: this.props.data['#odontologica-test'].productCover,
            appCover: this.props.data['#odontologica-test'].appCover,
            features: this.props.data['#odontologica-test'].features,
            allContent: (contentId) => this.getFeatureContent(contentId),
        };
        this.getFeatureContent = this.getFeatureContent.bind(this);
    }

    getFeatureContent(contentId) {
        this.setState({
            productCover: this.props.content[contentId].productCover,
            appCover: this.props.content[contentId].appCover,
            features: this.props.content[contentId].features,
        });
    };

    render() {
        return (<FeatureContext.Provider
            key="provider"
            value={{
                ...this.state,
                ...this.props.value,
            }}
        >
            {this.props.children}
        </FeatureContext.Provider>);
    };
}

export default FeatureProvider;
