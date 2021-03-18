import React from 'react';
export const FeatureContext = React.createContext();
class FeatureProvider extends React.Component {
    constructor(props) {
        super(props);
        const { data, hash = '#agenda' } = this.props;
        this.state = {
            productCover: data[hash].productCover,
            banner: data[hash].banner,
            features: data[hash].features,
            appCover: data[hash].appCover,
            allContent: (contentId) => this.getFeatureContent(contentId),
        };
        this.getFeatureContent = this.getFeatureContent.bind(this);
    }
    getFeatureContent(contentId) {
        const { data } = this.props;
        this.setState({
            productCover: data[contentId].productCover,
            banner: data[contentId].banner, 
            appCover: data[contentId].appCover,
            features: data[contentId].features,
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
