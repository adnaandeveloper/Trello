import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { colors } from '@atlaskit/theme';
import {
  DropResult,
  DraggableLocation,
  DroppableProvided,
  Droppable,
  DragDropContext,
} from 'react-beautiful-dnd';
import Header from './../../common/components/Header';
import { useTheme } from '@mui/material/';
import { QuoteMap, Quote } from 'modules/common/components/types';
import Column from './column';
import reorder, { reorderQuoteMap } from 'modules/common/components/reorder';
import AddListButton from 'modules/common/components/AddListButton';
import AddTaskListField from 'modules/common/components/AddTaskListField';
const ParentContainer = styled.div<{ height: string }>`
  height: ${({ height }) => height};
  overflow-x: hidden;
  overflow-y: auto;
`;

const Container = styled.div`
  background-color: #d29134;
  min-height: 100vh;
  /* like display:flex but will allow bleeding over the window width */
  min-width: 100vw;
  display: inline-flex;
`;

type Props = {
  initial: QuoteMap;
  withScrollableColumns?: boolean;
  isCombineEnabled?: boolean;
  containerHeight?: string;
  useClone?: boolean;
  onClickHandler: () => void;
  listIsAddeable: boolean;
  onChangHanlerAddAuthor: (name: string) => void;
  AddNewAotuhersToTheAuthors: () => void;
  authorName?: string;
  addQuote: (author?: string) => void;
  addQuoteName: (name: string) => void;
};

const Board = (props: Props) => {
  const theme = useTheme();
  /* eslint-disable react/sort-comp */
  const [myColumns, setColumns] = useState(props.initial);
  const [orderedState, SetOrdered] = useState(Object.keys(props.initial));

  useEffect(() => {
    setColumns(props.initial);
    SetOrdered(Object.keys(props.initial));
  }, [props]);

  const onDragEnd = (result: DropResult) => {
    if (result.combine) {
      if (result.type === 'COLUMN') {
        const shallow: string[] = [...orderedState];
        shallow.splice(result.source.index, 1);
        SetOrdered(shallow);
        return;
      }

      const column: Quote[] = myColumns[result.source.droppableId];
      const withQuoteRemoved: Quote[] = [...column];
      withQuoteRemoved.splice(result.source.index, 1);
      const columns: QuoteMap = {
        ...myColumns,
        [result.source.droppableId]: withQuoteRemoved,
      };
      setColumns(columns);
      return;
    }

    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const source: DraggableLocation = result.source;
    const destination: DraggableLocation = result.destination;

    // did not move anywhere - can bail early
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // reordering column
    if (result.type === 'COLUMN') {
      const ordered: string[] = reorder(
        orderedState,
        source.index,
        destination.index
      );

      SetOrdered(ordered);

      return;
    }

    const data = reorderQuoteMap({
      quoteMap: myColumns,
      source,
      destination,
    });

    setColumns(data.quoteMap);
  };

  const columns: QuoteMap = myColumns;
  const ordered: string[] = orderedState;
  const { containerHeight, useClone, isCombineEnabled } = props;

  const board = (
    <Droppable
      droppableId='board'
      type='COLUMN'
      direction='horizontal'
      ignoreContainerClipping={Boolean(containerHeight)}
      isCombineEnabled={isCombineEnabled}
    >
      {(provided: DroppableProvided) => (
        <Container ref={provided.innerRef} {...provided.droppableProps}>
          {ordered.map((key: string, index: number) => (
            <Column
              key={key}
              index={index}
              title={key}
              quotes={columns[key]}
              isCombineEnabled={isCombineEnabled}
              useClone={useClone}
              addQuote={props.addQuote}
              addQuoteName={props.addQuoteName}
            />
          ))}
          {provided.placeholder}
          {props.listIsAddeable ? (
            <AddTaskListField
              onClickHandler={props.onClickHandler}
              onChangHanlerAddAuthor={props.onChangHanlerAddAuthor}
              AddNewAotuhersToTheAuthors={props.AddNewAotuhersToTheAuthors}
              authorName={props.authorName}
            />
          ) : (
            <AddListButton onClickHandler={props.onClickHandler} />
          )}
        </Container>
      )}
    </Droppable>
  );

  return (
    <React.Fragment>
      <div onClick={() => console.log()}>
        <Header
          main={theme.palette.secondary.main}
          light={theme.palette.secondary.light}
          dark={theme.palette.secondary.dark}
        />
      </div>
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          {containerHeight ? (
            <ParentContainer height={containerHeight}>{board}</ParentContainer>
          ) : (
            board
          )}
        </DragDropContext>

        <Global
          styles={css`
            body {
              background: ${colors.B200};
            }
          `}
        />
      </div>
    </React.Fragment>
  );
};

export default Board;
