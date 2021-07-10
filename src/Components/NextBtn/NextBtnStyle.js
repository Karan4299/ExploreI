import styled from "styled-components";

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
            font-size: 40px;
        }
    }
`;

export const Bar  =styled.div`
    /* background-color: yellowgreen; */
`;

export const Current = styled.div`
    /* background-color: green; */
`;