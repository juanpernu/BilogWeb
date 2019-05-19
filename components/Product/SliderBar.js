import { Slider, Rail, Handles, Tracks } from 'react-compound-slider';
import Handle from './Handle';
import Track from './Track';

const sliderStyles = {
  padding: 5,
};

const SliderBar = ({ sliderbarQuestion, domain, onChangeHandler}) => (
  <div className="sliderbar-container">
    <p className="sliderbar-text">{sliderbarQuestion}</p>
    <Slider
      rootStyle={sliderStyles}
      domain={domain}
      step={1}
      mode={2}
      values={[0]}
      onChange={e => onChangeHandler(e)}
    >
      <Rail>
        {({ getRailProps }) => (  // adding the rail props sets up events on the rail
          <div className="rail" {...getRailProps()} /> 
        )}
      </Rail>
      <Handles>
        {({ handles, getHandleProps }) => (
          <div className="slider-handles">
            {handles.map(handle => (
              <Handle
                key={handle.id}
                handle={handle}
                getHandleProps={getHandleProps}
              />
            ))}
          </div>
        )}
      </Handles>
      <Tracks right={false}>
        {({ tracks, getTrackProps }) => (
          <div className="slider-tracks">
            {tracks.map(({ id, source, target }) => (
              <Track
                key={id}
                source={source}
                target={target}
                getTrackProps={getTrackProps}
              />
            ))}
          </div>
        )}
      </Tracks>
    </Slider>
    <style jsx>
    {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
        .rail {
          position: relative;
          width: 100%;
          height: 8px;
          margin-top: 35px;
          border-radius: 5px;
          background-color: #e1e1e1;
        }
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
        .sliderbar-container {
          display: flex;
          flex-direction: column;
          text-align: left;
          padding: 30px;
        }
        .sliderbar-text {
          font-size: 20px;
          font-weight: 600;
          margin-top: 16px;
          margin-bottom: 0;
        }
        .rail {
          position: relative;
          width: 100%;
          height: 8px;
          margin-top: 35px;
          border-radius: 5px;
          background-color: #e1e1e1;
        }
      }
    `}
    </style>
  </div>
);

export default SliderBar;
