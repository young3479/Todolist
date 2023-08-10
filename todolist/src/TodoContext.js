import React, {createContext, useReducer, useContext, useRef, useState, useEffect} from 'react';
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

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, []);
    const nextId = useRef(1);
    const [selectedDate, setSelectedDate] = useState(new Date()); // 선택된 날짜 상태 생성

    useEffect(() => {
        // data.json에서 할 일 데이터를 가져와서 상태로 설정
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                dispatch({ type: 'SET_INITIAL_TODOS', todos: data });
                nextId.current = data.length + 1;
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

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
