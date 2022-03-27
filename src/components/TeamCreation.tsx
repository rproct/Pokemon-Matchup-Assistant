import { Box, Button, Grid } from "@mui/material";
import React from "react";
import CardInput from "./CardInput";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { CardTravelSharp, ThreeMpTwoTone } from "@mui/icons-material";

interface Props {
    pokemon: Map<any, any>;
}

class TeamCreation extends React.Component<Props, {}>{
    state = {
        cards: []
    }

    constructor(props: any){
        super(props);
        this.addCard = this.addCard.bind(this);
        this.getTime = this.getTime.bind(this);
    }

    addCard(){
        let time = this.getTime();
        this.setState({cards: [...this.state.cards, <CardInput pokemon={this.props.pokemon} time={time} key={time}/>]})
    }

    getTime(){
        let time = new Date();
        return time.getTime();
    }

    render() {
        return(
            <div>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }}>
                    {this.state.cards}
                    {this.state.cards.length < 6 ? <Button onClick={this.addCard}><AddCircleIcon/></Button> : ''}
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Button variant="contained" size="large" disabled={this.state.cards.length === 0}>Confirm</Button>
                </Box>
            </div>
        );
    }
}

export default TeamCreation;