import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { StyledLine, StyledElement } from './Styled';


const Element = ({tekst, ikon, style, onClick}: any) => // tslint:disable-line
        (
                <StyledElement
                    style={style}
                    onClick={onClick}
                >
                    <Typography
                        variant="display1"
                    >
                        {tekst}
                    </Typography>

                    {ikon}

                    <StyledLine/>
                </StyledElement>
        );

export default Element;
