import React from 'react'
import Head from 'next/head'

import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Playful Milky Cobra</title>
          <meta property="og:title" content="Playful Milky Cobra" />
        </Head>
        <div className="home-header">
          <header
            data-thq="thq-navbar"
            className="navbarContainer home-navbar-interactive"
          >
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <img
                  src="/threat%20.%20(1).svg"
                  alt="image"
                  className="home-image"
                />
                <span className="home-nav12 bodySmall">Home</span>
                <span className="home-nav2 bodySmall">Services</span>
                <span className="home-nav3 bodySmall">Solutions</span>
                <span className="home-nav4 bodySmall">Clients</span>
                <span className="home-nav5 bodySmall">Contact</span>
              </nav>
              <div className="home-buttons"></div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div
              data-thq="thq-mobile-menu"
              className="home-mobile-menu1 mobileMenu"
            >
              <div className="home-nav">
                <div className="home-top">
                  <span className="logo">SECURE</span>
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="home-icon02 socialIcons"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links1">
                  <span>Home</span>
                  <span className="home-nav21 bodySmall">Services</span>
                  <span className="home-nav31 bodySmall">Solutions</span>
                  <span className="home-nav41 bodySmall">Clients</span>
                  <span className="home-nav51 bodySmall">Contact</span>
                </nav>
                <div className="home-buttons1">
                  <button className="buttonFlat">Login</button>
                  <button className="buttonFilled">Register</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04 socialIcons"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06 socialIcons"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon08 socialIcons"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="home-hero">
          <div className="heroContainer home-hero1">
            <div className="home-container01">
              <h1 className="home-hero-heading heading1">
                Protecting Your Digital Assets
              </h1>
              <span className="home-hero-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Secure your business with our expert information security
                      consulting services
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
              <div className="home-btn-group">
                <button className="buttonFilled">Get Started</button>
                <button className="buttonFlat">Learn More →</button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-features">
          <div className="featuresContainer">
            <div className="home-features1">
              <div className="home-container02">
                <span className="overline">
                  <span>features</span>
                  <br></br>
                </span>
                <h2 className="home-features-heading heading2">Our Services</h2>
                <span className="home-features-sub-heading bodyLarge">
                  <span>
                    <span>
                      <span>
                        We offer a range of information security consulting
                        services to protect your business
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </span>
                  <span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div className="home-container03">
                <FeatureCard
                  heading="Information Security Compliance Consultation"
                  subHeading="Expert guidance on achieving and maintaining information security compliance"
                ></FeatureCard>
                <FeatureCard
                  heading="Vulnerability Assessment and Penetration Testing (VAPT)"
                  subHeading="Thorough testing to identify vulnerabilities and weaknesses in your systems"
                ></FeatureCard>
                <FeatureCard
                  heading="Red Team Exercises"
                  subHeading="Simulated attacks to evaluate the effectiveness of your security measures"
                ></FeatureCard>
                <FeatureCard
                  heading="Data Protection and Privacy Consultation"
                  subHeading="Guidance on implementing data protection measures and ensuring privacy compliance"
                ></FeatureCard>
              </div>
            </div>
          </div>
        </div>
        <div className="home-pricing">
          <div className="pricingContainer">
            <div className="home-container04">
              <span className="overline">
                <span>Pricing</span>
                <br></br>
              </span>
              <h2 className="heading2">Choose Your Plan</h2>
              <span className="home-pricing-sub-heading bodyLarge">
                <span>
                  <span>
                    Select the perfect plan for your information security needs
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container05">
              <div className="freePricingCard home-pricing-card">
                <div className="home-container06">
                  <span className="home-text36 heading3">STARTER</span>
                </div>
                <div className="home-container07">
                  <span className="home-text37">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="home-free-plan-price">0</span>
                </div>
                <div className="home-container08">
                  <div className="home-container09">
                    <span className="home-text40">✔</span>
                    <span className="bodySmall">
                      Feature 1 of the Free plan
                    </span>
                  </div>
                  <div className="home-container10">
                    <span className="home-text41">✔</span>
                    <span className="bodySmall">
                      Feature 2 of the Free plan
                    </span>
                  </div>
                  <div className="home-container11">
                    <span className="home-text42">✔</span>
                    <span className="bodySmall">
                      Feature 3 of the Free plan
                    </span>
                  </div>
                  <div className="home-container12">
                    <span className="home-text43">✔</span>
                    <span className="bodySmall">
                      Feature 4 of the Free plan
                    </span>
                  </div>
                </div>
                <button className="home-button buttonOutline">
                  Continue with Free
                </button>
              </div>
              <div className="basicPricingCard home-pricing-card1">
                <div className="home-container13">
                  <span className="home-text44 heading3">PRO</span>
                </div>
                <div className="home-container14">
                  <span className="home-text45">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="home-basic-plan-pricing">99</span>
                  <span className="home-text48">/ month</span>
                </div>
                <div className="home-container15">
                  <div className="home-container16">
                    <span className="home-text49">✔</span>
                    <span className="bodySmall">All features of FREE plan</span>
                  </div>
                  <div className="home-container17">
                    <span className="home-text51">✔</span>
                    <span className="bodySmall">
                      Feature 1 of the Basic plan
                    </span>
                  </div>
                  <div className="home-container18">
                    <span className="home-text52">✔</span>
                    <span className="bodySmall">
                      Feature 2 of the Basic plan
                    </span>
                  </div>
                  <div className="home-container19">
                    <span className="home-text53">✔</span>
                    <span className="bodySmall">
                      Feature 3 of the Basic plan
                    </span>
                  </div>
                  <div className="home-container20">
                    <span className="home-text54">✔</span>
                    <span className="bodySmall">
                      Feature 4 of the Basic plan
                    </span>
                  </div>
                </div>
              </div>
              <div className="proPricingCard home-pricing-card2">
                <div className="home-container21">
                  <span className="home-text55 heading3">
                    <span>ENTERPRISE</span>
                    <br></br>
                  </span>
                  <span className="bodySmall">
                    A short description for the Pro plan
                  </span>
                </div>
                <div className="home-container22">
                  <span className="home-text58">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="home-pro-plan-pricing">199</span>
                  <span className="home-text61">/ month</span>
                </div>
                <div className="home-container23">
                  <div className="home-container24">
                    <span className="home-text62">✔</span>
                    <span className="bodySmall">
                       All features of BASIC plan
                    </span>
                  </div>
                  <div className="home-container25">
                    <span className="home-text64">✔</span>
                    <span className="bodySmall">Feature 1 of the Pro plan</span>
                  </div>
                  <div className="home-container26">
                    <span className="home-text65">✔</span>
                    <span className="bodySmall">Feature 2 of the Pro plan</span>
                  </div>
                  <div className="home-container27">
                    <span className="home-text66">✔</span>
                    <span className="bodySmall">Feature 3 of the Pro plan</span>
                  </div>
                  <div className="home-container28">
                    <span className="home-text67">✔</span>
                    <span className="bodySmall">Feature 4 of the Pro plan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="home-banner1 bannerContainer">
            <h1 className="home-banner-heading heading2">
              Comprehensive Information Security &amp; Data Protection
              Consulting
            </h1>
            <span className="home-banner-sub-heading bodySmall">
              <span>
                <span>
                  <span>
                    At our Information Security Consulting Firm, we offer a wide
                    range of services to help businesses protect their valuable
                    digital assets. With our team of experienced professionals,
                    we provide expert guidance and solutions tailored to your
                    specific needs.
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
          </div>
        </div>
        <div className="home-faq">
          <div className="faqContainer">
            <div className="home-faq1">
              <div className="home-container29">
                <span className="overline">
                  <span>FAQ</span>
                  <br></br>
                </span>
                <h2 className="home-text85 heading2">Common questions</h2>
                <span className="home-text86 bodyLarge">
                  <span>
                    Here are some of the most common questions that we get.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-container30">
                <Question1
                  answer="We offer a range of services including vulnerability assessments, penetration testing, security audits, risk assessments, and security awareness training."
                  question="What Services do we offer?"
                ></Question1>
                <Question1
                  answer="Our consultants have extensive experience in the field of information security, with an average of 10 years of industry experience."
                  question="How experienced are your consultants?"
                ></Question1>
                <Question1
                  answer="Yes, we offer ongoing support to our clients to ensure that their systems and data remain secure even after the completion of a project."
                  question="Do you provide ongoing support after the completion of a project?"
                ></Question1>
                <Question1
                  answer="We have strict confidentiality policies in place and all our consultants sign non-disclosure agreements to protect client information."
                  question="How do you ensure the confidentiality of client information?"
                ></Question1>
                <Question1
                  answer="Absolutely! We have expertise in various industry regulations and standards such as GDPR, PCI DSS, ISO 27701and ISO 27001. We can assist you in achieving compliance and maintaining it."
                  question="Can you help us comply with industry regulations and standards?"
                ></Question1>
              </div>
            </div>
          </div>
        </div>
        <div className="home-footer">
          <footer className="home-footer1 footerContainer">
            <div className="home-container31">
              <span className="logo">THREATSECURE</span>
              <nav className="home-nav1 bodySmall home-nav1">
                <span className="home-nav11">
                  <span className="bodySmall">
                    Contact us today at
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text90">
                    services@threatsecureconsulting.com
                  </span>
                </span>
              </nav>
            </div>
            <div className="home-separator"></div>
            <div className="home-container32">
              <span className="bodySmall home-text91">
                © 2023 ThreatSecure Consulting, All Rights Reserved.
              </span>
              <div className="home-icon-group1">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon10 socialIcons"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon12 socialIcons"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon14 socialIcons"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
            <img
              alt="image"
              src="/threat%20.-200h.png"
              className="home-image1"
            />
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-links {
            flex: 1;
            width: 674px;
            height: 44px;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: 391px;
            flex-direction: row;
            justify-content: center;
          }
          .home-image {
            width: 200px;
            object-fit: cover;
          }
          .home-nav12 {
            transition: 0.3s;
          }
          .home-nav2 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-nav3 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-nav4 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-nav5 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-buttons {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu1 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-nav1 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav21 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav31 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav41 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav51 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-buttons1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: 96px;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container01 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-hero-heading {
            max-width: 800px;
            text-align: center;
          }
          .home-hero-sub-heading {
            font-size: 18px;
            text-align: center;
          }
          .home-btn-group {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-features {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-features1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: flex-start;
            background-color: #000000;
          }
          .home-container02 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-features-heading {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-features-sub-heading {
            font-size: 18px;
            text-align: center;
          }
          .home-container03 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-oneandhalfunits);
            grid-template-columns: 1fr 1fr;
          }
          .home-pricing {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container04 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-pricing-sub-heading {
            text-align: center;
          }
          .home-container05 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container06 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text36 {
            text-transform: uppercase;
          }
          .home-container07 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-text37 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-free-plan-price {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-container08 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container09 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text40 {
            line-height: 150%;
          }
          .home-container10 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text41 {
            line-height: 150%;
          }
          .home-container11 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text42 {
            line-height: 150%;
          }
          .home-container12 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text43 {
            line-height: 150%;
          }
          .home-button {
            width: 100%;
          }
          .home-container13 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text44 {
            text-transform: uppercase;
          }
          .home-container14 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-text45 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-basic-plan-pricing {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-text48 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-container15 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-container16 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text49 {
            line-height: 150%;
          }
          .home-container17 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text51 {
            line-height: 150%;
          }
          .home-container18 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text52 {
            line-height: 150%;
          }
          .home-container19 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text53 {
            line-height: 150%;
          }
          .home-container20 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text54 {
            line-height: 150%;
          }
          .home-container21 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text55 {
            text-transform: uppercase;
          }
          .home-container22 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-text58 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-pro-plan-pricing {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-text61 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-container23 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container24 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text62 {
            line-height: 150%;
          }
          .home-container25 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text64 {
            line-height: 150%;
          }
          .home-container26 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text65 {
            line-height: 150%;
          }
          .home-container27 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text66 {
            line-height: 150%;
          }
          .home-container28 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text67 {
            line-height: 150%;
          }
          .home-banner {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-banner1 {
            background-color: #000000;
          }
          .home-banner-heading {
            color: #ffffff;
            text-align: center;
          }
          .home-banner-sub-heading {
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-faq {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-faq1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-container29 {
            display: flex;
            max-width: 35%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text85 {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text86 {
            text-align: left;
          }
          .home-container30 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-footer1 {
            position: relative;
          }
          .home-container31 {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .home-nav11 {
            font-size: 16px;
            font-family: 'Lato';
            line-height: 150%;
            margin-left: 0px;
          }
          .home-text90 {
            font-weight: 700;
          }
          .home-separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-container32 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon10 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon12 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon14 {
            width: 24px;
            height: 24px;
          }
          .home-image1 {
            left: 490px;
            width: 200px;
            bottom: 16px;
            position: absolute;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .home-hero1 {
              flex-direction: column;
            }
            .home-container01 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-hero-heading {
              text-align: center;
            }
            .home-hero-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-features-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-pricing-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-container05 {
              align-items: center;
              flex-direction: column;
            }
            .home-pricing-card {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              max-width: 450px;
            }
            .home-pricing-card1 {
              width: 100%;
              max-width: 450px;
            }
            .home-pricing-card2 {
              width: 100%;
              max-width: 450px;
            }
            .home-banner-sub-heading {
              max-width: 100%;
            }
            .home-text86 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-nav1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav21 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav31 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav41 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav51 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-features-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container03 {
              grid-template-columns: 1fr;
            }
            .home-pricing-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container05 {
              align-items: center;
              flex-direction: column;
            }
            .home-pricing-card {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card1 {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card2 {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-banner1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-banner-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-faq1 {
              flex-direction: column;
            }
            .home-container29 {
              max-width: 100%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-text86 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container32 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text91 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu1 {
              padding: 16px;
            }
            .home-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container01 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-features1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card2 {
              margin-bottom: 0px;
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container32 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text91 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
