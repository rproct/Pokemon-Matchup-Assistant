import React, { SyntheticEvent } from "react";
import {Card, CardMedia, Autocomplete, TextField, Fade, Slide, Button} from '@mui/material';
import MissingNo from '../Missingno.png'
import {DoNotDisturbOn} from '@mui/icons-material';

interface Props {
    pokemon: Map<any, any>;
    time: number;
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
            <Fade in={this.state.fade} timeout={500} onAnimationEnd={() => {if(!this.state.fade) console.log('Card unmounted')}}>
                <div>
                    <Slide in={this.state.fade}>
                        <Card sx={{p: '1rem', border: 15, borderColor: 'gray', width: '15em'}}>
                            <Button sx={{float: "right"}} onClick={() => this.setState({fade: false})}>
                                <DoNotDisturbOn sx={{color: 'red'}}/>
                            </Button>
                            <CardMedia
                                component='img'
                                height='200'
                                image={MissingNo}
                                sx={{py: '1em'}}
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