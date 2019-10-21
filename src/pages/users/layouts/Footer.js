import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      Name:'',
      Email:'',
      userImg:'',
      Role:''
    }
  }

  logout(){
    sessionStorage.clear();
  }

  componentDidMount(){
    if(sessionStorage.getItem('userData')){
      const uData = JSON.parse(sessionStorage.getItem('userData'));
      this.setState({
        id:uData._id
      });

      axios.post('http://localhost:1000/CandidateUsers/checkSessionData',{
          id:uData._id
      })
      .then(res=>{
        this.setState({
            userImg:res.data.Pic,
            Name:res.data.Name,
            Email:res.data.Email,
            Role:res.data.Role,
        })
      })
    }
  }
    render() {
        return (
            <footer>
            <div className="block">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 column">
                    <div className="widget">
                      <div className="about_widget">
                        <div className="logo">
                          <Link to="index.html" ><img src="/job_prtal/assets/images/resource/logo.png" alt="jobs"/></Link>
                        </div>
                        <span>Collin Street West, Victor 8007, Australia.</span>
                        <span>+1 246-345-0695</span>
                        <span><Link to="https://grandetest.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b3daddd5dcf3d9dcd1dbc6ddc79dd0dcde">[email&nbsp;protected]</Link></span>
                        <div className="social">
                          <Link to="/" ><i className="fa fa-facebook" /></Link>
                          <Link to="/" ><i className="fa fa-twitter" /></Link>
                          <Link to="/" ><i className="fa fa-linkedin" /></Link>
                          <Link to="/" ><i className="fa fa-pinterest" /></Link>
                          <Link to="/" ><i className="fa fa-behance" /></Link>
                        </div>
                      </div>{/* About Widget */}
                    </div>
                  </div>
                  <div className="col-lg-4 column">
                    <div className="widget">
                      <h3 className="footer-title">Frequently Asked Questions</h3>
                      <div className="link_widgets">
                        <div className="row">
                          <div className="col-lg-6">
                            <Link to="/" >Privacy &amp; Seurty </Link>
                            <Link to="/" >Terms of Serice</Link>
                            <Link to="/" >Communications </Link>
                            <Link to="/" >Referral Terms </Link>
                            <Link to="/" >Lending Licnses </Link>
                            <Link to="/" >Disclaimers </Link>	
                          </div>
                          <div className="col-lg-6">
                            <Link to="/" >Support </Link>
                            <Link to="/" >How It Works </Link>
                            <Link to="/" >For Employers </Link>
                            <Link to="/" >Underwriting </Link>
                            <Link to="/" >Contact Us</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 column">
                    <div className="widget">
                      <h3 className="footer-title">Find Jobs</h3>
                      <div className="link_widgets">
                        <div className="row">
                          <div className="col-lg-12">
                            <Link to="/" >US Jobs</Link>	
                            <Link to="/" >Canada Jobs</Link>	
                            <Link to="/" >UK Jobs</Link>	
                            <Link to="/" >Emplois en Fnce</Link>	
                            <Link to="/" >Jobs in Deuts</Link>	
                            <Link to="/" >Vacatures China</Link>	
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 column">
                    <div className="widget">
                      <div className="download_widget">
                        <Link to="/" ><img src="/job_prtal/assets/images/resource/dw1.png" alt="jobs"/></Link>
                        <Link to="/" ><img src="/job_prtal/assets/images/resource/dw2.png" alt="jobs"/></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-line">
              <span>© 2018 Jobhunt All rights reserved. Design by NB Digital Technologies</span>
              <a href="#scrollup" className="scrollup" ><i className="la la-arrow-up" /></a>
            </div>
    {sessionStorage.getItem('userData') ?
            <div className="profile-sidebar">
  <span className="close-profile"><i className="la la-close" /></span>
  <div className="can-detail-s">
    <div className="cst"><img src={this.state.userImg} /></div>
    <h3>{this.state.Name}</h3>
    <span><i>{this.state.Email}</i> </span>
    {/* <p><a href="https://grandetest.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="aecddccbcfdac7d8cbc2cfd7cbdcdd9e9696eec9c3cfc7c280cdc1c3">[email&nbsp;protected]</a></p>
    <p>Member Since, 2017</p>
    <p><i className="la la-map-marker" />Istanbul / Turkey</p> */}
  </div>
  <div className="tree_widget-sec">
    <ul>
      <li><a href="/https://dailycleanpro.com/job_prtal/#/Edit-Profile" ><i className="la la-file-text" />My Profile</a></li>
      <li><a href="#" ><i className="la la-briefcase" />  My Resume</a></li>
      {/* <li><a href="candidates_shortlist.html" ><i className="la la-money" />Shorlisted Job</a></li>
      <li><a href="candidates_applied_jobs.html" ><i className="la la-paper-plane" />Applied Job</a></li>
      <li><a href="candidates_job_alert.html" ><i className="la la-user" />Job Alerts</a></li>
      <li><a href="candidates_cv_cover_letter.html" ><i className="la la-file-text" />Cv &amp; Cover Letter</a></li>
      <li><a href="candidates_change_password.html" ><i className="la la-flash" />Change Password</a></li> */}
      <li><a href="#" onClick={this.logout.bind(this)}><i className="la la-unlink" />Logout</a></li>
    </ul>
  </div>
</div>
:null}
            </footer>
        )
    }
}
