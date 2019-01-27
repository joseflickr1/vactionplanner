import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { firestoredb } from '../../config/constants';
import { avatars } from './konstater';
const star = require('./star.svg');
const card1 = require('./card1.svg');
const card2 = require('./card2.svg');
const card3 = require('./card3.svg');

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

const Avatars = styled.div`
    display: inline-block;
    text-align: center;
    margin: 0 0.3rem;
    > img {
        width: 3rem;        
    }
    > span {
        display: block;
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

const StyledTypographyH1Small = styled.h1`
    font-weight: 500;
    font-size: 18.6px;
    color: #626262;
    margin: 0.5rem 0 -0.8rem 0;
    display: flex;
    align-items: flex-end;
`;

const StyledTypographyH1 = styled.h1`
    font-weight: 500;
    font-size: 44px;
    color: #333232;
    margin: 0.5rem 0;
`;

const StyledTypographyH2 = styled.h2`
    font-weight: 500;
    font-size: 32px;
    color: #333232;
    margin: 0.5rem 0;
`;

const StyledTypographyH3 = styled.h3`
    font-size: 21.6px;
    font-weight: 400;
    color: #333232;
    margin: 0.5rem 0;
`;

const StyledTypographySubtittel = styled.p`
    font-weight: 400;
    font-size: 15.6px;
    color: #333232;
    margin: 1.5rem 0;
`;

const StyledElementCard1 = styled.div`
    margin: 2rem 0.5rem;
    background: #0867FF;
    color: #FFF;
    padding: 0.5rem 2rem;
    border-radius: 10px;
    
    background-image: url(${card1});
    background-repeat: no-repeat;
    background-position-x: -10rem;

`;

const StyledElementCard2 = styled.div`
    margin: 2rem 0.5rem;
    background: #D22BFA;
    color: #FFF;
    padding: 0.5rem 2rem;
    border-radius: 10px;
    
    background-image: url(${card2});
    background-repeat: no-repeat;
    background-position-y: 2rem;
    background-position-x: 1rem;
    
    p {
        margin-bottom: 7rem;
    }
    
    p:last-child {
        margin-bottom: inherit;
    }

`;

const StyledElementCard3 = styled.div`
    margin: 2rem 0.5rem;
    background: #ff8914;
    color: #FFF;
    padding: 0.5rem 2rem;
    border-radius: 10px;
    
    background-image: url(${card3});
    background-repeat: no-repeat;
    background-position-y: 2rem;
    background-position-x: 1rem;
    background-size: 8rem;
    
    p {
        margin-bottom: 7rem;
    }
    
    p:last-child {
        margin-bottom: inherit;
    }

`;

const StyledTypographyH1Card = styled.h1`
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
    animation: ${spin} 1200ms;
    width: 6%;
    height: 6%;
    top: -3px;
    position: relative;
    margin-right: 0.5rem;

`;

export default class Trysilside extends React.Component<RouteComponentProps<{}>, any> { //tslint:disable-line

    constructor(props: any) { //tslint:disable-line
        super(props);
        window.scrollTo(0, 0);
        this.state = {
            names: [{navn: '', avID: ''}],
            loading: true,
        };
    }

    componentDidMount(): void {
        const names = [{}];
        firestoredb.collection('users').get()
            .then((querySnapshot) => {
                
            if (querySnapshot.size === 0) {
                this.setState({
                    loading: false,
                });
            }
            
            querySnapshot.forEach((doc) => {
                names.push({
                    navn: doc.data().first,
                    avID: doc.data().avID,
                });

                this.setState({
                    loading: false,
                    names,
                });
            });
        });
    }

    render() {
        let elemem = null;
        if (this.state.loading) {
            return <div>loading</div>;
        } else {
            console.log('this.state', this.state.names); // tslint:disable-line

            elemem = this.state.names.map((el: { navn: string, avID: string }, key: any) => { // tslint:disable-line
                console.log('el.navn', el.navn); // tslint:disable-line
                console.log('el.navn', el.avID); // tslint:disable-line

                if (el.avID === undefined) {
                    return null;
                }

                return (
                    <Avatars key={key}>
                        <img
                            src={avatars[el.avID]}
                        />
                        <span>
                            {el.navn}
                        </span>
                    </Avatars>
                );
            });

            console.log('elemem', elemem); // tslint:disable-line

        }
        
        return (
            <StyledElementWrapper>
                <StyledTypographyWrapper>

                    {
                        elemem
                    }

                    <hr/>

                    <StyledTekstWrapper>
                        <StyledTypographyH1Small>
                            <StyledImg
                                height="50%"
                                width="50%"
                                src={star}
                            />
                            Program
                        </StyledTypographyH1Small>
                        <StyledTypographyH1>
                            Trysil
                        </StyledTypographyH1>
                        <StyledTypographyH2>
                            1 - 3. februar
                        </StyledTypographyH2>
                        <StyledTypographyH3>
                            Velkommen! Opplev en helg med aktiviteter på fjellet!
                        </StyledTypographyH3>

                        <hr/>
                        <StyledTypographySubtittel>
                            Her kan du slappe av med SPA, innendørs svømmebasseng
                            eller en tur i frisk fjellluft!
                        </StyledTypographySubtittel>
                    </StyledTekstWrapper>

                </StyledTypographyWrapper>

                <StyledElementCard1>
                    <StyledTypographyH1Card>
                        Fredag
                    </StyledTypographyH1Card>
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

                <StyledElementCard2>
                    <StyledTypographyH1Card>
                        Lørdag
                    </StyledTypographyH1Card>
                    <StyledTypographyPCard1>
                        08:30
                        <span>Frokost</span>
                    </StyledTypographyPCard1>
                    <StyledTypographyPCard1>
                        12:30
                        <span>Lunsj</span>
                    </StyledTypographyPCard1>
                    <StyledTypographyPCard1>
                        19:00
                        <span>SPA / Fritid / Aktiviteter</span>
                    </StyledTypographyPCard1>
                    <StyledTypographyPCard1>
                        20:30
                        <span>Samling</span>
                    </StyledTypographyPCard1>

                </StyledElementCard2>
                <StyledElementCard3>
                    <StyledTypographyH1Card>
                        Søndag
                    </StyledTypographyH1Card>
                    <StyledTypographyPCard1>
                        08:30
                        <span>Frokost</span>
                    </StyledTypographyPCard1>
                    <StyledTypographyPCard1>
                        12:30
                        <span>SPA / Lunsj</span>
                    </StyledTypographyPCard1>
                    <StyledTypographyPCard1>
                        15:00
                        <span>Avreise</span>
                    </StyledTypographyPCard1>

                </StyledElementCard3>

            </StyledElementWrapper>
        );
    }
}