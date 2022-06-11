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
		<Grid container direction="row" spacing={2} className="profile-card">
			<Grid item xs={3}>
				<img alt="Profile" className="image-container" src="/avatar.jpeg" width="5vh" />
			</Grid>
			<Grid item xs={8} container direction="column">
				<ContentHeader icon={<PersonIcon />} header="About me" />
				<ContentItem item>
					<p>{messages.aboutMe}</p>
				</ContentItem>
				<ContentHeader icon={<AssignmentIcon />} header="Skills" />
				<ContentItem item>
					<SkillsContainer skills={messages.skills} />
				</ContentItem>
				<ContentHeader icon={<WorkIcon />} header="Experience" />
				<ContentItem item>
					{messages.experiences.map(experience => {
						return <Experience experience={experience} />
					})}
				</ContentItem>
				<ContentHeader icon={<SchoolIcon />} header="Education" />
				<ContentItem item>
					{messages.education.map(experience => {
						return <Education experience={experience} />
					})}
				</ContentItem>
			</Grid>
		</Grid>
  );
}

export default ProfileCard;