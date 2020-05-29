import React from 'react';
import {colorClass} from '../helper'
import PropTypes from 'prop-types'

const BudgetControl = ({presupuesto, restante}) => {

  const alertStyle = colorClass(presupuesto, restante)

  return (
    <React.Fragment>
      <div className="alert alert-info" role="alert">Budget: ${presupuesto}</div>
      <div className={alertStyle} >Remaining: ${restante}</div>
    </React.Fragment>
    );
}
 
BudgetControl.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
}

export default BudgetControl;