import React,{Component} from 'react';
import Table from './Table';
import Form from './Form';
import './App.css';

const initialState = {
  characterData: [],
}

class App extends Component {
  state = initialState;

  handleSubmit = (newCharacter) => {
    this.setState({ characterData : [...this.state.characterData, newCharacter] });
  }

  handleRemove = (index) => {
    const {characterData} = this.state;
    this.setState({
      characterData: characterData.filter((c,i) => i !== index),    //Hapus data pada index ke-i
    });
  }

  render() {
    const {characterData} = this.state;
    return (
      <div className="container">
        <h1>People List</h1>
        <Table tableData={characterData} tableFunction={this.handleRemove}/>
        <br/>
        <h3>Input New Person</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;