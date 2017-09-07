import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';


class PostsNew extends Component {
    static renderField(field) {
        return <div className="form-group">
            <label htmlFor={field.name}>{field.label}</label>
            <input
                type="text"
                className="form-control"
                {...field.input}
            />
            {/*<div className="alert alert-danger" role="alert">*/}
            {field.meta.error}
            {/*</div>*/}
        </div>
    }

    static onSubmit(values) {
        console.log(values);
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
            </form>
        )
    }
}

const validate = (values) => {
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

export default reduxForm({form: 'PostsNewForm', validate})(PostsNew);