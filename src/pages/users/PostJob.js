import React, { Component } from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import SignupLogin from './layouts/SignUpLogin';

export default class PostJob extends Component {
    render() {
        return (
            <div>
  <div className="theme-layout" id="scrollup">
    <Header />

  <section className="overlape">
    <div className="block no-padding">
      <div data-velocity="-.1" style={{background: 'url(/job_prtal/assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent'}} className="parallax scrolly-invisible no-parallax" />{/* PARALLAX BACKGROUND IMAGE */}
      <div className="container fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner-header">
              <h3> Post Job</h3>
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
          
              <div className="profile-form-edit">
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <span className="pf-title">Your Mail</span>
                      <div className="pf-field">
                        <input type="text" placeholder="Ali TUFAN" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <span className="pf-title">Job Title</span>
                      <div className="pf-field">
                        <input type="text" placeholder="UX / UI Designer" />
                      </div>
                    </div>
                    
                    <div className="col-lg-6">
                      <span className="pf-title">Remote Work</span>
                      <div className="pf-field">
                        <input type="text" placeholder="$4250" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <span className="pf-title">Job Location</span>
                      <div className="pf-field">
                        <select data-placeholder="Allow In Search" className="chosen">
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <span className="pf-title">Job Category</span>
                      <div className="pf-field">
                        <select data-placeholder="Allow In Search" className="chosen">
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <span className="pf-title">Job Sector</span>
                      <div className="pf-field">
                        <input type="text" placeholder="$4250" />
                      </div>
                    </div>
                
                    <div className="col-lg-6">
                      <span className="pf-title">Education Levels</span>
                      <div className="pf-field">
                        <select data-placeholder="Please Select Specialism" className="chosen">
                          <option>Diploma</option>
                          <option>Inter</option>
                          <option>Bachelor</option>
                          <option>Graduate</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <span className="pf-title">Languages</span>					 						
                      <div className="pf-field">
                        <div className="pf-field">
                          <select data-placeholder="Please Select Specialism" className="chosen">
                            <option>English</option>
                            <option>German</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <span className="pf-title">Categories</span>					 						
                      <div className="pf-field no-margin">
                        <ul className="tags">
                          <li className="addedTag">Photoshop<span onclick="$(this).parent().remove();" className="tagRemove">x</span><input type="hidden" name="tags[]" defaultValue="Photoshop" /></li>
                          <li className="addedTag">Digital &amp; Creative<span onclick="$(this).parent().remove();" className="tagRemove">x</span><input type="hidden" name="tags[]" defaultValue="Digital" /></li>
                          <li className="addedTag">Agency<span onclick="$(this).parent().remove();" className="tagRemove">x</span><input type="hidden" name="tags[]" defaultValue="Agency" /></li>
                          <li className="tagAdd taglist">  
                            <input type="text" id="search-field" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <span className="pf-title">Description</span>
                      <div className="pf-field">
                        <textarea defaultValue={"Spent several years working on sheep on Wall Street. Had moderate success investing in Yugos on Wall Street. Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed severalnew methods for working with banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer ollaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"} />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit">Update</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="social-edit">
                <h3>Social Edit</h3>
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <span className="pf-title">Facebook</span>
                      <div className="pf-field">
                        <input type="text" placeholder="www.facebook.com/TeraPlaner" />
                        <i className="fa fa-facebook" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <span className="pf-title">Twitter</span>
                      <div className="pf-field">
                        <input type="text" placeholder="www.twitter.com/TeraPlaner" />
                        <i className="fa fa-twitter" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <span className="pf-title">Google</span>
                      <div className="pf-field">
                        <input type="text" placeholder="www.google-plus.com/TeraPlaner" />
                        <i className="la la-google" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <span className="pf-title">Linkedin</span>
                      <div className="pf-field">
                        <input type="text" placeholder="www.Linkedin.com/TeraPlaner" />
                        <i className="fa fa-linkedin" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="contact-edit">
                <h3>Contact</h3>
                <form>
                  <div className="row">
                    <div className="col-lg-4">
                      <span className="pf-title">Phone Number</span>
                      <div className="pf-field">
                        <input type="text" placeholder="+90 538 963 58 96" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <span className="pf-title">Email</span>
                      <div className="pf-field">
                        <input type="text" placeholder="demo@jobhunt.com" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <span className="pf-title">Website</span>
                      <div className="pf-field">
                        <input type="text" placeholder="www.jobhun.com" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <span className="pf-title">Country</span>
                      <div className="pf-field">
                        <select data-placeholder="Please Select Specialism" className="chosen">
                          <option>Web Development</option>
                          <option>Web Designing</option>
                          <option>Art &amp; Culture</option>
                          <option>Reading &amp; Writing</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <span className="pf-title">City</span>
                      <div className="pf-field">
                        <select data-placeholder="Please Select Specialism" className="chosen">
                          <option>Web Development</option>
                          <option>Web Designing</option>
                          <option>Art &amp; Culture</option>
                          <option>Reading &amp; Writing</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <span className="pf-title">Find On Map</span>
                      <div className="pf-field">
                        <input type="text" placeholder="Collins Street West, Victoria 8007, Australia." />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <span className="pf-title">Latitude</span>
                      <div className="pf-field">
                        <input type="text" placeholder="41.1589654" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <span className="pf-title">Longitude</span>
                      <div className="pf-field">
                        <input type="text" placeholder="21.1589654" />
                      </div>
                    </div>
                 
                 
                    <div className="col-lg-12">
                      <button type="submit">Update</button>
                    </div>
                  </div>
                </form>
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
