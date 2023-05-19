import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export const WrapperFormName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  width: 400px;
  height: 350px;
  border-radius: 5px;
  background-color: rgb(124, 185, 232);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const WrapperFormContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  gap: 20px;
  padding: 20px;
  width: 400px;
  height: 350px;
  border-radius: 5px;
  background-color: rgb(124, 185, 232);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const ContactsWrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
