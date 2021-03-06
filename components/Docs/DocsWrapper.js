import React, { useContext } from 'react';
import { Desktop, Mobile } from './sidebar'
import Docs from './Docs';
import { DocsContext } from '../../contexts/docContext';
import SidebarContent from '../../contents/documentation/sidebar';

const DocsWrapper = () => {
  const { section, copy, item } = useContext(DocsContext);

  return (
    <div className="docs-wrapper">
      <Mobile className="sidebar-mobile" content={SidebarContent} />
      <Desktop content={SidebarContent} />
      <Docs
        title={section}
        copy={copy}
        item={item}
      />
      <style jsx>
      {`
        {/* STYLES FOR MOBILE */}
        @media only screen and (max-width: 750px) {
          .docs-wrapper{
            max-width:750px;
            font-size:14px;
          }
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
        }
      `}
      </style>
    </div>
  )
};

export default DocsWrapper;
