import styled from 'styled-components';

export const Searchbar = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 54px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border: 1px solid ${p => p.theme.colors.gray};
  border-radius: 6px;
  overflow: hidden;
`;

export const Field = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  outline: none;
  border: none;
  padding: ${p => p.theme.spacing(2)};
`;

export const FormGroup = styled.label`
  width: 100%;
`;

export const FormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border-radius: 6px;
  &:hover {
    opacity: 1;
  }
`;
