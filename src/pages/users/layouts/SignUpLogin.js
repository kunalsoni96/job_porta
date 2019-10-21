import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import axios from 'axios';


export default class SignUpLogin extends Component {
constructor(props){
    super(props);
    this.state = {
      redirectToReferrer: false,
      Name:'',
      Email:''
    }
    this.signup = this.signup.bind(this);
    }

    componentDidMount(){
      if(sessionStorage.getItem('userData')){
        const uData = JSON.parse(sessionStorage.getItem('userData'));
        this.setState({
          Name:uData.Name,
          Email:uData.Email,
          Img:uData.Pic
        })
      }
    }
      
    signup(res,type){
      let postData;
      if(type==='Google' && res.w3.U3){
     
      axios.post('https://dailycleanpro.com/job_portal/api/CandidateUsers/Check',{
            ProviderId: res.El,  
      })            
      .then(ress=>{
        postData = {
          Name: res.w3.ig,
            Provider: 'Google',
            Email: res.w3.U3,
            ProviderId: res.El,
            AccessToken: res.Zi.access_token,
            Pic:res.w3.Paa,
        }
        axios.post('https://dailycleanpro.com/job_portal/api/CandidateUsers/Store',{
            Name: res.w3.ig,
            Provider: 'Google',
            Email: res.w3.U3,
            ProviderId: res.El,
            AccessToken: res.Zi.access_token,
            Pic:res.w3.Paa,
            check:ress.data
      })
      .then(response=>{
        sessionStorage.setItem("userData",JSON.stringify(response.data));
        this.setState({
          redirectToReferrer: true,
          Name:response.Name,
          Email:response.Email
        });
        window.location.href = '/Select-Employer-or-Candidate';
        // localStorage.setItem('secret',response);
        // axios.post('https://dailycleanpro.com/job_portal/api/CandidateUsers/Signin',{
        //   id:response.data.id,
        //   Name:response.data.Name,
        //   Email:response.data.Email,
        // })
        // .then(resp=>{
        //   localStorage.setItem('secret',res.data);
        //   this.setState({loggedIn:true});
        // })
      })   
      })
      } 
      
      if(type==='LinkedIn' && res.w3.U3){
     
        axios.post('https://dailycleanpro.com/job_portal/api/CandidateUsers/Check',{
              ProviderId: res.El,  
        })            
        .then(ress=>{
          postData = {
            Name: res.w3.ig,
              Provider: 'Google',
              Email: res.w3.U3,
              ProviderId: res.El,
              AccessToken: res.Zi.access_token,
              Pic:res.w3.Paa,
          }
          axios.post('https://dailycleanpro.com/job_portal/api/CandidateUsers/Store',{
              Name: res.w3.ig,
              Provider: 'Google',
              Email: res.w3.U3,
              ProviderId: res.El,
              AccessToken: res.Zi.access_token,
              Pic:res.w3.Paa,
              check:ress.data
        })
        .then(response=>{
          sessionStorage.setItem("userData",JSON.stringify(response.data));
          this.setState({
            redirectToReferrer: true
          });
          window.location.href = 'http://localhost:3000/Profile';
          // localStorage.setItem('secret',response);
          // axios.post('https://dailycleanpro.com/job_portal/api/CandidateUsers/Signin',{
          //   id:response.data.id,
          //   Name:response.data.Name,
          //   Email:response.data.Email,
          // })
          // .then(resp=>{
          //   localStorage.setItem('secret',res.data);
          //   this.setState({loggedIn:true});
          // })
        })   
        })
        } 
    }



 
    
    render() {
      const responseGoogle = (response) => {
        this.signup(response,'Google');
      }

      // const responseLinkedin = (reslinkedin) => {
      //   console.log('hello')
      // }
     
        return (
            <div>
        <div className="account-popup-area signin-popup-box">
<div className="account-popup">
<span className="close-popup"><i className="la la-close" /></span>
<h3>User Login</h3>
<span>Click To Login With Demo User</span>
<div className="select-user">
  <span>Candidate</span>
  <span>Employer</span>
</div>
<form>
  <div className="cfield">
    <input type="text" placeholder="Username" />
    <i className="la la-user" />
  </div>
  <div className="cfield">
    <input type="password" placeholder="********" />
    <i className="la la-key" />
  </div>
  <p className="remember-label">
    <input type="checkbox" name="cb" id="cb1" /><label htmlFor="cb1">Remember me</label>
  </p>
  <Link to="/" >Forgot Password?</Link>
  <button type="submit">Login</button>
</form>
<div className="extra-login">
  <span>Or</span>
  <div className="login-social">
    <Link className="fb-login" to="/" ><i className="fa fa-facebook" /></Link>
    <Link className="tw-login" to="/" ><i className="fa fa-twitter" /></Link>
  </div>
</div>
</div>
</div>
<div className="account-popup-area signup-popup-box">
<div className="account-popup">
<span className="close-popup"><i className="la la-close" /></span>
<h3>Sign Up</h3>
<p style={{marginTop:"20px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<form style={{marginTop:"-5px", marginBottom:"30px"}}>
 
  <GoogleLogin style={{background:"#CE4436"}}
        clientId="252059010893-qptf8orifr9e3pjpuvnalbnqbrlbd24i.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
   
</form>

</div>
</div>
            </div>
        )
    }
}
