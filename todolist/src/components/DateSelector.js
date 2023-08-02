import React from 'react';
import styled from 'styled-components';
import { useSelectedDate } from '../TodoContext'; // 선택된 날짜를 가져옵니다.

const DateSelectorBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

function DateSelector() {
    const [, setSelectedDate] = useSelectedDate(); // 선택된 날짜를 설정하는 함수를 가져옵니다.

    const onChange = (e) => {
        setSelectedDate(new Date(e.target.value));
    };

    return (
        <DateSelectorBlock>
            <input type='date' onChange={onChange} />
        </DateSelectorBlock>
    );
}

export default DateSelector;
