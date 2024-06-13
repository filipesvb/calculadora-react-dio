import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 50%;
    min-height: 350px;
`

export const ButtonGrid = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    .button-0 {
        grid-column: span 2;
    }
    .button-equals {
        grid-row-start: 4;
        grid-row-end: 6;
        grid-column-start: 4;
        grid-column-end: 5;
    }

    a.link-button {
        padding: 20px;
        border: 1px solid #C0C0C0;
        background-color: #55AAFF;
        color: #FFFFFF;
        font-size: 24px;
        font-weight: 700;
        flex: 1;
        cursor: pointer;
    
        &:hover {
            opacity: 0.6;
        }

        display: flex;
        justify-content: center;
        align-items: center;
    }
    a.link-button img {
        width: 48px;

    }

`