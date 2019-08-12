import React from "react";
import "./App.css";

function MyStatelessComponent() {
  const myList = ["john", "jacob", "jingle", "heimer", "schmidt"];

  const myMappedList = myList.map(name => <div>{name}</div>);
  return <div>{myMappedList}</div>;
}

class MyStatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myList: ["john", "jacob", "jingle", "heimer", "schmidt"],
      name: ""
    };
    this.addName = this.addName.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  addName() {
    const myCoppiedList = this.state.myList.slice();
    myCoppiedList.push(this.state.name);
    this.setState({
      myList: myCoppiedList
    });
  }

  changeHandler(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    const myMappedList = this.state.myList.map(name => <div>{name}</div>);
    return (
      <div>
        <input onChange={this.changeHandler} value={this.state.name} />
        <button onClick={this.addName}>Add Name</button>
        <div>{myMappedList}</div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <MyStatelessComponent />
      <MyStatefulComponent />
    </div>
  );
}

export default App;
