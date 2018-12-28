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
                        component="h1"
                        variant="h2"
                    >
                        {tittel}
                    </Typography>
                    <Typography
                        component="h2"
                        variant="h5"
                        gutterBottom={true}
                    >
                        {tekst}
                    </Typography>

                    {ikon}
                    <StyledButton>
                        <Typography
                            variant="subtitle1"
                        >
                            {tekstknapp}
                        </Typography>
                    </StyledButton>

                </StyledElement1>
        );

export default Element1;
