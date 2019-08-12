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
      myList: ["john", "jacob", "jingle", "heimer", "schmidt"]
    };
    this.addName = this.addName.bind(this);
  }

  addName() {
    const myCoppiedList = this.state.myList.slice();
    myCoppiedList.push("His name is my name too!");
    this.setState({
      myList: myCoppiedList
    });
  }

  render() {
    const myMappedList = this.state.myList.map(name => <div>{name}</div>);
    return (
      <div>
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
