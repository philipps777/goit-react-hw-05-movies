import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  padding: 160px 30px 30px 30px;
  margin-bottom: 15px;
  border: 1px solid rgba(13, 37, 63, 1);
  //   border-radius: 0 0 8px 8px;
  //   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  //   background-image: linear-gradient(
  //     to right,
  //     rgba(1, 180, 228, 1) 0%,
  //     rgba(13, 37, 63, 1) 100%
  //   );
  //   display: flex;
  // //   align-items: center;
  //   justify-content: space-around
  background-color: #2d424a;
  display: flex;
  justify-content: center;
`;
export const SearchForm = styled.form`
  display: flex;

  //   justify-content: center
  //   background-color: #2d424a;
  //   border-radius: 5px;
  //   overflow: hidden;
  gap: 10px;

  margin: 0 auto;
  position: relative;
  top: 0;
  left: 0;
`;
export const Input = styled.input`
  padding: 6px 6px;
  border: 3px solid #ccc;
  border-radius: 4px;
  font-family: inherit;
  font-size: 20px;
  color: #333;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: orange;
    box-shadow: 0 0 5px rgba(102, 175, 233, 0.5);
  }
`;
export const Button = styled.button`
  display: inline-flex;
  padding: 10px 7px;
  border: 1px solid black;
  border-radius: 8px;
  font-family: inherit;
  font-size: 20px;
  background-color: cyan;
  color: black;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: orange;
  }
`;
