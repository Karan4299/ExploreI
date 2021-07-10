import styled from "styled-components";

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
    background-color: rgba(256,256,256,.2);
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
    /* left:100; */
`;