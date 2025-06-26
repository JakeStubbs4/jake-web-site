import { Stack } from '@mui/material';
import messages from 'assets/messages';
import PersonIcon from '@mui/icons-material/Person';
import ContentHeader from 'components/contentHeader';
import './index.scss';

function AboutMeCard() {
  return (
		<Stack className="content-card">
      <ContentHeader icon={<PersonIcon />} header={{ text: "About me", size: "medium" }} />
      <Stack direction="row" spacing={5}>
        <div>
          <p className="about-me-intro">{messages.aboutMe.intro}</p>
          { messages.aboutMe.highlights?.map((highlight, highlightIdx) => {
            return (
              <div>
                <h3 className="highlight-intro">{highlight.intro}:</h3>
                { highlight.skills &&
                  <ul className="reduce-top-margin-highlight-list">
                    { highlight.skills?.map((skill, skillIdx) => {
                      return (
                        <li 
                          key={`${highlightIdx}-${skillIdx}`}
                          className="space-between-highlight-list-items"
                        >
                          {skill}
                        </li>
                      )
                    })}
                  </ul>
                }
              </div>
            )
          })}
        </div>
        <div className="image-container">
          <img className="image" alt="Profile" src="/headshot.jpeg"/>
          <p>
            {messages.aboutMe.callToAction}
            <a href={messages.links.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>!
          </p>
        </div>
      </Stack>
    </Stack>
  );
}

export default AboutMeCard;