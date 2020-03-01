import React, {Component} from "react";
import { Button, Form, Modal, Dropdown } from "semantic-ui-react";

const INITIAL_STATE = {
  description: "",
  category: "",
  complete_status: false,
  day_count: 0
};

const categoryOptions = [
    {
      key: 'Daily',
      text: 'Daily',
      value: 'Daily',
    },
    {
      key: 'Weekly',
      text: 'Weekly',
      value: 'Weekly',
    },
    {
        key: 'Monthly',
        text: 'Monthly',
        value: 'Monthly',
      },
      {
        key: 'Yearly',
        text: 'Yearly',
        value: 'Yearly',
      },
       
  ]
  
//   const completeStatusOptions = [
//     {
//       key: 'false',
//       text: 'false',
//       value: 'false',
//     }
//   ]
  
//   const dayCountOptions = [
//     {
//       key: '0',
//       text: '0',
//       value: '0',
//     }
//   ]

export default class EditGoalModal extends Component {
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
                    value={this.state.category}
                    options={categoryOptions}
                    />
                     {/* <Dropdown 
                    placeholder='Complete Status'
                    fluid
                    selection
                    value={this.state.complete_status}
                    options={completeStatusOptions}
                    />
                    <Dropdown 
                    placeholder='Day Counter'
                    fluid
                    selection
                    value={this.state.day_count}
                    options={dayCountOptions}
                    /> */}
            </div>
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
