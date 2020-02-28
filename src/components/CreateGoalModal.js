import React, {Component} from "react";
import { Button, Form, Modal } from "semantic-ui-react";
const INITIAL_STATE = {
  description: "",
  category: "",
  day_count: 0
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
    this.props.postGoal(this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    //testing modal:
    const { open, closeOnEscape, closeOnDimmerClick } = this.state;
    return (
      <div>
        <Button
          onClick={this.closeConfigShow(false, true)}
          color="green"
          inverted
        >
          Add Goal
        </Button>
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>Create a Goal</Modal.Header>
          <Modal.Content>
            <h4>Please provide some information for your goal.</h4>
          </Modal.Content>
          <Form className="ui form" onSubmit={this.handleFormSubmit}>
            <div className="field">
              {/* <label>Description</label> */}
                <input
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder="Description"
                />
              {/* <input
                type="text"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
                placeholder="Category- daily, monthly, weekly, yearly"
              /> */}
                {/* <label>Category</label> */}
                    <select>
                        <option value="" defaultValue>Select a Category</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </select> 
                {/* <input
                    type="text"
                    name="day_count"
                    value={this.state.day_count}
                    onChange={this.handleChange}
                    placeholder="Day_count- MUST begin with a value of 0"
                /> */}
                {/* <label>Day_Count</label> */}
                    <select>
                        <option value="" defaultValue>Day Counter</option>
                        <option value="0">0</option>
                    </select> 
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
