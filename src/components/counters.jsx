// the parent of Counter

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-lg m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            //value={counter.value}
            //selected={true}
            //id={counter.id}
            //ou tout simplement prendre l'objet en lui-meme
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
