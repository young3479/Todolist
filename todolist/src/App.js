import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Grid } from '@mui/material';
import TodoHead from './components/TodoHead';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

import 'react-datepicker/dist/react-datepicker.css';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
    const [selectedDate] = useState(new Date());
    return (
        <TodoProvider>
            <GlobalStyle />
            <Grid container spacing={2}>
                <Grid item xs={24} md={12}>
                    <TodoTemplate>
                        <TodoHead selectedDate={selectedDate} />
                        <TodoList />
                        <TodoCreate />
                    </TodoTemplate>
                </Grid>
            </Grid>
        </TodoProvider>
    );
}

export default App;
