const Select = (props) => {
  return(
    <div className="form-group">
      <label className="form-label" htmlFor={props.name}> {props.title} </label>
      <select
        className="form-select"
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        >
        <option value="" disabled>{props.placeholder}</option>
        {props.options.map(option => {
          return (
            <option
              key={option}
              value={option}
              label={option}>{option}
            </option>
          );
        })}
      </select>
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
            padding-right: 30px;
          }

          .form-group:last-child {
            padding-right: 0px;
          }

          .form-label {
            font-weight: 600;
            font-size: 14px;
            margin: 10px 0;
            display: block;
          }

          select,
          .form-select {
            width: 100%;
            box-sizing: border-box;
            border-radius: 3px;
            box-shadow: none;
            display: block;
            height: 46px;
            font-size: 16px;
            line-height: 1.625;
            color: #505656;
            background-color: #fff;
            background-image: none;
            border: 1px solid #ddd;
            box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
            transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
          }
        }
      `}
      </style>
    </div>
  )
}

export default Select;
