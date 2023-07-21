import React, {Component} from 'react';
import '../../assets/cronometro.png'
import '../../style.css'

class Cronometro extends Component{
  constructor(props){
    super(props);
    this.state ={
      numero: 0,
      descricaoBotao: 'Iniciar▶️',
      iteracao: 0
    }
    
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.zerar = this.zerar.bind(this);
  }

  vai(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      let state = this.state;
      state.descricaoBotao = 'Continuar▶️';
      this.setState(state);
    }
    else{
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        state.descricaoBotao = 'Pausar⏸️';
        this.setState(state);
      }, 100)
    }
  }

  zerar(){
      let state = this.state;
      clearInterval(this.timer);
      this.timer = null;
      state.numero = 0;
      state.descricaoBotao='Iniciar▶️';
      state.iteracao = state.iteracao + 1;
      this.setState(state);
  }

  render(){
    return(
      <div className='container'>
        <img src={require('../../assets/cronometro.png')} className='img'/>
        <a className='timer'>{this.state.numero.toFixed(1)}</a>
        <div className='areaBtn'>
          <button className='botao' onClick={this.vai}>{this.state.descricaoBotao}</button>
          <button className='botao' onClick={this.zerar}>Zerar🛑</button>
        </div>
        <h1 className='iteracao'>Iteração: {this.state.iteracao}</h1>
      </div>
    )
  }
}

export default Cronometro;
