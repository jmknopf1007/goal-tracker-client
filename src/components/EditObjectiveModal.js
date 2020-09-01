import React, {Component} from 'react'
import {Button, Form, Modal} from 'semantic-ui-react'

export default class EditObjectiveModal extends Component {
  state = { 
      title: this.props.objective.title,
      open: false
     };

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true, title: this.props.objective.title});
  };
  close = () => this.setState({ open: false});

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = e => {
    // debugger;
    e.preventDefault();
    this.props.editObjective({
        title: this.state.title,
        complete_status: false,
        user_id: this.props.user.id,
        id: this.props.objective.id
    });
    this.setState({ open: false })
  };

  render() {
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
              content="Save"
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
