import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { StyledButton, StyledElement } from './Styled';


const Element = ({tittel, tekst, tekstknapp, ikon, style, onClick}: any) => // tslint:disable-line
        (
                <StyledElement
                    style={style}
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
                    <StyledButton
                        onClick={onClick}
                    >
                        <Typography
                            variant="subtitle1"
                        >
                            {tekstknapp}
                        </Typography>
                    </StyledButton>
                </StyledElement>
        );

export default Element;
