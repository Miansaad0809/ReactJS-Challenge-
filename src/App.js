import "./App.css";
import React from "react";

const App = () => {
  return (
    <div>
      <div className="popup-holder">
        <div className="lightbox-demo" id="popup1">
          <div className="container">
            <div className="step-01">
              <h2>Sign up</h2>
              <p>
                MailTag is exclusively available for desktop. Please provide
                your email and we'll send you a download link.
              </p>
              <form
                action="#"
                className="sign-form form-validation"
                method="get"
                novalidate="novalidate"
              >
                <div className="input-wrap">
                  <input
                    data-required="true"
                    placeholder="Your Email"
                    type="email"
                  />
                </div>
                <div className="wrap-button">
                  <button className="btn" type="submit">
                    Send a link
                  </button>
                  <span className="error">Wrong email.</span>
                </div>
              </form>
              <a className="close-popup" data-fancybox-close="" href="#">
                {" "}
              </a>
            </div>
            <div className="step-02 text-center hidden-step">
              <h2>Success!</h2>
              <p>Please check your email.</p>
              <div className="close-wrap">
                <a className="btn" data-fancybox-close="" href="#">
                  Close
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="install-overlay">
        <div className="install-container">
          <div className="install-wrapper">
            <div className="overlay-header">
              <a href="/">
                <img
                  alt="MailTag"
                  height="27"
                  src="https://www.mailtag.io/images/logo.png"
                  width="157"
                />
              </a>
            </div>

            <div className="arrow-holder">
              <img alt="add MailTag arrow" src="/images/click-arrow@2x.png" />
            </div>

            <div className="click-callout">
              <span>
                Click "<strong>Add extension</strong>" to install MailTag
              </span>
              <p>Get started and join more than 13,000 happy MailTag users</p>
            </div>

            <section className="gallery-section gallery-section-white">
              <div className="container">
                <h2>Trusted by</h2>
                <div className="logo-slider">
                  <div className="slide">
                    <img
                      alt="image description"
                      height="35"
                      src="/images/google-fff@2x.png"
                      width="117"
                    />
                  </div>
                  <div className="slide">
                    <img
                      alt="image description"
                      height="35"
                      src="/images/uber-fff@2x.png"
                      width="117"
                    />
                  </div>
                  <div className="slide">
                    <img
                      alt="image description"
                      height="35"
                      src="/images/verizon-fff@2x.png"
                      width="117"
                    />
                  </div>
                  <div className="slide">
                    <img
                      alt="image description"
                      height="35"
                      src="/images/lyft-fff@2x.png"
                      width="117"
                    />
                  </div>
                  <div className="slide">
                    <img
                      alt="image description"
                      height="35"
                      src="/images/shopify-fff@2x.png"
                      width="117"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="overlay-footer">
            <ul>
              <li>
                <img
                  alt="image description"
                  src="/images/tick-fff-full@2x.png"
                  height="24"
                  width="24"
                />
                Add MailTag to Chrome
              </li>
              <li></li>
              <li>
                <img
                  alt="image description"
                  src="/images/tick-fff-empty@2x.png"
                  height="24"
                  width="24"
                />
                Enable in Gmail
              </li>
              <li></li>
              <li>
                <img
                  alt="image description"
                  src="/images/tick-fff-empty@2x.png"
                  height="24"
                  width="24"
                />
                Done!
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header id="header">
        <div className="container">
          <div className="header-hold header-top">
            <div className="logo">
              <a href="/">
                <img
                  alt="MailTag"
                  height="27"
                  src="https://www.mailtag.io/images/logo.png"
                  width="157"
                />
              </a>
            </div>
            <nav id="nav">
              <a className="btn lightbox-form" href="#popup1">
                Sign up
              </a>
              <a className="button-opener nav-opener" href="#">
                <span>Open</span>
              </a>
              <div className="nav-drop">
                <div className="hold-drop">
                  <ul>
                    <li>
                      <a className="anchor" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/pricing">Pricing</a>
                    </li>
                    <li>
                      <a href="https://mailtag.io" target="_blank">
                        Blog
                      </a>
                    </li>
                  </ul>
                  <a
                    className="btn add-chrome"
                    href="#"
                    id="install-extension-button-toolbar"
                  >
                    Add to Chrome
                  </a>
                  <a
                    className="btn email-link btn-yellow lightbox-form"
                    href="#popup1"
                  >
                    Email me link
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div className="cover-layout">
        <div className="spinner"></div>
      </div>
      <main className="pricing-holder" id="main">
        <div className="banner inner-banner" style={{ height: 635 }}></div>
        <div id="holder">
          <div className="content">
            <div className="container">
              <div className="pricing-columns">
                <div className="column bigger-column">
                  <div className="popular-badge">
                    <span>
                      Special New
                      <br />
                      Customer Savings
                      <br />
                    </span>
                  </div>
                  <div className="lg-price-switch-main">
                    <form className="checkbox-form lg-price-switch">
                      <label for="check-1">
                        <input
                          className="filter-check"
                          data-pricer="yearly-monthly"
                          id="check-1"
                          type="checkbox"
                        />
                        <span className="fake-input">
                          <span className="month-off">Monthly</span>
                          <span className="year-off">
                            <span className="year-annual">Annual</span>
                            <span className="year-save">Save 30%</span>
                          </span>
                          <span className="switcher">
                            <span className="annual">Annual</span>
                            <span className="save">Save 30%</span>
                            <span className="monthly">Monthly</span>
                          </span>
                        </span>
                      </label>
                    </form>
                    <div className="discount-callout price-elements">
                      <span data-price="yearly">
                        Whooo! You’re saving 30%!
                        <img
                          height="22"
                          src="https://www.mailtag.io/images/new-party.svg"
                          width="22"
                        />
                      </span>
                      <span className="another-cost" data-price="monthly">
                        Save big by paying annually!
                        <img
                          height="22"
                          src="/images/sunglasses.svg"
                          width="22"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="price-box">
                    <div className="subheading">Pro</div>
                    <div className="heading price-elements">
                      <span
                        className="cost payment-popup-price"
                        data-price="yearly"
                      >
                        <span className="dollar"> $ </span>9.99/m
                        <span className="strike-through">$18</span>
                      </span>
                      <span
                        className="cost another-cost payment-popup-price"
                        data-price="monthly"
                      >
                        <span className="dollar"> $ </span>12.99/m
                        <span className="strike-through">$25</span>
                      </span>
                    </div>
                    <div className="price-elements price-period">
                      <span className="cost" data-price="yearly">
                        per user, billed yearly
                      </span>
                      <span className="cost another-cost" data-price="monthly">
                        per user, billed monthly
                      </span>
                    </div>
                  </div>
                  <form className="checkbox-form lg-hidden">
                    <label for="check-2">
                      <input
                        className="filter-check"
                        data-pricer="yearly-monthly"
                        id="check-2"
                        type="checkbox"
                      />
                    </label>
                  </form>
                  <div className="btn-holder" style={{ width: "100%" }}>
                    <a
                      className="btn btn-lift btn-white lg-btn try-mailtag-btn"
                      href=""
                    >
                      Try It
                    </a>
                    <a
                      className="btn btn-lift btn-yellow lg-btn start-pro-btn"
                      href=""
                    >
                      Buy It
                    </a>
                  </div>
                  <ul className="list">
                    <li>
                      <span title='Track unlimited emails in real-time, without the "Sent with MailTag"&nbsp;watermark.'>
                        Unlimited Email Tracking
                      </span>
                    </li>
                    <li>
                      <span title="Track your scheduled emails for them to arrive in your recipient’s inbox at the perfect time, every time.">
                        Unlimited Email Scheduling
                      </span>
                    </li>
                    <li>
                      <span title="Create unlimited Ping follow-up&nbsp;sequences.">
                        Unlimited Ping Sequences
                      </span>
                    </li>
                    <li>
                      <span title="Receive real-time desktop alerts the moment links are clicked in&nbsp;your&nbsp;emails.<br><br>And, hover your mouse over your MailTag icon (in your Gmail threads / Sent Mail) to view if any of your links have&nbsp;been&nbsp;clicked.">
                        Link-Click Tracking
                      </span>
                    </li>
                    <li>
                      <span title="Receive real-time desktop alerts the moment your emails&nbsp;are&nbsp;opened.">
                        Real-Time Notifications
                      </span>
                    </li>
                    <li>
                      <span title="When tracking is enabled, you can automatically BCC your email to your CRM (e.g.&nbsp;Salesforce).<br><br>No coding required.<br><br>(Configurable in the preferences section of your MailTag&nbsp;dashboard).">
                        Auto-BCC to CRM
                      </span>
                    </li>
                    <li>
                      <span title="Create a beautifully designed email signature.">
                        Signature Generator
                      </span>
                    </li>
                    <li>
                      <span title="Know at-a-glance if your emails have been read, via your MailTag&nbsp;dashboard.">
                        View Read &amp; Unread Emails
                      </span>
                    </li>
                    <li>
                      <span title="View unlimited data analytics in your MailTag dashboard (no&nbsp;30-day&nbsp;limit).<br><br>Know how many tracked emails you send daily, how many are opened, and&nbsp;more.">
                        View Unlimited Analytics
                      </span>
                    </li>
                    <li>
                      <span title="Skip the line and get super fast response&nbsp;times.">
                        Executive Support
                      </span>
                    </li>
                  </ul>
                  <div className="pricing-footer-text">
                    <div>Try MailTag for free. No card required.</div>
                    <div>
                      Ready to buy?
                      <button title="<strong>30-Day Refund Guarantee</strong><br>Receive a full refund at any time within the first 30 days after your purchase for absolutely any reason.<br>Simply email Help@MailTag.io and our team will process your refund within 24 hours.">
                        <img
                          alt="double guarantee"
                          src="https://www.mailtag.io/images/alert-circle-i.svg"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <section className="gallery-section">
                <h2>Trusted by professionals at top companies</h2>
                <div className="logo-slider">
                  <div className="slide">
                    <img
                      alt="image description"
                      height="37"
                      src="https://www.mailtag.io/images/google.svg"
                      width="89"
                    />
                  </div>
                  <div className="slide">
                    <img
                      alt="image description"
                      height="37"
                      src="https://www.mailtag.io/images/uber.svg"
                      width="99"
                    />
                  </div>
                  <div className="slide">
                    <img
                      alt="image description"
                      height="37"
                      src="https://www.mailtag.io/images/verizon.svg"
                      width="119"
                    />
                  </div>
                  <div className="slide">
                    <img
                      alt="image description"
                      height="37"
                      src="https://www.mailtag.io/images/lyft.svg"
                      width="51"
                    />
                  </div>
                  <div className="slide">
                    <img
                      alt="image description"
                      height="37"
                      src="https://www.mailtag.io/images/shopify.svg"
                      width="108"
                    />
                  </div>
                </div>
                <div className="logo-slider">
                  <div className="slide">
                    <img
                      alt="image description"
                      height="37"
                      src="https://www.mailtag.io/images/netflix.svg"
                      width="89"
                    />
                  </div>
                  <div className="slide">
                    <img
                      alt="image description"
                      height="37"
                      src="https://www.mailtag.io/images/dropbox.svg"
                      width="120"
                    />
                  </div>
                  <div className="slide">
                    <img
                      alt="image description"
                      height="37"
                      src="https://www.mailtag.io/images/coinbase.svg"
                      width="119"
                    />
                  </div>
                  <div className="slide">
                    <img
                      alt="image description"
                      height="37"
                      src="https://www.mailtag.io/images/zendesk.svg"
                      width="120"
                    />
                  </div>
                  <div className="slide">
                    <img
                      alt="image description"
                      height="37"
                      src="https://www.mailtag.io/images/groupon.svg"
                      style={{ paddingTop: 5 }}
                    />
                  </div>
                </div>
              </section>
              <div className="container-propositions">
                <div className="heading">
                  If we can’t dramatically increase your sales,
                  we&nbsp;don’t&nbsp;want&nbsp;your&nbsp;money.
                  <br />
                  Our customer&nbsp;guarantee:
                  <br />
                </div>
                <img
                  alt="dramatic sales increase"
                  src="https://www.mailtag.io/images/showGraph.svg"
                />
                <div
                  className="column-content"
                  style={{ textAlign: "center", display: "block" }}
                >
                  <div className="headline">30-Day Refund Guarantee</div>
                  <p>
                    Receive a full refund at any time within the first 30 days
                    after your purchase for absolutely any reason. Simply email
                    Help@MailTag.io and our team will process your refund within
                    24 hours.
                  </p>
                </div>
              </div>
              <div className="column-content column-content-large">
                <div className="col">
                  <div className="pricing-faq">FAQ</div>
                  <div className="headline">Can MailTag see my emails?</div>
                  <p>
                    Heck no. MailTag uses military grade encryption preventing
                    us or anyone else from having any insight into your emails
                    or browser's web history. Nor do we have any insight into
                    any information located on your MailTag dashboard.
                  </p>
                  <br />

                  <div className="headline">
                    What’s included in the Cold Email Secrets Course?
                  </div>
                  <p>
                    In short, tons of material to skyrocket your sales career.
                    <br />
                    Below is just a sneak peek for what you’ll discover. :)
                  </p>
                  <p></p>
                  <ul>
                    <li>&ZeroWidthSpace;Phrases That Kill Trust</li>
                    <li>The “Perfect Outreach” Formula</li>
                    <li>Habits Ultra-Successful Salespeople Live By</li>
                    <li>
                      &ZeroWidthSpace;Follow-Up Templates (That Actually Work)
                    </li>
                    <li>And much (much!) more. :)</li>
                  </ul>
                  <p></p>
                  <br />
                  <div className="headline">
                    If I upgrade my account, but then want to transfer the
                    subscription to a different email, how can I do this?
                  </div>
                  <p>
                    Simply shoot us an email (
                    <a href="mailto:Help@MailTag.io">Help@MailTag.io</a>) and
                    we’ll get your request processed ASAP.
                  </p>
                  <br />
                  <div className="headline">
                    Does MailTag offer bulk discounts?
                  </div>
                  <p>
                    Absolutely! Just email
                    <a href="mailto:Business@MailTag.io">Business@MailTag.io</a>
                    and we will accommodate your team (please note, there is a 5
                    seat minimum).
                  </p>
                  <br />
                  <div className="headline">
                    My question isn’t answered here.
                  </div>
                  <p>
                    Feel free to chat with us in the bottom right corner of your
                    screen, or drop us a line at
                    <a href="mailto:Help@MailTag.io">Help@MailTag.io</a>
                    :)
                  </p>
                </div>
                <div className="col">
                  <div className="column-content-large-right">
                    <div className="pricing-free-trial">
                      Start your free 14-day trial
                    </div>
                    <div className="pricing-free-trial-desc">
                      Trusted by 14,000+ professionals | 4.5 star rating
                    </div>
                    <div className="pricing-free-trial-tutorials">
                      <ul>
                        <li>
                          Know what happens after you click send (with tracking)
                          <a href="javascript:showVideo('EFodFK26QkY');void(0)">
                            <img src="https://www.mailtag.io/images/play.svg" />
                          </a>
                        </li>
                        <li>
                          Track scheduled emails &amp; never send an email at
                          the wrong time again
                          <a href="javascript:showVideo('NOXq_wWn8b8');void(0)">
                            <img src="https://www.mailtag.io/images/play.svg" />
                          </a>
                        </li>
                        <li>
                          Never manually follow-up, ever again (with Pings)
                          <a href="javascript:showVideo('wQbwipvswug');void(0)">
                            <img src="https://www.mailtag.io/images/play.svg" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="extra-bonus">
                      <strong>Extra Bonus!</strong>
                      <img src="https://www.mailtag.io/images/party.svg" />
                    </div>
                    <div className="cold-email-course">
                      Cold Email Secrets Course
                    </div>
                    <p>(Free download when you try MailTag)</p>
                    <div className="book-img">
                      <img src="https://www.mailtag.io/images/book.png" />
                    </div>
                    <div style={{ width: "100%", textAlign: "center" }}>
                      <a
                        className="btn btn-lift lg-btn try-free-lg-btn"
                        href=""
                      >
                        Try MailTag Now (For Free) — No Card Required
                      </a>
                    </div>
                    <div className="try-free-desc">
                      You’ll receive an instant download link to our Cold
                      <br />
                      Email Secrets Course once you begin your free-trial.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          className="section section-ellipse pricing-section-ellipse"
          style={{ marginBottom: 0 }}
        >
          <div className="section-holder"></div>
          <div className="bottom-payment-popup container">
            <div className="pricing-columns">
              <div className="column bigger-column">
                <div className="popular-badge">
                  <span>
                    Special New
                    <br />
                    Customer Savings
                    <br />
                  </span>
                </div>
                <div className="lg-price-switch-main">
                  <form className="checkbox-form lg-price-switch">
                    <label for="check-3">
                      <input
                        className="filter-check"
                        data-pricer="yearly-monthly"
                        id="check-3"
                        type="checkbox"
                      />
                      <span className="fake-input">
                        <span className="month-off">Monthly</span>
                        <span className="year-off">
                          <span className="year-annual">Annual</span>
                          <span className="year-save">Save 30%</span>
                        </span>
                        <span className="switcher">
                          <span className="annual">Annual</span>
                          <span className="save">Save 30%</span>
                          <span className="monthly">Monthly</span>
                        </span>
                      </span>
                    </label>
                  </form>
                  <div className="discount-callout price-elements">
                    <span data-price="yearly">
                      Whooo! You’re saving 30%!
                      <img
                        height="22"
                        src="https://www.mailtag.io/images/new-party.svg"
                        width="22"
                      />
                    </span>
                    <span className="another-cost" data-price="monthly">
                      Save big by paying annually!
                      <img
                        height="22"
                        src="/images/sunglasses.svg"
                        width="22"
                      />
                    </span>
                  </div>
                </div>
                <div className="price-box">
                  <div className="subheading">Pro</div>
                  <div className="heading price-elements">
                    <span
                      className="cost payment-popup-price"
                      data-price="yearly"
                    >
                      <span className="dollar"> $ </span>9.99/m
                      <span className="strike-through">$18</span>
                    </span>
                    <span
                      className="cost another-cost payment-popup-price"
                      data-price="monthly"
                    >
                      <span className="dollar"> $ </span>12.99/m
                      <span className="strike-through">$25</span>
                    </span>
                  </div>
                  <div className="price-elements price-period">
                    <span className="cost" data-price="yearly">
                      per user, billed yearly
                    </span>
                    <span className="cost another-cost" data-price="monthly">
                      per user, billed monthly
                    </span>
                  </div>
                </div>
                <form className="checkbox-form lg-hidden">
                  <label for="check-4">
                    <input
                      className="filter-check"
                      data-pricer="yearly-monthly"
                      id="check-4"
                      type="checkbox"
                    />
                  </label>
                </form>
                <div className="btn-holder" style={{ width: "100%" }}>
                  <a
                    className="btn btn-lift btn-white lg-btn try-mailtag-btn"
                    href=""
                  >
                    Try It
                  </a>
                  <a
                    className="btn btn-lift btn-yellow lg-btn start-pro-btn"
                    href=""
                  >
                    Buy It
                  </a>
                </div>
                <ul className="list">
                  <li>
                    <span title='Track unlimited emails in real-time, without the "Sent with MailTag"&nbsp;watermark.'>
                      Unlimited Email Tracking
                    </span>
                  </li>
                  <li>
                    <span title="Track your scheduled emails for them to arrive in your recipient’s inbox at the perfect time, every time.">
                      Unlimited Email Scheduling
                    </span>
                  </li>
                  <li>
                    <span title="Create unlimited Ping follow-up&nbsp;sequences.">
                      Unlimited Ping Sequences
                    </span>
                  </li>
                  <li>
                    <span title="Receive real-time desktop alerts the moment links are clicked in&nbsp;your&nbsp;emails.<br><br>And, hover your mouse over your MailTag icon (in your Gmail threads / Sent Mail) to view if any of your links have&nbsp;been&nbsp;clicked.">
                      Link-Click Tracking
                    </span>
                  </li>
                  <li>
                    <span title="Receive real-time desktop alerts the moment your emails&nbsp;are&nbsp;opened.">
                      Real-Time Notifications
                    </span>
                  </li>
                  <li>
                    <span title="When tracking is enabled, you can automatically BCC your email to your CRM (e.g.&nbsp;Salesforce).<br><br>No coding required.<br><br>(Configurable in the preferences section of your MailTag&nbsp;dashboard).">
                      Auto-BCC to CRM
                    </span>
                  </li>
                  <li>
                    <span title="Know at-a-glance if your emails have been read, via your MailTag&nbsp;dashboard.">
                      View Read &amp; Unread Emails
                    </span>
                  </li>
                  <li>
                    <span title="View unlimited data analytics in your MailTag dashboard (no&nbsp;30-day&nbsp;limit).<br><br>Know how many tracked emails you send daily, how many are opened, and&nbsp;more.">
                      View Unlimited Analytics
                    </span>
                  </li>
                  <li>
                    <span title="Skip the line and get super fast response&nbsp;times.">
                      Executive Support
                    </span>
                  </li>
                </ul>
                <div className="pricing-footer-text">
                  <div>Try MailTag for free. No card required.</div>
                  <div>
                    Ready to buy? Your purchase is protected by our
                    unprecedented guarantee.
                    <button title="<strong>30-Day Refund Guarantee</strong><br>Receive a full refund at any time within the first 30 days after your purchase for absolutely any reason.<br>Simply email Help@MailTag.io and our team will process your refund within 24 hours.">
                      <img
                        alt="double guarantee"
                        src="https://www.mailtag.io/images/alert-circle-i.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style></style>
        <div className="modal-video-player">
          <div
            className="modal-video-container"
            style={{ paddingTop: "524.947px" }}
          >
            <div className="modal-video-sizer"></div>
          </div>
        </div>
      </main>

      <style></style>

      <footer>
        <div className="container">
          <div className="row-footer">
            <div>
              <img
                className="logo"
                src="https://www.mailtag.io/images/logo.png"
              />
              <div className="copyright">
                AppLab BCJS LLC.
                <br />© 2022. All Rights Reserved.
              </div>
            </div>
            <div className="social-panel mobile-only">
              <a href="https://twitter.com/MailTagio" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 512 512"
                  className="iconify"
                  data-icon="fa-brands:twitter"
                  data-inline="false"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://instagram.com/mailtag?igshid=1cw8v735uqvuo"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="0.88em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 448 512"
                  className="iconify"
                  data-icon="fa-brands:instagram"
                  data-inline="false"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </a>
              <a href="https://app.mailtag.io/blog" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="0.88em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 448 512"
                  className="iconify"
                  data-icon="fa-brands:medium"
                  data-inline="false"
                >
                  <path
                    fill="currentColor"
                    d="M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UChx5XtBWr3y9WdUctJeuhgQ"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="1.13em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 576 512"
                  className="iconify"
                  data-icon="fa-brands:youtube"
                  data-inline="false"
                >
                  <path
                    fill="currentColor"
                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/mailtag"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="0.88em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 448 512"
                  className="iconify"
                  data-icon="fa-brands:linkedin"
                  data-inline="false"
                >
                  <path
                    fill="currentColor"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9V416z"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="row-footer forced">
              <div>
                <h3>Resources</h3>
                <ul>
                  <li>
                    <a href="https://app.mailtag.io/blog">Blog</a>
                  </li>
                  <li>
                    <a href="https://mailtag.getrewardful.com/signup">
                      Affiliate Program
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3>Legal</h3>
              <ul>
                <li>
                  <a href="/terms-conditions">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/cookies-policy">Cookies Policy</a>
                </li>
                <li>
                  <a href="/disclosure-policy">
                    Vulnerability Disclosure Policy
                  </a>
                </li>
                <li>
                  <a href="/information-security-policy">
                    Information Security Policy
                  </a>
                </li>
                <li>
                  <a href="/risk-management-policy">Risk Management Policy</a>
                </li>
                <li>
                  <a href="/incident-response-policy">Incident Response Plan</a>
                </li>
                <li>
                  <a href="/gmail-disclaimer">Gmail Disclaimer</a>
                </li>
              </ul>
            </div>

            <div>
              <h3>Contact</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Ninja-Fast Customer Service</td>
                    <td>
                      <a href="mailto:help@mailtag.io">Help@MailTag.io</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Business Development</td>
                    <td>
                      <a href="mailto:business@mailtag.io">
                        Business@MailTag.io
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="divider"></div>
          <div className="row-footer">
            <div className="copyright gmail">
              Gmail is a registered trademark of Google.
              <br />
              MailTag is not affiliated with Google or Gmail.
            </div>
            <div className="social-panel">
              <a href="https://twitter.com/MailTagio" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 512 512"
                  className="iconify"
                  data-icon="fa-brands:twitter"
                  data-inline="false"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://instagram.com/mailtag?igshid=1cw8v735uqvuo"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="0.88em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 448 512"
                  className="iconify"
                  data-icon="fa-brands:instagram"
                  data-inline="false"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </a>
              <a href="https://app.mailtag.io/blog" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="0.88em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 448 512"
                  className="iconify"
                  data-icon="fa-brands:medium"
                  data-inline="false"
                >
                  <path
                    fill="currentColor"
                    d="M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UChx5XtBWr3y9WdUctJeuhgQ"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="1.13em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 576 512"
                  className="iconify"
                  data-icon="fa-brands:youtube"
                  data-inline="false"
                >
                  <path
                    fill="currentColor"
                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/mailtag"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="0.88em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 448 512"
                  className="iconify"
                  data-icon="fa-brands:linkedin"
                  data-inline="false"
                >
                  <path
                    fill="currentColor"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9V416z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
