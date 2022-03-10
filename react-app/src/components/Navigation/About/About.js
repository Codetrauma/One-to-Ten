import ArrowButton from '../../Forms/ArrowButton/ArrowButton';
import { Link } from 'react-router-dom';

import './About.css';

const About = () => {

  return (
    <div id="about__container">
      <div className='about-us-header'>
        <h1>One-to-Ten</h1>
        <p className="p-1 main-color">
          This is a social experiment design to match like-minded individuals using collaborative surveys. Answer questions about your lifestyle habits and outlooks on life on a scale of 1 to 10, then get matched with users who share the most similarities.
        </p>
        <p className="p-1">
          <Link to='/algo' className='underline-slide algo__link' >
            Learn more about our matching algorithm.
          </Link>
        </p>
      </div>
      <h3>The Creators of One-to-Ten</h3>
      <div className='about-us-main'>
        <div className='cameron'>
          <h4>Cameron Whiteside</h4>
          <div>
            <ArrowButton>
              <a href='https://github.com/CameronWhiteside' className="about__link" target="_blank" rel="noreferrer">Github</a>
            </ArrowButton>
            <div>
              <ArrowButton>
                <a href='https://www.linkedin.com/in/cameronwhiteside/' className="about__link" target="_blank" rel="noreferrer">LinkedIn</a>
              </ArrowButton>
            </div>
          </div>
        </div>

        <div className='christy'>
          <h4> Christy Chen </h4>
          <div>
            <ArrowButton>
              <a href='https://github.com/christywchen' className="about__link" target="_blank" rel="noreferrer">Github</a>
            </ArrowButton>
            <div>
              <ArrowButton>
                <a href='https://www.linkedin.com/in/christywchen/' className="about__link" target="_blank" rel="noreferrer">LinkedIn</a>
              </ArrowButton>
            </div>
          </div>
        </div>
        <div className='aletheia'>
          <h4>Aletheia Kim</h4>
          <div>
            <ArrowButton>
              <a href='https://github.com/akim38' className="about__link" target="_blank" rel="noreferrer">Github</a>
            </ArrowButton>
          </div>
          <div>
            <ArrowButton>
              <a href='https://www.linkedin.com/in/aletheia-kim-47086922a/' className="about__link" target="_blank" rel="noreferrer">LinkedIn</a>
            </ArrowButton>
          </div>
        </div>
        <div className='tanner'>
          <h4>Tanner Shaw</h4>
          <div>
            <ArrowButton>
              <a href='https://github.com/JTannerShaw/' className="about__link" target="_blank" rel="noreferrer">Github</a>
            </ArrowButton>
          </div>
          <div>
            <ArrowButton>
              <a href='https://www.linkedin.com/in/tanner-shaw-a25702162/' className="about__link" target="_blank" rel="noreferrer">LinkedIn</a>
            </ArrowButton>
          </div>
        </div>
      </div>
    </div >
  )
}

export default About;
