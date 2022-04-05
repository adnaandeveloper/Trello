import React, { useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '@atlaskit/theme';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import QuoteItem from './quote-item';
import { grid } from 'modules/common/components/constants';
import Title from './title';
import { Quote } from 'modules/common/components/types';
import {
  DroppableProvided,
  DroppableStateSnapshot,
  DraggableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd';
import AddOneTaske from './AddOneTaske';

import AddCardTextFeild from './AddCardTextFeild';

export const getBackgroundColor = (
  isDraggingOver: boolean,
  isDraggingFrom: boolean
): string => {
  if (isDraggingOver) {
    return colors.R50;
  }
  if (isDraggingFrom) {
    return colors.T50;
  }
  return colors.N30;
};

const Wrapper = styled.div<{
  isDraggingOver: boolean;
  isDraggingFrom: boolean;
  isDropDisabled: boolean | undefined;
}>`
  background-color: ${(props) =>
    getBackgroundColor(props.isDraggingOver, props.isDraggingFrom)};
  display: flex;
  flex-direction: column;
  opacity: ${({ isDropDisabled }) => (isDropDisabled ? 0.5 : 'inherit')};
  padding: ${grid}px;
  border: ${grid}px;
  padding-bottom: 0;
  transition: background-color 0.2s ease, opacity 0.1s ease;
  user-select: none;
  width: 250px;
`;

const scrollContainerHeight: number = 250;
const minHeight: number = 0;

const DropZone = styled.div`
  /* stop the list collapsing when empty */
  min-height: ${minHeight}px;

  /*
    not relying on the items for a margin-bottom
    as it will collapse when the list is empty
  */
  padding-bottom: ${grid}px;
`;

const ScrollContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  max-height: ${scrollContainerHeight}px;
`;

/* stylelint-disable block-no-empty */
const Container = styled.div``;
/* stylelint-enable */

type Props = {
  listId?: string;
  listType?: string;
  quotes: Quote[];
  title?: string;
  internalScroll?: boolean;
  scrollContainerStyle?: Object;
  isDropDisabled?: boolean;
  isCombineEnabled?: boolean;
  style?: Object;
  // may not be provided - and might be null
  ignoreContainerClipping?: boolean;

  useClone?: boolean | undefined;
  addQuote: (author?: string) => void;
  sendTheTitle: () => void;
  addQuoteName: (name: string) => void;
};

type QuoteListProps = {
  quotes: Quote[] | any;
};

const InnerQuoteList = React.memo(function InnerQuoteList(
  props: QuoteListProps
) {
  return props.quotes.map((quote: Quote, index: number) => (
    <Draggable key={quote.id} draggableId={quote.id} index={index}>
      {(
        dragProvided: DraggableProvided,
        dragSnapshot: DraggableStateSnapshot
      ) => (
        <div style={{ minHeight: '0px !important' }}>
          <QuoteItem
            key={quote.id}
            quote={quote}
            isDragging={dragSnapshot.isDragging}
            isGroupedOver={Boolean(dragSnapshot.combineTargetFor)}
            provided={dragProvided}
          />
        </div>
      )}
    </Draggable>
  ));
});

type InnerListProps = {
  dropProvided: DroppableProvided;
  quotes: Quote[];
  title?: string;
  addQuote: (author?: string) => void;
  listId?: string;
  sendTheTitle: () => void;
  addQuoteName: (name: string) => void;
};

function InnerList(props: InnerListProps) {
  const { quotes, dropProvided } = props;
  const title = props.title ? <Title>{props.title}</Title> : null;
  const [showTextField, setShowTextField] = useState(false);

  const togleShowTextField = () => {
    setShowTextField(!showTextField);
  };

  return (
    <Container>
      <div>
        {title}
        <DropZone ref={dropProvided.innerRef}>
          <div>
            <InnerQuoteList quotes={quotes} />
          </div>

          {dropProvided.placeholder}
        </DropZone>
        {showTextField ? (
          <AddCardTextFeild
            togleShowTextField={togleShowTextField}
            addQuote={props.addQuote}
            listId={props.listId}
            sendTheTitle={props.sendTheTitle}
            addQuoteName={props.addQuoteName}
          />
        ) : (
          <AddOneTaske
            addQuote={props.addQuote}
            listId={props.listId}
            togleShowTextField={togleShowTextField}
            sendTheTitle={props.sendTheTitle}
          />
        )}
      </div>
    </Container>
  );
}

export default function QuoteList(props: Props) {
  const {
    ignoreContainerClipping,
    internalScroll,
    scrollContainerStyle,
    isDropDisabled,
    isCombineEnabled,
    listId = 'LIST',
    listType,
    style,
    quotes,
    title,
  } = props;

  return (
    <Droppable
      droppableId={listId}
      type={listType}
      ignoreContainerClipping={ignoreContainerClipping}
      isDropDisabled={isDropDisabled}
      isCombineEnabled={isCombineEnabled}
    >
      {(
        dropProvided: DroppableProvided,
        dropSnapshot: DroppableStateSnapshot
      ) => (
        <Wrapper
          style={style}
          isDraggingOver={dropSnapshot.isDraggingOver}
          isDropDisabled={isDropDisabled}
          isDraggingFrom={Boolean(dropSnapshot.draggingFromThisWith)}
          {...dropProvided.droppableProps}
        >
          {internalScroll ? (
            <ScrollContainer style={scrollContainerStyle}>
              <InnerList
                quotes={quotes}
                title={title}
                dropProvided={dropProvided}
                addQuote={props.addQuote}
                sendTheTitle={props.sendTheTitle}
                addQuoteName={props.addQuoteName}
                // eslint-disable-next-line react/jsx-no-duplicate-props
              />
            </ScrollContainer>
          ) : (
            <InnerList
              quotes={quotes}
              title={title}
              dropProvided={dropProvided}
              addQuote={props.addQuote}
              sendTheTitle={props.sendTheTitle}
              addQuoteName={props.addQuoteName}
              // eslint-disable-next-line react/jsx-no-duplicate-props
            />
          )}
        </Wrapper>
      )}
    </Droppable>
  );
}
