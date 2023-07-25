import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TodoItem from './TodoItem';
//import { useSelectedDate, useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
    const [todos, setTodos] = useState([]);
    // eslint-disable-next-line
    //const [todoState, dispatch] = useTodo();


    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            // 변경할 부분: 실제 API 주소로 교체
            // const response = await axios.get('http://localhost:8080/todos');
            const response = await axios.get('http://localhost:8080/api/todos');
            setTodos(response.data);
        } catch (error) {
            console.error("Can't fetch todos.", error);
        }
    };

    // main 브랜치의 변경 사항
    // const todos = useTodoState();
    // const selectedDate = useSelectedDate();

    // const filteredTodos = todos.filter(todo => {
    //     const todoDate = new Date(todo.date);
    //     const selectedDateOnly = new Date(
    //         selectedDate.getFullYear(),
    //         selectedDate.getMonth(),
    //         selectedDate.getDate()
    //     );

    //     return (
    //         todoDate.getFullYear() === selectedDateOnly.getFullYear() &&
    //         todoDate.getMonth() === selectedDateOnly.getMonth() &&
    //         todoDate.getDate() === selectedDateOnly.getDate()
    //     );
    // });

    return (
        <TodoListBlock>
            {todos.map(todo => (
                <TodoItem
                    id={todo.id}
                    text={todo.title}  // 변경: API가 반환하는 속성에 맞게 수정
                    done={todo.completed}  // 변경: API가 반환하는 속성에 맞게 수정
                    key={todo.id} // id,text,targetdate,done
                />
            ))}
        </TodoListBlock>
    );
}

export default TodoList;
