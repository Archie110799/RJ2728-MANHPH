// tsrcfull
import * as React from "react";

interface IAppProps {
  title?: string;
}

interface IAppState {
  number: number;
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      number: 1,
    };
  }

  handleOnClick = () => {
    this.setState((prevState: IAppState) => ({
      number: prevState.number + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>{this.props.title} - {this.state.number}</h1>
        <div>ClassComponent</div>
        <button onClick={this.handleOnClick}>Plus</button>
      </>
    );
  }
}
