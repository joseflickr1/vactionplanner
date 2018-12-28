import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { StyledButton, StyledElement1 } from './Styled';

const Element1 = ({tittel, tekst, tekstknapp, ikon, style, onClick}: any) => // tslint:disable-line
        (
                <StyledElement1
                    style={style}
                    onClick={onClick}
                >
                    <Typography
                        variant="display1"
                    >
                        {tittel}
                    </Typography>
                    <Typography
                        variant="body1"
                    >
                        {tekst}
                    </Typography>

                    {ikon}
                    <StyledButton>
                        <Typography
                            variant="body1"
                        >
                            {tekstknapp}
                        </Typography>
                    </StyledButton>

                </StyledElement1>
        );

export default Element1;
