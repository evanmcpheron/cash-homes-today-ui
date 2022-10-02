import { styled } from '@mui/material/styles';
import {proxy} from '@helper/proxy'
import FusePageSimple from '@fuse/core/FusePageSimple/FusePageSimple';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {
    marginTop: 36,
    marginBottom: 36,
  },
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));

const Privacy = () => {
  return (
    <Root
      content={
        <div className="legal-container">
          <div className="legal-body">
            <h2 className="mb-36">PRIVACY NOTICE</h2>
            <p>
              <em>Last updated February 14, 2022</em>
            </p>
            <p>
              Thank you for choosing to be part of our community at Cash Homes Today, LLC. ("
              <strong>Company</strong>
              ," "<strong>we</strong>
              ," "<strong>us</strong>
              ," or "<strong>our</strong>
              "). We are committed to protecting your personal information and your right to
              privacy. If you have any questions or concerns about this privacy notice or our
              practices with regard to your personal information, please contact us at
              support@cashhomestoday.com.
            </p>
            <p>This privacy notice describes how we might use your information if you:</p>
            <ul>
              <li>
                Visit our website at{' '}
                <a href="https://www.cashhomestoday.com">https://www.cashhomestoday.com</a>
              </li>
              <li>Download and use our mobile application — Cash Homes Today</li>
              <li>
                Engage with us in other related ways ― including any sales, marketing, or events
              </li>
            </ul>
            <p>In this privacy notice, if we refer to:</p>
            <ul>
              <li>
                "Website," we are referring to any website of ours that references or links to this
                policy
              </li>
              <li>
                "App," we are referring to any application of ours that references or links to this
                policy, including any listed above
              </li>
              <li>
                "Services," we are referring to our Website, App, and other related services,
                including any sales, marketing, or events
              </li>
            </ul>
            <p>
              The purpose of this privacy notice is to explain to you in the clearest way possible
              what information we collect, how we use it, and what rights you have in relation to
              it. If there are any terms in this privacy notice that you do not agree with, please
              discontinue use of our Services immediately.
            </p>
            <p>
              Please read this privacy notice carefully, as it will help you understand what we do
              with the information that we collect.
            </p>
            <h3>TABLE OF CONTENTS</h3>
            <ol>
              <li>
                <a href="/privacy#one">WHAT INFORMATION DO WE COLLECT?</a>
              </li>
              <li>
                <a href="/privacy#two">HOW DO WE USE YOUR INFORMATION?</a>
              </li>
              <li>
                <a href="/privacy#three">WILL YOUR INFORMATION BE SHARED WITH ANYONE?</a>
              </li>
              <li>
                <a href="/privacy#four">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a>
              </li>
              <li>
                <a href="/privacy#five">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a>
              </li>
              <li>
                <a href="/privacy#six">HOW LONG DO WE KEEP YOUR INFORMATION?</a>
              </li>
              <li>
                <a href="/privacy#seven">HOW DO WE KEEP YOUR INFORMATION SAFE?</a>
              </li>
              <li>
                <a href="/privacy#eight">WHAT ARE YOUR PRIVACY RIGHTS?</a>
              </li>
              <li>
                <a href="/privacy#nine">CONTROLS FOR DO-NOT-TRACK FEATURES</a>
              </li>
              <li>
                <a href="/privacy#ten">DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a>
              </li>
              <li>
                <a href="/privacy#eleven">DO WE MAKE UPDATES TO THIS NOTICE?</a>
              </li>
              <li>
                <a href="/privacy#twelve">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
              </li>
              <li>
                <a href="/privacy#thirteen">
                  HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?
                </a>
              </li>
            </ol>
            <h2 className="my-36" id="one">
              1. WHAT INFORMATION DO WE COLLECT?
            </h2>
            <h4>Personal information you disclose to us</h4>
            <em>
              <p>
                <strong>In Short: </strong>
                We collect personal information that you provide to us.
              </p>
            </em>
            <p>
              We collect personal information that you voluntarily provide to us when you register
              on the Services, express an interest in obtaining information about us or our products
              and Services, when you participate in activities on the Services (such as by posting
              messages in our online forums or entering competitions, contests or giveaways) or
              otherwise when you contact us.
            </p>
            <p>
              The personal information that we collect depends on the context of your interactions
              with us and the Services, the choices you make and the products and features you use.
              The personal information we collect may include the following:
            </p>
            <p>
              <strong>Personal Information Provided by You.</strong> We collect names; phone
              numbers; email addresses; usernames; passwords; contact preferences; contact or
              authentication data; billing addresses; debit/credit card numbers; mailing addresses;
              and other similar information.
            </p>
            <p>
              <strong>Payment Data.</strong> We may collect data necessary to process your payment
              if you make purchases, such as your payment instrument number (such as a credit card
              number), and the security code associated with your payment instrument. All payment
              data is stored by Stripe. You may find their privacy notice link(s){' '}
              <a href="https://stripe.com/privacy" target="_blank" rel="noreferrer">
                here
              </a>
              .
            </p>
            <p>
              <strong>Social Media Login Data.</strong> We may provide you with the option to
              register with us using your existing social media account details, like your Facebook,
              Twitter or other social media account. If you choose to register in this way, we will
              collect the information described in the section called{' '}
              <a href="/privacy#five">"HOW DO WE HANDLE YOUR SOCIAL LOGINS?"</a>
              below.
            </p>
            <p>
              All personal information that you provide to us must be true, complete and accurate,
              and you must notify us of any changes to such personal information.
            </p>
            <h4>Information automatically collected</h4>
            <p>
              <em>
                <strong>In Short:</strong> Some information — such as your Internet Protocol (IP)
                address and/or browser and device characteristics — is collected automatically when
                you visit our Services.
              </em>
            </p>
            <p>
              We automatically collect certain information when you visit, use or navigate the
              Services. This information does not reveal your specific identity (like your name or
              contact information) but may include device and usage information, such as your IP
              address, browser and device characteristics, operating system, language preferences,
              referring URLs, device name, country, location, information about how and when you use
              our Services and other technical information. This information is primarily needed to
              maintain the security and operation of our Services, and for our internal analytics
              and reporting purposes.
            </p>
            <p>
              Like many businesses, we also collect information through cookies and similar
              technologies.
            </p>
            <p>The information we collect includes:</p>
            <ul>
              <li>
                <em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic,
                usage and performance information our servers automatically collect when you access
                or use our Services and which we record in log files. Depending on how you interact
                with us, this log data may include your IP address, device information, browser type
                and settings and information about your activity in the Services (such as the
                date/time stamps associated with your usage, pages and files viewed, searches and
                other actions you take such as which features you use), device event information
                (such as system activity, error reports (sometimes called 'crash dumps') and
                hardware settings).
              </li>

              <li>
                <em>Device Data.</em> We collect device data such as information about your
                computer, phone, tablet or other device you use to access the Services. Depending on
                the device used, this device data may include information such as your IP address
                (or proxy server), device and application identification numbers, location, browser
                type, hardware model Internet service provider and/or mobile carrier, operating
                system and system configuration information.
              </li>

              <li>
                <em>Location Data.</em> We collect location data such as information about your
                device's location, which can be either precise or imprecise. How much information we
                collect depends on the type and settings of the device you use to access the
                Services. For example, we may use GPS and other technologies to collect geolocation
                data that tells us your current location (based on your IP address). You can opt out
                of allowing us to collect this information either by refusing access to the
                information or by disabling your Location setting on your device. Note however, if
                you choose to opt out, you may not be able to use certain aspects of the Services.
              </li>
            </ul>
            <h4>Information collected through our App</h4>
            <p>
              <em>
                <strong>In Short:</strong> We collect information regarding your geolocation, mobile
                device, push notifications, when you use our App.
              </em>
            </p>
            <p>If you use our App, we also collect the following information:</p>
            <ul>
              <li>
                <em>Geolocation Information.</em> We may request access or permission to and track
                location-based information from your mobile device, either continuously or while you
                are using our App, to provide certain location-based services. If you wish to change
                our access or permissions, you may do so in your device's settings.
              </li>

              <li>
                <em>Mobile Device Access.</em> We may request access or permission to certain
                features from your mobile device, including your mobile device's and other features.
                If you wish to change our access or permissions, you may do so in your device's
                settings.
              </li>

              <li>
                <em>Mobile Device Data.</em> We automatically collect device information (such as
                your mobile device ID, model and manufacturer), operating system, version
                information and system configuration information, device and application
                identification numbers, browser type and version, hardware model, Internet service
                provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy
                server). If you are using our App, we may also collect information about the phone
                network associated with your mobile device, your mobile device’s operating system or
                platform, the type of mobile device you use, your mobile device’s unique device ID
                and information about the features of our App you accessed.
              </li>

              <li>
                <em>Push Notifications.</em> We may request to send you push notifications regarding
                your account or certain features of the App. If you wish to opt-out from receiving
                these types of communications, you may turn them off in your device's settings.
              </li>
            </ul>
            <p>
              This information is primarily needed to maintain the security and operation of our
              App, for troubleshooting and for our internal analytics and reporting purposes.
            </p>
            <h2 className="my-36" id="two">
              2. HOW DO WE USE YOUR INFORMATION?
            </h2>
            <p>
              <em>
                <strong>In Short:</strong> We process your information for purposes based on
                legitimate business interests, the fulfillment of our contract with you, compliance
                with our legal obligations, and/or your consent.
              </em>
            </p>
            <p>
              We use personal information collected via our Services for a variety of business
              purposes described below. We process your personal information for these purposes in
              reliance on our legitimate business interests, in order to enter into or perform a
              contract with you, with your consent, and/or for compliance with our legal
              obligations. We indicate the specific processing grounds we rely on next to each
              purpose listed below.
            </p>
            <p>We use the information we collect or receive:</p>
            <ul>
              <li>
                <strong>To facilitate account creation and logon process.</strong> If you choose to
                link your account with us to a third-party account (such as your Google or Facebook
                account), we use the information you allowed us to collect from those third parties
                to facilitate account creation and logon process for the performance of the
                contract. See the section below headed{' '}
                <a href="/privacy#five">"HOW DO WE HANDLE YOUR SOCIAL LOGINS?"</a> for further
                information.
              </li>

              <li>
                <strong>To post testimonials.</strong> We post testimonials on our Services that may
                contain personal information. Prior to posting a testimonial, we will obtain your
                consent to use your name and the content of the testimonial. If you wish to update,
                or delete your testimonial, please contact us at support@cashhomestoday.com and be
                sure to include your name, testimonial location, and contact information.
              </li>

              <li>
                <strong>Request feedback.</strong> We may use your information to request feedback
                and to contact you about your use of our Services.
              </li>

              <li>
                <strong>To enable user-to-user communications.</strong> We may use your information
                in order to enable user-to-user communications with each user's consent.
              </li>

              <li>
                <strong>To manage user accounts.</strong> We may use your information for the
                purposes of managing our account and keeping it in working order.
              </li>

              <li>
                <strong>To send administrative information to you.</strong> We may use your personal
                information to send you product, service and new feature information and/or
                information about changes to our terms, conditions, and policies.
              </li>

              <li>
                <strong>To protect our Services.</strong> We may use your information as part of our
                efforts to keep our Services safe and secure (for example, for fraud monitoring and
                prevention).
              </li>

              <li>
                <strong>
                  To enforce our terms, conditions and policies for business purposes, to comply
                  with legal and regulatory requirements or in connection with our contract.
                </strong>
              </li>

              <li>
                <strong>To respond to legal requests and prevent harm.</strong> If we receive a
                subpoena or other legal request, we may need to inspect the data we hold to
                determine how to respond.
              </li>

              <li>
                <strong>Fulfill and manage your orders.</strong> We may use your information to
                fulfill and manage your orders, payments, returns, and exchanges made through the
                Services.
              </li>

              <li>
                <strong>Administer prize draws and competitions.</strong> We may use your
                information to administer prize draws and competitions when you elect to participate
                in our competitions.
              </li>

              <li>
                <strong>To deliver and facilitate delivery of services to the user.</strong> We may
                use your information to provide you with the requested service.
              </li>

              <li>
                <strong>To respond to user inquiries/offer support to users.</strong> We may use
                your information to respond to your inquiries and solve any potential issues you
                might have with the use of our Services.
              </li>
            </ul>
            <h2 className="my-36" id="three">
              3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
            </h2>
            <p>
              <em>
                <strong>In Short:</strong> We only share information with your consent, to comply
                with laws, to provide you with services, to protect your rights, or to fulfill
                business obligations.
              </em>
            </p>
            <p>
              We may process or share your data that we hold based on the following legal basis:
            </p>
            <ul>
              <li>
                <strong>Consent:</strong> We may process your data if you have given us specific
                consent to use your personal information for a specific purpose.
              </li>

              <li>
                <strong>Legitimate Interests:</strong> We may process your data when it is
                reasonably necessary to achieve our legitimate business interests.
              </li>

              <li>
                <strong>Performance of a Contract:</strong> Where we have entered into a contract
                with you, we may process your personal information to fulfill the terms of our
                contract.
              </li>

              <li>
                <strong>Legal Obligations:</strong> We may disclose your information where we are
                legally required to do so in order to comply with applicable law, governmental
                requests, a judicial proceeding, court order, or legal process, such as in response
                to a court order or a subpoena (including in response to public authorities to meet
                national security or law enforcement requirements).
              </li>

              <li>
                <strong>Vital Interests:</strong>
                We may disclose your information where we believe it is necessary to investigate,
                prevent, or take action regarding potential violations of our policies, suspected
                fraud, situations involving potential threats to the safety of any person and
                illegal activities, or as evidence in litigation in which we are involved.
              </li>
            </ul>
            <p>
              More specifically, we may need to process your data or share your personal information
              in the following situations:
            </p>
            <ul>
              <li>
                <strong>Business Transfers.</strong> We may share or transfer your information in
                connection with, or during negotiations of, any merger, sale of company assets,
                financing, or acquisition of all or a portion of our business to another company.
              </li>

              <li>
                <strong>Google Maps Platform APIs.</strong> We may share your information with
                certain Google Maps Platform APIs (e.g., Google Maps API, Place API). To find out
                more about Google’s Privacy Policy, please refer to this link. We obtain and store
                on your device ('cache') your location. You may revoke your consent anytime by
                contacting us at the contact details provided at the end of this document.
              </li>

              <li>
                <strong>Other Users.</strong> When you share personal information (for example, by
                posting comments, contributions or other content to the Services) or otherwise
                interact with public areas of the Services, such personal information may be viewed
                by all users and may be publicly made available outside the Services in perpetuity.
                If you interact with other users of our Services and register for our Services
                through a social network (such as Facebook), your contacts on the social network
                will see your name, profile photo, and descriptions of your activity. Similarly,
                other users will be able to view descriptions of your activity, communicate with you
                within our Services, and view your profile.
              </li>
            </ul>
            <h2 className="my-36" id="four">
              4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </h2>
            <p>
              <em>
                <strong>In Short:</strong> We may use cookies and other tracking technologies to
                collect and store your information.
              </em>
            </p>
            <p>
              We may use cookies and similar tracking technologies (like web beacons and pixels) to
              access or store information. Specific information about how we use such technologies
              and how you can refuse certain cookies is set out in our Cookie Notice.
            </p>
            <h2 className="my-36" id="five">
              5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
            </h2>
            <p>
              <em>
                <strong>In Short:</strong> If you choose to register or log in to our services using
                a social media account, we may have access to certain information about you.
              </em>
            </p>
            Our Services offers you the ability to register and login using your third-party social
            media account details (like your Facebook or Twitter logins). Where you choose to do
            this, we will receive certain profile information about you from your social media
            provider. The profile information we receive may vary depending on the social media
            provider concerned, but will often include your name, email address, friends list,
            profile picture as well as other information you choose to make public on such social
            media platform. We will use the information we receive only for the purposes that are
            described in this privacy notice or that are otherwise made clear to you on the relevant
            Services. Please note that we do not control, and are not responsible for, other uses of
            your personal information by your third-party social media provider. We recommend that
            you review their privacy notice to understand how they collect, use and share your
            personal information, and how you can set your privacy preferences on their sites and
            apps.
            <h2 className="my-36" id="six">
              6. HOW LONG DO WE KEEP YOUR INFORMATION?
            </h2>
            <p>
              <em>
                <strong>In Short:</strong> We keep your information for as long as necessary to
                fulfill the purposes outlined in this privacy notice unless otherwise required by
                law.
              </em>
            </p>
            <p>
              We will only keep your personal information for as long as it is necessary for the
              purposes set out in this privacy notice, unless a longer retention period is required
              or permitted by law (such as tax, accounting or other legal requirements). No purpose
              in this notice will require us keeping your personal information for longer than three
              (3) months past the termination of the user's account.
            </p>
            <p>
              When we have no ongoing legitimate business need to process your personal information,
              we will either delete or anonymize such information, or, if this is not possible (for
              example, because your personal information has been stored in backup archives), then
              we will securely store your personal information and isolate it from any further
              processing until deletion is possible.
            </p>
            <h2 className="my-36" id="seven">
              7. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </h2>
            <p>
              <em>
                <strong>In Short:</strong> We aim to protect your personal information through a
                system of organizational and technical security measures.
              </em>
            </p>
            <p>
              We have implemented appropriate technical and organizational security measures
              designed to protect the security of any personal information we process. However,
              despite our safeguards and efforts to secure your information, no electronic
              transmission over the Internet or information storage technology can be guaranteed to
              be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or
              other unauthorized third parties will not be able to defeat our security, and
              improperly collect, access, steal, or modify your information. Although we will do our
              best to protect your personal information, transmission of personal information to and
              from our Services is at your own risk. You should only access the Services within a
              secure environment.
            </p>
            <h2 className="my-36" id="eight">
              8. WHAT ARE YOUR PRIVACY RIGHTS?
            </h2>
            <p>
              <em>
                <strong>In Short:</strong> You may review, change, or terminate your account at any
                time. If you are a resident in the EEA or UK and you believe we are unlawfully
                processing your personal information, you also have the right to complain to your
                local data protection supervisory authority. You can find their contact details{' '}
                <a
                  href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </em>
            </p>
            If you are a resident in Switzerland, the contact details for the data protection
            authorities are available
            <a
              href="https://www.edoeb.admin.ch/edoeb/en/home.html"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
            <p>
              If you have questions or comments about your privacy rights, you may email us at
              support@cashhomestoday.com.
            </p>
            <h4>Account Information</h4>
            <p>
              If you would at any time like to review or change the information in your account or
              terminate your account, you can:
            </p>
            <ul>
              <li>Log in to your account settings and update your user account.</li>

              <li>Contact us using the contact information provided.</li>
            </ul>
            <p>
              Upon your request to terminate your account, we will deactivate or delete your account
              and information from our active databases. However, we may retain some information in
              our files to prevent fraud, troubleshoot problems, assist with any investigations,
              enforce our Terms of Use and/or comply with applicable legal requirements.
            </p>
            <p>
              <strong>
                <u>Cookies and similar technologies:</u>
              </strong>{' '}
              Most Web browsers are set to accept cookies by default. If you prefer, you can usually
              choose to set your browser to remove cookies and to reject cookies. If you choose to
              remove cookies or reject cookies, this could affect certain features or services of
              our Services. To opt-out of interest-based advertising by advertisers on our Services
              visit{' '}
              <a href="http://www.aboutads.info/choices/" target="_blank" rel="noreferrer">
                here
              </a>
              .
            </p>
            <p>
              <strong>
                <u>Opting out of email marketing:</u>
              </strong>{' '}
              You can unsubscribe from our marketing email list at any time by clicking on the
              unsubscribe link in the emails that we send or by contacting us using the details
              provided below. You will then be removed from the marketing email list — however, we
              may still communicate with you, for example to send you service-related emails that
              are necessary for the administration and use of your account, to respond to service
              requests, or for other non-marketing purposes. To otherwise opt-out, you may:
            </p>
            <ul>
              <li>Access your account settings and update your preferences.</li>

              <li>Contact us using the contact information provided.</li>
            </ul>
            <h2 className="my-36" id="nine">
              9. CONTROLS FOR DO-NOT-TRACK FEATURES
            </h2>
            <p>
              Most web browsers and some mobile operating systems and mobile applications include a
              Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy
              preference not to have data about your online browsing activities monitored and
              collected. At this stage no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not currently respond to
              DNT browser signals or any other mechanism that automatically communicates your choice
              not to be tracked online. If a standard for online tracking is adopted that we must
              follow in the future, we will inform you about that practice in a revised version of
              this privacy notice.
            </p>
            <h2 className="my-36" id="ten">
              10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </h2>
            <p>
              <em>
                <strong>In Short:</strong> Yes, if you are a resident of California, you are granted
                specific rights regarding access to your personal information.
              </em>
            </p>
            <p>
              California Civil Code Section 1798.83, also known as the "Shine The Light" law,
              permits our users who are California residents to request and obtain from us, once a
              year and free of charge, information about categories of personal information (if any)
              we disclosed to third parties for direct marketing purposes and the names and
              addresses of all third parties with which we shared personal information in the
              immediately preceding calendar year. If you are a California resident and would like
              to make such a request, please submit your request in writing to us using the contact
              information provided below.
            </p>
            <p>
              If you are under 18 years of age, reside in California, and have a registered account
              with a Service, you have the right to request removal of unwanted data that you
              publicly post on the Services. To request removal of such data, please contact us
              using the contact information provided below, and include the email address associated
              with your account and a statement that you reside in California. We will make sure the
              data is not publicly displayed on the Services, but please be aware that the data may
              not be completely or comprehensively removed from all our systems (e.g. backups,
              etc.).
            </p>
            <h4>CCPA Privacy Notice</h4>
            <p>The California Code of Regulations defines a "resident" as:</p>
            <ol>
              <li>
                every individual who is in the State of California for other than a temporary or
                transitory purpose and
              </li>
              <li>
                every individual who is domiciled in the State of California who is outside the
                State of California for a temporary or transitory purpose
              </li>
            </ol>
            <p>All other individuals are defined as "non-residents."</p>
            <p>
              If this definition of "resident" applies to you, we must adhere to certain rights and
              obligations regarding your personal information.
            </p>
            <strong>What categories of personal information do we collect?</strong>
            <p>
              We have collected the following categories of personal information in the past twelve
              (12) months:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Examples</th>
                  <th>Collected</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A. Identifiers</td>
                  <td>
                    Contact details, such as real name, alias, postal address, telephone or mobile
                    contact number, unique personal identifier, online identifier, Internet Protocol
                    address, email address and account name
                  </td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    B. Personal information categories listed in the California Customer Records
                    statute
                  </td>
                  <td>
                    Name, contact information, education, employment, employment history and
                    financial information
                  </td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    C. Protected classification characteristics under California or federal law
                  </td>
                  <td>Gender and date of birth</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>D. Commercial information</td>
                  <td>
                    Transaction information, purchase history, financial details and payment
                    information
                  </td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>E. Biometric information</td>
                  <td>Fingerprints and voiceprints</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>F. Internet or other similar network activity</td>
                  <td>
                    Browsing history, search history, online behavior, interest data, and
                    interactions with our and other websites, applications, systems and
                    advertisements
                  </td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>G. Geolocation data</td>
                  <td>Device location</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>H. Audio, electronic, visual, thermal, olfactory, or similar information</td>
                  <td>
                    Images and audio, video or call recordings created in connection with our
                    business activities
                  </td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>I. Professional or employment-related information</td>
                  <td>
                    Business contact details in order to provide you our services at a business
                    level, job title as well as work history and professional qualifications if you
                    apply for a job with us
                  </td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>J. Education Information</td>
                  <td>Student records and directory information</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>K. Inferences drawn from other personal information</td>
                  <td>
                    Inferences drawn from any of the collected personal information listed above to
                    create a profile or summary about, for example, an individual’s preferences and
                    characteristics
                  </td>
                  <td>YES</td>
                </tr>
              </tbody>
            </table>
            <p>
              We may also collect other personal information outside of these categories instances
              where you interact with us in-person, online, or by phone or mail in the context of:
            </p>
            <ul>
              <li>Receiving help through our customer support channels;</li>
              <li>Participation in customer surveys or contests; and</li>
              <li>
                Facilitation in the delivery of our Services and to respond to your inquiries.
              </li>
            </ul>
            <strong>How do we use and share your personal information?</strong>
            <p>
              More information about our data collection and sharing practices can be found in this
              privacy notice.
            </p>
            <p>
              You may contact us by email at support@cashhomestoday.com, by visiting{' '}
              <a href="https://cashhomestoday.com/support">https://cashhomestoday.com/support</a>,
              or by referring to the contact details at the bottom of this document.
            </p>
            <p>
              If you are using an authorized agent to exercise your right to opt-out we may deny a
              request if the authorized agent does not submit proof that they have been validly
              authorized to act on your behalf.
            </p>
            <strong>Will your information be shared with anyone else?</strong>
            <p>
              We may disclose your personal information with our service providers pursuant to a
              written contract between us and each service provider. Each service provider is a
              for-profit entity that processes the information on our behalf.
            </p>
            <p>
              We may use your personal information for our own business purposes, such as for
              undertaking internal research for technological development and demonstration. This is
              not considered to be "selling" of your personal data.
            </p>
            <p>
              Cash Homes Today, LLC. has not disclosed or sold any personal information to third
              parties for a business or commercial purpose in the preceding 12 months. Cash Homes
              Today, LLC. will not sell personal information in the future belonging to website
              visitors, users and other consumers.
            </p>
            <strong>Your rights with respect to your personal data</strong>
            <u>Right to request deletion of the data - Request to delete</u>
            <p>
              You can ask for the deletion of your personal information. If you ask us to delete
              your personal information, we will respect your request and delete your personal
              information, subject to certain exceptions provided by law, such as (but not limited
              to) the exercise by another consumer of his or her right to free speech, our
              compliance requirements resulting from a legal obligation or any processing that may
              be required to protect against illegal activities.
            </p>
            <u>Right to be informed - Request to know</u>
            <p>Depending on the circumstances, you have a right to know:</p>
            <ul>
              <li>whether we collect and use your personal information;</li>

              <li>the categories of personal information that we collect;</li>

              <li>the purposes for which the collected personal information is used;</li>

              <li>whether we sell your personal information to third parties;</li>

              <li>
                the categories of personal information that we sold or disclosed for a business
                purpose;
              </li>

              <li>
                the categories of third parties to whom the personal information was sold or
                disclosed for a business purpose; and
              </li>

              <li>
                the business or commercial purpose for collecting or selling personal information.
              </li>
            </ul>
            <p>
              In accordance with applicable law, we are not obligated to provide or delete consumer
              information that is de-identified in response to a consumer request or to re-identify
              individual data to verify a consumer request.
            </p>
            <u>Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</u>
            <p>We will not discriminate against you if you exercise your privacy rights.</p>
            <u>Verification process</u>
            <p>
              Upon receiving your request, we will need to verify your identity to determine you are
              the same person about whom we have the information in our system. These verification
              efforts require us to ask you to provide information so that we can match it with
              information you have previously provided us. For instance, depending on the type of
              request you submit, we may ask you to provide certain information so that we can match
              the information you provide with the information we already have on file, or we may
              contact you through a communication method (e.g. phone or email) that you have
              previously provided to us. We may also use other verification methods as the
              circumstances dictate.
            </p>
            <p>
              We will only use personal information provided in your request to verify your identity
              or authority to make the request. To the extent possible, we will avoid requesting
              additional information from you for the purposes of verification. If, however, we
              cannot verify your identity from the information already maintained by us, we may
              request that you provide additional information for the purposes of verifying your
              identity, and for security or fraud-prevention purposes. We will delete such
              additionally provided information as soon as we finish verifying you.
            </p>
            <u>Other privacy rights</u>
            <ul>
              <li>you may object to the processing of your personal data.</li>

              <li>
                you may request correction of your personal data if it is incorrect or no longer
                relevant, or ask to restrict the processing of the data.
              </li>

              <li>
                you can designate an authorized agent to make a request under the CCPA on your
                behalf. We may deny a request from an authorized agent that does not submit proof
                that they have been validly authorized to act on your behalf in accordance with the
                CCPA.
              </li>

              <li>
                you may request to opt-out from future selling of your personal information to third
                parties. Upon receiving a request to opt-out, we will act upon the request as soon
                as feasibly possible, but no later than 15 days from the date of the request
                submission.
              </li>
            </ul>
            <p>
              To exercise these rights, you can contact us by email at support@cashhomestoday.com,
              by visiting https://cashhomestoday.com/support, or by referring to the contact details
              at the bottom of this document. If you have a complaint about how we handle your data,
              we would like to hear from you.
            </p>
            <h2 className="my-36" id="eleven">
              11. DO WE MAKE UPDATES TO THIS NOTICE?
            </h2>
            <p>
              <em>
                <strong>In Short:</strong> Yes, we will update this notice as necessary to stay
                compliant with relevant laws.
              </em>
            </p>
            <p>
              We may update this privacy notice from time to time. The updated version will be
              indicated by an updated "Revised" date and the updated version will be effective as
              soon as it is accessible. If we make material changes to this privacy notice, we may
              notify you either by prominently posting a notice of such changes or by directly
              sending you a notification. We encourage you to review this privacy notice frequently
              to be informed of how we are protecting your information.
            </p>
            <h2 className="my-36" id="twelve">
              12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </h2>
            <p>
              If you have questions or comments about this notice, you may email us at
              support@cashhomestoday.com or by post to:
            </p>
            <p>
              Cash Homes Today, LLC.
              <br />
              North Las Vegas, NV 89084
              <br />
              United States
            </p>
            <h2 className="my-36" id="thirteen">
              13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
            </h2>
            <p>
              Based on the applicable laws of your country, you may have the right to request access
              to the personal information we collect from you, change that information, or delete it
              in some circumstances. To request to review, update, or delete your personal
              information, please submit a request form by clicking <a href={`${proxy()}/support`}>here.</a>
            </p>
          </div>
        </div>
      }
    />
  );
};

export default Privacy;
