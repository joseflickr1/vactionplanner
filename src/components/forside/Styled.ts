import styled, { keyframes } from 'styled-components';
import { primaryContrastText } from '../../assets/jss/material-fotohjelp-react';

export const fadeInUp = keyframes`
        0% {
            opacity: 0;            
            display: none;
            transform: translate3d(0, 400px, 0);
        }
        
        100% {
            opacity: 1;
            display: block;
            transform: translate3d(0, -30%, 0);
            top: 40%;
        }
`;
export const fadeOutUp = keyframes`
        0% {
            opacity: 1;
            display: block;
            transform: translate3d(0, 0, 0);
        }
        
        100% {
            opacity: 0;
            display: none;
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

     width: 100%;

    top: 40%;
    transform: translateY(-30%);
    text-align: center;
    position: relative;
    
    text-align: center;
    
    > h1, p {
        margin-bottom: 20px;
    }
    > h1, h2, p {
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
    display: 'none',
};

export const styleIn = {
    top: '40%',
    transform: 'translateY(-30%)',
    animationName: fadeInUp,
    animationDuration: '400ms',
    background: 'white',
    opacity: '1',
    display: 'block',
};
