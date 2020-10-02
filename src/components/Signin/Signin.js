import React from 'react';
import { emailValidator } from '../../utils/CommonUtils'
class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            hasError: false,
            errorString: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }


    onSubmitSignIn = () => {
        this.setState({
            hasError: false,
            errorString: ''
        })
        if(!this.state.signInEmail || !this.state.signInPassword){
            this.setState({
                hasError: true,
                errorString: 'Email or Password field empty'
            })
            return
        }
        if(!emailValidator(this.state.signInEmail)){
            this.setState({
                hasError: true,
                errorString: 'Email template not acceptable'
            })
            return
        } 
        fetch('https://lit-sierra-14750.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => {
            if(response.status == 400){
                this.setState({
                    hasError: true,
                    errorString: 'Wrong Credientials'
                })
                return
            }
            return response.json()
        })
        .then(user => {
            if(user?.id) {
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
        })
    }

    render(){
        const { onRouteChange } = this.props;
        return(
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent pa0 ma0 ">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3 ">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={this.onEmailChange} className="b pa2  input-reset ba bg-transparent  hover-black w-120" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={this.onPasswordChange}  className="b pa2 input-reset ba bg-transparent hover-black w-120" type="password" name="password"  id="password"/>
                        </div>
                        </fieldset>
                            {this.state.hasError && <p className="pa0 ma1 dark-red w-120">{this.state.errorString}</p>}
                        <div>
                        <input 
                            onClick={this.onSubmitSignIn}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Sign in"/>
                        </div>
                        <div className="lh-copy mt3">
                        <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer b">Create New Account</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
    
}

export default Signin