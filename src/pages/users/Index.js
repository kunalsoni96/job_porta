import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Footer from './layouts/Footer';
import SignupLogin from './layouts/SignUpLogin';
import axios from 'axios';


export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      UserImg:'',
      Role:'',
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
            Role:res.data.Role
        })
      })
    }
  }
    render() {
        return (
<div>
  <div className="theme-layout" id="scrollup">
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
					<span><img src={this.state.UserImg} alt="" style={{width:"50px"}}/> Ali TUFAN <i className="la la-bars"></i></span>
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
              <a href="#/" >Home</a></li>
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
    <header className="stick-top forsticky">
  
    <div className="menu-sec">
        <div className="container">
          
          <div className="logo">
            <a href="#/" ><img className="hidesticky" src="/job_prtal/assets/images/resource/logo.png" alt="jobs"/><img className="showsticky" src="/job_prtal/assets/images/resource/logo10.png" alt="jobs"/></a>
          </div>
         
         {sessionStorage.getItem('userData') ?
          <div className="my-profiles-sec" style={{marginLeft:"20px"}}>
					<span><img src={this.state.UserImg} alt="" style={{width:"50px"}}/> Ali TUFAN <i className="la la-bars"></i></span>
				</div>
        :null}
          <div className="btn-extars">
          {this.state.Role==='Employer' ?
            <Link to="/"  className="post-job-btn"><i className="la la-plus" />Post Jobs</Link>
            :null}
            {!sessionStorage.getItem('userData') ? 
            <ul className="account-btns">
              {/* <li className="signup-popup"><Link to="#"><i className="la la-key" /> Sign Up</Link></li> */}
              <li className="signup-popup" style={{marginTop:"2px"}}><Link to="#"><i className="la la-external-link-square" /> Login</Link></li>
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
    <section>
      <div className="block no-padding">
        <div className="container fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-featured-sec">
                <div className="new-slide">
                  <img src="/job_prtal/assets/images/resource/vector-1.png" alt="jobs"/>
                </div>
                <div className="job-search-sec">
                  <div className="job-search">
                    <h3>The Easiest Way to Get Your New Job</h3>
                    <span>Find Jobs, Employment &amp; Career Opportunities</span>
                    <form>
                      <div className="row">
                        <div className="col-lg-7 col-md-5 col-sm-12 col-xs-12">
                          <div className="job-field">
                            <input type="text" placeholder="Job title, keywords or company name" />
                            <i className="la la-keyboard-o" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                          <div className="job-field">
                            <select data-placeholder="City, province or region" className="chosen-city">
                              <option>New York </option>
                              <option>Istanbul</option>
                              <option>London</option>
                              <option>Russia</option>
                            </select>
                            <i className="la la-map-marker" />
                          </div>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-12 col-xs-12">
                          <button type="submit"><i className="la la-search" /></button>
                        </div>
                      </div>
                    </form>
                    <div className="or-browser">
                      <span>Browse job offers by</span>
                      <Link to="/" >Category</Link>
                    </div>
                  </div>
                </div>
                <div className="scroll-to">
                  <Link to="#scroll-here" ><i className="la la-arrow-down" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="scroll-here">
      <div className="block">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h2>Popular Categories</h2>
                <span>37 jobs live - 0 added today.</span>
              </div>{/* Heading */}
              <div className="cat-sec">
                <div className="row no-gape">
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="p-category">
                      <Link to="/" >
                        <i className="la la-bullhorn" />
                        <span>Design, Art &amp; Multimedia</span>
                        <p>(22 open positions)</p>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="p-category">
                      <Link to="/" >
                        <i className="la la-graduation-cap" />
                        <span>Education Training</span>
                        <p>(6 open positions)</p>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="p-category">
                      <Link to="/" >
                        <i className="la la-line-chart " />
                        <span>Accounting / Finance</span>
                        <p>(3 open positions)</p>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="p-category">
                      <Link to="/" >
                        <i className="la la-users" />
                        <span>Human Resource</span>
                        <p>(3 open positions)</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cat-sec">
                <div className="row no-gape">
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="p-category">
                      <Link to="/" >
                        <i className="la la-phone" />
                        <span>Telecommunications</span>
                        <p>(22 open positions)</p>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="p-category">
                      <Link to="/" >
                        <i className="la la-cutlery" />
                        <span>Restaurant / Food Service</span>
                        <p>(6 open positions)</p>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="p-category">
                      <Link to="/" >
                        <i className="la la-building" />
                        <span>Construction / Facilities</span>
                        <p>(3 open positions)</p>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="p-category">
                      <Link to="/" >
                        <i className="la la-user-md" />
                        <span>Health</span>
                        <p>(3 open positions)</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="browse-all-cat">
                <Link to="/" >Browse All Categories</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="block double-gap-top double-gap-bottom">
        <div data-velocity="-.1" style={{background: 'url(/job_prtal/assets/images/resource/parallax1.jpg) repeat scroll 50% 422.28px transparent'}} className="parallax scrolly-invisible layer color" />{/* PARALLAX BACKGROUND IMAGE */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="simple-text-block">
                <h3>Make a Difference with Your Online Resume!</h3>
                <span>Your resume in minutes with JobHunt resume assistant is ready!</span>
                <Link to="/" >Create an Account</Link>
              </div>
            </div>
          </div>
        </div>	
      </div>
    </section>
    <section>
      <div className="block">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h2>Featured Jobs</h2>
                <span>Leading Employers already using job and talent.</span>
              </div>{/* Heading */}
              <div className="job-listings-sec">
                <div className="job-listing">
                  <div className="job-title-sec">
                    <div className="c-logo"> <img src="/job_prtal/assets/images/resource/l1.png" alt="jobs"/> </div>
                    <h3><Link to="/" >Web Designer / Developer</Link></h3>
                    <span>Massimo Artemisis</span>
                  </div>
                  <span className="job-lctn"><i className="la la-map-marker" />Sacramento, California</span>
                  <span className="fav-job"><i className="la la-heart-o" /></span>
                  <span className="job-is ft">FULL TIME</span>
                </div>{/* Job */}
                <div className="job-listing">
                  <div className="job-title-sec">
                    <div className="c-logo"> <img src="/job_prtal/assets/images/resource/l2.png" alt="jobs"/> </div>
                    <h3><Link to="/" >Marketing Director</Link></h3>
                    <span>Tix Dog</span>
                  </div>
                  <span className="job-lctn"><i className="la la-map-marker" />Rennes, France</span>
                  <span className="fav-job"><i className="la la-heart-o" /></span>
                  <span className="job-is pt">PART TIME</span>
                </div>{/* Job */}
                <div className="job-listing">
                  <div className="job-title-sec">
                    <div className="c-logo"> <img src="/job_prtal/assets/images/resource/l3.png" alt="jobs"/> </div>
                    <h3><Link to="/" >C Developer (Senior) C .Net</Link></h3>
                    <span>StarHealth</span>
                  </div>
                  <span className="job-lctn"><i className="la la-map-marker" />London, United Kingdom</span>
                  <span className="fav-job"><i className="la la-heart-o" /></span>
                  <span className="job-is ft">FULL TIME</span>
                </div>{/* Job */}
                <div className="job-listing">
                  <div className="job-title-sec">
                    <div className="c-logo"> <img src="/job_prtal/assets/images/resource/l4.png" alt="jobs"/> </div>
                    <h3><Link to="/" >Application Developer For Android</Link></h3>
                    <span>Altes Bank</span>
                  </div>
                  <span className="job-lctn"><i className="la la-map-marker" />Istanbul, Turkey</span>
                  <span className="fav-job"><i className="la la-heart-o" /></span>
                  <span className="job-is fl">FREELANCE</span>
                </div>{/* Job */}
                <div className="job-listing">
                  <div className="job-title-sec">
                    <div className="c-logo"> <img src="/job_prtal/assets/images/resource/l5.png" alt="jobs"/> </div>
                    <h3><Link to="/" >Regional Sales Manager South east Asia</Link></h3>
                    <span>Vincent</span>
                  </div>
                  <span className="job-lctn"><i className="la la-map-marker" />Ajax, Ontario</span>
                  <span className="fav-job"><i className="la la-heart-o" /></span>
                  <span className="job-is tp">TEMPORARY</span>
                </div>{/* Job */}
                <div className="job-listing">
                  <div className="job-title-sec">
                    <div className="c-logo"> <img src="/job_prtal/assets/images/resource/l6.png" alt="jobs"/> </div>
                    <h3><Link to="/" >Social Media and Public Relation Executive </Link></h3>
                    <span>MediaLab</span>
                  </div>
                  <span className="job-lctn"><i className="la la-map-marker" />Ankara / Turkey</span>
                  <span className="fav-job"><i className="la la-heart-o" /></span>
                  <span className="job-is ft">FULL TIME</span>
                </div>{/* Job */}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="browse-all-cat">
                <Link to="/" >Load more listings</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section>
      <div className="block">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h2>Companies We've Helped</h2>
                <span>Some of the companies we've helped recruit excellent applicants over the years.</span>
              </div>{/* Heading */}
              <div className="comp-sec">
                <div className="company-img">
                  <Link to="/" ><img src="/job_prtal/assets/images/resource/cc1.jpg" alt="jobs"/></Link>
                </div>{/* Client  */}
                <div className="company-img">
                  <Link to="/" ><img src="/job_prtal/assets/images/resource/cc2.jpg" alt="jobs"/></Link>
                </div>{/* Client  */}
                <div className="company-img">
                  <Link to="/" ><img src="/job_prtal/assets/images/resource/cc3.jpg" alt="jobs"/></Link>
                </div>{/* Client  */}
                <div className="company-img">
                  <Link to="/" ><img src="/job_prtal/assets/images/resource/cc4.jpg" alt="jobs"/></Link>
                </div>{/* Client  */}
                <div className="company-img">
                  <Link to="/" ><img src="/job_prtal/assets/images/resource/cc5.jpg" alt="jobs"/></Link>
                </div>{/* Client  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="block">
        <div data-velocity="-.1" style={{background: 'url(/job_prtal/assets/images/resource/parallax3.jpg) repeat scroll 50% 422.28px transparent'}} className="parallax scrolly-invisible no-parallax" />{/* PARALLAX BACKGROUND IMAGE */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h2>Quick Career Tips</h2>
                <span>Found by employers communicate directly with hiring managers and recruiters.</span>
              </div>{/* Heading */}
              <div className="blog-sec">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="my-blog">
                      <div className="blog-thumb">
                        <Link to="/" ><img src="/job_prtal/assets/images/resource/b1.jpg" alt="jobs"/></Link>
                        <div className="blog-metas">
                          <Link to="/" >March 29, 2017</Link>
                          <Link to="/" >0 Comments</Link>
                        </div>
                      </div>
                      <div className="blog-details">
                        <h3><Link to="/" >Attract More Attention Sales And Profits</Link></h3>
                        <p>A job is a regular activity performed in exchange becoming an employee, volunteering, </p>
                        <Link to="/" >Read More <i className="la la-long-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="my-blog">
                      <div className="blog-thumb">
                        <Link to="/" ><img src="/job_prtal/assets/images/resource/b2.jpg" alt="jobs"/></Link>
                        <div className="blog-metas">
                          <Link to="/" >March 29, 2017</Link>
                          <Link to="/" >0 Comments</Link>
                        </div>
                      </div>
                      <div className="blog-details">
                        <h3><Link to="/" >11 Tips to Help You Get New Clients</Link></h3>
                        <p>A job is a regular activity performed in exchange becoming an employee, volunteering, </p>
                        <Link to="/" >Read More <i className="la la-long-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="my-blog">
                      <div className="blog-thumb">
                        <Link to="/" ><img src="/job_prtal/assets/images/resource/b3.jpg" alt="jobs"/></Link>
                        <div className="blog-metas">
                          <Link to="/" >March 29, 2017</Link>
                          <Link to="/" >0 Comments</Link>
                        </div>
                      </div>
                      <div className="blog-details">
                        <h3><Link to="/" >An Overworked Newspaper Editor</Link></h3>
                        <p>A job is a regular activity performed in exchange becoming an employee, volunteering, </p>
                        <Link to="/" >Read More <i className="la la-long-arrow-right" /></Link>
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
    <section>
      <div className="block no-padding">
        <div className="container fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="simple-text">
                <h3>Gat a question?</h3>
                <span>We're here to help. Check out our FAQs, send us an email or call us at 1 (800) 555-5555</span>
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
