import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #fafafa;
    }

    p {
        font-size: 16px;
        color: #fafafa60;
        margin-bottom: 20px;
    }

    a {
        display: block;
        margin: 20px 0;
    }

    button {
        padding: 5px 10px;
        border: 1px solid #fafafa;
        border-radius: 5px;
        cursor: pointer;
        color: #22272e;
        background-color: #fafafa;
    }

    button:hover {
        background-color: #fafafa40;
    }

    hr {
        color: #fafafa60;
        margin: 20px 0;
    }
`