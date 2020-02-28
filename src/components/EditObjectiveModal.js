import React, {Component} from "react";
import { Button, Form, Modal } from "semantic-ui-react";
const INITIAL_STATE = {
  title: ""
};
export default class EditObjectiveModal extends Component {
    // objective = this.props
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
    this.props.postObjective(this.state);
    this.setState(INITIAL_STATE);
  };
  render() {
    //testing modal:
    const { open, closeOnEscape, closeOnDimmerClick } = this.state;
    return (
      <div>
        <Button
          onClick={this.closeConfigShow(false, true)}
          color="yellow"
        //   inverted
        >
          Edit Objective
        </Button>
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>Edit this Objective</Modal.Header>
          <Modal.Content>
            <h4>Please edit the title of your objective.</h4>
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
            {/* <button type="submit" className="ui button">Submit</button> */}
          </Form>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              Close
            </Button>
            <Button
              onClick={this.handleFormSubmit}
              positive
              labelPosition="right"
              icon="thumbs up"
              content="Submit"
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
