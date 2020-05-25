import React from 'react';
import 'isomorphic-fetch';
import ReCAPTCHA from 'react-google-recaptcha';

/* Import Components */
import Input from './Input';  
import TextArea from './TextArea';  
import Select from './Select';
import Button from '../Buttons/Button';

class Form extends React.Component {  
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        email: '',
        phone: '',
        expertise: '',
      },
      message: props.customMessage ? props.customMessage : '',
      isVerified: false,
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleCaptchaVerification = this.handleCaptchaVerification.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    if(!this.state.isVerified) {
      return alert('Necesitamos saber que sos humano, por favor completá el captcha.');
    }

    fetch('/api/contact.js', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    }).then((res) => {
      res.status === 200 ? this.setState({ submitted: true }) : ''
    })
  };

  handleCaptchaVerification(value) {
    value ? this.setState({isVerified: true}) : null;
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({ 
      newUser: {
        name: '',
        email: '',
        phone: '',
        expertise: '',
        skills: [],
      },
      message: '',
    })
  };

  handleFullName(e) {
    let value = e.target.value;
    this.setState((prevState) => (
      {newUser: {...prevState.newUser, name: value}}
    ));
  };

  handleEmail(e) {
    let value = e.target.value;
    this.setState((prevState) => (
      {newUser: {...prevState.newUser, email: value}}
    ));
  };

  handlePhone(e) {
    let value = e.target.value;
    this.setState((prevState) => (
      {newUser: {...prevState.newUser, phone: value}}
    ));
  };

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      (prevState) => {return {newUser : {...prevState.newUser, [name]: value}}},
      () => console.log(this.state.newUser)
    );
  };

  handleMessage(e) {
    let value = e.target.value;
    this.setState((prevState) => {return {message : prevState.message, message: value}});
  };

  render() {
    const expertiseOptions = ['Odontólogo/a', 'Laboratorista', 'Secretario/a', 'Administrador/a', 'Otro'];
    return (
      <form className="form" onSubmit={this.handleFormSubmit}>
        <p className="form-title">Formulario de contacto</p>
        <div className="form-interactive_area">
          <Input
            type = {'text'}
            title = {'Nombre y apellido'} 
            name = {'name'}
            value ={this.state.newUser.name} 
            placeholder = {'Escribí tu nombre acá'}
            handleChange = {this.handleFullName}
          /> {/* Name of the user */}
          <Input
            type = {'text'}
            title = {'Email'}
            name = {'email'}
            value = {this.state.newUser.email} 
            placeholder = {'Escribí tu email acá'}
            handleChange = {this.handleEmail}
          /> {/* Input for Email */}
          <Input
            type = {'text'}
            title = {'Teléfono'}
            name = {'phone'}
            value = {this.state.newUser.phone} 
            placeholder = {'+54 011'}
            handleChange = {this.handlePhone}
          /> {/* Input for Phone number */}
          <Select
            title={'Profesión'}
            name={'expertise'}
            options = {expertiseOptions} 
            value = {this.state.newUser.expertise}
            placeholder = {'Elegí tu profesión'}
            handleChange = {this.handleInput}
          /> {/* Age Selection */}
        </div>
        <TextArea
          title={'Mensaje'}
          type={'text'}
          name={'message'}
          value={this.state.message}
          handleChange={this.handleMessage}
        /> {/* About you */}
        <div className="form-captcha">
          <ReCAPTCHA
            sitekey="6Lfwz_sUAAAAAFHYFO43VhBKoxbEyCUPYfUTnxp8"
            data-theme="dark"
            onChange={this.handleCaptchaVerification}
            theme="dark"
          />
        </div>
        <div className="form-buttons_area">
          <Button
            customClass='primary'
            onClick={this.handleFormSubmit}>
            Enviar
          </Button> { /*Submit */ }
          <Button
            customClass='secondary'
            onClick={this.handleClearForm}>
            Limpiar
          </Button> {/* Clear the form */}
        </div>
        <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .form-title {
              font-weight: 600;
              font-size: 24px;
              line-height: 24px;
            }
            .form-interactive_area {
              display: flex;
              flex-direction: column;
            }
            .form-captcha {
              margin-top: 20px;
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .form-title {
              font-weight: 600;
              font-size: 24px;
              line-height: 24px;
            }
            .form-interactive_area {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-column-gap: 30px;
              grid-row-gap: 30px;
            }
            .form-buttons_area {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              grid-column-gap: 30px;
            }
            .form-captcha {
              margin-top: 20px;
            }
          }
        `}
        </style>
      </form>
    );
  }
}

export default Form;
