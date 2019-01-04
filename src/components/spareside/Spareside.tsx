import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import Typography from '@material-ui/core/Typography';
const StyledElementWrapper = styled.div`
    height: 80vh;
    width: 100%;
    margin: auto;
    
    h1, h6, button {
        font-family: "Helvetica Neue", "Arial", sans-serif !important;
    }
`;

const StyledElementTop = styled.div`
    width: 100%;
    height: 223px;
    margin-top: 2rem;
    margin-right: auto;
    margin-left: auto;
    background: #F3F9F9;
`;

const StyledTypographyWrapper = styled.div`
    width: 352px;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 11.5px;
    padding-right: 11.5px;
    
`;
const StyledTekstWrapper = styled.div`
    padding-left: 40px;
`;
const StyledTypographyH1 = styled(Typography)`
    font-weight: 400 !important;
    font-size: 22.4px !important;
    line-height: 1.1 !important;
    color: #474749 !important;
    width: 234px;
`;

const StyledTypographySubtittel = styled(Typography)`
    font-size: 12.6px !important;
    font-weight: 400 !important;
    line-height: 1.17 !important;
    color: #74797F !important;
    margin-top: 3px !important;
`;

const StyledButton = styled.button`
    border: none;
    width: 100%;
    font-size: 14.9px;
    background: #407FFE;
    margin-top: 1rem;
    padding: 0.6rem 0;
    color: white;
    border-radius: 3px;
`;

const StyledElementProgress = styled.div`
    width: 375px;
    height: 75px;
    margin-top: 4rem;
    margin-right: auto;
    margin-left: auto;
    background: #F3F9F9;
    text-align: center;
    padding-top: 1rem;
    border: 1px solid #CFD0D4;
`;

const StyledTypographyH2Progress = styled(Typography)`
    font-size: 15px !important;
    line-height: 1.1 !important;
    color: #696A6F !important;    
`;

const StyledTypographySubtittelProgress = styled(Typography)`
    font-size: 12.7px !important;
    font-weight: 400 !important;
    line-height: 1.17 !important;
    color: #5C5D61 !important;
    margin-top: 3px !important;
`;
const StyledTypographySubtittelTotal = styled(Typography)`
    font-size: 11.8px !important;
    font-weight: 400 !important;
    line-height: 1.17 !important;
    color: #526CA7 !important;
    margin-top: 8px !important;
`;
const StyledProgressBar = styled.div`
    width: 300px;
    height: 8px;
    margin-top: 0.5rem;
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
                        <StyledTypographyH1
                            component="h1"
                            variant="h6"
                        >
                            Din oversikt til sparing til ferie
                            i desember 2019
                        </StyledTypographyH1>

                        <StyledTypographySubtittel
                            variant="subtitle1"
                        >
                            Du kan spare til ferie, holde oversikt og planlegge reise
                            sammen venner og familie
                        </StyledTypographySubtittel>
                    </StyledTekstWrapper>

                    <StyledButton>
                        Spar nå
                    </StyledButton>
                </StyledTypographyWrapper>

                <StyledElementProgress>
                    <StyledTypographyH2Progress
                        component="h2"
                        variant="h6"
                    >
                        51 uker igjen
                    </StyledTypographyH2Progress>

                    <StyledTypographySubtittelProgress
                        variant="subtitle1"
                    >
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