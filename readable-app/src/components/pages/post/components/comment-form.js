import React from 'react';
import * as uuid from 'uuid/v4';
import moment from 'moment';
import { connect } from 'react-redux';
import { doAddComment } from '../../../../actions/comments';

class CommentForm extends React.Component {
  state = {
    nameIsNotEmpty: true,
    messageIsNotEmpty: true
  };

  /**
   * clear form inputs
   */
  clearForm(){
    this.nameInput.value = '';
    this.messageInput.value = '';
  }

  onSubmit(event) {
    event.preventDefault();

    //validate form
    if (this.validateForm()){

      //handle further submission
      const comment = {
        id: uuid(),
        author: this.nameInput.value,
        body: this.messageInput.value,
        timestamp: moment().unix(),
        parentId: this.props.post.id
      }

      //fire up action to add a comment
      this.props.dispatch(doAddComment(comment));
      this.clearForm();
    }
  }

  /**
   * simple form validation
   * @returns {boolean}
   */
  validateForm() {
    const nameIsNotEmpty = this.nameInput.value.trim().length > 0;
    const messageIsNotEmpty = this.messageInput.value.trim().length > 0;

    this.setState({
      nameIsNotEmpty: nameIsNotEmpty,
      messageIsNotEmpty: messageIsNotEmpty
    });

    return nameIsNotEmpty && messageIsNotEmpty;
  }

  render() {

    return (
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              ref={i => (this.nameInput = i)}
              type="text"
              className={
                'form-control ' +
                (!this.state.nameIsNotEmpty ? 'is-invalid' : '')
              }
              id="name"
            />
            <div className="invalid-feedback">Required field.</div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              ref={t => (this.messageInput = t)}
              className={
                'form-control ' +
                (!this.state.messageIsNotEmpty ? 'is-invalid' : '')
              }
              id="message"
              rows="3"
            />
            <div className="invalid-feedback">Required field.</div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(CommentForm);
