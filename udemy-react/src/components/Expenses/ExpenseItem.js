import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;

// 컴포넌트 하는 방법
// 1. Html 코드를 리턴하는 함수인 컴포넌트를 생성해서 내보내기
// 2. 사용하고 싶은 파일에서 import 하기
// 3. <ExpenseItem></ExpenseItem> 같은 대문자로 시작하는 html처럼 사용하기

// 규칙: 반환하는 html & JSX 코드 안에 반드시 한 개의 루트 요소를 갖음
// 코드 재정렬 단축키: Ctrl + Alt + L

// 값이 고정되어있으면 제한적임, 동적인 코드로 사용자로부터 값 받는 것은 나중, 일단 js로 동적으로 보이게

// expenseDate는 date 객체이기 때문에 {expenseDate}와 같은 식으로 텍스트 출력이 불가능. 따라서 toISOString을 호출하여 문자열 출력

// props를 사용하면 사용자 지정 컴포넌트의 속성을 설정할 수 있음
// props에서 불러올때는 속성의 이름으로 불러옴 ex) props.title