import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import MicrosoftLogin from 'react-microsoft-login';
import { Link } from 'react-router-dom';
import './Login.css'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  signupGoogle(res) {
    const googleresponse = {
      name: res.profileObj.name,
      email: res.profileObj.email,
      token: res.googleId,
      Image: res.profileObj.imageUrl,
      ProviderId: 'Google'
    };
    const json = JSON.stringify(googleresponse);
    localStorage.setItem("userData", json);
    this.props.history.push('/Dashboard');
  };

  render() {
    const responseGoogle = (response) => {
      console.log(response);
      var res = response.profileObj;
      console.log(res);
      this.signupGoogle(response);
    }

    const authHandler = (err, data) => {
      console.log(err, data);
      const microsoftData = {
        name: data.account.name,
        email: data.account.userName,
        token: data.accessToken,
        ProviderId: 'Microsoft'
      };
      const json = JSON.stringify(microsoftData);
      localStorage.setItem("userData", json);
      this.props.history.push('/Dashboard');
    };

    return (
      <div className="App">
        <div className="row">
          <div style={{ 'paddingTop': "20px" }} className="col-sm-12">
            <div className="col-sm-4"></div>
              <h1 className="title">MyBudget</h1>
              <h3>A Budget Tracker for University Students + More.</h3>
              <GoogleLogin
                className="loginButton"
                clientId="914281278319-drid0o7d00v1vu9pjeq8pm4rip9cg2bl.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle} >
                    <strong className="emailTitle">Sign In with Gmail</strong>
              </GoogleLogin>
              <div class="container">
                <MicrosoftLogin 
                  className="microsoftTitle"
                  clientId="8b86a033-486a-4d29-9500-52ee5855ef31"
                  authCallback={authHandler}/>
                </div>
              <Link to="/signin">
                <div class="container">
                  <button type="button" className="btn btn-light button">
                    <span className="buttonTitle">Login with MyBudget</span>
                  </button>
                </div>
              </Link>
              <Link to="/signup">
                <div class="container">
                  <button type="button" className="btn btn-light button">
                    <span className="buttonTitle">Sign Up for MyBudget</span>
                  </button>
                </div>
              </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Login