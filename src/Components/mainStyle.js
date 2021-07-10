import styled from "styled-components";
import img1 from '../images/pic1.jpg';

export const MainFrame = styled.div`
    min-height:100vh;
    min-width:100vw;
    // background-color:red;
    position:relative;
    font-size: 10px;
`;
export const MainBack = styled.div`
    position:absolute;
    height:100%;
    width:100%;
    // background-color:red;
    background-image:url(${props=>props.bccimg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    /* z-index: 5; */
    // display:flex;
    // flex-direction:row;
    // justify-content:center;
    /* // align-items:center;
    display: grid;
    grid-template-columns: 45% 55%;
    grid-template-rows: 10% 23% auto 15%; */
    
`;

export const Test = styled.div`
    width:45%;
    height:52%;
    top:33%;
    left:0;
    /* background-color: red; */
    position: absolute;

    box-sizing: border-box;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 5% 10% auto 20% 10%;
    padding:0px 4%;
    /* background-color: rosybrown; */
    overflow: hidden;
`;

export const NavBar = styled.div`
    width:100%;
    height:10%;
    /* background-color:red; */
    z-index: 10;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    padding:10px;
    

    div.LOGO{
        display: flex;
        flex-direction: row;
        width:15%;
        /* background-color: pink; */
        justify-content: flex-start;
        color:white;

        p{
            font-size: 2.8em;
            margin-right: 5%;
            margin-left: 20px;
            span{
                font-weight: bold;
                color:orange
            }
        }
    }

    div.Nav_Ele{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        

        p{
            margin-right: 35%;
            color:white;
            font-size: 1.8em;

            :first-child{
                /* color:rgba(256,256,256,.8); */
                font-weight: bold;
                border-bottom: 2px solid orange;
            }

            ::nth-child(4),::nth-child(5){
                margin-right: 30%;
            }
        }
    }
`;

export const Card = styled.div`
    position:absolute;
    width:200px;
    height:287px;
    border-radius:15px;
    background-image:url(${props=>props.bcimage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    top:50%;
    left:45%;
    z-index: 2;
    opacity: 0;

    box-shadow: 5px 5px 8px 3px rgba(0,0,0,0.5);
    
    // margin-right:50px;
    // margin-bottom:50px;'
`;

export const MainCntnt = styled.div`
    min-height:100vh;
    min-width:100vw;
    position:absolute;
    bottom: 0;
    display: grid;
    z-index: 6;
    grid-template-columns: 45% 55%;
    grid-template-rows: 10% 23% auto 15%;
    overflow: hidden;
    /* background-color: red; */

`;

export const NavBlank = styled.div`
    grid-column-start: 1;
    grid-column-end:3;
    /* background-color: pink; */
`;

export const BlankSpace = styled.div`
    grid-column-start: 1;
    grid-column-end:3;
    /* background-color: blue; */
`;


export const Detail = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 5% 10% auto 20% 10%;
    padding:0px 9%;
    /* background-color: rosybrown; */
    overflow: hidden;
    /* width:100%; */
`;

export const Hbar = styled.div`
    height: 20%;
    width: 7%;
    background-color: white;
    bottom: 0;
    align-self: flex-end;
    
`;

export const State = styled.div`
    /* align-self: flex-end; */
    justify-self: flex-start;
    /* background-color: wheat; */
    display: flex;
    p{
        font-size: 1.5em;
        margin:0;
        padding:0;
        align-self:center;
        /* font-weight: bold; */
        color:white;
        word-spacing:0.5px;
    }
`;

export const Name  =styled.div`
    justify-self: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    /* font-weight: bold; */
    /* color:white; */
    text-transform: uppercase;
    overflow: hidden;
    

    p{
        font-size: 12em;
        /* font-size: 50px; */
        /* max-width: 80%; */
        color:white;
        margin:0;
        padding:0;
    }
`;

export const Descrip = styled.div`
    justify-self: flex-start;
    display: flex;
    align-self: center;
    overflow: hidden;

    p{
        color:rgba(256,256,256,.4);
    }
`;

export const Tags = styled.div`
    justify-self: flex-start;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    p{
        color:white;
        border:1px solid rgba(256,256,256,.7);;
        padding:11px;
        margin-right: 30px;
        font-size: 1.3em;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        
    }

    p.save{
            border-radius: 100px;
            background-color: rgb(231, 167, 48);
            border:1px solid rgb(231, 167, 48);
    }

`;


// SLIDES ///////////////////////////////////


export const Slides = styled.div``;

export const Slide = styled.div`
    /* background-color: yellowgreen; */
    display: flex;
    flex-direction:column;
    justify-content: flex-end;
`;

export const SlideBlock = styled.div`
    height: 287px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius:15px;
    /* background-color: rgba(256,256,256,.2); */
`;

export const SlideCard = styled.div`
/* position: relative; */
    min-width: 200px;
    height: 100%;
    /* background-color: pink; */
    background-image: url(${props=>props.bcimg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-right: 20px;
    box-shadow: 5px 5px 8px 3px rgba(0,0,0,0.5);
    border-radius:10px;
    /* left:100; */
`;


export const Nextbtn = styled.div`
    grid-column-start: 1;
    grid-column-end:3;
    /* background-color: yellow; */
    display: grid;
    grid-template-columns: 25% auto 15%;
    grid-template-rows: 100%;
    width: 55%;
    justify-self: flex-end;
`;

export const Btn = styled.div`
    /* background-color: red; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    p{  
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items:center;
        border-radius: 50%;
        border:1.5px solid white;
        width:40%;
        height: 65%;
        color:white;
        cursor: pointer;

        i{
            font-size: 4em;
        }
    }
`;

export const Bar  =styled.div`
    /* background-color: yellowgreen; */
`;

export const Current = styled.div`
    /* background-color: green; */
`;




