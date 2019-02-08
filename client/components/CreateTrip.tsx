import * as React from 'react';
import { Formik } from 'formik';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import getConfig from 'next/config';

import { CREATE_TRIP_MUTATION } from '../lib/mutations';

const { publicRuntimeConfig } = getConfig();
const { CLOUDINARY_URL } = publicRuntimeConfig;

const Form = styled.form`
  display: grid;
  grid-template-columns: 10rem;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  padding: 5rem;
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

export default class CreateTrip extends React.Component {
  public state = {
    image: '',
    largeImage: ''
  };

  public uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'ejtjblog');

    // TODO update URL with config

    const res = await fetch(CLOUDINARY_URL, {
      method: 'POST',
      body: data
    });
    const file = await res.json();
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
  };
  public render() {
    return (
      <Mutation mutation={CREATE_TRIP_MUTATION}>
        {(createTrip, { loading, error }) => (
          <Formik
            initialValues={{
              name: '',
              city: '',
              state: '',
              country: '',
              dateStart: '',
              dateEnd: '',
              pastEvent: false,
              dream: false,
              image: ''
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
              createTrip({
                variables: {
                  name: values.name,
                  city: values.city,
                  state: values.state,
                  country: values.country,
                  dateStart: values.dateStart,
                  dateEnd: values.dateEnd,
                  pastEvent: values.pastEvent,
                  dream: values.dream,
                  image: this.state.image
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
                    border={
                      touched.state && errors.state && '1px solid #D50000'
                    }
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
                      touched.dateStart &&
                      errors.dateStart &&
                      '1px solid #D50000'
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
                      touched.pastEvent &&
                      errors.pastEvent &&
                      '1px solid #D50000'
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
                    border={
                      touched.dream && errors.dream && '1px solid #D50000'
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dream}
                  />
                </Label>
                <label htmlFor="file">
                  Image
                  <input
                    type="file"
                    id="file"
                    name="file"
                    placeholder="Upload an image"
                    required
                    onChange={this.uploadFile}
                  />
                  {this.state.image && (
                    <img
                      width="200"
                      src={this.state.image}
                      alt="Upload Preview"
                    />
                  )}
                </label>

                <Button disabled={loading} type="submit">
                  Submit
                </Button>
              </Form>
            )}
          />
        )}
      </Mutation>
    );
  }
}
