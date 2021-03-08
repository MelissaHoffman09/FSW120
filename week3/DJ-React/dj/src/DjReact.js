import React from 'react'
import './styles.css'

class DjReact extends React.Component {
    constructor() {
        super()
        this.state = {
            squares: ["white", "white", "white", "white"] 
        }
    }

    djSmallTime = () => {
        this.setState(prevState => {
            let square1 = "black";
            let square2 = "black";
            let square3 = "black";
            let square4 = "black";
            return {
                squares: [square1, square2, square3, square4]
            }
        })
    }

    djParty = () => {
        this.setState(prevState => {
            let square1 = "purple"; 
            let square2 = "purple";
            return {
                squares: [square1, square2, prevState.squares[2], prevState.squares[3]]
            }
        })
    }

    djProL = () => {
        this.setState(prevState => {
            let square3 = "blue"; 
            return {
                squares: [prevState.squares[0], prevState.squares[1], square3, prevState.squares[3]]
            }
        })
    }

    djProR = () => {
        this.setState(prevState => {
            let square4 = "blue"; 
            return {
                squares: [prevState.squares[0], prevState.squares[1], prevState.squares[2], square4]
            }
        })
    }

    dj1Big = () => {
        this.setState(prevState => {
            let square1 = "#FD5B78"; 
            return {
                squares: [square1, prevState.squares[1], prevState.squares[2], prevState.squares[3]]
            }
        })
    }
    
    dj2Big = () => {
        this.setState(prevState => {
            let square2 = "#FF9933"
            return {
                squares: [prevState.squares[0], square2, prevState.squares[2], prevState.squares[3]]
            }
        })
    }

    dj3Big = () => {
        this.setState(prevState => {
            let square3 = "#CA3435"
            return {
                squares: [prevState.squares[0], prevState.squares[1], square3, prevState.squares[3]]
            }
        })
    }

    dj4Big = () => {
        this.setState(prevState => {
            let square4 = "#00CC99"
            return {
                squares: [prevState.squares[0], prevState.squares[1], prevState.squares[2], square4]
            }
        })
    }

    render() {
        return(
            <div>
            <div>
                <h1>DJ REACT</h1>
                <div style={{background: this.state.squares[0]}} className="dj-box"></div>
                <div style={{background: this.state.squares[1]}} className="dj-box"></div>
                <div style={{background: this.state.squares[2]}} className="dj-box"></div>
                <div style={{background: this.state.squares[3]}} className="dj-box"></div>
            </div>
            <div>
                <button onClick={this.djSmallTime}>DJ SMALL</button>
                <button onClick={this.djParty}>DJ PARTY</button>
                <button onClick={this.djProL}>DJ PRO L</button>
                <button onClick={this.djProR}>DJ PRO R</button>
                <button onClick={this.dj1Big}> # 1 </button>
                <button onClick={this.dj2Big}> # 2 </button>
                <button onClick={this.dj3Big}> # 3 </button>
                <button onClick={this.dj4Big}> # 4 </button>
            </div>
            </div>
        )
    }
}

export default DjReact