import React, { createContext, useReducer, useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);
const TodoNextIdContext = createContext(null);
const TodoSelectedDateContext = createContext(null);

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return [action.todo, ...state];
        case 'TOGGLE':
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        case 'REMOVE':
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
}

const initialTodos = [
    {
        id: 1,
        text: '아침 운동',
        done: true,
        date: new Date(), // 현재 날짜
    },
    {
        id: 2,
        text: '코딩 테스트 문제 풀기',
        done: true,
        date: new Date(), // 현재 날짜
    },
    {
        id: 3,
        text: '스터디 하기',
        done: false,
        date: new Date('2023-07-12'), // 예시: 2023년 7월 12일
    },
    {
        id: 4,
        text: '리액트 공부하기',
        done: false,
        date: new Date('2023-07-12'), // 예시: 2023년 7월 12일
    },
];

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);
    const [selectedDate, setSelectedDate] = useState(new Date()); // 선택된 날짜 상태 생성

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    <TodoSelectedDateContext.Provider value={[selectedDate, setSelectedDate]}>
                        {children}
                    </TodoSelectedDateContext.Provider>
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

TodoProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export function useTodoState() {
    return useContext(TodoStateContext);
}

export function useTodoDispatch() {
    return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
    return useContext(TodoNextIdContext);
}

export function useSelectedDate() {
    return useContext(TodoSelectedDateContext);
}
