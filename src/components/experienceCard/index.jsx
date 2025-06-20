import { Grid } from '@mui/material';
import messages from 'assets/messages';
import WorkIcon from '@mui/icons-material/Work';
import ContentHeader from 'components/contentHeader';
import Experience from 'components/experience';
import ContentGrid from 'components/contentGrid';

function ExperienceCard() {
  return (
		<Grid container xs={8} direction="column" className="content-card" justifyContent="flex-end">
			<ContentHeader item icon={<WorkIcon />} header={{ text: "Experience", size: "medium" }} />
			<ContentGrid item>
				{messages.experience.map(item => {
					return <Experience key={item.organizationName} experience={item} />
				})}
			</ContentGrid>
		</Grid>
  );
}

export default ExperienceCard;