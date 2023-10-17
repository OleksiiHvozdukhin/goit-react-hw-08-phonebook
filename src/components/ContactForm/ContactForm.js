import { Formik } from 'formik';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';
import {
  Label,
  FormDiv,
  FormField,
  StyledErrorMessage,
  StyledButton,
  StyledForm,
} from './ContactForm.styled';

const inputTemplate = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /^(\d{1,4}[-\s]?\(?\d{1,3}?\)?[-\s]?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,9})?$/,
      'Phone number must be in the format of ЧЧЧ-ЧЧ-ЧЧ.'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmit = ({ name, number }, { resetForm }) => {
    const isDuplicate = contacts.some(items => {
      return items.name.toLowerCase() === name.toLowerCase();
    });
    if (isDuplicate) return window.alert(`${name} is already in contacts.`);

    dispatch(addContact({ name, number }));
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={inputTemplate}
        onSubmit={onSubmit}
      >
        {() => (
          <StyledForm>
            <FormDiv>
              <Label htmlFor="name" className="firstLabel">
                name
              </Label>
              <FormField
                type="text"
                id="name"
                name="name"
                placeholder="enter name"
                autoComplete="off"
              />
              <StyledErrorMessage name="name" component="div" />
            </FormDiv>
            <FormDiv>
              <Label htmlFor="number">number</Label>
              <FormField
                type="tel"
                id="number"
                name="number"
                placeholder="enter phone numb"
                autoComplete="off"
              />
              <StyledErrorMessage name="number" component="div" />
            </FormDiv>
            <StyledButton type="submit">submit</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};
