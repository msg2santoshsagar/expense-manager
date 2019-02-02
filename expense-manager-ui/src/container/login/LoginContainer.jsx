import React from 'react';
import LoginComponent from '../../component/login/LoginComponent';



class LoginContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: 'test',
            password: 'test',
            rememberMeFlag: false,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSigninRequest = this.handleSigninRequest.bind(this);
    }

    componentDidMount() {
        this.handleSigninRequest();
    }

    handleInputChange(evt) {
        let key = evt.target.id;
        let val = evt.target.value;
        let updatedState = {};
        updatedState[key] = val;
        if (evt.target.id === 'rememberMeFlag') {
            updatedState[key] = evt.target.checked;
        }
        this.setState(updatedState);
    }

    handleSigninRequest(evt) {
        if (evt !== undefined) {
            evt.preventDefault();
        }
        if (this.state.userName === this.state.password) {
            this.props.history.push('/home');
        }
    }

    render() {
        return <LoginComponent
            userName={this.state.userName}
            password={this.state.password}
            rememberMeFlag={this.state.rememberMeFlag}
            handleInputChange={this.handleInputChange}
            doSignIn={this.handleSigninRequest}
        />
    }

}



export default LoginContainer;
