import React from 'react';
import styled from 'styled-components';
import { Rating, Stack } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import theme from 'assets/variables.module.scss';

const StyledRating = styled(Rating)`
  margin-top: -1.5vh;
  color: ${theme.accentColour};
  z-index: 1;
`;

const StyledEmptySquare = styled(SquareOutlinedIcon)`
  color: ${theme.textColour};
  z-index: 1;
`;

const SkillBar = ({title, rating}) => {
  return (
    <Stack spacing={0}>
      <h4>{title}</h4>
      <StyledRating
        name={title}
        value={rating}
        size='medium'
        icon={<SquareIcon fontSize="inherit" />}
        emptyIcon={<StyledEmptySquare fontSize="inherit" />}
        readOnly
      />
    </Stack>
  )
}

export default SkillBar;