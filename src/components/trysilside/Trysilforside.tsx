import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { auth, firestoredb } from '../../config/constants';
import { avatars } from './konstater';
import { Loading, sideFadeIn } from './Trysilside';
const Tittelforside = require('./Tittelforside.svg');

const StyledElementWrapper = styled.div`

    -webkit-tap-highlight-color: rgba(0,0,0,0);
    
    height: 100vh;
    
    width: 375px;
    margin: auto;
    
    background: linear-gradient(#6FA6FF, #0867FF 34%);
        
    display:flex;
    
    
    font-family: "Helvetica Neue", "Arial", sans-serif !important;
    
`;

const Feildiv = styled.div`
    margin-bottom: 1rem;
    color: #FFF;
`;

const StyledContentWrapper = styled.div`
    width: 100%;
    margin: 0;
    text-align: center;
    
    animation: ${sideFadeIn} 1400ms;
    
    > div {
        > img {
            width: 4rem;
            display: block;
            margin: 1rem auto 0 auto;
        }
        
        > div {
            font-size: 1rem;
            height: 1rem;
            color: #FFF;
            margin-bottom: 2rem;
        }
    
    }
    
    > img {
        width: 15rem;
        margin-top: 4rem;
    }
    
    h1 {
        font-size: 19.6px;
        font-weight: 400;
        color: #FFF;
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }
    
    input {
        display: block; 
        width: 78%; 
        margin-left: auto; 
        margin-right: auto; 
        height: 2rem;
        font-size: 1.1rem;
        font-family: "Helvetica Neue","Arial",sans-serif !important;
        padding: 0.5rem; 
        border: none;
        margin-bottom: 1rem;
        text-align: center; 
        border-radius: 5px;
    }
    
    button:focus {
        border: 0.5rem solid pink;
    }
    
    button {
        display: block;
        width: 78%;
        margin: auto;
        padding: 1rem;
        background-color: #D642FA;
        color: #FFF;
        border: none;
        border-radius: 7rem;
        font-family: "Helvetica Neue","Arial",sans-serif !important;
        font-size: 1.1rem;
    }    
`;

export default class Trysilforside extends React.Component<RouteComponentProps<{}>, any> { //tslint:disable-line

    constructor(props: any) { //tslint:disable-line
        super(props);

        window.scrollTo(0, 0);

        this.state = {
            navn: '',
            loading: true,
            avatarIds: avatars,
            inputHasFocus: false,
            navnErTomt: false,
        };
    }

    componentDidMount(): void {
        auth().onAuthStateChanged((user) => { // tslint:disable-line
            if (user) {
                // User is signed in.
                this.props.history.push('/trysilside');

            } else {
                // User is signed out.
                this.setState({
                    loading: false
                });
            }

        });
    }

    render() {
        let visFeilElement = null;
        if (this.state.loading) {
            return (
                <StyledElementWrapper>
                    <Loading/>
                </StyledElementWrapper>
            );
        }
        const random = Math.floor(Math.random() * 5);

        console.log('random', random); // tslint:disable-line

        if (this.state.navnErTomt) {
            visFeilElement = (
                <Feildiv>
                    Trenger å fylle navnet ditt :)
                </Feildiv>
            );
        }

        return (
            <StyledElementWrapper>
                <StyledContentWrapper>

                    <img src={Tittelforside}/>
                    <h1>
                        Velkommen! <br/> Skriv inn ditt navn og se programmet
                    </h1>

                    <div>
                        <img src={this.state.avatarIds[random]}/>
                        <div>{this.state.navn}</div>
                    </div>

                    <input
                        type="text"
                        placeholder="Skriv inn ditt navn"
                        value={this.state.navn}
                        onChange={(event: any) => { // tslint:disable-line
                            this.setState({
                                navn: event.target.value,
                            });

                            if (this.state.navn === '') {
                                this.setState({
                                    navnErTomt: false
                                });
                            }
                        }}
                    />
                    {visFeilElement}

                    <button
                        onClick={() => {

                            if (this.state.navn === '') {
                                this.setState({
                                    navnErTomt: true
                                });
                                return;
                            }
                            auth().signInAnonymously().catch(function(error: any) { //tslint:disable-line
                                // Handle Errors here.
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                console.log('errorCode, errorMessage', errorCode, errorMessage); //tslint:disable-line
                            });
                            auth().onAuthStateChanged((user) => { // tslint:disable-line
                                if (user) {
                                    // User is signed in.
                                    firestoredb.collection('users').add({
                                        first: this.state.navn,
                                        avID: random,
                                    })
                                        .then((docRef) => { // tslint:disable-line
                                            console.log('Document written with ID: ', docRef.id); // tslint:disable-line
                                            this.props.history.push('/trysilside');
                                        })
                                        .catch(function(error) { // tslint:disable-line
                                            console.error('Error adding document: ', error); // tslint:disable-line
                                        });

                                } else {
                                    // User is signed out.
                                    this.setState({
                                        loading: true
                                    });
                                }
                            });
                        }}
                    >
                        Ja, vis meg programmet!
                    </button>
                </StyledContentWrapper>
            </StyledElementWrapper>
        );
    }
}