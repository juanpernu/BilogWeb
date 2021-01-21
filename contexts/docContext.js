/** React dependencies */
import React from 'react';

export const DocsContext = React.createContext();

class DocsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialId: '#agenda',
      content: {},
      section: null,
      copy: '',
      item: {},
      allContent: contentId => this.setDocumentationContent(contentId),
    };
    this.setDocumentationContent = this.setDocumentationContent.bind(this);
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    this.state.allContent(this.state.initialId);
  }

  setDocumentationContent(contentId) {
    this.setState({
      content: this.props.content[contentId],
      section: this.props.content[contentId].section,
      copy: this.props.content[contentId].copy,
      item: this.props.content[contentId].item,
    });
  };

  render() {
    return (<DocsContext.Provider
      key="provider"
      value={{
        ...this.state,
        ...this.props.value,
      }}
    >
      {this.props.children}
    </DocsContext.Provider>);
  };
}

export default DocsProvider;
