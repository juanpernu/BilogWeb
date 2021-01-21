/** React dependencies */
import React from 'react';

export const DocsContext = React.createContext();

/**
 * Provider component of DocsContext. This component
 * provides a context for the documentation and is the
 * handler of the content of each section.
 * It's owner of documentation information.
 */
class DocsProvider extends React.Component {
  /**
   * The constructor of the component.
   * @constructor
   */ 
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

  /**
   * This method will execute before render component. At
   * this moment, the context has the offer prices but it
   * doesn't have the percents and errors. Ejecuting this
   * method, we have that information for use on client
   * and server side rendering
   */
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

  /** 
   * A method that render the provider
   */
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
