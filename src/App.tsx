import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TeamCreation} from './components'
import axios from 'axios';

class App extends React.Component {
  state = {
    pokeList: new Map()
  }

  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=2000')
      .then(res => {
        let newMap = new Map()
        for(let i of res.data.results)
          newMap.set(this.convertString(i.name), i.url);
        this.setState({pokeList: newMap})
      })
  }

  convertString(str: string){
    let arr = str.split('-')
    for(let i = 0; i < arr.length; i++)
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    return arr.join(' ');
  }

  render(){
    return(
      <div>
        <TeamCreation pokemon={Array.from(this.state.pokeList.keys())}/>
      </div>
    );
  }
}

export default App;
