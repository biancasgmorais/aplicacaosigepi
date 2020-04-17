import styled from 'styled-components';

export const Container = styled.div`
  background: #243e6a;
  padding: 0 30px;
`;

export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 50px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #99cc33;
    }

    a {
      font: 20px 'Roboto', sans-serif;
      font-weight: bold;
      color: #99cc33;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #99cc33;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #99cc33;
    }

    button {
      margin-top: 5px;
      background: none;
      border: none;
    }
  }
`;
