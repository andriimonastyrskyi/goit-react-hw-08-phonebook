import styled from 'styled-components';

export const ListContacts = styled.ul`
  width: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border: 1px solid #f1f1f1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export const ListContactItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AboutConacts = styled.p`
  font-size: 16px;
  font-weight: 500;
`;
