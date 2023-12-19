import aboutLogo from '../assets/aboutPage-img.jpg';
import facebookLogo from '../assets/facebook-logo.png';
import twitterLogo from '../assets/twitter-logo.png';
import instagramLogo from '../assets/instagram-logo.png';

const AboutPage = () => {
  return (
    <div className='aboutPage'>
      <h1>About Us</h1>
      <img src={aboutLogo} alt='aboutLogo' className='aboutLogo'/>

      <div className='aboutText'>
        <p>
          Our mission at Fur & Fluff Checkup Vets is for your precious friends to be healthy. We work hard to provide excellent healthcare that is customized to meet the specific needs of each pet, supported by a committed staff of knowledgeable veterinarians and caregivers.
        </p>

        <br />

        <p>
          We are dedicated to providing more than simply medical care; we recognize the special relationship you have with your animals. For this reason, we work to create a cozy, friendly atmosphere where animals and their owners can feel valued and at ease.
        </p>

        <br />

        <p>
          Using the most recent developments in veterinary medicine, we prioritize comprehensive care, from routine examinations to specialist treatments. The wellbeing and health of your pet are the main priorities in all that we do.
        </p>

        <br />

        <p>
          We're more than simply a veterinarian clinic at Fur & Fluff Checkup Vets; we're your allies in keeping your furry family members happy and healthy. Count on us to promote their well-being, one foot at a time.
        </p>

      </div>

      <div className='aboutText1'>
        <h3>Follow us on:</h3>

        <li>Facebook: <a href='#'><img src={facebookLogo} alt='FacebookLogo' className='facebookLogo' /></a></li>
        <li>Twitter: <a href='#'><img src={twitterLogo} alt='TwitterLogo' className='twitterLogo' /></a></li>
        <li>Instagram: <a href='#'><img src={instagramLogo} alt='InstagramLogo' className='instagramLogo' /></a></li>
      </div>
      
    </div>
  )
}

export default AboutPage;
