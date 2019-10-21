import React, { Component } from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import SignupLogin from './layouts/SignUpLogin';
import axios from 'axios';
import { get } from 'http';

export default class EditProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            Name:'',
            Email:'',
            Img :'',
            Mobile :'',
            Age :'',
            Gender :'',
            id:''
        }
    }
    
    componentDidMount(){
        if(sessionStorage.getItem('userData')){
          const uData = JSON.parse(sessionStorage.getItem('userData'));
          axios.post('https://dailycleanpro.com/job_portal/api/CandidateUsers/checkSessionData',{
          id:uData._id
      })
      .then(res=>{
        this.setState({
          Name:res.data.Name,
          Email:res.data.Email,
          Mobile:res.data.Mobile,
          Age:res.data.Age,
          Gender:res.data.Gender,
          Img:res.data.Pic,
          id:res.data._id
        })
        
      })
         
        }  
      }

    submitHandle(event){
        event.preventDefault(event);
       axios.post('https://dailycleanpro.com/job_portal/api/CandidateUsers/Update',{
           Name:this.state.Name,
           Email:this.state.Email,
           Mobile:this.state.Mobile,
           Age:this.state.Age,
           Gender:this.state.Gender,
           id:this.state.id
       })
       .then(res=>{
           console.log(res);
           this.setState({
               Name:res.data.Name,
               Email:res.data.Email,
               Mobile:res.data.Mobile,
               Age:res.data.Age,
               Female:res.data.Female,
           })
          document.getElementById("optin").click()
       })
    }

    changhandle(e){
        this.setState({
            [e.target.name]:e.target.value
        });
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
   <section>
    <div className="block no-padding  gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner2">
              <div className="inner-title2">
                <h3>Profile</h3>
                <span>Keep up to date with the latest news</span>
              </div>
              {/* <div className="page-breacrumbs">
                <ul className="breadcrumbs">
                  <li><Link to="/" >Home</Link></li>
                  <li><Link to="/" >Pages</Link></li>
                  <li><Link to="/" >About Us</Link></li>
                </ul>
              </div> */}
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
         
          <div className="col-lg-12 column">
  <div className="padding-left">
    <div className="contact-edit">
            <div id="profile_update">  
                <div id="header_profile">
                    <h4>Update Profile</h4>
                    <p>
                        <a href="#popup-optin">+</a>
                    </p>
                </div>
                <div id="body_profile">
                   <div className="row" style={{color:"gray"}}>
                       <div className="col-sm-6">
                       <h6> Name : {this.state.Name}</h6>
                       <h6> Email : {this.state.Email}</h6>
                       <h6> Mobile : {this.state.Mobile}</h6>
                       </div>
                       <div className="col-sm-6">
                       <h6> Age : {this.state.Age}</h6>
                       <h6> Gender : {this.state.Gender}</h6>
                       </div>
                       </div>
                </div>
<div className="bg-overlay" id="popup-optin" style={{zIndex:"25555555555555"}}>
  <div className="subscribe-optin" style={{textTransform:"capitalize"}}>
  <div id="header_popup">
        Update Personal Details
        <a href="#"  id="optin" style={{color:"#131F71", fontSize:"20px", }}><img src="/job_prtal/assets/images/cut.png" style={{width:"20px",marginTop:"-10px"}}/></a>
    </div>
    <div id="body_popup">
        <form onSubmit={this.submitHandle.bind(this)}>
            <p style={{marginBottom:"10px",height:"20px",}}>Full Name</p>      
            <input type="text" style={{height:"40px", paddingLeft:"20px",fontSize:"17px"}} value={this.state.Name} name="Name" onChange={this.changhandle.bind(this)} required/>
            <p style={{marginBottom:"10px",height:"20px", marginTop:"20px",fontSize:"17px"}} >Email Address</p>      
            <input type="text" style={{height:"40px", paddingLeft:"20px",fontSize:"17px"}} value={this.state.Email} disabled name="Email" onChange={this.changhandle.bind(this)} required/>
            <p style={{marginBottom:"10px",height:"20px", marginTop:"20px",fontSize:"17px"}}>Mobile Number</p>      
            <input type="text" style={{height:"40px", paddingLeft:"20px",fontSize:"17px"}} name="Mobile" value={this.state.Mobile} onChange={this.changhandle.bind(this)} required/>
            <p style={{marginBottom:"10px",height:"20px", marginTop:"20px",fontSize:"17px"}}>Age</p>      
            <input type="text" style={{height:"40px", paddingLeft:"20px",fontSize:"17px"}} name="Age" value={this.state.Age} onChange={this.changhandle.bind(this)} required/>
            
            <p style={{marginBottom:"10px",height:"20px", marginTop:"20px"}}>Gender</p>      
            <div className="center-align"> 
<input type="radio" name="Gender" id="size_1" value="Male" checked={this.state.Gender==='Male'}  onChange={this.changhandle.bind(this)} />
 <label htmlFor="size_1">Male</label>
  
 <input type="radio" name="Gender" id="size_2" value="Female" checked={this.state.Gender==='Female'} onChange={this.changhandle.bind(this)}/>
 <label htmlFor="size_2">Female</label>
  
  
  </div>
            <div className="row">
                
                    <div className="col-sm-8"></div>
                   
                    <div className="col-sm-4">
                    
                    <button type="submit"  style={{background:"#10195D", marginTop:"20px", border:"none", color:"white", padding:"10px", width:"100%", borderRadius:"2px"}}>Submit Now</button>
                    
                    </div>
                    
                </div>
        </form>
    </div>
    </div>
</div>

  
  
            </div>
    </div>

    <div className="contact-edit">
            <div id="profile_update">  
                <div id="header_profile">
                    <h4>Update Address</h4>
                    <p>
                        <a href="#popup-optin2">+</a>
                    </p>
                </div>
                <div id="body_profile">
                    <h6>   No Item to Display</h6>
                </div>
                <div className="bg-overlay" id="popup-optin2" style={{zIndex:"25555555555555"}}>
  <div className="subscribe-optin" style={{textTransform:"capitalize"}}>
  <div id="header_popup">
        Update Personal Details
        <a href="#"  id="optin" style={{color:"#131F71", fontSize:"20px", }}><img src="/job_prtal/assets/images/cut.png" style={{width:"20px",marginTop:"-10px"}}/></a>
    </div>
    <div id="body_popup">
        <form onSubmit={this.submitHandle.bind(this)}>
            <p style={{marginBottom:"10px",height:"20px", marginTop:"20px"}}>Please Select Max Qualification : </p>      
            <div className="center-align"> 
<input type="radio" name="Qualification" id="size_1" value="10" checked={this.state.Qualification==='10'}  onChange={this.changhandle.bind(this)} />
 <label htmlFor="size_1">10th Pass</label>
  
 <input type="radio" name="Qualification" id="size_2" value="12" checked={this.state.Qualification==='12'} onChange={this.changhandle.bind(this)}/>
 <label htmlFor="size_2">12thPass</label>

 <input type="radio" name="Qualification" id="size_3" value="Graduate" checked={this.state.Qualification==='Graduate'} onChange={this.changhandle.bind(this)}/>
 <label htmlFor="size_3">Graduate</label>

 <input type="radio" name="Qualification" id="size_4" value="Post Graduate" checked={this.state.Qualification==='Post Graduate'} onChange={this.changhandle.bind(this)}/>
 <label htmlFor="size_4">Post Graduate</label>
  
  
  </div>
            <div className="row">
                
                    <div className="col-sm-8"></div>
                   
                    <div className="col-sm-4">
                    
                    <button type="submit"  style={{background:"#10195D", marginTop:"20px", border:"none", color:"white", padding:"10px", width:"100%", borderRadius:"2px"}}>Submit Now</button>
                    
                    </div>
                    
                </div>
        </form>
    </div>
    </div>
</div>
            </div>
    </div>

    <div className="contact-edit">
            <div id="profile_update">  
                <div id="header_profile">
                    <h4>Update Qualification</h4>
                    <p>
                        <a href="#">+</a>
                    </p>
                </div>
                <div id="body_profile">
                    <h6>   No Item to Display</h6>
                </div>
            </div>
    </div>

    <div className="contact-edit">
            <div id="profile_update">  
                <div id="header_profile">
                    <h4>Other</h4>
                    <p>
                        <a href="#">+</a>
                    </p>
                </div>
                <div id="body_profile">
                    <h6>   No Item to Display</h6>
                </div>
            </div>
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
