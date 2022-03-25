import React from "react";
import {Card, Autocomplete, TextField} from '@mui/material';

interface Props {
    pokemon: string[];
}

class CardInput extends React.Component<Props, {}>{
    render() {
        return(
            <Card style={{width: '10%'}} sx={{p: '1rem', border: 15}}>
                <Autocomplete
                    disablePortal
                    options={this.props.pokemon}
                    renderInput={(params) => <TextField {...params} label="Pokemon"/>}
                />
            </Card>
        );
    }
}

export default CardInput;