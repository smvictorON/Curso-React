import './App.css';
import { Component } from "react"

//COMPONENTE DE CLASSE - STATEFULL + CLASS FIELDS
class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Title 1",
        body: "Body 1"
      },
      {
        id: 2,
        title: "Title 2",
        body: "Body 2"
      },
      {
        id: 3,
        title: "Title 3",
        body: "Body 3"
      }
    ],
    counter: 0
  }

  timeoutUpdate = null

  componentDidMount() {
    this.handleTimeOut()
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps);
    console.log(prevState);
    this.handleTimeOut()
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutUpdate)
  }

  handleTimeOut = () => {
    const { counter } = this.state
    this.timeoutUpdate = setTimeout(() => {
      this.setState({ counter: counter + 1})
    }, 1000)
  }

  render() {
    const { posts, counter } = this.state

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
