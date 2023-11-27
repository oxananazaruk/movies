import { styled } from 'styled-components';

export const ReviewWraper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const ReviewCard = styled.li`
  width: 800px;
  border: 1px solid ${p => p.theme.colors.gray};
  border-radius: 6px;
  padding: ${p => p.theme.spacing(3)};
  margin: ${p => p.theme.spacing(4)} auto 0 auto;
  text-align: center;
`;
