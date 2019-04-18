import React, { Component } from "react"; //imrc + tab   // cc + tab

/*class Counter extends Component {
  render() {
    return (
      // it's important to wrap everything into a div so it would be React.createElement('div')
      <div>
        <h1>Hello World</h1>
        <button>Increment</button>
      </div>

      // or React.Fragment, to write it directly into the root div, and not create another div
    );
  }
}

export default Counter;
*/

// to render something dynamically

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  /*
  state = {
    value: this.props.counter.value,
    // imageUrl: "https://picsum.photos/200"
    // mettre dans render: <img src={this.state.imageUrl} alt="" />

    //tags: ["tag1", "tag2", "tag3"]
  };
*/

  styles = {
    fontSize: 30, // -> 10px or in render <span style={{ fontSize:20 }} className=" badge badge-primary m-2">
    fontWeight: "bold"
  };

  /*constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    // pas besoin de bind comme ca, go utiliser les arrow functions
  }*/

  /*
  // arrow functions don't rebind the this keyword
  handleIncrement = product => {
    console.log(product);
    //console.log("Increment clicked", this);
    this.setState({ value: this.state.value + 1 });
    // with setState react will be aware of the state changes
  };
*/

  /*
  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };
*/

  // render list dynamically inside of the <ul></ul>
  render() {
    //console.log("props", this.props);
    console.log("Counter - Rendered");

    //si on avait une balise a linterieur du <Counter> </Counter> dans counters.jsx
    // mettre ce qui suit dans le div
    //{this.props.children}

    return (
      <div className="container">
        <h4>Counter #{this.props.counter.id}</h4>
        <div className="row">
          <div className="col-1">
            <span style={this.styles} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
          </div>
          <div className="col">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-lg m-2"
            >
              +
            </button>

            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              type="button"
              class="btn btn-secondary btn-lg"
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>

            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-lg m-2"
            >
              x
            </button>
          </div>
        </div>
      </div>
    );
  }

  // render classes dynamically
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter; // destructuring objects
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

/*
class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"]
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // render list dynamically inside of the <ul></ul>
  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }
}
export default Counter;
*/
