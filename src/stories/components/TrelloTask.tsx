import React, { useState } from 'react';
import { T } from '@transifex/react';
import { Container, Grid, List } from '@mui/material';
import Item from './Item';
import { Droppable, DragDropContext, DropResult } from 'react-beautiful-dnd';

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

    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId) {
      return;
    }

    let add;
    let active = todos;
    let complete = todosComp;
    // Source Logic
    if (source.droppableId === 'TodosList') {
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

                  {todos.map((item, index) => (
                    <List key={index}>
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
