import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Question from "./components/Question";
import Form from "./components/Form";
import Expenses from "./components/Expenses"
import BudgetControl from "./components/BudgetControl"


function App() {
  const [presupuesto, usePresupuesto] = React.useState(0);
  const [restante, useRestante] = React.useState(0);
  const [showQuestion, useShowQuestion] = React.useState(true);
  const [gastos, useGastos] = React.useState([]);
  const [gasto, useGasto] = React.useState([]);
  const [crearGasto, useCrearGasto] = React.useState(false);

  const SetCrearGasto = value =>{
    useCrearGasto(value)
  }

  const SetRestante = value =>{
    useRestante(value)
  }

  useEffect(() => {
    if (crearGasto){
      NuevoGasto(gasto);
      SetCrearGasto(false);
      const presupuestoRestante = restante - gasto.cantidad;
      SetRestante(presupuestoRestante)
    }

  })

  const NuevoGasto=(gasto)=>{
    useGastos(
      [...gastos, gasto]);
  }

  return (
    <div className="conatiner">
      <div className="row">
        <div className="col-12">
          <h1 className="text-white display-4 text-center">Weekly Budget</h1>{" "}
        </div>

        {showQuestion ? (
          <Question
            usePresupuesto={usePresupuesto}
            useRestante={useRestante}
            useShowQuestion={useShowQuestion}
          />
        ) : (
          <React.Fragment>
            <div className="col-4 mx-auto bg-light p-2 rounded">
              <Form useGasto={useGasto} SetCrearGasto={SetCrearGasto}/>
            </div>
            <div className="col-4 mx-auto bg-light p-2 rounded">
            <h2 className="h1 text-center text-orange py-4" >Expenses</h2>
              <BudgetControl presupuesto={presupuesto} restante={restante}/>
              <Expenses gastos={gastos}/>
              
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
