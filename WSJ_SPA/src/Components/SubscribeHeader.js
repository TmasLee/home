import React, {Component} from 'react';
import Divider from '../Images/Divider';
import DjDropdown from './DjDropdown';
import StockDropdown from './StockDropdown';
import SubscribeModal from './SubscribeModal';
import SignInModal from './SignInModal';

export default class SubscribeHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
        showSubcribeModal: false,
        showSignInModal: false,
      };
    this.toggleSubscribeModal = this.toggleSubscribeModal.bind(this);
    this.toggleSignInModal = this.toggleSignInModal.bind(this);  
    }

  toggleSubscribeModal(e){
    e.preventDefault();
    this.setState((prevState) =>({
      showSubcribeModal: !prevState.showSubcribeModal
    }));
  };

  toggleSignInModal(e){
    e.preventDefault();
    this.setState((prevState) =>({
      showSignInModal: !prevState.showSignInModal
    }));
  };

  render(){
    const {showSignInModal, showSubcribeModal} = this.state;
    
    return (
      <div>
        <SubscribeModal isOpen={showSubcribeModal} onClose={this.toggleSubscribeModal}/>
        <SignInModal isOpen={showSignInModal} onClose={this.toggleSignInModal}/>
        <div className='subscribe_header'>
          <DjDropdown/>
          <StockDropdown/>
          <div className='bundle'>
            <div className='subscribe_now_link'>
              <a href='' className='link'
                onClick={this.toggleSubscribeModal}>
                Subscribe Now
              </a>
            </div><Divider/>
            <div className='sign_in_link'>
              <a href='' className='link'
                onClick={this.toggleSignInModal}>
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}