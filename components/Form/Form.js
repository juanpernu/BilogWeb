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
        message: props.customMessage ? props.customMessage : '',
      },
      isVerified: false,
      submitted: false,
      submittedWhitError: false,
      requiredFields: false,
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCaptchaVerification = this.handleCaptchaVerification.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { newUser: { name, email, phone, expertise, message }, isVerified } = this.state;
    const requiredFields = (!name || name === '') || (!email || email === '') || (!phone || phone === '') || (!message || message === '');
    
    if (requiredFields) {
      return this.setState({ requiredFields: true });
    }

    if(!isVerified) {
      return alert('Necesitamos saber que sos humano, por favor completá el captcha.');
    }

    const form = document.getElementById('contact-form');
    const formData = new FormData(form);

    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('expertise', expertise);
    formData.append('message', message);

    fetch('/php/email-sender.php', {
      method: 'POST',
      body: formData,
    }).then((res) => {
      if (res.status === 200) {
        this.setState({ submitted: true })
        const dataAutoresponse = new FormData(form);
        dataAutoresponse.append('recipient', email);

        fetch('/php/email-automatic-response.php', {
          method: 'POST',
          body: dataAutoresponse,
        })
      }
    }).catch((err) => {
      err ? this.setState({ submittedWhitError: true }) : ''
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
        message: '',
      },
    })
  };

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState((prevState) => {return {newUser : {...prevState.newUser, [name]: value}}});
  };

  render() {
    const expertiseOptions = ['Odontólogo/a', 'Laboratorista', 'Secretario/a', 'Administrador/a', 'Otro'];
    const { submitted, submittedWhitError, requiredFields } = this.state;
    return (
      <form id='contact-form' className="form" onSubmit={this.handleFormSubmit}>
        <p className="form-title">Formulario de contacto</p>
        {submitted && <p className="submitted success">Mensaje enviado correctamente</p>}
        {submittedWhitError && <p className="submitted error">Ups! Algo ocurrió, por favor intentalo de nuevo</p>}
        {requiredFields && <p className="submitted error">Por favor, completá los campos requeridos</p>}
        <div className="form-interactive_area">
          <Input
            required
            type = {'text'}
            title = {'Nombre y apellido'} 
            name = {'name'}
            value ={this.state.newUser.name} 
            placeholder = {'Escribí tu nombre acá'}
            handleChange = {this.handleInput}
          /> {/* Name of the user */}
          <Input
            required
            type = {'text'}
            title = {'Email'}
            name = {'email'}
            value = {this.state.newUser.email} 
            placeholder = {'Escribí tu email acá'}
            handleChange = {this.handleInput}
          /> {/* Input for Email */}
          <Input
            required
            type = {'number'}
            title = {'Teléfono'}
            name = {'phone'}
            value = {this.state.newUser.phone} 
            placeholder = {'+54 011'}
            handleChange = {this.handleInput}
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
          value={this.state.newUser.message}
          handleChange={this.handleInput}
          required
        /> {/* About you */}
        <p className="required-copy">* campos requeridos</p>
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
            .submitted {
              padding: 20px;
              margin-bottom: 10px;
              border-radius: 5px;
              width: 100%;
              color: #fff;
            }
            .submitted.success {
              background-color: #39B54A;
            }
            .submitted.error {
              background-color: #F23D4F;
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
            .submitted {
              padding: 20px;
              margin-bottom: 10px;
              border-radius: 5px;
              width: 100%;
              color: #fff;
            }
            .submitted.success {
              background-color: #39B54A;
            }
            .submitted.error {
              background-color: #F23D4F;
            }
            .required-copy {
              font-size: 12px;
              color: #777;
            }
          }
        `}
        </style>
      </form>
    );
  }
}

export default Form;
