import { Component } from "react";
import './styles.css';

export class Button extends Component {
  render(){
    const { text, handleClick, disabled } = this.props

    return (
      <button
        className="button"
        onClick={handleClick}
        disabled={disabled}
      >
        {text}
      </button>
    )
  }
}