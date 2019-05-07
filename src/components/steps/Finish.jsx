import React, { Fragment } from "react";
import countries from "../../data/countries";
import cities from "../../data/cities";


class Finish extends React.Component {

  render() {
    const { values } = this.props;

    return (
      <Fragment>

        <div className="container-fluid">
          <div className="row mb-4">
            <div className="col-4">
              <img
                width="100%"
                src={values.avatar}
                alt=""
              />
            </div>
            <div className="col-8 d-flex align-items-center">
              <h4>{values.firstname} {values.lastname}</h4>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12">
              <p><strong>Gender:</strong> {values.gender}</p>
              <p><strong>Email:</strong> {values.email}</p>
              <p><strong>Mobile:</strong> {values.mobile}</p>
              <p><strong>Location:</strong> {
                countries.find((value) => (Number(value.id) === Number(values.country))).name
              }, {
                cities[String(values.city)].name
              }
              </p>
            </div>
          </div>
        </div>

      </Fragment>
    );
  }
}

export default Finish;