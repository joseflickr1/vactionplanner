import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { RouteComponentProps } from 'react-router';
const star = require('./star.svg');
const card1 = require('./card1.svg');

const StyledElementWrapper = styled.div`
    height: 150vh;
    width: 375px;
    margin: auto;
    
    font-family: "Helvetica Neue", "Arial", sans-serif !important;
    
    hr {
        border: 0.5px solid #E4E4E4;
        margin: 0.5rem auto;
    }
    
`;

const StyledTypographyWrapper = styled.div`
    width: 352px;
    margin-top: 3.5rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 11.5px;
    padding-right: 11.5px;
    
`;
const StyledTekstWrapper = styled.div`
    margin-bottom: 1.1rem;
`;

const StyledTypographyH1 = styled.h1`
    font-weight: 500;
    font-size: 44px;
    color: #626262;
    margin: 0.5rem 0;
`;

const StyledTypographyH2 = styled.h2`
    font-weight: 500;
    font-size: 32px;
    color: #626262;
    margin: 0.5rem 0;
`;

const StyledTypographyH3 = styled.h3`
    font-size: 21.6px;
    font-weight: 400;
    color: #626262;
    margin: 0.5rem 0;
`;

const StyledTypographySubtittel = styled.p`
    font-weight: 400;
    font-size: 15.6px;
    color: #626262;
    margin: 1rem 0;
`;

const StyledElementCard1 = styled.div`
    margin: 2rem 0;
    background: #467DFC;
    color: #FFF;
    padding: 0.5rem 2rem;
    border-radius: 10px;
    
    background-image: url(${card1});
    background-repeat: no-repeat;
    background-position-x: 92%;

`;

const StyledTypographyH1Card1 = styled.h1`
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 2rem;    
`;

const StyledTypographyPCard1 = styled.p`
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    
    span {
        font-size: 18.6px;
        font-weight: 400;
        margin-left: 2rem;
    }    
`;

export const spin = keyframes`
    0% {
        transform: rotate(0deg) scale(1); 
    }
    50% { 
        transform: rotate(360deg) scale(0.1);
    }
    100% { 
        transform: rotate(720deg) scale(1); 
    }
`;

const StyledImg = styled.img`
    width: 10%;
    height: 10%;
    animation: ${spin} 1200ms;
    top: 5px;
    position: relative;
    margin-right: 0.5rem;

`;

export default class Trysilside extends React.Component<RouteComponentProps<{}>, any> { //tslint:disable-line

    constructor(props: any) { //tslint:disable-line
        super(props);
        this.state = {
            elementToShow: 1,
        };
    }

    render() {
        return (
            <StyledElementWrapper>
                <StyledTypographyWrapper>

                    <hr/>

                    <StyledTekstWrapper>
                        <StyledTypographyH1>
                            <StyledImg
                                height="50%"
                                width="50%"
                                src={star}
                            />
                            Trysil
                        </StyledTypographyH1>
                        <StyledTypographyH2>
                            1 - 3. februar
                        </StyledTypographyH2>
                        <StyledTypographyH3>
                            Velkommen. Opplev en helg med aktiviteter på fjellet!
                        </StyledTypographyH3>

                        <hr/>
                        <StyledTypographySubtittel>
                            Her kan du slappe med SPA, svømming eller frisk luft i fra fjellet!
                        </StyledTypographySubtittel>
                    </StyledTekstWrapper>

                </StyledTypographyWrapper>

                <StyledElementCard1>
                    <StyledTypographyH1Card1>
                        Fredag
                    </StyledTypographyH1Card1>
                    <StyledTypographyPCard1>
                        15:30
                        <span>Avreise Bil Oslo</span>
                    </StyledTypographyPCard1>
                    <StyledTypographyPCard1>
                        18:30
                        <span>Ankomst Trysil hytte</span>
                    </StyledTypographyPCard1>
                    <StyledTypographyPCard1>
                        19:30
                        <span>SPA / Fritid / Aktiviteter</span>
                    </StyledTypographyPCard1>

                </StyledElementCard1>

            </StyledElementWrapper>
        );
    }
}