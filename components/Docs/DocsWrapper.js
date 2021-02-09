import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import Docs from './Docs';
import SidebarMobile from './SidebarMobile'

import { DocsContext } from '../../contexts/docContext';

const DocsWrapper = () => {
  const { section, copy, item } = useContext(DocsContext);

  return (
    <div className="docs-wrapper">
      <SidebarMobile className="sidebar-mobile" />
      <Sidebar />
      <Docs
        title={section}
        copy={copy}
        item={item}
      />
      <style jsx>
      {`
        {/* STYLES FOR MOBILE */}
        @media only screen and (max-width: 750px) {  
        }

        {/* STYLES FOR DESKTOP */}
        @media only screen and (min-width: 751px) {
          .sidebar-mobile{
            display:none;
          }

          .docs-wrapper {
            max-width: 1024px;
            margin: 0 auto 80px;
            padding-top: 120px;
            display: grid;
            grid-template-columns: 1fr 3fr;
          }
          .sidebar,
          .docs-section {
            height: 300px;
          }
          .sidebar {
            background-color: red;
          }
          .docs-section {
            background-color: green;
          }
        }
      `}
      </style>
    </div>
  )
};

export default DocsWrapper;
