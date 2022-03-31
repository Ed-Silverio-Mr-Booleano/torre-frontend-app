import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    div{
        display: flex;
        align-items: center;
        margin: 30px 50px;

        p{
            color: #A2A4A6;
            margin: 0px 8px 0px 0px;
        }

        svg{
            margin: 0px 8px 0px 0px;
            color: #A2A4A6 !important;
        }

        strong{
            color: #A2A4A6;
        }
    }

    hr{
        border-top: none;
        border-bottom:1px solid #A2A4A6;
    }

    h1{
        font-size: 14px;
        color: #A2A4A6;
        margin: 30px 50px;
        font-weight: 500;
    }

    .experiece{
        flex-direction: column;
        margin-bottom: 30px;

        main{
            margin: 0px 0px 25px 50px;
            text-align: left !important;


            strong{
                 color: greenyellow;
                 font-weight: 500;
            }

            p{
              margin: 6px 0px;
              color: #A2A4A6;
              text-align: left !important;
            }
        }
    }

`;

export const Header = styled.header`
    width: 100%;
    height: 50px;
    display: flex;
    background: #27292D;
    border-bottom: 2px solid #111111;

    div{
      display: flex ;
      justify-content: left;
      align-items: center;
      margin: 0px 30px;

      svg{
        margin: 0 20px;
        cursor: pointer;
      }

      p{
        color: #fff;
        font-size: 15px;
        font-weight: 700;
      }
    }

   
`;

export const People = styled.h1`
    display: block;
    
    h1{
        width: 100%;
        font-size: 14px;
        color: #A2A4A6;
        margin: 30px 0px 30px 0px;
        font-weight: 500;
    }

    main{
        display: flex;
        margin-bottom: 15px;
        justify-content: space-between;

        div{
            margin: 0px;

            img{
                width: 45px;
                height: 45px;
                object-fit: cover;

                clip-path: polygon(50% 0, 100% 23%, 100% 80%, 51% 100%, 50% 100%, 0 78%, 0 23%);
            }

            span{
                margin-left: 15px;

                h2{
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    color: greenyellow;


                    svg{
                        margin-left: 8px;
                    }
                }
            }
        }
    }

    .icons{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: #373B41;
        
        svg{
            margin: 0 auto;
            color: greenyellow !important;
        }
    }
    
`;