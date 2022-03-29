import { ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface Todo {
  taske: string;
  primary?: boolean;
}

const Item: React.FC<Todo> = (taske) => (
  <Draggable draggableId={'draggableId'} index={1}>
    {(provided, snapshot) => (
      <ListItemButton
        sx={{ backgroundColor: 'white', margin: '4px' }}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <ListItemText primary={taske.taske} />
      </ListItemButton>
    )}
  </Draggable>
);
export default Item;
