import React, { Component } from "react";
import Countdown from "./Countdown";

type Props = {};

type State = {
  data: number;
  showComponent: boolean;
};

type ChildComponentProps = {
  myNumber: any;
};

type ChildComponentState = {};

class LifecycleExample extends Component<Props, State> {
  DEFAULT_MAX_LENGHT: number;

  constructor(props: Props) {
    // Goi ham khoi tao cua tk Cha (extends Component)
    super(props);

    //properties
    this.DEFAULT_MAX_LENGHT = 10;

    // state
    this.state = {
      showComponent: true,
      data: 0,
    };

    // bindding event
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber() {
    this.setState({ data: this.state.data + 1 });
  }

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(event);
    this.setState((prevState: State) => ({
      showComponent: !prevState.showComponent,
    }));
  };

  render() {
    return (
      <div className={`w-50 m-auto mt-3 text-center`}>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        {this.state.showComponent && (
          <ChildComponent myNumber={this.state.data}></ChildComponent>
        )}
        <hr />
        {!this.state.showComponent && <Countdown />}
        <button onClick={this.handleClick}>
          {this.state.showComponent ? "Open Countdown" : "Close Countdown"}
        </button>
      </div>
    );
  }
}

class ChildComponent extends Component<
  ChildComponentProps,
  ChildComponentState
> {
  constructor(props: ChildComponentProps) {
    super(props);

    // this.state = {
    //   users: [],
    //   loading: true,
    // };
    console.log("constructor");
  }
  // componentWillMount is executed before rendering, on both server and client side.
  componentWillMount() {
    console.log("Component WILL MOUNT!");
  }

  // componentDidMount is executed after first render only on the client side.
  // This is where AJAX requests and DOM or state updates should occur.
  // This method is also used for integration with other JavaScript frameworks and any functions with delayed execution like setTimeout or setInterval.
  // We are using it to update the state so we can trigger the other lifecycle methods.
  componentDidMount() {
    // call API
    // const listUser = await userApi.getAll()
    // this.setState({
    //   users : listUser,
    //   loading : false
    // })

    // send tracking Google Analytics
    // update state
    console.log("Component DID MOUNT!");
  }

  // componentWillReceiveProps is invoked as soon as the props are updated before another render is called.
  // We triggered it from setNewNumber when we updated the state.
  componentWillReceiveProps(_newProps: ChildComponentProps) {
    console.log("Component WILL RECIEVE PROPS!");
    console.log("--- newProps", _newProps);
  }

  // shouldComponentUpdate should return true or false value.
  // This will determine if component will be updated or not.
  // This is set to true by default.
  // If you are sure that component doesn't need to render after state or props are updated, you can return false value.
  shouldComponentUpdate(
    _newProps: ChildComponentProps,
    _newState: ChildComponentState
  ) {
    return true;
  }

  componentWillUpdate(nextProps: ChildComponentProps) {
    console.log("Component WILL UPDATE!");
    console.log("--- nextProps", nextProps);
  }

  componentDidUpdate(prevProps: ChildComponentProps) {
    console.log("Component DID UPDATE!");
    console.log("--- prevProps", prevProps);
  }

  componentWillUnmount() {
    // 1 lan
    // Chuyen trang
    // Reset data tren redux
    // Clear timeout or interval trc khi component bi huy bo

    console.log("Component WILL UNMOUNT!");
  }
  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

export default LifecycleExample;
