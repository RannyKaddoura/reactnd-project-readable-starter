import React from 'react';

class CommentForm extends React.Component {
  state = {
    nameIsNotEmpty: true,
    messageIsNotEmpty: true
  };

  onSubmit(event) {
    event.preventDefault();

    //validate form
    if (this.validateForm()){

      //handle further submission

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
    console.log(this.state)
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

export default CommentForm;
