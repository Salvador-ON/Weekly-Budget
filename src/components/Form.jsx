import React from "react";
import shortid from 'shortid'

const Form = () => {

  const [nombre, useNombre]=React.useState('');
  const [cantidad, useCantidad]=React.useState(0);
  const [error, useError]=React.useState(false)

  const SetNombre = (e) =>{
    useNombre(e.target.value)
  }

  const SetCantidad = (e) =>{
    useCantidad(e.target.value)
  }

  const SetError = (value) =>{
    useError(value)
  }

  const agregarGasto = e => {
    e.preventDefault();
    if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === '' ){
      SetError(true)
      return
    }
    SetError(false)
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    }
    console.log(gasto);
  }

  

  return (
    <React.Fragment>
      <form className="mx-4 py-4" onSubmit={agregarGasto}>
        <div className="form-group">
          <h1 className="h1 text-center text-orange pb-4">Add Expense</h1>
          { error ? (<div className="alert alert-warning" role="alert">
            Missing Information
            </div> ): null}

          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Eg Uber"
            id="name"
            value={nombre}
            onChange={SetNombre}
          />
          <label htmlFor="amount">Expense Amount</label>
          <input
            type="number"
            className="form-control"
            placeholder="300"
            id="amount"
            value={cantidad}
            onChange={SetCantidad}
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-danger w-100"
          value="definir presupuesto"
        >
          Add Expense
        </button>
      </form>
    </React.Fragment>
  );
};

export default Form;
