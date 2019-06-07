const Track = ({ getTrackProps, source, target }) => (
  <React.Fragment>
    <div
      style={{
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
      }}
      {...getTrackProps()} // this will set up events if you want it to be clickeable (optional)
    />
    <style jsx>
    {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
        .track {
          position: absolute;
          height: 10px;
          z-index: 1;
          margin-top: 35px;
          background-color: #546C91;
          border-radius: 5px;
          cursor: pointer;
        }
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
        .track {
          position: absolute;
          height: 10px;
          z-index: 1;
          margin-top: 35px;
          background-color: #546C91;
          border-radius: 5px;
          cursor: pointer;
        }
      }
    `}
    </style>
  </React.Fragment>
)

export default Track;
