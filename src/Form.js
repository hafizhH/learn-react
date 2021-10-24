import React,{Component} from 'react';

const initialState = {
  name: '',
  age: '',
}

class Form extends Component {
  
  state = initialState;

  handleChange = (event) => {
    const {name, value} = event.target;
    if (name==='name') {
      this.setState({
        name: value,
      });
    }
    else {
      this.setState({
        age: value,
      });
    }
  }

  submitForm = () => {
    const {handleSubmit} = this.props;
    handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const {name, age} = this.state;
    return (
      <form>
        <label htmlFor="1">Name : </label>
          <input type="text" id="1" name="name" value={name} onChange={this.handleChange} />
          <br />
        <label htmlFor="2">Age : </label>
          <input type="text" id="2" name="age" value={age} onChange={this.handleChange} />
          <br />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;