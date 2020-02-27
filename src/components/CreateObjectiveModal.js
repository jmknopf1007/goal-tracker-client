import React, {Component} from "react";
import { Button, Form, Modal } from "semantic-ui-react";
const INITIAL_STATE = {
  title: ""
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
          color="green"
          inverted
        >
          ✛ Objective
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

// OLD CODE NOT TESTED

// import React, {Component} from 'react'
// import { Form, Grid, Button, Header, Modal } from 'semantic-ui-react'
// import { api } from '../services/api'

// class CreateObjectiveModal extends Component {
//     state = {
//         title: ""
//     }

//     handleChange = e => 
//     this.setState({[e.target.name]: e.target.value})

//     handleClick = () => {
//         let {title} = this.state
//        if (title) {
//            api.data.postObjective({title: this.state})
//        }
//     }

//     render() {
//         return (
//             <Modal trigger={<Button>Edit Objective</Button>}>
//                 {/* <Modal.Header>Click Submit When Done Editing</Modal.Header> */}
//                 <Modal.Content>
//                 {/* <Modal.Description> */}
//                     {/* <Header>What Changes Would You Like...</Header> */}
//                     <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
//                         <Grid.Column style={{ maxWidth: 450 }}>
//                             <Header as='h1' inverted textAlign='center'>
//                                 Please click submit when finished with your edits...
//                             </Header>
//                                 <Form size='small'>
//                                     <Form.Input 
//                                         fluid 
//                                         icon='file text' 
//                                         iconPosition='left' 
//                                         placeholder='Title' 
//                                         name='title'
//                                         value={username}
//                                         onChange={this.handleChange}
//                                     />
//                                     <Button 
//                                         color='teal'
//                                         //type="button" 
//                                         fluid 
//                                         size='large'
//                                         onClick={this.handleClick}
//                                     >
//                                         Submit 
//                                     </Button>
//                                 </Form>
//                         </Grid.Column>
//                     </Grid>
//                     {/* </Modal.Description> */}
//                 </Modal.Content>
//             </Modal>
//         )
//     }
// }

// export default CreateObjectiveModal
