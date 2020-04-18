import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './TermsAndConditions.css';

function PrivacyPolicy() {
  const { goBack } = useHistory();
  return (
    <main className="page">
      <Button onClick={goBack} variant="contained" className="go-back-btn">
        Go Back
      </Button>
      <section className="page-content-container content-container terms-content-container">
        <h2>Welcome to our Privacy Policy</h2>
        <h3>Your privacy is critically important to us.</h3>
        NomsPDX is located at:
        <br />
        <address>
          NomsPDX
          <br />
          Portland <br />- Oregon , USA
          <br />
          5038789160{' '}
        </address>
        <p>
          It is NomsPDX's policy to respect your privacy regarding any
          information we may collect while operating our website. This Privacy
          Policy applies to{' '}
          <a href="https://nomspdx.com/">https://nomspdx.com/</a> (hereinafter,
          "us", "we", or "https://nomspdx.com/"). We respect your privacy and
          are committed to protecting personally identifiable information you
          may provide us through the Website. We have adopted this privacy
          policy ("Privacy Policy") to explain what information may be collected
          on our Website, how we use this information, and under what
          circumstances we may disclose the information to third parties. This
          Privacy Policy applies only to information we collect through the
          Website and does not apply to our collection of information from other
          sources.
        </p>
        <p>
          This Privacy Policy, together with the Terms and conditions posted on
          our Website, set forth the general rules and policies governing your
          use of our Website. Depending on your activities when visiting our
          Website, you may be required to agree to additional terms and
          conditions.
        </p>
        <h2>Website Visitors</h2>
        <p>
          Like most website operators, NomsPDX collects
          non-personally-identifying information of the sort that web browsers
          and servers typically make available, such as the browser type,
          language preference, referring site, and the date and time of each
          visitor request. NomsPDX's purpose in collecting non-personally
          identifying information is to better understand how NomsPDX's visitors
          use its website. From time to time, NomsPDX may release
          non-personally-identifying information in the aggregate, e.g., by
          publishing a report on trends in the usage of its website.
        </p>
        <p>
          NomsPDX also collects potentially personally-identifying information
          like Internet Protocol (IP) addresses for logged in users and for
          users leaving comments on https://nomspdx.com/ blog posts. NomsPDX
          only discloses logged in user and commenter IP addresses under the
          same circumstances that it uses and discloses personally-identifying
          information as described below.
        </p>
        <h3>Gathering of Personally-Identifying Information</h3>
        <p>
          Certain visitors to NomsPDX's websites choose to interact with NomsPDX
          in ways that require NomsPDX to gather personally-identifying
          information. The amount and type of information that NomsPDX gathers
          depends on the nature of the interaction. For example, we ask visitors
          who sign up for a blog at https://nomspdx.com/ to provide a username
          and email address.
        </p>
        <h3>Security</h3>
        <p>
          The security of your Personal Information is important to us, but
          remember that no method of transmission over the Internet, or method
          of electronic storage is 100% secure. While we strive to use
          commercially acceptable means to protect your Personal Information, we
          cannot guarantee its absolute security.
        </p>
        <h3>Advertisements</h3>
        <p>
          Ads appearing on our website may be delivered to users by advertising
          partners, who may set cookies. These cookies allow the ad server to
          recognize your computer each time they send you an online
          advertisement to compile information about you or others who use your
          computer. This information allows ad networks to, among other things,
          deliver targeted advertisements that they believe will be of most
          interest to you. This Privacy Policy covers the use of cookies by
          NomsPDX and does not cover the use of cookies by any advertisers.
        </p>
        <h3>Links To External Sites</h3>
        <p>
          Our Service may contain links to external sites that are not operated
          by us. If you click on a third party link, you will be directed to
          that third party's site. We strongly advise you to review the Privacy
          Policy and terms and conditions of every site you visit.
        </p>
        <p>
          We have no control over, and assume no responsibility for the content,
          privacy policies or practices of any third party sites, products or
          services.
        </p>
        <h3>Https://nomspdx.com/ uses Google AdWords for remarketing</h3>
        <p>
          Https://nomspdx.com/ uses the remarketing services to advertise on
          third party websites (including Google) to previous visitors to our
          site. It could mean that we advertise to previous visitors who haven't
          completed a task on our site, for example using the contact form to
          make an enquiry. This could be in the form of an advertisement on the
          Google search results page, or a site in the Google Display Network.
          Third-party vendors, including Google, use cookies to serve ads based
          on someone's past visits. Of course, any data collected will be used
          in accordance with our own privacy policy and Google's privacy policy.
        </p>
        <p>
          You can set preferences for how Google advertises to you using the
          Google Ad Preferences page, and if you want to you can opt out of
          interest-based advertising entirely by cookie settings or permanently
          using a browser plugin.
        </p>
        <h3>Protection of Certain Personally-Identifying Information</h3>
        <p>
          NomsPDX discloses potentially personally-identifying and
          personally-identifying information only to those of its employees,
          contractors and affiliated organizations that (i) need to know that
          information in order to process it on NomsPDX's behalf or to provide
          services available at NomsPDX's website, and (ii) that have agreed not
          to disclose it to others. Some of those employees, contractors and
          affiliated organizations may be located outside of your home country;
          by using NomsPDX's website, you consent to the transfer of such
          information to them. NomsPDX will not rent or sell potentially
          personally-identifying and personally-identifying information to
          anyone. Other than to its employees, contractors and affiliated
          organizations, as described above, NomsPDX discloses potentially
          personally-identifying and personally-identifying information only in
          response to a subpoena, court order or other governmental request, or
          when NomsPDX believes in good faith that disclosure is reasonably
          necessary to protect the property or rights of NomsPDX, third parties
          or the public at large.
        </p>
        <p>
          If you are a registered user of https://nomspdx.com/ and have supplied
          your email address, NomsPDX may occasionally send you an email to tell
          you about new features, solicit your feedback, or just keep you up to
          date with what's going on with NomsPDX and our products. We primarily
          use our blog to communicate this type of information, so we expect to
          keep this type of email to a minimum. If you send us a request (for
          example via a support email or via one of our feedback mechanisms), we
          reserve the right to publish it in order to help us clarify or respond
          to your request or to help us support other users. NomsPDX takes all
          measures reasonably necessary to protect against the unauthorized
          access, use, alteration or destruction of potentially
          personally-identifying and personally-identifying information.
        </p>
        <h3>Aggregated Statistics</h3>
        <p>
          NomsPDX may collect statistics about the behavior of visitors to its
          website. NomsPDX may display this information publicly or provide it
          to others. However, NomsPDX does not disclose your
          personally-identifying information.
        </p>
        <h3>Cookies</h3>
        <p>
          To enrich and perfect your online experience, NomsPDX uses "Cookies",
          similar technologies and services provided by others to display
          personalized content, appropriate advertising and store your
          preferences on your computer.
        </p>
        <p>
          A cookie is a string of information that a website stores on a
          visitor's computer, and that the visitor's browser provides to the
          website each time the visitor returns. NomsPDX uses cookies to help
          NomsPDX identify and track visitors, their usage of
          https://nomspdx.com/, and their website access preferences. NomsPDX
          visitors who do not wish to have cookies placed on their computers
          should set their browsers to refuse cookies before using NomsPDX's
          websites, with the drawback that certain features of NomsPDX's
          websites may not function properly without the aid of cookies.
        </p>
        <p>
          By continuing to navigate our website without changing your cookie
          settings, you hereby acknowledge and agree to NomsPDX's use of
          cookies.
        </p>
        <h3>E-commerce</h3>
        <p>
          Those who engage in transactions with NomsPDX – by purchasing
          NomsPDX's services or products, are asked to provide additional
          information, including as necessary the personal and financial
          information required to process those transactions. In each case,
          NomsPDX collects such information only insofar as is necessary or
          appropriate to fulfill the purpose of the visitor's interaction with
          NomsPDX. NomsPDX does not disclose personally-identifying information
          other than as described below. And visitors can always refuse to
          supply personally-identifying information, with the caveat that it may
          prevent them from engaging in certain website-related activities.
        </p>
        <h3>Privacy Policy Changes</h3>
        <p>
          Although most changes are likely to be minor, NomsPDX may change its
          Privacy Policy from time to time, and in NomsPDX's sole discretion.
          NomsPDX encourages visitors to frequently check this page for any
          changes to its Privacy Policy. Your continued use of this site after
          any change in this Privacy Policy will constitute your acceptance of
          such change.
        </p>
        <h3>Credit & Contact Information</h3>
        <p>
          This privacy policy was created at{' '}
          <a
            style={{ color: 'inherit', textDecoration: 'none' }}
            href="https://termsandconditionstemplate.com/privacy-policy-generator/"
            title="Privacy policy template generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            termsandconditionstemplate.com
          </a>
          . If you have any questions about this Privacy Policy, please contact
          us via <a href="mailto:omnomnom.pdx@gmail.com">email</a> or{' '}
          <a href="tel:5038789160">phone</a>.
        </p>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
