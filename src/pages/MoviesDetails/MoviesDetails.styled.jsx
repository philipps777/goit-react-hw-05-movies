import styled from 'styled-components';
export const GoBackLink = styled.span`

margin top: 100px;
`;

export const FilmWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
  padding-left: 14px;
`;

export const FilmImg = styled.img`
  max-width: 182px;
  //   background: #424242;
  border-radius: 15px;
`;

export const FilmTitle = styled.h2`
  font-size: 26px;
  margin-bottom: 12px;
  padding-left: 14px;
`;

export const FilmSubTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 6px;
`;

export const FilmDescr = styled.p`
  font-size: 16px;
  color: #888888;
  margin-bottom: 12px;
`;

export const StyledListDescr = styled.ul`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 0;

  border-radius: 20px;
  color: #888888;
  margin-bottom: 12px;
`;
export const StyledList = styled.ul`
  display: flex;
  gap: 18px;
  padding: 0 14px;
  flex-direction: column;
  border-radius: 20px;
`;
export const ListItem = styled.li`
  span {
    color: #ffc700;
  }

  a:hover,
  a:focus,
  a:active {
    color: #ffc700;
    span {
      color: white;
    }
  }
`;
export const GoBackWrapper = styled.div`
  max-width: 1440px;
  padding: 0 14px;

  margin-right: auto;
`;
