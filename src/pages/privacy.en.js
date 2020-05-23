import React from 'react'
import Fade from 'react-reveal/Fade'

import SEO from '../components/seo'

export default () => (
  <div className="page-privacy">
    <SEO
      title="Privacy Policy"
      description="Information on what data is being collected about you on this website."
    />
    <Fade>
      <div className="container">
        <h2 className="ta-center">Privacy Policy</h2>
          <div className="text">
            <p style={{fontStyle: 'italic'}}>Last updated: May 22, 2020</p>
            <p>This website uses cookies and third-party data services to gain marketing insight, maintain customer relations and improve the functionality of this site.</p>
            <p>By using this site you agree to share your data with the following services.</p>
            <div className="overflow-x-container">
              <table>
                <tr>
                  <th>Type</th>
                  <th>Purpose</th>
                  <th>Collector</th>
                  <th>Comment</th>
                </tr>
                <tr>
                  <td>Cookie & Third-party data</td>
                  <td>Understand user behavior, gain insight on regional marketing</td>
                  <td>Google</td>
                  <td>Tracks <a href="https://support.google.com/analytics/answer/2799357?hl=en&utm_id=ad" target="_blank" className="link" style={{fontSize: 'inherit'}} rel="noopener noreferrer">demographics</a>, pages visited, and links clicked. If you would like to prevent Google Analytics from tracking you, you can add this tool to Chrome: <a href="https://tools.google.com/dlpage/gaoptout"  target="_blank" className="link" style={{fontSize: 'inherit'}} rel="noopener noreferrer">Google Analytics opt-out addon</a>.</td>
                </tr>
                <tr>
                  <td>Third-party data</td>
                  <td>Inform subscribers of new releases and coupons</td>
                  <td>Mailchimp</td>
                  <td>Data only collected if email submitted in newsletter subscribe form</td>
                </tr>
                <tr>
                  <td>Third-party data</td>
                  <td>Allow users to contact the book author</td>
                  <td>Getform</td>
                  <td>Data only collected if submitted in contact form</td>
                </tr>
              </table>
            </div>

          </div>
      </div>
    </Fade>

  </div>
)
