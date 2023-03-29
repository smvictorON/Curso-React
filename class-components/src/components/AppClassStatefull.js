import logo from './logo.svg';
import './App.css';
import {Component} from "react"

//COMPONENTE DE CLASSE - STATEFULL
class App extends Component {
  //constructor do elemento de classe sempre vai receber as props
  constructor(props) {
    //e como extende de Component usamos o super para executar o constructor dela
    super(props)
    this.state = {
      name: "Victor",
      counter: 0
    }

    //fazendo o bind é possível acessar o this dentro do método
    this.handlePClick = this.handlePClick.bind(this)
    this.handleAClick = this.handleAClick.bind(this)
  }

  handlePClick() {
    //não é possível acessar o this dentro do métido pois o react não faz esse bind
    //para isso é preciso fazer manualmente
    //const { name } = this.state

    this.setState({name: "Vitão"})
  }

  handleAClick(e) {
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
