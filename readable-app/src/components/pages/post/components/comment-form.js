import React from 'react';

class CommentForm extends React.Component {

  render(){
    return (
      <div>
        <form>
          <div class="form-group">
            <label htmlFor="name">Name:</label>
            <input type='text' className="form-control" id="name" />
          </div>
          <div class="form-group">
            <label htmlFor="message">Message:</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
