//rcfc

import React, { PureComponent } from "react";

type Props = {};

type State = {
  currentSecond: number;
};

class Countdown extends PureComponent<Props, State> {
  DEFAULT_MAX_SECOND: number;
  timer: ReturnType<typeof setInterval> | undefined ;

  constructor(props: Props) {
    // Goi ham khoi tao cua tk Cha (extends PureComponent)
    super(props);

    //properties
    this.DEFAULT_MAX_SECOND = 100;

    // state
    this.state = {
      currentSecond: this.DEFAULT_MAX_SECOND,
    };

    // bindding event
    // this.setNewNumber = this.setNewNumber.bind(this);
  }
  componentDidMount() {
    // call API
    // send tracking Google Analytics
    // update state
    this.timer = setInterval(() => {
      this.setState((prevState: State) => ({
        currentSecond: prevState.currentSecond - 1,
      }));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    // Han che dung
    // Dung khi handle update component khi click nut back tren URL co query params
    // Khong nen dung setState (Neu dung k kheo -> vong lap vo tan, phai control duoc neu dung)
    console.log("Component DID UPDATE!");
    console.log("--- prevProps", prevProps);
  }

  componentWillUnmount() {
    // 1 lan
    // Chuyen trang
    // Reset data tren redux
    // Clear timeout or interval trc khi component bi huy bo
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { currentSecond } = this.state;
    // const currentSecond = this.state.currentSecond
    return (
      <div className={`w-50 m-auto mt-3 text-center`}>{currentSecond}</div>
    );
  }
}

export default Countdown;
