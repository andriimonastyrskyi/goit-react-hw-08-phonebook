import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 20px;
  font-weight: 700;
`;

export const UserMenuButton = styled.button`
  width: 100px;
  height: 30px;
  padding: 5px;
  font-weight: 700;
  font-size: 16px;
  border-radius: 5px;
  border-color: #007bff;
  background-color: #abcdef;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #6495ed;
  }
`;
