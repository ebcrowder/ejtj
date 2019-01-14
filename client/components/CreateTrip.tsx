import * as React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: 10rem;
`;

const Input = styled.input`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: ${props => props.border || '1px solid #ccc'};
  height: 3em;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #311b92;
  font-size: 0.8em;
  margin: 0.5em 0;
`;

const Text = styled.p`
  color: ${props => props.color};
`;

const Button = styled.button`
  background: #00bfa5;
`;

export default class CreateTrip extends React.Component {
  public render() {
    return (
      <>
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
            let errors = {};
            if (!values.name) {
              errors.name = 'Name is required';
            }
            if (!values.city) {
              errors.city = 'City is required';
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
                  border={errors.name && '1px solid #D50000'}
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
                  border={errors.city && '1px solid #D50000'}
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
                  border={errors.state && '1px solid #D50000'}
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
                  border={errors.country && '1px solid #D50000'}
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
                  border={errors.dateStart && '1px solid #D50000'}
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
                  border={errors.dateEnd && '1px solid #D50000'}
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
                <Input
                  type="pastEvent"
                  name="pastEvent"
                  border={errors.pastEvent && '1px solid #D50000'}
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
                <Input
                  type="dream"
                  name="dream"
                  border={errors.dream && '1px solid #D50000'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dream}
                />
              </Label>

              <Button type="submit">Submit</Button>
            </Form>
          )}
        />
      </>
    );
  }
}
