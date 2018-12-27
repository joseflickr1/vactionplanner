import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { StyledLine, StyledElement } from './Styled';


const Element = ({tekst, ikon, style, onClick}: any) => // tslint:disable-line
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

export default Element;
