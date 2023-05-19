import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 20px;
  font-weight: 500;
`;

export const InputForm = styled.input`
  height: 20px;
  width: 350px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  :focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  :hover {
    border-color: #007bff;
  }
`;

export const ButtonForm = styled.button`
  width: 100px;
  height: 30px;
  padding: 5px;
  font-weight: 500;
  font-size: 14px;
  border-radius: 5px;
  border-color: #84c3be;
  background-color: #abcdef;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) box-shadow
    250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #669e85;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;
