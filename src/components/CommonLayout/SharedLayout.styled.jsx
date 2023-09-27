import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  background-color: #2d424a;
  height: 104px;
  color: #fff;
  font-weight: 600;
  z-index: 10;
`;

export const HeaderContainer = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1440px;
  padding: 0 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 64px;
`;

export const Section = styled.div`
  margin-top: 124px;
  margin-bottom: 15px;
`;

export const Navigation = styled.nav`
  max-width: 1440px;

  height: 100%;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  padding: 6px 16px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: cyan;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  margin: 0 auto;
  color: black;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 145px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: orange;
  }
`;
