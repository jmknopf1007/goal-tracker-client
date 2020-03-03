import React, {Component} from "react";
import { Button, Form, Modal } from "semantic-ui-react";

const INITIAL_STATE = {
  title: "",
  complete_status: false
};

// const completeStatusOptions = [
//     {
//       key: 'false',
//       text: 'false',
//       value: 'false',
        
//     }
//   ]

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

//   handleSelectChange=(e,{value})=>this.setState({stateValue:value})

//   handleDropdownChange = (e, data) => {
//       this.setState({
//           [data.name]: data.value 
//       })
//   }

    // handleSelectChange = (e, result) => {
    //     const { name, value } = result;
    //     this.setState({
    //     [name]: value
    //     });
    // };

  handleFormSubmit = e => {
    // debugger;
    e.preventDefault();
    this.props.createObjective(this.state);
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
                {/* <Dropdown 
                    placeholder='Complete Status'
                    fluid
                    selection
                    value={this.state.complete_status} 
                    onChange={this.handleSelectChange}
                    options={completeStatusOptions}
                    /> */}
            </div>
          </Form>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              Close
            </Button>
            <Button
              onClick={this.handleFormSubmit}
            //   positive
              color='teal'
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

