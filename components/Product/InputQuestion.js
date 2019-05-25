import Tooltip from './Tooltip'

class InputQuestion extends React.Component {
  constructor(){
    super();
    this.state = {
      show: false,
    }

    this.handleShowMenu = this.handleShowMenu.bind(this);
  }


  handleShowMenu = () => {
    setTimeout(() => {
      this.setState({
        show: !this.state.show,
      })
    }, 200);
  }

  render(){
    const {functionality} = this.props;
    return(
      <div className="input-questions--container"
        onMouseEnter={() => this.handleShowMenu()}
        onMouseLeave={() => this.handleShowMenu()}
      >
        <input className="input-questions--text" type="checkbox" name="os" value="os"/>{functionality.title}
        <Tooltip
          handleShow={this.state.show}
          description={functionality.description}
        />
        <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
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
