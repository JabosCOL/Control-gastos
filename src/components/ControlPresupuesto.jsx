import { useState, useEffect } from "react";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );

    setGastado(totalGastado);

    const totalDisponible = presupuesto - totalGastado;

    setDisponible(totalDisponible)

  }, [gastos]);

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aquí</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>
          {formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span>
          {formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gastado: </span>
          {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
