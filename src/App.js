import React, {Component} from 'react';
import Cronometro from './Components/Cronometro';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={

    }
  }

  render(){
    return(
      <div>
        <Cronometro/>
      </div>
    )
  }
}

export default App;
