import styled from 'styled-components';

export const Button = styled.button`
  background: black;
  color: white;
  font-size: 14px;
  border: 1px solid black;
  text-transform: uppercase;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;