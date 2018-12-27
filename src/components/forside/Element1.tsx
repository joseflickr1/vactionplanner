import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { primaryContrastText } from '../../assets/jss/material-fotohjelp-react';
import { fadeInUp, StyledLine } from './Styled';

const StyledElement = styled.div`
    vertical-align: middle;
    position: absolute;
    width: 100%;
    text-align: center;
    padding: 2rem 0;
    
    > h1, p {
        margin-bottom: 20px;
    }
    > h1, p {
        color: ${primaryContrastText}
    }
    
    animation-name: ${fadeInUp};
    animation-duration: 400ms;
    
`;

const Element1 = ({tekst, ikon, style, onClick}: any) => // tslint:disable-line
        (
                <StyledElement
                    style={style}
                >
                    <Typography
                        variant="display1"
                    >
                        {tekst}
                    </Typography>

                    {ikon}

                    <StyledLine/>
                    <div
                        onClick={onClick}
                    >Hei
                    </div>
                </StyledElement>
        );

export default Element1;
