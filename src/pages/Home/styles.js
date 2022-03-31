import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const Header = styled.header`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    background: #27292D;
    border-bottom: 2px solid #111111;

    div{
      display: flex ;
      justify-content: center;
      align-items: center;
      margin: 0px 30px;

      svg{
        margin: 0 10px;
        cursor: pointer;
      }

      p{
        color: #fff;
        strong{
          color: greenyellow;
        }
      }
    }

    .green{
      color: greenyellow;
    }
`;

export const Profile = styled.div`
    width: 100%;
    margin: 0 auto;

    img{
      width: 100px;
      height: 100px;
      display: block;
      -moz-transition: all 0.5s;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
      margin: 35px auto 15px auto;
      object-fit: cover;

      clip-path: polygon(50% 0, 100% 23%, 100% 80%, 51% 100%, 50% 100%, 0 78%, 0 23%);

      &:hover{
        -moz-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
        cursor: pointer;
        outline: none;
        border: none;
      }
    }

    p{
      font-size: 18px;
      color: #ACADAE;
      text-align: center;
    }
`;

export const Skills = styled.div`
  width: calc(20px -80%);
  margin: 20px 30px;
  padding: 10px;

  h1{
    font-size: 15px;
    margin-bottom: 25px;
    color: #A2A4A6;
  }

  a{
    text-decoration: none;
    color: #A2A4A6 ;
  }

  div{
    display: flex;
    color: #A2A4A6;
    align-items: center;

    svg{
      margin-right: 8px;
    }

    span{
      width: 200px;
      height: 35px;
      border-radius: 30px;
      background-color: #373B41;
      margin: 20px 10px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }

  span{
      display: flex;
      margin-bottom: 10px;
      align-items: center;

      p{
        font-size: 15px;
        color: #A2A4A6;
      }
    }

    .skill{
      flex-direction: column;
      display: block;
      

        span{
          width: 200px;
          height: 35px;
          border-radius: 30px;
          background-color: #373B41;
          margin: 6px 10px;

          svg{
            margin-left: 5px;
          }
          
        }

        .d-flex{
          display: flex;
          justify-content: center;
          align-items: center;
        }
    }

`;

