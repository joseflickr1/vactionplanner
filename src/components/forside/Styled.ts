import styled, { keyframes } from 'styled-components';
import { primaryContrastText } from '../../assets/jss/material-fotohjelp-react';

export const fadeInUp = keyframes`
        0% {
            opacity: 0;
            transform: translate3d(0, 200px, 0);
            background: green;
        }
        
        100% {
            opacity: 1;
            transform: translate3d(0, -50%, 0);
            top: 50%;
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
    width: 60px;
    height: 60px;
    margin: 2rem auto;
    border-radius: 50%;
    content: "";
    border: 5px solid #293782;
`;

export const StyledImg = styled.img`
    width: 200px;
    height: 200px;
    @media (min-width: 400px) {
        width: 49%;
    }
    
    display: block;
    margin: 1rem auto;
`;

export const StyledButton = styled.button`
    margin: auto;
    border: 3px solid darkgray;
    border-radius: 10px;
    padding: 0.4rem 1rem;
    width: 88%;
    @media (min-width: 400px) {
        width: 50%;
    }
    
    
    p {
        margin-bottom: 0 !important;
    }
`;

export const StyledElement1 = styled.div`
    
    -webkit-tap-highlight-color: rgba(0,0,0,0);

    width: 100%;
    top: 40%;
    transform: translateY(-30%);
    text-align: center;
    position: relative;
    
    opacity: 0;
    
    > h1, p {
        margin-bottom: 20px;
    }
    > h1, h2, p {
        color: ${primaryContrastText}
    }
    
    > h2 {
        margin: auto 2rem;
    }
    
`;

export const StyledElement = styled.div`
    -webkit-tap-highlight-color: rgba(0,0,0,0);

    vertical-align: middle;
    position: absolute;
    width: 100%;
    opacity: 0;
    padding-top: 6rem;
    top: 39em;
    text-align: center;
    
    > h1, p {
        margin-bottom: 20px;
    }
    > h1, p {
        color: ${primaryContrastText}
    }
    
    > h2 {
        margin: auto 2rem;
    }
    
    
    display: none;
    
`;

export const styleOut = {
    top: '-0.5em',
    animationName: fadeOutUp,
    animationDuration: '1300ms',
    opacity: '0',
};
export const styleIn = {
    /*top: '50%',
    transform: 'translateY(-50%)',
    animationName: fadeInUp,
    animationDuration: '500ms',*/
    background: 'white',
    opacity: '1'
};
