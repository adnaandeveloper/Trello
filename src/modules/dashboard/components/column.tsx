// @flow
import React from 'react';
import styled from '@emotion/styled';
import { colors } from '@atlaskit/theme';
import { grid, borderRadius } from 'modules/common/components/constants';

import {
  DraggableProvided,
  DraggableStateSnapshot,
  Draggable,
} from 'react-beautiful-dnd';
import QuoteList from './quote-list';
import Title from './title';
import { Quote } from 'modules/common/components/types';

const Container = styled.div`
  margin: ${grid}px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div<{ isDragging: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  background-color: ${({ isDragging }) =>
    isDragging ? colors.G50 : colors.N30};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.G50};
  }
`;

type Props = {
  title: string;
  quotes: Quote[];
  index: number;
  isScrollable?: boolean;
  isCombineEnabled?: boolean;
  useClone?: boolean;
  addQuote: (author?: string) => void;
  addQuoteName: (name: string) => void;
};

const Column = (props: Props) => {
  const title: string = props.title;
  const quotes: Quote[] = props.quotes;
  const index: number = props.index;

  const sendTheTitle = () => {
    props.addQuote(title);
  };

  return (
    <div style={{ marginTop: '5rem' }}>
      <Draggable draggableId={title} index={index}>
        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
          <Container ref={provided.innerRef} {...provided.draggableProps}>
            <Header isDragging={snapshot.isDragging}>
              <Title
                data-isDragging={snapshot.isDragging}
                {...provided.dragHandleProps}
                aria-label={`${title} quote list`}
              >
                {title}
              </Title>
            </Header>
            <QuoteList
              listId={props.title}
              listType='QUOTE'
              addQuote={props.addQuote}
              sendTheTitle={sendTheTitle}
              addQuoteName={props.addQuoteName}
              style={{
                backgroundColor: snapshot.isDragging ? colors.G50 : null,
              }}
              quotes={quotes}
              internalScroll={props.isScrollable}
              isCombineEnabled={Boolean(props.isCombineEnabled)}
              useClone={Boolean(props.useClone)}
            />
          </Container>
        )}
      </Draggable>
    </div>
  );
};

export default Column;
