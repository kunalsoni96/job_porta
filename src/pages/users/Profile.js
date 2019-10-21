import React, { Component } from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import SignupLogin from './layouts/SignUpLogin';

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      Name:'',
      Email:'',
      Img :''
    }
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

  
    render() {
    if(sessionStorage.getItem('userData')){
      const uData = JSON.parse(sessionStorage.getItem('userData'));
    }
    else{
      window.location.href = '/';
    }
        return (
<div>
  <div className="theme-layout" id="scrollup">
    <Header />
   <div>
  <section className="overlape">
    <div className="block no-padding">
      <div data-velocity="-.1" style={{background: 'url(/job_prtal/assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent'}} className="parallax scrolly-invisible no-parallax" />{/* PARALLAX BACKGROUND IMAGE */}
      <div className="container fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner-header">
              <h3>Welcome ALI TUFAN</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="block no-padding">
      <div className="container">
        <div className="row no-gape">
          <aside className="col-lg-3 column border-right">
            <div className="widget">
              <div className="tree_widget-sec">
                <ul>
                  <li><a href="/Profile" ><i className="la la-file-text" />My Profile</a></li>
                  <li><a href="/Edit-Profile" ><i className="la la-briefcase" />Edit Profile</a></li>
                  <li><a href="candidates_shortlist.html" ><i className="la la-money" />Shorlisted Job</a></li>
                  <li><a href="candidates_applied_jobs.html" ><i className="la la-paper-plane" />Applied Job</a></li>
                  <li><a href="candidates_job_alert.html" ><i className="la la-user" />Job Alerts</a></li>
                  <li><a href="candidates_cv_cover_letter.html" ><i className="la la-file-text" />Cv &amp; Cover Letter</a></li>
                  <li><a href="candidates_change_password.html" ><i className="la la-flash" />Change Password</a></li>
                  <li><a href="#" ><i className="la la-unlink" />Logout</a></li>
                </ul>
              </div>
            </div>
      
          </aside>
          <div className="col-lg-9 column">
            <div className="padding-left">
              <div className="profile-title">
                <img src={this.state.Img} style={{borderRadius:"100px", marginTop:"50px", marginLeft:"20px", marginBottom:"20px"}}/>
                <ul style={{marginLeft:"20px"}}>
                  <li>Full Name : <span style={{color:"gray"}}>{this.state.Name}</span></li>
                  <li>Email Address : <span style={{color:"gray"}}>{this.state.Email}</span></li>
                  <li>Mobile Number : <span style={{color:"gray"}}>--</span></li>
                  <li>Website : <span style={{color:"gray"}}>--</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  <Footer />
</div>
<SignupLogin />
</div>
        )
    }
}
