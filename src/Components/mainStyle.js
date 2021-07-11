import styled from "styled-components";
import img1 from '../images/pic1.jpg';

export const MainFrame = styled.div`
    height:100vh;
    width:100vw;
    // background-color:red;
    position:relative;
    font-size: 10px;
`;
export const MainBack = styled.div`
    position:relative;
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
    width:14%;
    height:40%;
    border-radius:15px;
    background-image:url(${props=>props.bcimage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    top:45%;
    left:45%;
    z-index: 2;
    opacity: 0;

    box-shadow: 5px 5px 8px 3px rgba(0,0,0,0.5);
    
    // margin-right:50px;
    // margin-bottom:50px;'
`;

export const MainCntnt = styled.div`
    height:100%;
    width:100%;
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
    grid-template-rows: 5% 5% 55% 15% 20%;
    padding:0px 9%;
    /* background-color: rosybrown; */
    overflow: hidden;
    justify-content: flex-start;
    /* width:100%; */
`;

export const Hbar = styled.div`
    height: 20%;
    width: 7%;
    background-color: white;
    bottom: 0;
    align-self: flex-end;
    /* background-color: green; */
    
`;

export const State = styled.div`
    /* align-self: flex-end; */
    
    /* background-color: wheat; */
    display: flex;
    justify-self: flex-start;

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
    margin-top:5%;
    flex-direction: column;
    justify-content: space-around;
    /* background-color: greenyellow; */
    /* font-weight: bold; */
    /* color:white; */
    text-transform: uppercase;
    overflow: hidden;
    clear: both;
    

    p{
        font-size: 12em;
        /* font-size: 50px; */
        /* max-width: 80%; */
        color:white;
        margin:0;
        padding:0;
        line-height: 25%;

        @media (max-height: 820px) {
            font-size: 10em;
        }

        @media (max-width:927px){
            font-size: 5em;
        }
    }
`;

export const Descrip = styled.div`
    justify-self: flex-start;
    display: flex;
    align-self: center;
    overflow: hidden;
    /* background-color: grey; */

    p{
        font-size: 1.2em;
        color:rgba(256,256,256,.7);
    }
`;

export const Tags = styled.div`
    justify-self: flex-start;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    /* background-color: indianred; */

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
    height: 77%;
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    border-radius:15px;
    /* background-color: rgba(256,256,256,.2); */
`;

export const SlideCard = styled.div`
/* position: relative; */
    min-width: 25.6%;
    height: 100%;
    /* background-color: pink; */
    background-image: url(${props=>props.bcimg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-right: 20px;
    box-shadow: 5px 5px 8px 3px rgba(0,0,0,0.5);
    border-radius:10px;
    /* opacity: .5; */
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
    height: 100%;
    p{  
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items:center;
        border-radius: 50%;
        border:1.5px solid white;
        width:85px;
        height: 85px;
        color:white;
        cursor: pointer;

        @media (max-height:600px){
            width:60px;
            height: 60px;
        }
        @media (max-width:537px){
            width:40px;
            height: 40px;
        }

        i{
            font-size: 2em;
        }
    }
`;

export const Bar  =styled.div`
    /* background-color: yellowgreen; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
`;

export const Current = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5em;
    color:white;
`;




