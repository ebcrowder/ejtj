import * as React from 'react';
import { Formik } from 'formik';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';

import { SIGNIN_MUTATION } from '../lib/mutations';

const Form = styled.form`
  display: grid;
  grid-template-columns: 10rem;
  margin: 1rem;
`;

const Input = styled.input`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: ${(props: any) => props.border || '1px solid #616161'};
  border-radius: 0.5em;
  height: 2em;
  font-size: 1em;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #311b92;
  font-size: 0.8em;
  margin: 0.5em 0;
`;

const Text = styled.p`
  color: ${(props: any) => props.color};
`;

const Button = styled.button`
  background: #00bfa5;
  border-radius: 0.5em;
  height: 3em;
  font-size: 0.8em;
  color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    background: #1de9b6;
  }
`;

export default class SignIn extends React.Component {
  public render() {
    return (
      <Mutation mutation={SIGNIN_MUTATION}>
        {(signin, { loading, error }) => (
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Email is required';
              }
              if (!values.password) {
                errors.password = 'Password is required';
              }
              return errors;
            }}
            onSubmit={values => {
              signin({
                variables: {
                  email: values.email,
                  password: values.password
                }
              });
            }}
            render={({
              touched,
              errors,
              values,
              handleChange,
              handleBlur,
              handleSubmit
            }) => (
              <Form onSubmit={handleSubmit}>
                <Label>
                  Email
                  {touched.email && errors.email && (
                    <Text color="#D50000">{errors.email}</Text>
                  )}
                  <Input
                    type="email"
                    name="email"
                    border={
                      touched.email && errors.email && '1px solid #D50000'
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </Label>
                <Label>
                  Password
                  {touched.password && errors.password && (
                    <Text color="#D50000">{errors.password}</Text>
                  )}
                  <Input
                    type="password"
                    name="password"
                    border={
                      touched.password && errors.password && '1px solid #D50000'
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </Label>

                <Button disabled={loading} type="submit">
                  Login
                </Button>
              </Form>
            )}
          />
        )}
      </Mutation>
    );
  }
}
