import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";

class Gift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: "",
      present: ""
    };
  }
  render() {
    return (
      <div className="Gift">
        <Form>
          <FormGroup>
            <FormLabel>Person</FormLabel>
            <FormControl
              className="input-person"
              onChange={(event) =>
                this.setState({ person: event.target.value })
              }
            />
            <FormLabel>Present</FormLabel>
            <FormControl
              className="input-present"
              onChange={(event) =>
                this.setState({ present: event.target.value })
              }
            />
            <Button className="btn-remove" onClick={() => this.props.removeGift(this.props.gift.id)}>Remove Gift</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Gift;
