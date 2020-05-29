const colorClass = (presupuesto, restante) => {
  const porcentaje = restante/presupuesto*100;
  let classStyle ="";

  if(porcentaje > 66){
    classStyle = "alert alert-success"
  }
  else if(porcentaje > 33) {
    classStyle = "alert alert-warning"
  }
  else if(porcentaje < 33) {
    classStyle = "alert alert-danger"
  }
  return classStyle
}
export {
  colorClass,
};