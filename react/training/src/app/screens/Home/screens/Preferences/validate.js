const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 3) {
    errors.name = 'Must be more the 3 characters';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length < 3) {
    errors.lastName = 'Must be more the 3 characters';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Must be more the 8 characters';
  }

  if (!values.repeatPassword) {
    errors.repeatPassword = 'Required';
  } else if (values.repeatPassword !== values.password) {
    errors.repeatPassword = 'Must be equal to password';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

export default validate;
