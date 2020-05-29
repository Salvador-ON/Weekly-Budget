import React from "react";
import PropTypes from 'prop-types'

const Question = ({ usePresupuesto, useRestante, useShowQuestion }) => {
  const [cantidad, useCantidad] = React.useState(0);
  const [error, useError] = React.useState(false);

  const DefinirPresupuesto = (e) => {
    useCantidad(parseInt(e.target.value, 10));
  };

  const SetError = (value) => {
    useError(value);
  };

  const SetPresupuesto = (value) => {
    usePresupuesto(value);
  };

  const SetRestante = (value) => {
    useRestante(value);
  };

  const SetShow = (value) => {
    useShowQuestion(value);
  };

  const agregarPresupuesto = (e) => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad)) {
      SetError(true);
      return;
    }
    SetError(false);
    SetPresupuesto(cantidad);
    SetRestante(cantidad)
    SetShow(false);
  };

  return (
    <React.Fragment>
      <div className="col-10 mx-auto bg-light p-2 rounded">
        <form className="mx-4 py-4" onSubmit={agregarPresupuesto}>
          <div className="form-group">
            <h1 className="h1 text-center text-orange pb-4">
              Set Your Weekly Budget
            </h1>
            {error ? (
              <div className="alert alert-warning" role="alert">
                Invalid input
              </div>
            ) : null}
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="budget"
              onChange={DefinirPresupuesto}
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-danger w-100"
            value="definir presupuesto"
          >
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

Question.propTypes = {
  usePresupuesto: PropTypes.func.isRequired, 
  useRestante : PropTypes.func.isRequired,
  useShowQuestion: PropTypes.func.isRequired
}

export default Question;
