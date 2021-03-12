import React, { Component } from 'react';
import './styles.css';

class BadgeForm extends Component {
    constructor() {
      super();
      this.state = {
        firstName: "",
        firstNameList: "",
        lastName: "",
        lastNameList: "",
        email: "",
        emailList: "",
        phone: "",
        phoneList: "",
        placeOfBirth: "",
        placeOfBirthList: "",
        favoriteFood: "",
        favoriteFoodList: "",
        about: "",
        aboutList: "",
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
    formUpdate = (e) => {
      e.preventDefault();
      this.setState({
        firstNameList: this.state.firstName,
        lastNameList: this.state.lastName,
        emailList: this.state.email,
        phoneList: this.state.phone,
        placeOfBirthList: this.state.placeOfBirth,
        favoriteFoodList: this.state.favoriteFood,
        aboutList: this.state.about,
      });
    };
    render() {
      const input =
        this.state.firstName.length > 2 &&
        this.state.lastName.length > 2 &&
        this.state.email.length > 2 &&
        this.state.phone.length > 2 &&
        this.state.placeOfBirth.length > 2 &&
        this.state.favoriteFood.length > 2 &&
        this.state.about.length > 2;
      return (
        <div>
            <form className="form">
            <h2>Please fill out:</h2>
            <div className="info">
            <input
                id="firstName"
                name="firstName"
                required
                value={this.state.firstName}
                onChange={this.handleChange}
                placeholder="First Name"
            />
            <input
                id="lastName"
                name="lastName"
                required
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder="Last Name"
            />
            </div>
            <div className="info">
              <input
                id="email"
                name="email"
                required
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email"
            />
            <input
                id="phone"
                name="phone"
                required
                value={this.state.phone}
                onChange={this.handleChange}
                placeholder="Phone Number"
            />
            </div>
            <div className="info">
              <input
                id="placeOfBirth"
                name="placeOfBirth"
                required
                value={this.state.placeOfBirth}
                onChange={this.handleChange}
                placeholder="Place of Birth"
            />
            <input
                id="favoriteFood"
                name="favoriteFood"
                required
                value={this.state.favoriteFood}
                onChange={this.handleChange}
                placeholder="Favorite Food"
            />
            </div>
            <textarea
                id="about"
                name="about"
                value={this.state.about}
                onChange={this.handleChange}
                placeholder="Tell us about youself">
            </textarea>
            <br />
            <button disabled={!input} onClick={this.formUpdate}>Submit</button>
            </form>
        <div className="form">
            <h2>Name Badge:</h2>
            <p>Name: {this.state.firstNameList} {this.state.lastNameList}</p>
            <p>Phone: {this.state.phoneList}</p>
            <p>Place of Birth: {this.state.placeOfBirthList}</p>
            <p>Favorite Food: {this.state.favoriteFoodList}</p>
            <p>Email: {this.state.emailList}</p>
            <p>About me: {this.state.aboutList}</p>
        </div>
        </div>
      );
    }
  }

export default BadgeForm;