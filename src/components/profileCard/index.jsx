import React from 'react';
import styled from 'styled-components';
import messages from 'assets/messages';
import { Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ContentHeader from 'components/contentHeader';
import SkillsContainer from 'components/skillsContainer';
import Experience from 'components/experience';
import Education from 'components/education';
import './index.scss';

export const ContentItem = styled(Grid)`
	margin-top: -2vh;
`

function ProfileCard() {
  return (
		<Grid container direction="row" spacing={2} className="profile-card" justifyContent="flex-end">
			<Grid item xs={8} container direction="column">
				<ContentHeader icon={<WorkIcon />} header={{ text: "Experience", size: "medium" }} />
				<ContentItem item>
					{messages.experiences.map(experience => {
						return <Experience experience={experience} />
					})}
				</ContentItem>
				<ContentHeader icon={<SchoolIcon />} header={{ text: "Education", size: "medium" }} />
				<ContentItem item>
					{messages.education.map(experience => {
						return <Education experience={experience} />
					})}
				</ContentItem>
			</Grid>
			<Grid item xs={1} />
			<Grid item xs={3}>
				<img alt="Profile" className="image-container" src="/avatar.jpeg" width="5vh" />
				<ContentHeader icon={<PersonIcon />} header={{ text: "About me", size: "small" }} />
				<ContentItem item>
					<p>{messages.aboutMe}</p>
				</ContentItem>
				<ContentHeader icon={<AssignmentIcon fontSize='small'/>} header={{ text: "Skills", size: "small" }} />
				<ContentItem item>
					<SkillsContainer skills={messages.skills} />
				</ContentItem>
			</Grid>
		</Grid>
  );
}

export default ProfileCard;