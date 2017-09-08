import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {createPost} from '../actions/index';
import {connect} from 'react-redux';

class PostsNew extends Component {
    static renderField(field) {
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-error' : ''}`;
        return <div className={className}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
                type="text"
                className="form-control"
                {...field.input}
            />
            <div className="help-block">
                {touched ? error : ''}
            </div>
        </div>
    }

    static onSubmit(values) {
        this.props.createPost(values, () => this.props.history.push('/'));
    }


    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(PostsNew.onSubmit.bind(this))}>
                <Field name="title"
                       label="Title"
                       component={PostsNew.renderField}
                />
                <Field name="categories"
                       label="Tags"
                       component={PostsNew.renderField}
                />
                <Field name="content"
                       label="Post Content"
                       component={PostsNew.renderField}
                />
                <button className="btn btn-primary" type="submit">Submit</button>
                <Link to="/" className="btn btn-default">Cancel</Link>
            </form>
        )
    }
}

const validate = values => {
    const errors = {};
    if (!values.title) {
        errors.title = "Enter a title!"
    }
    if (!values.categories) {
        errors.categories = "Enter a categories!"
    }
    if (!values.content) {
        errors.content = "Enter a content!"
    }

    return errors;
};


export default reduxForm({
    form: 'PostsNewForm',
    validate
})(
    connect(null, {createPost})(PostsNew)
);