import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

const Input = (props) => {

  const { id, placeholder, name, label, type = "text" } = { ...props };
  return (
    <div className="col-lg-5" key={id}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        required
      />
      <div className="valid-feedback">¡correcto! 😻</div>
      <div className="invalid-feedback">Debe ingresar el campo 😻</div>
    </div>
  );
};

function App() {
  let links = ["facebook", "whatsapp", "Instagram", "Twitter", "TikTok"];

  let inputsProps = [];

  inputsProps.push({
    id: "nombreProducto",
    placeholder: "Ingrese el nombre",
    name: "Nombre-Producto",
    label: "Nombre del producto:",
  });
  inputsProps.push({
    id: "Precio",
    placeholder: "Ingrese el precio",
    name: "Precio",
    label: "Precio:",
    type: "number",
  });
  inputsProps.push({
    id: "Categoria",
    placeholder: "Ingrese la categoria",
    name: "Categoria",
    label: "Nombre de la Categoria:",
  });
  inputsProps.push({
    id: "Cantidad",
    placeholder: "Ingrese la cantidad",
    name: "Cantidad",
    label: "ingrese la cantidad:",
    type: "number",
  });
  inputsProps.push({
    id: "Ingrediente",
    placeholder: "Ingrese los ingredientes",
    name: "Ingredientes",
    label: "Nombre de los ingredientes:",
  });
  inputsProps.push({
    id: "Proveedor",
    placeholder: "Ingrese el proveedor",
    name: "Proveedor",
    label: "Nombre del proveedor:",
  });
  inputsProps.push({
    id: "Cliente",
    placeholder: "Ingrese el cliente",
    name: "cliente",
    label: "Nombre del cliente:",
  });
  inputsProps.push({
    id: "Mesa",
    placeholder: "Ingrese el numero de mesa",
    name: "Mesa",
    label: "Numero de la mesa:",
    type: "number",
  });
  inputsProps.push({
    id: "Sucursal",
    placeholder: "Ingrese la sucursal",
    name: "Sucursal",
    label: "Numero de la sucursal:",
    type: "number",
  });
  inputsProps.push({
    id: "FormaDePago",
    placeholder: "Ingrese la forma de pago",
    name: "Forma-De-pago",
    label: "Forma de pago:",
  });
  inputsProps.push({
    id: "NombreDelivery",
    placeholder: "Ingrese el Nombre",
    name: "NombreDelivery",
    label: "Nombre del delivery:",
  });
  inputsProps.push({
    id: "NumeroDelivery",
    placeholder: "Ingrese el Numero",
    name: "NumeroDelivery",
    label: "Numero del delivery:",
    type: "number",
  });
  inputsProps.push({
    id: "NumeroDeCaja",
    placeholder: "Ingrese el Numero caja",
    name: "NumeroDeCaja",
    label: "Numero de la caja:",
    type: "number",
  });
  inputsProps.push({
    id: "Administrador",
    placeholder: "Ingrese el Administrador",
    name: "Administrador",
    label: "Administrador:",
  });
  inputsProps.push({
    id: "mesero",
    placeholder: "Ingrese el mesero",
    name: "Mesero",
    label: "Ingrese el mesero:",
  });
  inputsProps.push({
    id: "fecha",
    placeholder: "Ingrese la fecha",
    name: "fecha",
    label: "Ingrese la fecha:",
    type: "date",
  });

  const handleSubmit = () => {

  }

  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justity-content-center py-3 mb-4 border-bottom">
          <a
            href="#"
            className="d-flex alingn-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span className="fs-4"> Pizzeria </span>
          </a>
          <ul className="nav nav-pills">
            {links &&
              links.map((link, index) => (
                <li className="nav-item" key={index}>
                  <a
                    href="https://www.facebook.com/eliabjselvacruz"
                    className="nav-link"
                  >
                    {link}
                    <i className="bi-facebook"></i>
                  </a>
                </li>
              ))}
          </ul>
        </header>
        <div className="px-4 text-center">
          <div className="container">
            <main>
              <h4 className="mb-3 mt-2">Caja</h4>
              <form
                className="needs-validation mt-5"
                action="https://formsubmit.co/odiseoj676@gmail.com"
                method="POST"
                noValidate
              >
                <div className="row g-3">
                  {inputsProps &&
                    inputsProps.map((item) => (
                      <Input
                        id={item.id}
                        label={item.label}
                        placeholder={item.placeholder}
                        name={item.name}
                        type={item.type}
                        key={item.id}
                      />
                    ))}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  onClick={handleSubmit}
                >
                  AGREGAR
                </button>
              </form>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
