import React, { Component } from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import SignupLogin from './layouts/SignUpLogin';

export default class Contact extends Component {
    render() {
        return (
<div>
 
  <div className="theme-layout" id="scrollup">
    <Header />

  <section>
    <div className="block no-padding  gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner2">
              <div className="inner-title2">
                <h3>Contact</h3>
                <span>Keep up to date with the latest news</span>
              </div>
              <div className="page-breacrumbs">
                <ul className="breadcrumbs">
                  <li><a href="/">Home</a></li>
                  <li>Contact</li>
                </ul>
              </div>
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
          <div className="col-lg-6 column">
            <div className="contact-form">
              <h3>Keep In Touch</h3>
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <span className="pf-title">Full Name</span>
                    <div className="pf-field">
                      <input type="text" placeholder="ALi TUFAN" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <span className="pf-title">Email</span>
                    <div className="pf-field">
                      <input type="text" placeholder="ALi TUFAN" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <span className="pf-title">Subject</span>
                    <div className="pf-field">
                      <input type="text" placeholder="ALi TUFAN" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <span className="pf-title">Message</span>
                    <div className="pf-field">
                      <textarea defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 column">
            <div className="contact-textinfo style2">
              <h3>JobHunt Office</h3>
              <ul>
                <li><i className="la la-map-marker" /><span>Jobify Inc. 555 Madison Avenue, Suite F-2 Manhattan, New York 10282 </span></li>
                <li><i className="la la-phone" /><span>Call Us : 0934 343 343</span></li>
                <li><i className="la la-fax" /><span>Fax : 0934 343 343</span></li>
                <li><i className="la la-envelope-o" /><span>Email : <a href="https://grandetest.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="157c7b737a557f7a777d607b613b767a78">[email&nbsp;protected]</a></span></li>
              </ul>
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
