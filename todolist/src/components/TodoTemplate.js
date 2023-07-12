import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

function TodoTemplate({ children }) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

TodoTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TodoTemplate;
