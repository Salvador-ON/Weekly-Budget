import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from 'prop-types'

const Expense = ({gasto}) => {
  return (
    <li className="list-group-item bg-light border-bottom border-dark d-flex justify-content-between">
      <span className="font-weight-bold text-capitalize">{gasto.nombre}</span>

      <span className="mx-2 badge badge-info p-2">$ {gasto.cantidad}</span>
    </li>
  );
}

Expense.propTypes = {
  gasto: PropTypes.object.isRequired
}
 
export default Expense;