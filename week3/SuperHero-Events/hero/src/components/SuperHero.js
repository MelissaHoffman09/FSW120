import React from "react"

class SuperHero extends React.Component {
    showCatchPhrase = (phrase) => {
        alert(phrase)
    }

    render() {
        return (
            <div onClick={() => this.showCatchPhrase(`${this.props.name} catchphrase: ${this.props.catchPhrase}`)}>
                <h2>{this.props.name}</h2>
                <p><span>Show: </span>{this.props.show}</p>
                <p><span>Catchphrase: </span><em>Click on me...</em></p>
                <img src={this.props.imageName}/>
            </div>
        )
    } 
}

export default SuperHero