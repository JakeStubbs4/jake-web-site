import React from 'react';
import styled from 'styled-components';
import * as theme from 'assets/variables.module.scss';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledDeleteIcon = styled(DeleteIcon)`
    color: ${theme.accentColour};
`

const ItemsList = ({ items, setItems }) => {

    const deleteItem = index => {
        const newList = items;
        newList.splice(index, 1);
        console.log('items: ', items);
        console.log('new items: ', newList);
        setItems(newList);
    }

    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'black' }}>
            {items.map((value, index) => {
                console.log('VAL: INDEX: ', value, index);
                return (
                    <ListItem
                        key={value}
                    >
                        <ListItemText id="switch-list-label-wifi" primary={value} />
                        <IconButton edge="end" aria-label="Delete item" size="large" onClick={() => deleteItem(index)}>
                            <StyledDeleteIcon fontSize="medium" />
                        </IconButton>
                    </ListItem>
                );
            })}
        </List>
    )
}

export default ItemsList;