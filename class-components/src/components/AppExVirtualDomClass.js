import './styles.css';
import { Component } from 'react';

export class Home extends Component {
  state =  {
    counter: 0
  }

  handleClickWrong = () => {
    //não é interessante pegar o valor direto do state pois
    //ele pode nao estar atualizado
    const { counter } = this.state

    this.setState({counter: counter + 1})

    //o console vai mostrar o valor anterior pois o setState é
    //assicrono e console executa antes do setState terminar
    console.log(this.state.counter);
  }

  handleClickRight = () => {
    //usando o callback aqui evitamos o problema que ter o log
    //desatualizado pois esse código é assincrono
    this.setState(
      //desse modo garantimos que o valor a ser atualizado é o
      //valor atual do estado
      (prevState, prevProps) => {
        console.log('Prev', prevState.counter)
        //podemos tambem ter acesso as props atualizadas
        console.log('Props', prevProps)
        return { counter: prevState.counter + prevProps.incrementNumber}
      },
      //callback chamado após executar o setState
      () => {
        //valor após ter dado o setState
        console.log('Post', this.state.counter);
      }
    )
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClickRight}>Increment</button>
      </div>
    )
  }
}
