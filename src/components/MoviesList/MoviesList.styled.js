import styled from 'styled-components';

export const MoviesContainer = styled.div`
  margin: 0 auto;
  padding: 0 ${p => p.theme.spacing(4)};
  width: 100%;
`;

export const MoviesListWraper = styled.div`
  margin: 0 auto;
  margin-top: ${p => p.theme.spacing(4)};
  text-align: center;
`;

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: ${p => p.theme.spacing(4)};
  row-gap: ${p => p.theme.spacing(4)};
  justify-content: center;
`;

export const MovieCard = styled.li`
  flex-basis: calc((100% - 48px) / 4);
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: ${p => p.theme.radii.lg};
  display: flex;
  gap: ${p => p.theme.spacing(2)};
  flex-direction: column;
  align-items: center;
`;
