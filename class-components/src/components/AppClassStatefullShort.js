import logo from './logo.svg';
import './App.css';
import {Component} from "react"

//COMPONENTE DE CLASSE - STATEFULL + CLASS FIELDS
class App extends Component {
  state = {
    name: "Victor",
    counter: 0
  }

  //arrow function nao necessita do this pois ela procura tambem no escopo do pai
  handlePClick = () => { this.setState({name: "Vitão"}) }
  handleAClick = (e) => {
    //previne do component da tela fazer algum evento padrão, que nesse caso seria
    //abrir uma nova aba, pois se trata de um link
    e.preventDefault()
    const { counter } = this.state
    this.setState({counter: counter + 1})
  }

  render(){
    const { name, counter } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
