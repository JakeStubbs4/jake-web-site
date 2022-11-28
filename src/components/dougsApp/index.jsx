import React, { useState } from 'react';
import { TextField, Grid, IconButton } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import styled from 'styled-components';
import * as theme from 'assets/variables.module.scss';
import ItemsList from './itemsList';
import './index.scss';

const StyledTextField = styled(TextField)({
    'color': theme.textColour,
    '& label.Mui-focused': {
        color: theme.accentColour,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: theme.accentColour,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: theme.accentColour,
        },
        '&:hover fieldset': {
            borderColor: theme.textColour,
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.accentColour,
        },
    },
});

const StyledAddBoxIcon = styled(AddBoxIcon)`
    color: ${theme.accentColour};
`

const DougsApp = () => {
    const [itemsList, setItemsList] = useState([]);
    const [textField, setTextField] = useState('');

    const addItem = () => {
        if (textField !== '') {
            const newList = itemsList;
            newList.push(textField);
            setItemsList(newList);
            setTextField('');
        }
    }

    return (
        <Grid className="doug-app-container" spacing={2} container direction="column">
            <Grid spacing={2} item container>
                <StyledTextField value={textField} onChange={e => setTextField(e.target.value)} label="Enter a list item" variant="outlined" />
                <IconButton aria-label="Add item" size="large" onClick={addItem}>
                    <StyledAddBoxIcon fontSize="large" />
                </IconButton>
            </Grid>
            <Grid item>
                {itemsList.length !== 0 && (
                    <ItemsList items={itemsList} setItems={setItemsList} />
                )}
            </Grid>
        </Grid>
    )
}

export default DougsApp;