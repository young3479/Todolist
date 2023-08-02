import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TodoItem from './TodoItem';
import { useSelectedDate } from '../TodoContext'; // 선택된 날짜를 가져옴

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [selectedDate] = useSelectedDate(); // 선택된 날짜를 가져옵니다.

    useEffect(() => {
        fetchTodos();
    }, []);

    useEffect(() => {
        fetchTodos(); // 선택된 날짜가 변경될 때마다 할 일 목록을 다시 가져옵니다.
    }, [selectedDate]);

    const fetchTodos = async () => {
        try {
            const response = await axios.get('http://localhost:8080/data');
            setTodos(response.data.filter(todo => {
                const todoDate = new Date(todo.date);
                return todoDate.getFullYear() === selectedDate.getFullYear()
                    && todoDate.getMonth() === selectedDate.getMonth()
                    && todoDate.getDate() === selectedDate.getDate();
            }));
        } catch (error) {
            console.error("Can't fetch todos.", error);
        }
    };

    return (
        <TodoListBlock>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                    date={new Date(todo.date)} // 날짜 데이터를 Date 객체로 변환하여 전달
                />
            ))}
        </TodoListBlock>
    );
}

export default TodoList;
