const Input = (props) => {
  return (  
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">{props.title}</label>
      <input
        className="form-input"
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder} 
      />
      <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
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

            input[type="text"],
            input[type="password"],
            input[type="number"],
            input[type="email"],
            .form-input {
              width: 100%;
              box-sizing: border-box;
              border-radius: 3px;
              box-shadow: none;
              display: block;
              height: 30px;
              padding: 22px 12px;
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

            input[type="text"],
            input[type="password"],
            input[type="number"],
            input[type="email"],
            .form-input {
              width: 100%;
              box-sizing: border-box;
              border-radius: 3px;
              box-shadow: none;
              display: block;
              height: 30px;
              padding: 22px 12px;
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

export default Input;