/* eslint-disable react/prop-types */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import R from 'ramda';
import compose from 'recompose/compose';
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';
import Form from 'muicss/lib/react/form';
// import { Row, Col } from 'react-bootstrap';

const FieldGroup = ({ inputType, input, meta, children, ...inputProps }) => {
  const prop = {
    ...input,
    ...inputProps,
  };
  console.log(meta.touched);
  return React.createElement(inputType, prop, children);
};

// const getDay = (day) => {
//   return day > 1 ? 'Days' : 'Day';
// };

const FilterBar = () => (
  <div
    style={{
      height: 70,
      border: '1px solid #cacaca',
      marginBottom: 15,
    }}
  >
    <div style={{ height: '100%', width: '17vw', borderRight: '1px #cacaca solid', color: '#494949', padding: 15 }}>
      <div>How long is your trip?</div>
      <div>
        <Form>
          <Field
            name="days"
            component={FieldGroup}
            inputType={Select}
          >
            {R.range(1, 10).map((item) => {
              const formattedDay = item > 1 ? 'Days' : 'Day';
              return <Option key={item} value={item} label={`${item} ${formattedDay}`} />;
            })}
          </Field>
        </Form>
      </div>
    </div>
  </div>
);

export default compose(
  reduxForm({ form: 'filter' }),
)(FilterBar);
