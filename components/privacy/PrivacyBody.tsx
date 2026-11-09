import Link from "next/link";

/** The sections of the Privacy Policy page, in the layout of the Copyright and Content Use page. */
export function PrivacyBody() {
  return (
    <>
      <section className="hero cp-hero">
        <div className="in">
          <div className="crumbs"><Link href="/">Home</Link> / Legal / Privacy</div>
          <span className="eyebrow">Privacy policy</span>
          <h1>What we collect, <em>and why.</em></h1>
          <p className="lede">We use a small amount of visitor information to see how much traction this website is getting, and who is visiting and from where, so we can point our sales conversations in the right direction. This page explains exactly what that involves, who handles it for us, and the choices you have.</p>
          <div className="cp-meta"><span><b>Owner:</b> Mawkish Technologies (Private) Limited</span><span><b>Applies to:</b> mawkishtechnologies.com and its sub-pages</span><span><b>Last updated:</b> 9 November 2026</span></div>
          <div className="cp-sum">
            <div className="y"><span className="k">✓</span><h3>What we do</h3><p>Measure visits to this site, and where visitors come from, but only after you accept cookies.</p></div>
            <div className="n"><span className="k">✕</span><h3>What we don't</h3><p>We don't sell your information, and we don't share it with anyone for their own marketing.</p></div>
            <div className="a"><span className="k">?</span><h3>Your choice</h3><p>Decline cookies and no analytics load. Ask us any time what we hold about you, or to delete it.</p></div>
          </div>
        </div>
      </section>

      <section className="light">
        <div className="in cp-wrap">
          <nav className="cp-toc" aria-label="On this page">
            <b>On this page</b>
            <ol>
              <li><a href="#who">Who we are</a></li>
              <li><a href="#collect">What we collect</a></li>
              <li><a href="#why">Why we collect it</a></li>
              <li><a href="#cookies">Cookies and your choice</a></li>
              <li><a href="#share">Who handles it for us</a></li>
              <li><a href="#keep">How long we keep it</a></li>
              <li><a href="#abroad">Processing outside Sri Lanka</a></li>
              <li><a href="#rights">Your rights</a></li>
              <li><a href="#secure">Security</a></li>
              <li><a href="#young">Children</a></li>
              <li><a href="#changes">Changes and contact</a></li>
            </ol>
          </nav>

          <div className="cp-doc">
            <section id="who">
              <h2>Who we are</h2>
              <p>This website is run by <strong>Mawkish Technologies (Private) Limited</strong> ("Mawkish", "we", "us"), 2nd Floor, Oceanica Tower, 490 Galle Road, Colombo 03, Sri Lanka. We decide what personal information is collected through this site and why.</p>
              <p>We aim to handle personal information in line with Sri Lanka's <strong>Personal Data Protection Act, No. 9 of 2022</strong>, as it applies to us.</p>
            </section>

            <section id="collect">
              <h2>What we collect</h2>
              <p>We collect information in four ways. Only the first depends on your cookie choice.</p>
              <div className="cp-tw">
                <table className="cp-law">
                  <thead><tr><th>When</th><th>What</th></tr></thead>
                  <tbody>
                    <tr>
                      <td>You browse the site and accept cookies</td>
                      <td><b>Google Analytics</b> records the pages you view, how long you stay, the page that sent you here, your device and browser, and your approximate location. <b>The LinkedIn Insight Tag</b> records the same kind of visit information. For visitors who are LinkedIn members, LinkedIn shows us the company, industry, job function, seniority and country of our visitors as <strong>aggregated statistics</strong>. We do not receive a list of named individuals.</td>
                    </tr>
                    <tr>
                      <td>You send us a message through the contact form</td>
                      <td>Your name, email address, phone number, company (if you give it), the service you are interested in, and your message. The form simply sends us an email at our company address, so we can see who has contacted us and reply.</td>
                    </tr>
                    <tr>
                      <td>You register to read our client case studies</td>
                      <td>Your name, company and work email address. We email you a one-time code to confirm you can read that inbox. Once you enter it, we send you a welcome email and let our sales team know you registered.</td>
                    </tr>
                    <tr>
                      <td>You email us, or apply for a role by email</td>
                      <td>Whatever you send us, including your email address and, for applications, your CV.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>Like any website, our hosting provider also receives technical details of every request (such as your IP address, browser type and the page requested) in order to deliver the site and keep it secure.</p>
              <p>We do not ask for payment details or passwords anywhere on this site.</p>
            </section>

            <section id="why">
              <h2>Why we collect it</h2>
              <ul>
                <li><strong>To see how much traction the site is getting.</strong> Visit counts and the pages people read show us what is useful and what is not.</li>
                <li><strong>To understand who is visiting, and from where,</strong> so we can focus our sales conversations on the countries, industries and kinds of company that show interest.</li>
                <li><strong>To answer you.</strong> Contact-form messages and emails are used to reply to your enquiry and follow it up.</li>
                <li><strong>To give you access to case studies,</strong> and to know who is reading them.</li>
                <li><strong>To keep the site working and secure.</strong></li>
              </ul>
              <p>We do not use this information for anything unrelated to these purposes, and we do not build profiles of individual visitors from analytics data.</p>
            </section>

            <section id="cookies">
              <h2>Cookies and your choice</h2>
              <p>When you first arrive, a banner asks whether you accept cookies. <strong>Google Analytics and the LinkedIn Insight Tag load only if you click Accept.</strong> If you click Decline, or do not choose, neither loads and neither sets any cookie.</p>
              <p>Your choice is remembered in your own browser, not on our servers. To change it, clear this site's data in your browser settings and the banner will appear again.</p>
              <div className="cp-two">
                <div><h3>Needed for the site to work</h3><ul><li>A note of your cookie choice, kept in your browser.</li><li>For case-study registration, a short-lived code that lasts about ten minutes, and a sign-in cookie that remembers you have registered for up to 12 months.</li></ul></div>
                <div><h3>Only if you accept</h3><ul><li>Google Analytics cookies, to measure visits.</li><li>LinkedIn Insight Tag cookies, to measure visits and show aggregated company and job-function statistics.</li></ul></div>
              </div>
              <p>You can also block these cookies in your browser, or use a browser extension that blocks trackers. The site will still work.</p>
            </section>

            <section id="share">
              <h2>Who handles it for us</h2>
              <p>We do not sell or rent your information, and we do not give it to anyone to use for their own marketing.</p>
              <p>A few companies handle information on our behalf so the site and our enquiries work. They process it only to provide their service to us:</p>
              <ul>
                <li><strong>Google</strong> (Google Analytics), for visit statistics, if you accept cookies.</li>
                <li><strong>LinkedIn</strong> (LinkedIn Insight Tag), for visit statistics and aggregated audience information, if you accept cookies. LinkedIn also uses its own data under its own privacy policy.</li>
                <li><strong>Our hosting provider</strong>, which serves the website.</li>
                <li><strong>Our email provider,</strong> which delivers and stores the emails we receive, including contact-form messages, case-study registrations and notifications.</li>
              </ul>
              <p>Two further pages load content from other companies, which means those companies see your IP address when the page loads: the Contact page shows a map from OpenStreetMap, and the Printing and Packaging and Tea Export industry pages load their fonts from Google Fonts.</p>
              <p>We may also disclose information where the law requires it, or to protect our rights or the safety of others.</p>
            </section>

            <section id="keep">
              <h2>How long we keep it</h2>
              <p><strong>Visit statistics.</strong> We do not keep visitor analytics data on our own systems. It sits in Google Analytics and LinkedIn, where it is held for the periods set in those services and in our account settings, and then removed.</p>
              <p><strong>Messages and registrations.</strong> Contact-form messages, case-study registrations and emails sit in our company mailbox and are kept for as long as we need them to answer you and to manage any resulting business relationship. After that we delete them. You can ask us to delete yours sooner.</p>
              <p><strong>Cookies.</strong> Each cookie lasts for the period described in the cookies section above.</p>
            </section>

            <section id="abroad">
              <h2>Processing outside Sri Lanka</h2>
              <p>Some of the companies that handle information for us, including Google and LinkedIn, run their services from other countries. Information about your visit may therefore be processed outside Sri Lanka. We choose established providers and use them only for the purposes above.</p>
            </section>

            <section id="rights">
              <h2>Your rights</h2>
              <p>You can ask us at any time to:</p>
              <ul>
                <li>tell you whether we hold personal information about you, and give you a copy;</li>
                <li>correct information that is wrong or out of date;</li>
                <li>delete your information, where we have no good reason to keep it;</li>
                <li>stop using your information for a purpose you object to;</li>
                <li>withdraw consent you gave us, such as consent to analytics cookies. This does not affect what we did before you withdrew it.</li>
              </ul>
              <p>Write to <a href="mailto:info@mawkishtechnologies.com">info@mawkishtechnologies.com</a>. We may need to confirm who you are first, and we will reply as soon as we reasonably can. If you are not happy with our answer, you can also complain to the data protection authority in Sri Lanka or in your own country.</p>
            </section>

            <section id="secure">
              <h2>Security</h2>
              <p>This site is served over an encrypted (HTTPS) connection. We limit who at Mawkish can see messages and registrations to the people who need them to reply. No system is perfectly secure, so please do not send us sensitive personal or financial details through the contact form or by email.</p>
            </section>

            <section id="young">
              <h2>Children</h2>
              <p>This website is written for businesses and is not aimed at anyone under 18. We do not knowingly collect information from children.</p>
            </section>

            <section id="changes">
              <h2>Changes and contact</h2>
              <p>We may update this policy from time to time. The version on this page is the one that applies, and the date at the top shows when it last changed.</p>
              <div className="cp-box"><p><strong>Questions about your privacy?</strong> Write to <a href="mailto:info@mawkishtechnologies.com">info@mawkishtechnologies.com</a>, or call <a href="tel:+94716663258">+94 71 666 3258</a>. We are happy to explain anything on this page.</p></div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
