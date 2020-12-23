import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import '../../styles/sign-in.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.handleSumbit = this.handleSumbit.bind(this);
    
    this.state = {
      email: '',
      password: ''
    }
  }

  async handleSumbit(e) {
    e.preventDefault();
    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''})
    } catch(error) {
      console.error(error);
    }
  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSumbit}>
          <FormInput 
            type="text" 
            name='email' 
            value={this.state.email} 
            handleChange={this.handleChange}
            label='email'
            required
          />

          <FormInput 
            type="password" 
            name='password' 
            value={this.state.password} 
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
          </div>
        </form>
      </div>
    )
  }
};

export default SignIn;