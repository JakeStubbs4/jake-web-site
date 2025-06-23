import { Stack } from '@mui/material';
import AboutMeCard from 'components/aboutMeCard';
import ExperienceCard from 'components/experienceCard';
import EducationCard from 'components/educationCard';
import './index.scss';

function Homepage() {
  return (
    <div className="homepage-container">
      <Stack>
        <AboutMeCard />
        <ExperienceCard />
        <EducationCard />
      </Stack>
    </div>
  );
}

export default Homepage;