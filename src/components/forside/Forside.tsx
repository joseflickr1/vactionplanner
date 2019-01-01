import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import Element1 from './Element1';
import Element from './Element';
import {
    styleIn, styleOut
} from './Styled';

const Group1 = require('./Group1.svg');
const Group2 = require('./Group2.svg');

const StyledElementWrapper = styled.div`
    height: 80vh;
`;

export default class Forside extends React.Component<RouteComponentProps<{}>, any> { //tslint:disable-line
    props1 = {
        tittel: 'Hei',
        tekst: 'Planlegge ferie 2019?',
        tekstknapp: 'Neste',
        img: Group1,
        onClick: () => {
            this.setState({
                              elementToShow: 2
                          });
        },
    };

    constructor(props: any) { //tslint:disable-line
        super(props);
        this.state = {
            elementToShow: 1,

        };
    }

    componentWillMount() {
        const styleKey = 'style';
        if (this.state.elementToShow === 1) {
            this.props1[styleKey] = styleIn;
        }
    }

    render() {

        let props2 = {
            tittel: 'Desember 2019',
            tekst: 'Hold av datoen',
            tekstknapp: 'Ja, vis meg mer',
            img: Group2,
            onClick:
                    (e: any) => { //tslint:disable-line
                        e.preventDefault();
                        this.setState({
                            elementToShow: 3
                        });
                    }
            ,
        };
        let props3 = {
            tittel: 'Palawan',
            tekst: 'Du skal til varmt sted og \n' +
                'nyte sol og strand',
            tekstknapp: 'Ja, jeg vil bli med',
            img: Group1,
            onClick:
                    () => {
                        this.setState({
                            elementToShow: 1
                        });
                    }
            ,
        };

        const styleKey = 'style';
        if (this.state.elementToShow === 2) {
            this.props1[styleKey] = styleOut;
            props2[styleKey] = styleIn;

        } else if (this.state.elementToShow === 3) {
            props2[styleKey] = styleOut;
            props3[styleKey] = styleIn;
        }

        const pro1 = this.props1;
        return (
            <StyledElementWrapper>
                <Element1 {...pro1} />
                <Element {...props2} />
                <Element {...props3} />

            </StyledElementWrapper>
        );
    }
}