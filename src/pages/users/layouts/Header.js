import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      UserImg:'',
      Role:'',
      Name:'',
    }
  }

  componentDidMount(){
    if(sessionStorage.getItem('userData')){
      const uData = JSON.parse(sessionStorage.getItem('userData'));
      this.setState({
        id:uData._id
      });

      axios.post('https://dailycleanpro.com/job_portal/api/CandidateUsers/checkSessionData',{
          id:uData._id
      })
      .then(res=>{
        this.setState({
            UserImg:res.data.Pic,
            Role:res.data.Role,
            Name:res.data.Name,
        })
      })
    }
  }
    render() {
        return (
  <div>
    <div className="responsive-header">
      <div className="responsive-menubar">
        <div className="res-logo"><a href="#/" ><img src="/job_prtal/assets/images/resource/logo.png" alt="jobs"/></a></div>
        <div className="menu-resaction">
          <div className="res-openmenu">
            <img src="/job_prtal/assets/images/icon.png" alt="jobs"/> Menu
          </div>
          <div className="res-closemenu">
            <img src="/job_prtal/assets/images/icon2.png" alt="jobs"/> Close
          </div>
        </div>
      </div>
      <div className="responsive-opensec">
        <div className="btn-extars">
          <Link to="/" className="post-job-btn"><i className="la la-plus" />Post Jobs</Link>
          {sessionStorage.getItem('userData') ?
          <div className="my-profiles-sec" style={{marginLeft:"20px"}}>
					<span><img src={this.state.UserImg} alt="" style={{width:"50px"}}/> {this.state.Name} <i className="la la-bars"></i></span>
          
				</div>
        :null}
          {!sessionStorage.getItem('userData') ? 
          <ul className="account-btns">
            <li className="signup-popup"><Link to="#"><i className="la la-key" /> Sign Up</Link></li>
            <li className="signin-popup"><Link  to="#"><i className="la la-external-link-square" /> Login</Link></li>
          </ul>
          :null}
        </div>
        <form className="res-search">
          <input type="text" placeholder="Job title, keywords or company name" />
          <button type="submit"><i className="la la-search" /></button>
        </form>
        <div className="responsivemenu">
          <ul>
            <li className="menu-item-has-children">
              <a href="#//" >Home</a></li>
              <li className="menu-item-has-children">
              <a href="#/About" >About</a>
              </li>
              <li className="menu-item-has-children">
                <a href="#/FindJob" >FindJob</a>
              </li>
            {this.state.Role==='Employer' ?
              <li className="menu-item-has-children">
                <a href="#/PostJob" >PostJob</a>
              </li>
            :null}
              <li className="menu-item-has-children">
                <a href="#/Contact" >Contact</a>
              </li>
          </ul>
        </div>
      </div>
    </div>
    <header className="gradient">
  
    <div className="menu-sec">
        <div className="container">
          
          <div className="logo">
            <a href="#/" ><img className="hidesticky" src="/job_prtal/assets/images/resource/logo.png" alt="jobs"/><img className="showsticky" src="/job_prtal/assets/images/resource/logo10.png" alt="jobs"/></a>
          </div>
         
         {sessionStorage.getItem('userData') ?
          <div className="my-profiles-sec" style={{marginLeft:"20px"}}>
					<span><img src={this.state.UserImg} alt="" style={{width:"50px"}}/> {this.state.Name} <i className="la la-bars"></i></span>
          <nav>
            </nav>
				</div>
        :null}
          <div className="btn-extars">
          {this.state.Role==='Employer' ?
            <Link to="/"  className="post-job-btn"><i className="la la-plus" />Post Jobs</Link>
            :null}
            {!sessionStorage.getItem('userData') ? 
            <ul className="account-btns">
              {/* <li className="signup-popup"><Link to="#"><i className="la la-key" /> Sign Up</Link></li> */}
              <li className="signup-popup" style={{marginTop:"4px"}}><Link to="#"><i className="la la-external-link-square" /> Login</Link></li>
            </ul>
            :null}
          </div>{/* Btn Extras */}

          <nav>
            <ul>
              <li className="menu">
                <a href="#/" >Home</a>
              </li>
              <li className="menu">
                <a href="#/About" >About</a>
              </li>
              <li className="menu">
                <a href="#/FindJob" >FindJob</a>
              </li>
              <li className="menu">
                <a href="#/Contact" >Contact</a>
              </li>
            </ul>
          </nav>{/* Menus */}
        </div>
      </div>
    </header>
            </div>
        )
    }
}
