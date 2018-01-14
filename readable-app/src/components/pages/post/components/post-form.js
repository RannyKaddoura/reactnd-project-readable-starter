import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  renderInput,
  renderSelect,
  renderTextarea,
  required
} from '../../../../util/form-helper';

class PostForm extends React.Component {
  render() {
    const { handleSubmit, categories } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <h1 className="display-4">Create Post</h1>
        <hr className="my-4" />

        <Field
          name="title"
          component={renderInput}
          type="text"
          label="Title"
          validate={[required]}
        />
        <Field
          name="body"
          component={renderTextarea}
          label="Body"
          validate={[required]}
        />
        <Field
          name="author"
          component={renderInput}
          type="input"
          label="Author"
          validate={[required]}
        />
        <Field
          label="Category"
          name="category"
          component={renderSelect}
          validate={[required]}
        >
          <option value="">Select a category...</option>
          {categories.map(cat => (
            <option value={cat.path} key={cat.path}>
              {cat.name}
            </option>
          ))}
        </Field>

        <button className="btn btn-primary">Save</button>
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

const mapsStateToProps = ({ post, categories }) => ({
  initialValues: post,
  categories
});

export default connect(mapsStateToProps)(PostForm);
