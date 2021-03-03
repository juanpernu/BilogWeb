import React, { useContext, useEffect, useState } from 'react';
import { SubMenu } from './sidebar';
import { DocsContext } from '../../contexts/docContext';
import Accordion from '../Accordion/Accordion';
const SidebarSection = ({ text, hash, onClickHandler, childrens }) => {
  const { allContent } = useContext(DocsContext);
  const [link, setLink] = useState(hash);
  const handleOnClick = (hash) => {
    onClickHandler && onClickHandler();
    const regexp = new RegExp(/\#(.*)/gm);
    const contentId = hash.match(regexp);
    return allContent(contentId);
  };
  return (
    <div className="link">
      {
        hash ?
        <div className="nav-link">
          <span onClick={() => handleOnClick(hash)} >{text}</span>
        </div>:
        <Accordion classname="acordion"text={text} childrens={childrens} onClick={handleOnClick} />
      }
      <style jsx>
      {`
        {/* STYLES FOR MOBILE */}
        @media only screen and (max-width: 750px) {
          .nav-link a{
            color:#000;
            text-decoration:none;
          }
          .nav-link {
            margin: 0 0 8px;
            padding: 0 0 0 12px;
          }
        } 
        {/* STYLES FOR DESKTOP */}
        @media only screen and (min-width: 751px) {
          .link {
            margin: 0 0 10px 15px;
          }
          .link:last-child {
            margin-bottom: 0;
          }
          .nav-link span {
            text-decoration: none;
            font-size: 14px;
            color: #666;
            box-sizing: border-box;
          }
          .nav-link span:hover {
            cursor: pointer;
            color: #000;
          }
        }
      `}
      </style>
    </div>
  )
};
export default SidebarSection;
