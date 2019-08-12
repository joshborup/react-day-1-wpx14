# React Day 1

- Student can create an app with create react app
- Student can render html on the screen
- Student understands JSX ( {}, className)
- Student can initialize state in a constructor function
- Student can render state on the screen
- Student can use event handlers and e.target.value

## Declarative

React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Nothing will happen unless we specificaly declare it to

```diff
- Wrong => this will not do anything
```

```js
function MyButton() {
  return <button>Press To Alert</button>;
}

<MyButton onClick={() => alert("youve been alerted")} />;
```

```diff
+ Right => React know how to handle events on JSX
```

```js
function MyButton() {
  return (
    <button onClick={() => alert("youve been alerted")}>Press To Alert</button>
  );
}

<MyButton />;
```

# Component-Based

Build encapsulated components that manage their own state, then compose them to make complex UIs.

## dynamic updating of just what changed

we can hardcode data in react like this, but we can then never update or change that data, it will not remember previous user interactions and therefore can be considered stateless

```js
function MyComponent() {
  const myList = ["john", "jacob", "jingle", "heimer", "schmidt"];

  const myMappedList = myList.map(name => <div>{name}</div>);
  return <div>{myMappedList}</div>;
}
```

## What is state and what makes something stateful?

- a program is described as stateful if it is designed to remember preceding events or user interactions;

```js
class MyStatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myList: ["john", "jacob", "jingle", "heimer", "schmidt"]
    };
  }
  render() {
    const myMappedList = this.state.myList.map(name => <div>{name}</div>);
    return <div>{myMappedList}</div>;
  }
}
```

## updating state and re-renders

React is opinionated and would like to manage how state should update and when rerenders should happen. React gives us a method for updating our state in a stateful class component `this.setState()`

**to remember**

- we have access to setState because we extend React.Component
- never directly update arrays and objects, first make a copy and then let `this.setState()` update yout components state
- `this.setState()` needs an object passed to it
  - this means either an object literal, or a function that returns an object literal
- `this.setState()` is an asyncrounous function, so no matter where you put it in your logic, it will run last

```js
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
        <button onClick={addName}>Add Name</button>
        <div>{myMappedList}</div>
      </div>
    );
  }
}
```

## Events in react

events in react are similar to events in HTML except that they are camelcased

- for a better experience, controll the input with the value you are setting

```js
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
      myList: myCoppiedList,
      name: ""
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
```
