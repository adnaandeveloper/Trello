// @flow
import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { colors } from '@atlaskit/theme';
import { borderRadius, grid } from 'modules/common/components/constants';
import type { Quote, AuthorColors } from 'modules/common/components/types';
import type { DraggableProvided } from 'react-beautiful-dnd';
import { TeskDialog } from 'modules/common/components/taskDiaglog/TeskDialog';
import { Button } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from 'context/api-context';

type Props = {
  quote: Quote;
  isDragging: boolean;
  provided: DraggableProvided;
  isClone?: boolean | undefined;
  isGroupedOver?: boolean;
  style?: Object;
  index?: number;
};

const getBackgroundColor = (
  isDragging: boolean,
  isGroupedOver: boolean | undefined,
  authorColors: AuthorColors
) => {
  if (isDragging) {
    return authorColors.soft;
  }

  if (isGroupedOver) {
    return colors.N30;
  }

  return colors.N0;
};

const getBorderColor = (isDragging: boolean, authorColors: AuthorColors) =>
  isDragging ? authorColors.hard : 'transparent';

const imageSize: number = 40;

const CloneBadge = styled.div`
  background: ${colors.G100};
  bottom: ${grid / 2}px;
  border: 2px solid ${colors.G200};
  border-radius: 50%;
  box-sizing: border-box;
  font-size: 10px;
  position: absolute;
  right: -${imageSize / 3}px;
  top: -${imageSize / 3}px;
  transform: rotate(40deg);

  height: ${imageSize}px;
  width: ${imageSize}px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.a<{
  isDragging: boolean;
  isGroupedOver: boolean | undefined;
  colors: AuthorColors;
  isClone?: boolean | undefined;
}>`
  border-radius: ${borderRadius}px;
  border: 2px solid transparent;
  border-color: ${(props) => getBorderColor(props.isDragging, props.colors)};
  background-color: ${(props) =>
    getBackgroundColor(props.isDragging, props.isGroupedOver, props.colors)};
  box-shadow: ${({ isDragging }) =>
    isDragging ? `2px 2px 1px ${colors.N70}` : 'none'};
  box-sizing: border-box;
  padding: ${grid}px;
  min-height: ${imageSize}px;
  margin-bottom: ${grid}px;
  user-select: none;

  /* anchor overrides */
  color: ${colors.N900};

  &:hover,
  &:active {
    color: ${colors.N900};
    text-decoration: none;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.colors.hard};
    box-shadow: none;
  }

  /* flexbox */
  display: flex;
`;

const Content = styled.div`
  /* flex child */
  flex-grow: 1;

  /*
    Needed to wrap text in ie11
    https://stackoverflow.com/questions/35111090/why-ie11-doesnt-wrap-the-text-in-flexbox
  */
  flex-basis: 100%;

  /* flex parent */
  display: flex;
  flex-direction: column;
`;

const BlockQuote = styled.div`
  &::before {
    content: open-quote;
  }

  &::after {
    content: close-quote;
  }
`;

const Footer = styled.div`
  display: flex;
  margin-top: ${grid}px;
  align-items: center;
`;

const Author = styled.small<{ colors: AuthorColors }>`
  color: ${(props) => props.colors.hard};
  flex-grow: 0;
  margin: 0;
  background-color: ${(props) => props.colors.soft};
  border-radius: ${borderRadius}px;
  font-weight: normal;
  padding: ${grid / 2}px;
`;

const QuoteId = styled.small`
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0;
  font-weight: normal;
  text-overflow: ellipsis;
  text-align: right;
`;

function getStyle(provided: DraggableProvided, style?: Object) {
  if (!style) {
    return provided.draggableProps.style;
  }

  return {
    ...provided.draggableProps.style,
    ...style,
  };
}

// Previously this extended React.Component
// That was a good thing, because using React.PureComponent can hide
// issues with the selectors. However, moving it over does can considerable
// performance improvements when reordering big lists (400ms => 200ms)
// Need to be super sure we are not relying on PureComponent here for
// things we should be doing in the selector as we do not know if consumers
// will be using PureComponent
function QuoteItem(props: Props) {
  const { quote, isDragging, isGroupedOver, provided, style, isClone, index } =
    props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const { taskDiaglogOpen, setTaskListNameAndTasleTitleName } =
    useContext(AuthContext);
  return (
    <div>
      <Container
        isDragging={isDragging}
        isGroupedOver={isGroupedOver}
        isClone={isClone}
        colors={quote.author.colors}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        data-style={getStyle(provided, style)}
        data-is-dragging={isDragging}
        data-testid={quote.id}
        data-index={index}
        aria-label={`${quote.author.name} quote ${quote.content}`}
      >
        {isClone ? <CloneBadge>Clone</CloneBadge> : null}
        <Content>
          <BlockQuote
            onClick={() => {
              navigate('task/:taskId');

              taskDiaglogOpen();
              setTaskListNameAndTasleTitleName(
                quote.content,
                quote.author.name
              );
              localStorage.setItem('taskName', quote.content);
              localStorage.setItem('taskList', quote.author.name);
            }}
          >
            {quote.content}
          </BlockQuote>
          <Footer>
            <Author colors={quote.author.colors}>{quote.author.name}</Author>
            <QuoteId>id:{quote.id}</QuoteId>
          </Footer>
        </Content>
        <Outlet />
      </Container>
    </div>
  );
}

export default React.memo<Props>(QuoteItem);
