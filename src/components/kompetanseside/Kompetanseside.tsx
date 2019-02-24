import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { auth, firestoredb } from '../../config/constants';
import { avatars } from './konstater';
const star = require('./star.svg');

export const sideFadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% { 
         opacity: 1;
    }
`;

const loadingColor = keyframes`
    0% {
        background-color: #FFF;
        opacity: 0;
        transform: translate3d(0, 0, 0);
    }
    50% { 
        background-color: #FFFA76;
    }
    
    80% { 
        background-color: #D642FA;
        transform: translate3d(0, 50%, 0);
    }
    100% { 
        background-color: #FFF;
        opacity: 1;
        transform: translate3d(0, 0, 0);
 
    }
`;

export const Loading = styled.div`
    animation: ${loadingColor} 2200ms infinite;
    width: 5rem;
    height: 5rem;
    display: block;
    margin 5rem auto;
    
    border-radius: 100%;
`;

const StyledElementWrapper = styled.div`
    width: 375px;
    margin: auto;

    animation: ${sideFadeIn} 1400ms;

    font-family: "Helvetica Neue", "Arial", sans-serif !important;
    
    hr {
        border: 0.5px solid #E4E4E4;
        margin: 0.5rem auto;
    }
    
`;

const Avatars = styled.div`
    display: inline-block;
    text-align: center;
    margin: 0 0.5rem;
    > img {
        width: 3rem;        
    }
    > span:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 30%;
        height: 100%;
        background-image: linear-gradient(to right, rgba(255,255,255,0) 0%, white 80%, white 100%);
        pointer-events: none;
      }
    > span {
        position: relative;
        display: block;
        margin: 0.5rem auto;
        overflow-x: hidden;
        width: 3rem;
        white-space: nowrap;
        font-size: .8rem;
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
    background: #08b5ff;
    color: #FFF;
    padding: 0.5rem 2rem;
    border-radius: 10px;
`;

const StyledElementCard2 = styled.div`
    margin: 2rem 0.5rem;
    background: grey;
    color: #FFF;
    padding: 0.5rem 2rem;
    border-radius: 10px;
`;

const StyledTypographyH1Card = styled.h1`
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 0.5rem;    
`;

const StyledTypographyPCard1 = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 1rem;
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

export default class Kompetanseside extends React.Component<RouteComponentProps<{}>, any> { //tslint:disable-line

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

        auth().onAuthStateChanged((user) => { // tslint:disable-line
            if (user) {
                // User is signed in.
            } else {
                // User is signed out.
                this.setState({
                    loading: false
                });
            }

        });

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
            return <Loading/>;
        } else {

            elemem = this.state.names.map((el: { navn: string, avID: string }, key: any) => { // tslint:disable-line

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
                            Oversikt
                        </StyledTypographyH1Small>
                        <StyledTypographyH1>
                            Kompetanse
                        </StyledTypographyH1>
                        <StyledTypographyH2>
                            2019
                        </StyledTypographyH2>
                        <StyledTypographyH3>
                            Oversikt over faglig aktiviteter
                        </StyledTypographyH3>

                        <hr/>
                        <StyledTypographySubtittel>
                            Mål og progresjon
                        </StyledTypographySubtittel>
                    </StyledTekstWrapper>

                </StyledTypographyWrapper>

                <StyledElementCard1>
                    <StyledTypographyH1Card>
                        Frontend sert
                    </StyledTypographyH1Card>
                    <StyledTypographyPCard1>
                        Mars
                    </StyledTypographyPCard1>

                </StyledElementCard1>

                <StyledElementCard1>

                    <StyledTypographyH1Card>
                        AWS sert
                    </StyledTypographyH1Card>

                    <StyledTypographyPCard1>
                        Juli
                    </StyledTypographyPCard1>

                </StyledElementCard1>

                <StyledElementCard1>

                    <StyledTypographyH1Card>
                        Kurs i Presentasjonsteknikk
                    </StyledTypographyH1Card>
                    <StyledTypographyPCard1>
                        Mai
                    </StyledTypographyPCard1>

                </StyledElementCard1>

                <StyledElementCard2>

                    <StyledTypographyH1Card>
                        iMBA
                    </StyledTypographyH1Card>
                    <StyledTypographyPCard1>
                        2019
                    </StyledTypographyPCard1>

                </StyledElementCard2>

                <StyledElementCard2>

                    <StyledTypographyH1Card>
                        Produktutvikling
                    </StyledTypographyH1Card>
                    <StyledTypographyPCard1>
                        2019
                    </StyledTypographyPCard1>

                </StyledElementCard2>

            </StyledElementWrapper>
        );
    }
}
