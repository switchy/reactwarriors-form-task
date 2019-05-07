import React, { Fragment } from "react";
import { DEFAULT_AVATAR_PATH } from "../../utils";

class Avatar extends React.Component {

  render() {
    const { values, errors, onChangeHandler } = this.props;

    return (
      <Fragment>

        <img className="mb-4"
          width="100%"
          id="avatarImage"
          src={ values.avatar || DEFAULT_AVATAR_PATH }
          alt=""
        />

        <div className="mb-4">
          <div className="form-group custom-file">
            <input
              type="file"
              className={`custom-file-input ${errors.avatar ? " is-invalid" : ""}`}
              id="avatar"
              name="avatar"
              onChange={onChangeHandler}
            />
            <label
              className="custom-file-label"
              htmlFor="customFile"
            >
              Choose avatar
            </label>
            { errors.avatar && (
              <div className="invalid-feedback">
                {errors.avatar}
              </div>
            )}
          </div>
        </div>

      </Fragment>
    );
  }
}

export default Avatar;