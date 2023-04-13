import { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Dobbiamo scrivere la NOSTRA interfaccia per le props che questo componente riceverà

interface TSClassComponentProps {
  textContent: string;
  count: number;
  color?: string;
}

// S = { }  state = { firstName: '' }

interface TSClassComponentState {
  firstName: string;
}

class TSClassComponent extends Component<
  TSClassComponentProps,
  TSClassComponentState
> {
  state = {
    firstName: "",
  };

  render() {
    return (
      <div style={{ color: this.props.color || "black" }}>
        <h2>Class Comonent</h2>
        <p>Come lavora TS-React - {this.state.firstName}</p>
        <p>
          {this.props.textContent} | {this.props.count}
        </p>
        <Button
          onClick={() => {
            this.setState({
              firstName: this.state.firstName === "" ? "Giovanni" : "",
            });
          }}
        >
          Change Name
        </Button>
        <Link to="/function">
          <div className="btn btn-warning">GO TO FUNCTIONAL PAGE</div>
        </Link>
      </div>
    );
  }
}

export default TSClassComponent;
