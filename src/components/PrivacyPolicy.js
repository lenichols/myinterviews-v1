import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div class="privacy-container">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-6 middle-area">
                    <h1 className="text-center">Privacy policy</h1>
                    <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from myinterviewdiary.com (the “Site”).</p>
                    <h2>Personal information we collect</h2>
                    <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”.</p>
                    <p><b>We collect Device Information using the following technologies:</b></p>
                    <p>- “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.</p>
                    <p>- “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</p>
                    <p>- “Web beacons”, “tags”, and “pixels” are electronic files used to record information about how you browse the Site.</p>
                    <br />
                    <p>When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Login Information.</p>
                    <br />
                    <p>How do we use your personal information?</p>
                    <p>We only use your entry information on this site to present to you, the useer. Additionally, we may use your entry information including contact information to:</p>
                    <ul>
                        <li>-Communicate with you;</li>
                        <li>-When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
                        <li>-Make informed decisions on future product offerings</li>
                    </ul>
                    <br/>
                    <p>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our users browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>
                    <p>Sharing you personal Information</p>
                    <p>We do not share your Personal Information with third parties.</p>
                    <h2 className="text-left">Your rights</h2>
                    <p>If you are a United States of America resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>
                    <h2 className="text-left">Data retention</h2>
                    <p>When you save itemsin the Site, we will maintain your Login Information for our records unless and until you ask us to delete this information.</p> 
                    <h2 className="text-left">Changes</h2>
                    <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>
                    <h2 className="text-left">Minors</h2>
                    <p>The Site is not intended for individuals under the age of 8.</p>
                    <h2 className="text-left">Contact us</h2>
                    <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e‑mail support@myinterviewdiary.com or by mail using the details provided below:</p><br></br>
                    <p>My Interview Diary - NightVision Apps, LLC. © 2021-2022</p> 
                </div>
                <span class="text-center"><Link to="/login">Go to Login</Link></span>
            </div>
        </div>
    )
}

export default PrivacyPolicy
