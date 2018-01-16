import React from 'react';
import { connect } from 'react-redux';
import { doCreateComment, doUpdateComment } from '../../../../actions/comments';

class CommentForm extends React.Component {
  state = {
    nameIsNotEmpty: true,
    messageIsNotEmpty: true
  };

  clearForm() {
    this.nameInput.value = '';
    this.messageInput.value = '';
  }

  handleSubmit(e) {
    e.preventDefault();

    //validate form
    if (this.validateForm()) {
      //fire up action to add a comment
      if (this.props.comment.id) {
        this.props.dispatch(
          doUpdateComment({
            ...this.props.comment,
            author: this.nameInput.value,
            body: this.messageInput.value
          })
        );
        this.props.toggleEdit();
      } else {
        this.createComment();
        this.clearForm();
      }
    }
  }

  /**
   * create comment from form data
   */
  createComment() {
    this.props.dispatch(
      doCreateComment({
        author: this.nameInput.value,
        body: this.messageInput.value,
        parentId: this.props.post.id
      })
    );
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
    const { comment } = this.props;
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              defaultValue={comment.author}
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
              defaultValue={comment.body}
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

CommentForm.defaultProps = {
  comment: {}
};
const mapStateToProps = ({ post }) => ({ post });
export default connect(mapStateToProps)(CommentForm);
