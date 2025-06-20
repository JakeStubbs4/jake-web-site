import { Grid } from '@mui/material';
import messages from 'assets/messages';
import SchoolIcon from '@mui/icons-material/School';
import ContentHeader from 'components/contentHeader';
import Education from 'components/education';
import ContentGrid from 'components/contentGrid';

function EducationCard() {
  return (
		<Grid item xs={8} container direction="column" className="content-card" justifyContent="flex-end">
			<ContentHeader icon={<SchoolIcon />} header={{ text: "Education", size: "medium" }} />
			<ContentGrid item>
				{messages.education.map(experience => {
					return <Education key={experience.title} experience={experience} />
				})}
			</ContentGrid>
		</Grid>
  );
}

export default EducationCard;