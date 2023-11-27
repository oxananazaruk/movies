import { styled } from 'styled-components';

export const CastWraper = styled.div`
  margin: 10px auto;
  text-align: center;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(3)};
  justify-content: center;
`;

export const CastCard = styled.li`
  flex-basis: calc((100% - 60px) / 5);
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: ${p => p.theme.radii.lg};
  display: flex;
  gap: ${p => p.theme.spacing(1)};
  flex-direction: column;
  align-items: center;
`;

export const CastText = styled.p`
  margin: 0 auto;
  text-align: center;
`;
