import React from 'react';  

/* Import Components */
import CheckBox from './Checkbox';  
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
        gender: '',
        expertise: '',
        skills: []
      },
      message: '',
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleSkillsCheckBox = this.handleSkillsCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    fetch('http://example.com', {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      response.json().then(data =>{
        console.log("Successful" + data);
      })
    })
  };

  handleClearForm(e) {
    e.preventDefault();
    this.setState({ 
      newUser: {
        name: '',
        email: '',
        gender: '',
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

  /**
   * Metodo para armar y desarmar el array de this.state.skills
   */
  handleSkillsCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if(this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

    this.setState((prevState) => (
      { newUser: {...prevState.newUser, skills: newSelectionArray }}
    ));
    console.log(this.state);
  };

  render() {
    const genderOptions = ['Male', 'Female', 'Others'];
    const skillOptions = ['Programming', 'Development', 'Design', 'Testing'];
    return (
      <form className="form" onSubmit={this.handleFormSubmit}>
        <p className="form-title">Formulario de contacto</p>
        <div className="form-interactive_area">
        <Input
          type = {'text'}
          title = {'Nombre y apellido'} 
          name = {'name'}
          value ={this.state.newUser.name} 
          placeholder = {'Por favor, escribí tu nombre'}
          handleChange = {this.handleFullName}
        /> {/* Name of the user */}
        <Input
          type = {'text'}
          title = {'Email'}
          name = {'email'}
          value = {this.state.newUser.email} 
          placeholder = {'Por favor, escribí tu email'}
          handleChange = {this.handleEmail}
        /> {/* Input for Email */}
        <Select
          title={'Gender'}
          name={'gender'}
          options = {genderOptions} 
          value = {this.state.newUser.gender}
          placeholder = {'Select Gender'}
          handleChange = {this.handleInput}
        /> {/* Age Selection */}
        <CheckBox
          title={'Profesion'}
          name={'profesion'}
          options = {skillOptions} 
          value = {this.state.newUser.expertise}
          placeholder = {'Select expertise'}
          handleChange = {this.handleSkillsCheckBox}
        /> {/* List of Skills (eg. Programmer, developer) */}
        </div>
        <TextArea
          title={'Mensaje'}
          type={'text'}
          name={'message'}
          value={this.state.message}
          handleChange={this.handleMessage}
        /> {/* About you */}
        <div>
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
          }
        `}
        </style>
      </form>
    );
  }
}

export default Form;
