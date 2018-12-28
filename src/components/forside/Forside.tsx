import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import Element1 from './Element1';
import Element from './Element';
import {
    StyledCalender,
    StyledCircle, styleIn, styleOut
} from './Styled';

const StyledElementWrapper = styled.div`
    height: 100vh;
`;

export default class Forside extends React.Component<RouteComponentProps<{}>, any> { //tslint:disable-line

    constructor(props: any) { //tslint:disable-line
        super(props);
        this.state = {
            elementToShow: 1,
        };
    }

    render() {

        let props1 = {
            tekst: 'You are invited',
            ikon: <StyledCircle/>,
            onClick: () => {
                this.setState({
                    elementToShow: 2
                });
            },
        };
        let props2 = {
            tekst: 'Desember 2019',
            ikon: <StyledCalender/>,
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
            tekst: 'Palawan',
            ikon: <StyledCalender/>,
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
            props1[styleKey] = styleOut;
            props2[styleKey] = styleIn;

        } else if (this.state.elementToShow === 3) {
            props2[styleKey] = styleOut;
            props3[styleKey] = styleIn;
        }

        return (
            <StyledElementWrapper>
                <Element1 {...props1} />
                <Element {...props2} />
                <Element {...props3} />
            </StyledElementWrapper>
        );
    }
}