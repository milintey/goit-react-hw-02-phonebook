import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

const initialValues = {
  name: '',
  number: '',
};
export class ContactForm extends Component {
  formSubmit = (value, { resetForm }) => {
    const contact = {
      ...value,
      id: nanoid(),
    };
    console.log(contact);
    this.props.onAddContact(contact);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.formSubmit}
        validationSchema={schema}
      >
        <Form>
          <label>
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number" component="div" />
          </label>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    );
  }
}
