import React, { createContext, useReducer, useContext, useRef } from 'react';
import PropTypes from "prop-types";


const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);
const TodoNextIdContext = createContext(null);

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return [action.todo, ...state];  // 수정된 부분
           // return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}

const initialTodos = [
    {
        id: 1,
        text: '아침 운동',
        done: true
    },
    {
        id: 2,
        text: '코딩 테스트 문제 풀기',
        done: true
    },
    { id: 3, text: '스터디 하기', done: false },
    { id: 4, text: '리액트 공부하기', done: false }
];

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
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
