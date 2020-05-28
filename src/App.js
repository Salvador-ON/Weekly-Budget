import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Question from "./components/Question";
import Form from "./components/Form";

function App() {
  const [presupuesto, usePresupuesto] = React.useState(0);
  const [restante, useRestante] = React.useState(0);
  const [showQuestion, useShowQuestion] = React.useState(true);

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
              <Form />
            </div>
            <div className="col-4"></div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
