import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  display: flex;
  max-width: 900px;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 30px;
    height: 40px;
  }

  h1 {
    text-align: center;
    width: 120px;
    height: 25px;
    font: 16px 'Roboto', sans-serif;
    font-weight: bold;
    color: #fff;
    background: #243e6a;
    border: 4px solid #243e6a;
    border-radius: 4px;
    text-transform: uppercase;
  }

  h2 {
    margin-top: 10px;
    text-align: center;
    width: 300px;
    font: 12px 'Roboto', sans-serif;
    font-weight: bold;
    color: #243e6a;
    border-radius: 4px;
    text-transform: uppercase;
  }

  .nv {
    display: flex;
    flex-direction: row;
    margin-top: 10px;

    input {
      width: 300px;
      font-size: 14px;
      padding: 12px 20px 12px 40px;
      border: 2px solid #243e6a;
      margin-right: 10px;
    }
  }

  .tabela {
    table {
      margin-top: 10px;
      align-items: center;
      justify-content: center;
      width: 100%;
      display: block;
      position: relative;
      overflow-y: scroll;
      height: 300px;

      th {
        width: 200px;
        height: 30px;
        font: 14px 'Roboto', sans-serif;
        font-weight: bold;
        color: #fff;
        background-color: #243e6a;
        border: 2px solid #99cc33;
      }

      td {
        width: 200px;
        height: 30px;
        text-align: center;
        align-items: center;
        font: 14px 'Roboto', sans-serif;
        color: #030303;
        background-color: #fff;
        border: 2px solid #99cc33;
        padding: 5px 5px;
      }
    }
  }

  button {
    margin-top: 10px;
    width: 100px;
    height: 50px;
    font: 14px 'Roboto', sans-serif;
    font-weight: bold;
    color: #fff;
    background: #243e6a;
    border: 1px solid #99cc33;
    border-radius: 6px;
    transition: background 0.2s;
    text-transform: uppercase;

    &:hover {
      background: ${darken(0.08, '#243e6a')};
    }
  }

  .back {
    margin-top: 10px;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    justify-content: center;
    a {
      background: transparent;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }

      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;
export const TableStyle = styled.div``;
