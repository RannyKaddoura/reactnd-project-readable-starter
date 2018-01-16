import React from 'react';

/**
 * bootstrap layout input field for redux-form
 */
export const renderInput = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
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

/**
 * bootstrap textarea component redux-form Field
 */
export const renderTextarea = ({
  input,
  label,
  rows,
  meta: { touched, error, warning }
}) => (
  <div className="form-group">
    <label htmlFor="body">Body</label>
    <textarea
      {...input}
      placeholder="Body"
      className={'form-control' + (touched && error ? ' is-invalid' : '')}
      rows={rows}
    />
    {touched && (error && <div className="invalid-feedback">{error}</div>)}
  </div>
);

/**
 * bootstrap select component for redux form Field
 */
export const renderSelect = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  children
}) => (
  <div className="form-group">
    <label htmlFor="title">{label}</label>
    <select
      {...input}
      className={'form-control' + (touched && error ? ' is-invalid' : '')}
    >
      {children}
    </select>
    {touched && (error && <div className="invalid-feedback">{error}</div>)}
  </div>
);

/**
 * validator
 */
export const required = value => {
  return value ? undefined : 'Required field.';
};
