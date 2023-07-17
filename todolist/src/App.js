import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Grid } from '@mui/material';
import DatePicker from 'react-datepicker';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
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
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    return (
        <TodoProvider>
            <GlobalStyle />
            <Grid container spacing={2}>
                <Grid item xs={24} md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <DatePicker selected={selectedDate} onChange={handleDateChange} inline />
                </Grid>
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
