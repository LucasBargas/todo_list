import React, { useState } from 'react';
import Button from '../../../components/Button';
import Theme from '../../../styles/Theme';
import TodoListActionsContainer from './styles';

const buttonsList = [
  {
    id: 1,
    title: 'Todas',
    action: 'all',
  },
  {
    id: 2,
    title: 'Completas',
    action: 'done',
  },
  {
    id: 3,
    title: 'Incompletas',
    action: 'todo',
  },
];

const TodoListActions = ({ taskList, setAction }) => {
  const [buttonActiveId, setButtonActiveId] = useState(1);

  const handleClick = (id, action) => {
    setButtonActiveId(id);
    setAction(action);
  };

  return (
    <TodoListActionsContainer buttonActiveId={buttonActiveId}>
      {buttonsList.map((button) => (
        <Button
          key={button.action}
          width="100%"
          bg={Theme.colors.greenColor}
          bgHover={Theme.colors.greenColorHover}
          onClick={() => handleClick(button.id, button.action)}
        >
          {button.title}
        </Button>
      ))}
    </TodoListActionsContainer>
  );
};

export default TodoListActions;
