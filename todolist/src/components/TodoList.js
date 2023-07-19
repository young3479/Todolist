import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useSelectedDate, useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
    const todos = useTodoState();
    const selectedDate = useSelectedDate();

    const filteredTodos = todos.filter(todo => {
        const todoDate = new Date(todo.date);
        const selectedDateOnly = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate()
        );

        return (
            todoDate.getFullYear() === selectedDateOnly.getFullYear() &&
            todoDate.getMonth() === selectedDateOnly.getMonth() &&
            todoDate.getDate() === selectedDateOnly.getDate()
        );
    });

    return (
        <TodoListBlock>
            {filteredTodos.map(todo => (
                <TodoItem
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                    key={todo.id}
                    date={todo.date}
                />
            ))}
        </TodoListBlock>
    );
}

export default TodoList;
