import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

const StyledElementWrapper = styled.div`
    height: 150vh;
    width: 375px;
    margin: auto;
    
    h1, h2, p, button {
        font-family: "Helvetica Neue", "Arial", sans-serif !important;
    }
`;

const StyledElementTop = styled.div`
    height: 209px;
    margin-top: 2rem;
    background: #F3F9F9;
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
    padding-left: 40px;
    margin-bottom: 1.1rem;
`;
const StyledTypographyH1 = styled.h1`
    font-weight: 400;
    font-size: 22.4px;
    line-height: 27px;
    color: #474749;
    width: 248px;
    margin:0;
`;

const StyledTypographySubtittel = styled.p`
    font-size: 12.7px;
    font-weight: 400;
    line-height: 15px;
    color: #74797F;
    margin: 0;
`;

const StyledButton = styled.button`
    border: none;
    width: 100%;
    font-size: 14.9px;
    background: #407FFE;
    padding: 0.63rem 0;
    color: white;
    border-radius: 3px;
`;

const StyledElementProgress = styled.div`
    height: 85px;
    margin-top: 5rem;
    background: #F3F9F9;
    text-align: center;
    padding-top: 1rem;
    border-top: 1px solid #CFD0D4;
    border-bottom: 1px solid #CFD0D4;
`;

const StyledTypographyH2Progress = styled.h2`
    font-size: 16.4px;;
    font-weight: 500;
    line-height: 1.1;;
    color: #696A6F;;
    margin:0;    
`;

const StyledTypographySubtittelProgress = styled.p`
    font-size: 14.4px;
    font-weight: 400;
    line-height: 1.17;
    color: #5C5D61;
    margin: 3px 0 0 0;
`;
const StyledTypographySubtittelTotal = styled.p`
    font-size: 13.3px;
    font-weight: 400;
    line-height: 1.17;
    color: #526CA7;
    margin: 8px 0 0 0;
`;
const StyledProgressBar = styled.div`
    width: 352px;
    height: 8px;
    margin-top: 0.8rem;
    margin-left: auto;
    margin-right: auto;
    background: #CFD0D4;
    border-radius: 8px;
`;

export default class Spareside extends React.Component<RouteComponentProps<{}>, any> { //tslint:disable-line

    constructor(props: any) { //tslint:disable-line
        super(props);
        this.state = {
            elementToShow: 1,
        };
    }

    render() {
        return (
            <StyledElementWrapper>
                <StyledElementTop/>
                <StyledTypographyWrapper>

                    <StyledTekstWrapper>
                        <StyledTypographyH1>
                            Din oversikt til sparing til ferie
                            i desember 2019
                        </StyledTypographyH1>

                        <StyledTypographySubtittel>
                            Du kan spare til ferie, holde oversikt og planlegge reise
                            sammen venner og familie
                        </StyledTypographySubtittel>
                    </StyledTekstWrapper>

                    <StyledButton>
                        Spar nå
                    </StyledButton>
                </StyledTypographyWrapper>

                <StyledElementProgress>
                    <StyledTypographyH2Progress>
                        51 uker igjen
                    </StyledTypographyH2Progress>

                    <StyledTypographySubtittelProgress>
                        Spar sammen til ferie og reis med venner og familie!
                    </StyledTypographySubtittelProgress>

                    <StyledProgressBar/>

                    <StyledTypographySubtittelTotal>
                        kr 1000 av kr 20 000 er spart
                    </StyledTypographySubtittelTotal>

                </StyledElementProgress>

            </StyledElementWrapper>
        );
    }
}