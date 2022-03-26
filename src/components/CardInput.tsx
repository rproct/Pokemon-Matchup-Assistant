import React, { SyntheticEvent } from "react";
import {Card, CardMedia, Autocomplete, TextField, Fade, Slide} from '@mui/material';

interface Props {
    pokemon: Map<any, any>;
}

class CardInput extends React.Component<Props, {}>{
    state = {
        fade: false
    }

    constructor(props: any){
        super(props);
        this.onPokemonSelect = this.onPokemonSelect.bind(this);
    }

    componentDidMount(){
        this.setState({fade: true});
    }

    onPokemonSelect(v: any){
        console.log(v);
    }

    render() {
        return(
            <Fade in={this.state.fade} timeout={500} unmountOnExit>
                <div style={{width: '15%'}}>
                    <Slide in={this.state.fade}>
                        <Card sx={{p: '1rem', border: 15}}>
                            <CardMedia
                                component='image'
                                height='200'
                                image='../Missingno.png'
                            />
                            <Autocomplete
                                disablePortal
                                options={Array.from(this.props.pokemon.keys())}
                                renderInput={(params) => <TextField {...params} label="Pokemon" size='small'/>}
                                onChange={(e, v) => this.onPokemonSelect(v)}
                            />
                        </Card>
                    </Slide>
                </div>
            </Fade>
        );
    }
}

export default CardInput;