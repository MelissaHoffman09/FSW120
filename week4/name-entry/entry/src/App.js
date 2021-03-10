import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      names: ['Captin Marvel', 'Captin America', 'Vision', 'Wanda'],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      names: this.state.names.concat(this.state.name),
    });
  };

  render() {
    return (
      <div style={{margin:'auto', width:'200px', padding: '10px'}}>
        <form onSubmit={this.onSubmit}>
          <input style={{width: '200px'}}
            type="text"
            name="name"
            placeholder="Avenger Name"
            value={this.state.item}
            onChange={this.handleChange}
          />
          <br />
          <h1 style={{textAlign: 'center', fontSize: '20px'}}>{this.state.name}</h1>
          <button style={{width: '200px'}} onClick={this.handleClick}>Add Name</button>
        </form>
          <ol>
            {this.state.names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ol>
        </div>
    );
  }
}

export default App;