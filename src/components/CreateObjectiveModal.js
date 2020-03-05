import React, {Component} from "react";
import { Button, Form, Modal } from "semantic-ui-react";

const INITIAL_STATE = {
  title: "",
  open: false
};

export default class CreateObjectiveModal extends Component {
  //testing modal click functionality
  state = { open: false };
  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
  };
  close = () => this.setState({ open: false });
  //-------------------------------------------
  state = INITIAL_STATE;

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = e => {
    // debugger;
    e.preventDefault();
    this.props.createObjective({
        title: this.state.title,
        complete_status: false,
        user_id: this.props.user.id
    });
    this.setState(INITIAL_STATE);
  };

  render() {
    //testing modal:
    const { open, closeOnEscape, closeOnDimmerClick } = this.state;
    return (
        <div>
        {/* {console.log(this.props)} */}
        <Button
          onClick={this.closeConfigShow(false, true)}
        //   color="teal"
        //   inverted
        >
          Add Objective
        </Button>
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>Create an Objective</Modal.Header>
          <Modal.Content>
            <h4>Please provide a title for your objective.</h4>
          </Modal.Content>
          <Form className="ui form" onSubmit={this.handleFormSubmit}>
            <div className="field">
              {/* <label>Title</label> */}
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                placeholder="Title"
              />
            </div>
          </Form>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              Close
            </Button>
            <Button
              onClick={this.handleFormSubmit}
            //   positive
            //   color='silver'
              labelPosition="right"
              icon="checkmark"
              content="Submit"
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

