import React, { useState } from 'react';
import { T } from '@transifex/react';
import { Container, Grid, List, ListItem } from '@mui/material';
import Item from './Item';
import {
  Droppable,
  DragDropContext,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { Primary } from 'stories/Button.stories';

interface TrelloTaskProps {
  taske: string;
  primary: boolean;
}

interface Todo {
  taske: string;
  primary?: boolean;
}
/**
 * Primary UI component for user interaction
 */

export const TrelloTask = ({ taske: string }: Todo) => {
  const [todos, setTodos] = useState<Array<Todo>>([
    { taske: 'one', primary: false },
  ]);
  const [todosComp, setTodosComp] = useState<Array<Todo>>([]);
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      console.log('noooow');
      return;
    }
    if (destination.droppableId === source.droppableId) {
      console.log('in the if');
      return;
    }
    console.log('hello we are going her');
    let add;
    let active = todos;
    let complete = todosComp;
    // Source Logic
    if (source.droppableId === 'TodosList') {
      console.log(active[0]);
      add = active[0];
      active.splice(0, 1);
    } else {
      add = complete[0];
      complete.splice(0, 1);
    }

    // Destination Logic
    if (destination.droppableId === 'TodosList') {
      active.splice(0, 1, add);
    } else {
      complete.splice(0, 1, add);
    }

    setTodosComp(complete);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Grid container justifyContent='space-around'>
          <Droppable droppableId='TodosList'>
            {(provided, snapshot) => (
              <Grid
                item
                sx={{
                  backgroundColor: '#f7efda',
                  width: '12rem',
                  height: '60rem',
                  border: ' 1px solid black',
                }}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <Grid item>
                  <h1> Items </h1>

                  {todos.map((item) => (
                    <List>
                      <Item taske={item.taske} />
                    </List>
                  ))}
                </Grid>
              </Grid>
            )}
          </Droppable>
          <Droppable droppableId='CompliteList'>
            {(provided, snapshot) => (
              <Grid
                item
                sx={{
                  backgroundColor: '#f7efda',
                  width: '12rem',
                  height: '60rem',
                  border: ' 1px solid black',
                }}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <Grid item>
                  <h1> Done </h1>

                  {todosComp.map((item) => (
                    <Item taske={item.taske} />
                  ))}
                </Grid>
                {provided.placeholder}
              </Grid>
            )}
          </Droppable>
        </Grid>
      </Container>
    </DragDropContext>
  );
};
