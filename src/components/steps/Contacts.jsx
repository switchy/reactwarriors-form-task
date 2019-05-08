import React, { Fragment } from "react";
import FormTextField from "../FormTextField";
import FormSelectField from "../FormSelectField";
import countries from "../../data/countries";
import cities from "../../data/cities";

class Contacts extends React.Component {

  render() {
    const { values, errors, onChangeHandler } = this.props;

    const filteredCities = Object.keys(cities)
      .reduce((obj, key) => {
        if (Number(cities[key].country) === Number(values.country)) {
          obj.push({
            id: key,
            name: cities[key].name
          });
        }
        return obj;
      }, []);

    return (
      <Fragment>
        <FormTextField
          labelText="Email"
          type="text"
          id="email"
          name="email"
          placeHolder="Enter email"
          value={values.email}
          onChange={onChangeHandler}
          error={errors.email}
        />

        <FormTextField
          labelText="Mobile"
          type="text"
          id="mobile"
          name="mobile"
          placeHolder="Enter mobile"
          value={values.mobile}
          onChange={onChangeHandler}
          error={errors.mobile}
        />

        <FormSelectField
          labelText="Country"
          id="country"
          name="country"
          value={values.country}
          options={countries}
          onChange={onChangeHandler}
          error={errors.country}
        />

        <FormSelectField
          labelText="City"
          id="city"
          name="city"
          value={values.city}
          options={[
            {id: "", name: "Select city"},
            ...filteredCities
          ]}
          onChange={onChangeHandler}
          error={errors.city}
        />

      </Fragment>
    );
  }
}

export default Contacts;