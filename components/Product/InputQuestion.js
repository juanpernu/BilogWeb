import Tooltip from './Tooltip'

class InputQuestion extends React.Component {
  constructor(){
    super();
    this.state = { show: false }
  }

  render(){    
    const { functionality, handleCheck } = this.props;
    return(
      <div
        onMouseEnter={() => this.setState({ show: true })}
        onMouseLeave={() => this.setState({ show: false})}
        className="input-questions--container"
      >
        <input
          className="input-questions--text"
          type="checkbox"
          name={functionality.name}
          value={functionality.name}
          onChange={(e) => handleCheck(e)}
        />
        {functionality.title}
        <Tooltip
          handleShow={this.state.show}
          description={functionality.description}
        />
        <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .input-questions--container {
              text-align: left;
              cursor: default;
              padding: 0 20px;
              box-sizing: border-box;
            }
            .input-questions--text {
              font-size: 14px;
              line-height: 25px;
              margin: 24px 10px;
              padding: 0;
              cursor: pointer;
            }
            .input-questions--tooltip {
              font-weight: 500;
              font-size: 14px;
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .input-questions--container {
              text-align: left;
              cursor: default;
            }
            .input-questions--text {
              font-size: 14px;
              line-height: 25px;
              margin: 24px 10px;
              padding: 0;
              cursor: pointer;
            }
            .input-questions--tooltip {
              font-weight: 500;
              font-size: 14px;
            }
          }
        `}
        </style>
      </div>
    )
  }

}

export default InputQuestion;
