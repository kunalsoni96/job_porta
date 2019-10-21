import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import SignupLogin from './layouts/SignUpLogin';
import Axios from 'axios';

export default class Select extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:'',
      checkrole:''
    }
  }

  componentDidMount(){
    if(sessionStorage.getItem('userData')){
      const uData = JSON.parse(sessionStorage.getItem('userData'));
      this.setState({
        id:uData._id
      });

      Axios.post('https://dailycleanpro.com/job_portal/api/CandidateUsers/checkSessionData',{
          id:uData._id
      })
      .then(res=>{
        this.setState({
            checkrole:res.data.Role
        })
      })
    }
  }
  

  submit(type){
    Axios.post('https://dailycleanpro.com/job_portal/api/CandidateUsers/Role/Store',{
      id:this.state.id,
      Role:type
    })
    .then(res=>{
      window.location.href = 'http://localhost:3000/Profile'
    })
    
  }





    render() {
      if(sessionStorage.getItem('userData')){
        if(this.state.checkrole==='Candidate' || this.state.checkrole==='Employer'){
          window.location.href = '/';
        }
      }
      else{
        window.location.href = '/';
      }
        return (
            <div>
  <div className="theme-layout" id="scrollup">
    <Header />
    <section>
      <div className="block">
        <div data-velocity="-.1" style={{background: 'url(/job_prtal/assets/images/resource/parallax3.jpg) repeat scroll 50% 422.28px transparent'}} className="parallax scrolly-invisible no-parallax" />{/* PARALLAX BACKGROUND IMAGE */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h2>WorkIndia
India's Best Job Portal</h2>
              </div>{/* Heading */}
              <div className="blog-sec">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="my-blog" style={{paddingTop:"30px", paddingBottom:"30px",borderTop:"none",boxShadow:"0px 10px 20px rgba(0,0,0,0.1)"}}>
                      <div className="blog-details">
                        <h3 style={{fontWeight:"bold"}}>I am {this.state.checkrole}</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>
                        <div className="row" style={{textAlign:"center"}}>
                          <div className="col-sm-12" style={{textAlign:"center"}}>  
                          <Link to="#" onClick={this.submit.bind(this,'Employer')} style={{fontWeight:"bold",border:"none",padding:"15px",paddingLeft:"40px",paddingRight:"40px",background:"#FB236A",color:"white", width:"200px",borderRadius:"5px",height:"60px",lineHeight:"60px"}}>Hire Now <i className="la la-long-arrow-right" /></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="my-blog" style={{paddingTop:"30px", paddingBottom:"30px",boxShadow:"0px 10px 20px rgba(0,0,0,0.1)"}}>
                      <div className="blog-details">
                        <h3><Link to="#" style={{fontWeight:"bold"}}>I am Candidate</Link></h3>
                        <p>1,09,000 job openings all over India</p>
                        <div className="row" style={{textAlign:"center"}}>
                          <div className="col-sm-12" style={{textAlign:"center"}}>  
                          <Link to="#" onClick={this.submit.bind(this,'Candidate')} style={{fontWeight:"bold",border:"none",padding:"15px",paddingLeft:"40px",paddingRight:"40px",background:"#FB236A",color:"white", width:"200px",borderRadius:"5px",height:"60px",lineHeight:"60px"}}>Get Job Now <i className="la la-long-arrow-right" /></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  <Footer />
</div>
<SignupLogin />
</div>
        )
    }
}
