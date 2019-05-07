import React from "react";


class ActionButtons extends React.Component {

  render() {
    const { onNextStepHandler, onPrevStepHandler, onResetStepHandler } = this.props;

    return (
        <div className="d-flex justify-content-center">
          { onPrevStepHandler ?
            <button
              type="button"
              className="btn btn-light mr-4"
              onClick={onPrevStepHandler}
            >
              Previous
            </button>
            :
            <button
              disabled
              type="button"
              className="btn btn-light mr-4"
            >
              Previous
            </button>
          }

          { onNextStepHandler ?
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onNextStepHandler}
            >
              Next
            </button>
            :
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onResetStepHandler}
              >
                Reset
              </button>
            </div>
          }
        </div>

    );
  }
}

export default ActionButtons;