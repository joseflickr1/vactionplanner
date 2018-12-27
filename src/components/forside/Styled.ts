import styled, { keyframes } from 'styled-components';
import { primaryContrastText } from '../../assets/jss/material-fotohjelp-react';

export const fadeInUp = keyframes`
        0% {
            opacity: 0;
            transform: translate3d(0, 200px, 0);
        }
        
        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
`;
export const fadeOutUp = keyframes`
        0% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
        
        100% {
            opacity: 0;
            transform: translate3d(0, -200px, 0);
        }
`;

export const StyledCircle = styled.div`
    width: 70px;
    height: 70px;
    margin: auto;
    border-radius: 50%;
    content: "";
    border: 3px solid darkgray;
`;

export const StyledCalender = styled.div`
    width: 70px;
    height: 70px;
    margin: auto;
    content: "";
    border: 3px solid darkgray;
`;

export const StyledLine = styled.div`
    height: 250px;
    margin: auto;
    width: 2px;
    content: "";
    border-left: 3px solid darkgray;
`;

export const StyledElement = styled.div`
    vertical-align: middle;
    position: absolute;
    width: 100%;
    top: 39em;
    text-align: center;
    padding: 2rem 0;
    
    > h1, p {
        margin-bottom: 20px;
    }
    > h1, p {
        color: ${primaryContrastText}
    }
    
`;

export const styleOut = {
    top: '-0.5em',
    animationName: fadeOutUp,
    animationDuration: '1400ms',
};
export const styleIn = {
    top: '0',
    animationName: fadeInUp,
    animationDuration: '400ms',
    background: 'white'
};
