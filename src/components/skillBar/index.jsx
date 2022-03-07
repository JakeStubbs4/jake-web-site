import React from 'react';
import styled from 'styled-components';
import { Rating, Stack } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import * as theme from 'assets/variables.module.scss';

const StyledRating = styled(Rating)`
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
      <h3>{title}</h3>
      <StyledRating
        name={title}
        value={rating}
        size='large'
        icon={<SquareIcon fontSize="inherit" />}
        emptyIcon={<StyledEmptySquare fontSize="inherit" />}
        readOnly
      />
    </Stack>
  )
}

export default SkillBar;