import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

class PostForm extends React.Component {




  render() {

    const {handleSubmit, categories} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <h1 className="display-4">Create Post</h1>
        <hr className="my-4" />
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Title"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <Field
            name="body"
            component="textarea"
            placeholder="Body"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Author</label>
          <Field
            name="author"
            component="input"
            type="text"
            placeholder="Author"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Category</label>
          <Field name="category" component="select" className="form-control">
            <option value="">Select a category...</option>
            {categories.map(cat => (
              <option value={cat.path} key={cat.path}>
                {cat.name}
              </option>
            ))}
          </Field>
        </div>
        <button className="btn btn-primary">
          Save
        </button>
        <button type="button" className="btn btn-secondary">
          Cancel
        </button>
      </form>
    );
  }
}

PostForm = reduxForm({
  form: 'post-form',
  enableReinitialize: true
})(PostForm);

const mapsStateToProps = ({ post, categories }) => ({ initialValues: post, categories });
export default connect(mapsStateToProps)(PostForm);
