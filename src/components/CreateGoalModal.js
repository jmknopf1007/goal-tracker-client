import React, {Component} from 'react'
import {Button, Form, Modal, Dropdown} from 'semantic-ui-react'

const INITIAL_STATE = {
  description: "",
  data:{
    category: ""
  },
  open: false
}

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


export default class CreateGoalModal extends Component {
  state = { open: false }
  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }
  close = () => this.setState({ open: false })
  //-------------------------------------------
  state = INITIAL_STATE



  handleCatChange = (e, { value }) => {
    // console.log(value)
    this.setState({ data: {category: value} })
  }

  handleChange = (e) => {
    // console.log(value)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit = e => {
    // debugger;
    e.preventDefault()
    this.props.createGoal({
      description: this.state.description,
      category: this.state.data.category,
      complete_status: false,
      day_count: 0
    })
    this.setState(INITIAL_STATE)
  }

  render() {
    const { open, closeOnEscape, closeOnDimmerClick, value } = this.state
    return (
      <div>
        <Button
          onClick={this.closeConfigShow(false, true)}
          // color="teal"
          // inverted
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
                    placeholder="Category- daily, weekly, monthly, or yearly"
                /> */}
                    <Dropdown 
                    placeholder="Select Category"
                    fluid
                    selection
                    name="Category"
                    value={value}
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
              // positive
              // color=''
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
