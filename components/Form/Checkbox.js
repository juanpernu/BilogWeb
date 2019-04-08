const CheckBox = (props) => {
  return (
    <div>
      <label htmlFor={props.name} className="form-label">{props.title}</label>
      <div className="checkbox-group">
        {props.options.map((option, key) => {
          return (
            <label className="form-label__secondary" key={key}>
              <input
                className="form-checkbox"
                id = {props.name}
                name={props.name}
                onChange={props.handleChange}
                value={option}
                type="checkbox"
              /> {option}
            </label>
          );
        })}
      </div>
      <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .form-group {
              width: 100%;
              box-sizing: border-box;
            }

            .form-label {
              font-weight: 600;
              font-size: 14px;
              margin: 10px 0;
              display: block;
            }

            .form-label__secondary {
              font-weight: 100;
              font-size: 14px;
            }

            .checkbox-group {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-column-gap: 30px;
              grid-row-gap: 10px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default CheckBox;
