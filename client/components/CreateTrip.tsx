import * as React from 'react';
import { Formik } from 'formik';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: 10rem;
`;

const Input = styled.input`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: ${(props: any) => props.border || '1px solid #616161'};
  border-radius: 0.5em;
  height: 4em;
`;

const Checkbox = styled.input`
  border: ${(props: any) => props.border || '1px solid #616161'};
  height: 2em;
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

const CREATE_TRIP_MUTATION = gql`
  mutation CREATE_TRIP_MUTATION(
    $name: String!
    $city: String!
    $state: String!
    $country: String!
    $dateStart: String!
    $dateEnd: String!
    $pastEvent: Boolean!
    $dream: Boolean!
  ) {
    createTrip(
      name: $name
      city: $city
      state: $state
      country: $country
      dateStart: $dateStart
      dateEnd: $dateEnd
      pastEvent: $pastEvent
      dream: $dream
    ) {
      id
    }
  }
`;

export default class CreateTrip extends React.Component {
  public render() {
    return (
      <Formik
        initialValues={{
          name: '',
          city: '',
          state: '',
          country: '',
          dateStart: '',
          dateEnd: '',
          pastEvent: '',
          dream: ''
        }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Name is required';
          }
          if (!values.city) {
            errors.city = 'City is required';
          }
          if (!values.state) {
            errors.state = 'State is required';
          }
          if (!values.country) {
            errors.country = 'Country is required';
          }
          if (!values.dateStart) {
            errors.dateStart = 'Start date is required';
          }
          if (!values.dateEnd) {
            errors.dateEnd = 'End date is required';
          }
          return errors;
        }}
        onSubmit={values => {
          console.log(values);
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
              Name
              {touched.name && errors.name && (
                <Text color="#D50000">{errors.name}</Text>
              )}
              <Input
                type="name"
                name="name"
                border={touched.name && errors.name && '1px solid #D50000'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </Label>
            <Label>
              City
              {touched.city && errors.city && (
                <Text color="#D50000">{errors.city}</Text>
              )}
              <Input
                type="city"
                name="city"
                border={touched.city && errors.city && '1px solid #D50000'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
              />
            </Label>
            <Label>
              State
              {touched.state && errors.state && (
                <Text color="#D50000">{errors.state}</Text>
              )}
              <Input
                type="state"
                name="state"
                border={touched.state && errors.state && '1px solid #D50000'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.state}
              />
            </Label>
            <Label>
              Country
              {touched.country && errors.country && (
                <Text color="#D50000">{errors.country}</Text>
              )}
              <Input
                type="country"
                name="country"
                border={
                  touched.country && errors.country && '1px solid #D50000'
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.country}
              />
            </Label>
            <Label>
              Start Date
              {touched.dateStart && errors.dateStart && (
                <Text color="#D50000">{errors.dateStart}</Text>
              )}
              <Input
                type="dateStart"
                name="dateStart"
                border={
                  touched.dateStart && errors.dateStart && '1px solid #D50000'
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dateStart}
              />
            </Label>
            <Label>
              End Date
              {touched.dateEnd && errors.dateEnd && (
                <Text color="#D50000">{errors.dateEnd}</Text>
              )}
              <Input
                type="dateEnd"
                name="dateEnd"
                border={
                  touched.dateEnd && errors.dateEnd && '1px solid #D50000'
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dateEnd}
              />
            </Label>
            <Label>
              Past Event
              {touched.pastEvent && errors.pastEvent && (
                <Text color="#D50000">{errors.pastEvent}</Text>
              )}
              <Checkbox
                type="checkbox"
                name="pastEvent"
                border={
                  touched.pastEvent && errors.pastEvent && '1px solid #D50000'
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.pastEvent}
              />
            </Label>
            <Label>
              Dream
              {touched.dream && errors.dream && (
                <Text color="#D50000">{errors.dream}</Text>
              )}
              <Checkbox
                type="checkbox"
                name="dream"
                border={touched.dream && errors.dream && '1px solid #D50000'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dream}
              />
            </Label>

            <Button type="submit">Submit</Button>
          </Form>
        )}
      />
    );
  }
}
