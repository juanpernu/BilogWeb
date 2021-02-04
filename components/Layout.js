import React from 'react';
import { Helmet } from "react-helmet";
import TagManager from 'react-gtm-module';
import { hotjar } from 'react-hotjar';
import { tagManagerConfig, hotsjarConfig } from '../config'
import Header from './Header';
import Footer from './Footer/Footer';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "c73aa550-242c-4c6a-a7ed-836fc4e127b7";
    const d = document;
    const s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
    window.$crisp.push(["safe", true]);
    
    // TODO:This could be written better
    if(!!window.location.host.match(/(bilog.com.ar)/gm)) {
      TagManager.initialize(tagManagerConfig['AR']);
    }
    if(!!window.location.host.match(/(bilog.cl)/gm)) {
      TagManager.initialize(tagManagerConfig['CL']);
    }
    hotjar.initialize(hotsjarConfig.hjid, hotsjarConfig.hjsv);
  }

  render(){
    const { children } = this.props;

    return(
      <div className="layout">
        <Helmet htmlAttributes={{ lang: 'es' }}>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Bilog Soluciones Informáticas. El nuevo software para la administración del consultorio y/o clínica Odontológica." />
          <meta name="HandheldFriendly" content="True" />
          <title>Bilog - Soluciones Informáticas</title>
          <link rel="shortcut icon" href="/static/fav.png" />
          <link rel="canonical" href="http://www.bilog.com.ar" />
          <link href="https://fonts.googleapis.com/css?family=Nunito:300,600,800" rel="stylesheet" />
        </Helmet>
        <Header />
        {children}
        <Footer />
        <style jsx>
          {`
      :global(body) {
        font-display: swap;
        font-family: 'Nunito', sans-serif;
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
        box-sizing: border-box;
      }
      :global(::placeholder) {
        color: #bbb;
        opacity: 1; /* Firefox */
      }
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
      }
    `}
        </style>
      </div>
    )
  }

}

export default Layout