import React, {Component} from "react";
import { Button, Form, Modal, Dropdown } from "semantic-ui-react";

  const categoryOptions = [
    {
      key: 'daily',
      text: 'daily',
      value: 'daily',
    },
    {
      key: 'weekly',
      text: 'weekly',
      value: 'weekly',
    },
    {
        key: 'monthly',
        text: 'monthly',
        value: 'monthly',
      },
      {
        key: 'yearly',
        text: 'yearly',
        value: 'yearly',
      },
       
  ]
  
export default class EditGoalModal extends Component {
  //testing modal click functionality
  state = { 
      description: this.props.goal.description,
      data: {category: this.props.goal.category},
      open: false };

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true, description: this.props.goal.description, category: this.props.goal.category });
  };
  close = () => this.setState({ open: false });

  handleCatChange = (e, { value }) => {
    console.log(value);
    this.setState({ data: {category: value} }, () => console.log(this.state))
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleFormSubmit = e => {
    // debugger;
    e.preventDefault();
    this.props.editGoal({
      description: this.state.description,
      data: this.state.data,
      complete_status: false,
      day_count: 0,
      id: this.props.goal.id
    });
    this.setState({ open: false });
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
          Edit Goal
        </Button>
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>Edit this Goal</Modal.Header>
          <Modal.Content>
            <h4>Please edit the information for your goal.</h4>
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
                <Dropdown 
                    placeholder='Category'
                    fluid
                    selection
                    value={this.state.data.category}
                    onChange={this.handleCatChange}
                    options={categoryOptions}
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
            //   color=''
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
