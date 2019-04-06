import React from 'react';
import Modal from 'react-responsive-modal';
import Button from '../Buttons/Button';

class Modalize extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  onOpenModal = () => {
    this.setState({ isOpen: true });
  };

  onCloseModal = () => {
    this.setState({ isOpen: false });
  };

  render(){
    const { buttonText, modalContent } = this.props;
    const { isOpen } = this.state;
    return(
      <React.Fragment>
        <Button customClass="terciary" onClick={this.onOpenModal}>
          {buttonText}
        </Button>
        <Modal open={isOpen} onClose={this.onCloseModal} center>
          {modalContent}
        </Modal>
      </React.Fragment>
    )
  }
}

export default Modalize;
