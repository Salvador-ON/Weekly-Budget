import React from 'react';
import Expense from './Expense'
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from 'prop-types'

const Expenses = ({gastos}) => {
  return ( 
    <React.Fragment>

        
        <ul className="list-group list-group-flush">
        {gastos.map(gasto =>(
          <Expense gasto={gasto} key={gasto.id}/>
        ))}
        </ul>
     
    </React.Fragment>
   );
}
 
Expenses.propTypes = {
  gastos: PropTypes.array.isRequired
}
export default Expenses;