import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { StyledElement1, StyledLine } from './Styled';

const Element1 = ({tekst, ikon, style, onClick}: any) => // tslint:disable-line
        (
                <StyledElement1
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
                </StyledElement1>
        );

export default Element1;
