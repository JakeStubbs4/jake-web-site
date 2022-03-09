import messages from 'assets/messages';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Stack from '@mui/material/Stack';
import './index.scss';

const NavIcons = (props) => {
  return (
    <div className="icons-box">
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
      >
        <a href={messages.links.linkedIn}><LinkedInIcon fontSize={props.iconSize} /></a>
        <a href={messages.links.gitHub}><GitHubIcon fontSize={props.iconSize} /></a>
      </Stack>
    </div>
  );
}

export default NavIcons;
