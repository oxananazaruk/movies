import styled from 'styled-components';
import { Form as FormikForm, Field as FormikField } from 'formik';

export const Searchbar = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: ${p => p.theme.spacing(6)};
  padding-left: ${p => p.theme.spacing(6)};
  padding-top: ${p => p.theme.spacing(6)};
  padding-bottom: ${p => p.theme.spacing(6)};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.grey};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled(FormikForm)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Field = styled(FormikField)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: ${p => p.theme.spacing(1)};
  padding-right: ${p => p.theme.spacing(1)};
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
  &:hover {
    opacity: 1;
  }
`;

export const SearchMoviesWraper = styled.div`
  margin: 0 auto;
  margin-top: ${p => p.theme.spacing(4)};
  text-align: center;
`;

export const SearchMovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: ${p => p.theme.spacing(4)};
  row-gap: ${p => p.theme.spacing(4)};
  justify-content: center;
`;

export const SearchMovieCard = styled.li`
  flex-basis: calc((100% - 48px) / 4);
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: ${p => p.theme.radii.lg};
  display: flex;
  gap: ${p => p.theme.spacing(2)};
  flex-direction: column;
  align-items: center;
`;
