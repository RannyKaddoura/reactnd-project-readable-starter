import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

const required = value => {
  return value ? undefined : 'Required field.';
};

class PostForm extends React.Component {
  renderInput = ({ input, label, type, meta: { touched, error, warning } }) =>
    (
    <div className="form-group">
      <label htmlFor="title">{label}</label>
      <input
        {...input}
        className={'form-control' + (touched && error ? ' is-invalid' : '')}
        type={type}
        placeholder={label}
      />
      {touched && (error && <div className="invalid-feedback">{error}</div>)}
    </div>
  );

  renderTextarea = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div className="form-group">
      <label htmlFor="body">Body</label>
      <textarea {...input} placeholder="Body" className="form-control" />
    </div>
  );

  render() {
    const { handleSubmit, categories } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <h1 className="display-4">Create Post</h1>
        <hr className="my-4" />

        <Field
          name="title"
          component={this.renderInput}
          type="text"
          label="Title"
          validate={[required]}
        />

        <Field
          name="body"
          component={this.renderTextarea}
          label="Body"
        />

        <Field
          name="author"
          component={this.renderInput}
          type="input"
          label="Author"
        />

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
