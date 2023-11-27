import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieWraper = styled.div`
  margin: 16px auto;
  display: flex;
  gap: ${p => p.theme.spacing(4)};
`;

export const MovieDetailsContainer = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
`;

export const InfoContainer = styled.div`
  border-top: 1px solid ${p => p.theme.colors.gray};
  border-bottom: 1px solid ${p => p.theme.colors.gray};
  padding: 10px;
`;

export const InfoList = styled.ul`
  display: flex;
  gap: ${p => p.theme.spacing(4)};
`;

export const InfoLink = styled(NavLink)`
  color: ${p => p.theme.colors.black};
  font-size: 16px;
  font-weight: 700;

  &.active {
    color: orange;
  }
`;
