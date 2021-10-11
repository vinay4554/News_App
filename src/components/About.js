import react from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
function About(){
    return(
            <div className="about">
                <div className="about-section">
                <h1>About Me</h1>
                <p>Vinay Chittibommala</p>
                <p>Indian Institute Of Information Technology Vadodara</p>
                <p>B.Tech in Information Technology</p>
                </div>
                <div className="project-section">
                <h1>News App</h1>
                <p>By using this project one can be able to know The top headlines from every article published by over 80,000 news sources and blogs in the last 3 years </p>
                <p>And also All news from every article published by over 80,000 news sources and blogs in the last 3 years</p>
                <p>The user can either search by keywords for particular news or then can select particular category as they wish.</p>
                <p>The data here provided are taken From NEWS API</p>
                </div>
                <div className="contact-section">
                <h1>Contact Here</h1>
                 <div className="phone">
                     <FontAwesomeIcon id="icon" icon={faPhoneAlt}/> +91951561016
                 </div>
                 <div className="email">
                 <FontAwesomeIcon id="icon" icon={faEnvelope }/> 
                 <a href="mailto:vinaychittibommala@gmail.com">vinaychittibommal@gmail.com</a>
                 </div>
                 <div className="instagram">
                 <FontAwesomeIcon id="icon" icon={faInstagram}/>  vinay_45
                 </div>
                </div>
            </div>
    )
}

export default About;