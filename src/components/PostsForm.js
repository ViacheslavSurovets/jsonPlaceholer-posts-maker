import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from '../actions/postAction';
import {Button, Form, Input, Modal } from 'antd';

const { TextArea } = Input;


class PostsForm extends Component {
   state={
       title: '',
       body:''
   }

 onChange = (e) => {
this.setState({
    [e.target.name] : e.target.value
})
};

 onSubmit = (e) => {
e.preventDefault();
if(this.state.title === '' || this.state.body === ''){
    return Modal.error({
        title: 'This is an error message',
        content: 'Try to fill out the fields, please...',
      });
} else {
    const post = {
        title: this.state.title,
        body: this.state.body
      };
      
      this.props.createPost(post);
      };
}


    render() {
        return (
            <div>
                <h1>Add Posts</h1>
                <Form onSubmit={this.onSubmit}>
                   <div>
                       <label>Title: </label><br/>
                       <Input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
                   </div>
                   <br/>
                   <div>
                       <label>Body: </label><br/>
                       <TextArea name="body" value={this.state.body} onChange={this.onChange} />
                   </div>
                   <br />
                   <Button type="primary"  htmlType='submit' block>Submit</Button>
                </Form>
            </div>
        )
    }
}

PostsForm.propTypes = {
    createPost: PropTypes.func.isRequired
  };
  
  export default connect(null, { createPost })(PostsForm);