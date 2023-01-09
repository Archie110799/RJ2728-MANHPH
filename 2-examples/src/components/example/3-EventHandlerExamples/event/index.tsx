import React, { Component } from "react";

interface MyProps {}

interface MyState {
  color: string;
}

export default class EventHandler extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      color: "red",
    };

    //register event
    this.setColor = this.setColor.bind(this);
  }

  setColor() {
    console.log("setColor");
    this.setState({ color: "blue" });
  }

  setColorArrowFunc = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target);
    this.setState({ color: "red" });
  };

  setColorArrowFuncParamsE = (
    data: any,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log(data, event.target);
    this.setState({ color: "blue" });
    event.preventDefault();
  };

  setColorBind = (data: any, event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(data, event.target);
  };

  render() {
    function handClick(self: any, event: React.MouseEvent<HTMLButtonElement>) {
      console.log("clicked", event.target);
      self.setState({ color: "red" });
    }
    return (
      <div className="w-50 m-auto text-center text-uppercase">
        <div style={{ fontSize: 100 }}>{this?.state?.color}</div>
        <button onClick={(e) => handClick(this, e)}>Set Red Bind</button>
        <button onClick={this.setColor}>Set Blue Bind</button>
        <button onClick={this.setColorArrowFunc}>Set Red Arrow func</button>
        <button onClick={() => console.log("inline")}>Event Inline</button>

        <button onClick={(e) => this.setColorArrowFuncParamsE(this?.state, e)}>
          setColorArrowFuncParamsE
        </button>
        <button onClick={this.setColorBind.bind(this, this?.state)}>
          setColorBind
        </button>
      </div>
    );
  }
}
