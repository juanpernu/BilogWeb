const Handle = ({ handle: { id, value, percent }, getHandleProps }) => {
  return (
    <div
      className="slider-handle"
      style={{ left: `${percent}%` }}
      {...getHandleProps(id)}
    >
      <div className="slider-handle-value">
        {value}
      </div>
      <style jsx>
      {`
        {/* STYLES FOR MOBILE */}
        @media only screen and (max-width: 750px) {
          .slider-handle {
            margin-left: -15px;
            margin-top: -17px;
            position: relative;
            z-index: 100;
            width: 30px;
            height: 30px;
            border: 0;
            text-align: center;
            cursor: pointer;
            border-radius: 50%;
            background: linear-gradient(to right,#0794f8,#174fce);
            color: #333;
          }

          .slider-handle-value {
            fon-size: 11px;
            margin: -30px 0 0 10px;
            position: absolute;
          }
        }

        {/* STYLES FOR DESKTOP */}
        @media only screen and (min-width: 751px) {
          .slider-handle {
            margin-left: -15px;
            margin-top: -17px;
            position: relative;
            z-index: 100;
            width: 25px;
            height: 25px;
            border: 0;
            text-align: center;
            cursor: pointer;
            border-radius: 50%;
            background: linear-gradient(to right,#0794f8,#174fce);
            color: #333;
          }

          .slider-handle-value {
            font-size: 11px;
            margin: -30px 0 0 10px;
            position: absolute;
          }
        }
      `}
      </style>
    </div>
  )
}

export default Handle;
