const Tooltip = ({description, handleShow}) => (
  <div className={`tooltip-content ${handleShow && 'show'}`}>
    <div className="tooltip-arrow"/>
    <div className="tooltip--content">
      <div className="tooltip--text">{description}</div>
    </div>
    <style jsx>
    {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
        .tooltip-content {
          width: 350px;
          border-radius: 5px;
          box-sizing: border-box;
          text-align: center;
          padding: 1.375em 1.5em;
          color: rgba(0, 0, 0, 0.45);
          opacity: 1;
          font-size: 16px;
          position: absolute;
          z-index: 1022;
          background: #fff;
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
          display: none;
        }
        .tooltip-content.show {
          display: block;
        }
        .tooltip-arrow::before {
          width: 1em;
          height: 1em;
          content: '';
          position: absolute;
          transform: rotate(45deg);
          background: #fff;
          left: 50%;
          margin-left: -0.5em;
          top: -0.5625em;
        }
      }
    `}
    </style>
  </div>
)

export default Tooltip;
