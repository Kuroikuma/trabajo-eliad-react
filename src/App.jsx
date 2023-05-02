import { useState } from "react";
import { jsPDF } from "jspdf";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

const Input = (props) => {

  const { id, placeholder, name, label, type = "text", onchange } = { ...props };
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
        onChange={onchange}
        required
      />
      <div className="valid-feedback">¡correcto! 😻</div>
      <div className="invalid-feedback">Debe ingresar el campo 😻</div>
    </div>
  );
};

function App() {
  let links = ["facebook", "whatsapp", "Instagram", "Twitter", "TikTok"];
  const [inputValue, setInputValue] = useState({nombreProducto:"", Precio:0, Categoria:"", Cantidad:0, Ingrediente:"", Proveedor:"", Cliente:"", Mesa:0, Sucursal:0, FormaDePago:"",NombreDelivery:"", NumeroDelivery:0, NumeroDeCaja:0, Administrador:"", mesero:"", fecha:""});

  let inputsProps = [];

  inputsProps.push({
    id: "nombreProducto",
    placeholder: "Ingrese el nombre",
    name: "nombreProducto",
    label: "Nombre del producto:",
    value: inputValue.nombreProducto
  });
  inputsProps.push({
    id: "Precio",
    placeholder: "Ingrese el precio",
    name: "Precio",
    label: "Precio:",
    type: "number",
    value: inputValue.Precio
  });
  inputsProps.push({
    id: "Categoria",
    placeholder: "Ingrese la categoria",
    name: "Categoria",
    label: "Nombre de la Categoria:",
    value: inputValue.Categoria
  });
  inputsProps.push({
    id: "Cantidad",
    placeholder: "Ingrese la cantidad",
    name: "Cantidad",
    label: "ingrese la cantidad:",
    type: "number",
    value: inputValue.Cantidad
  });
  inputsProps.push({
    id: "Ingrediente",
    placeholder: "Ingrese los ingredientes",
    name: "Ingredientes",
    label: "Nombre de los ingredientes:",
    value: inputValue.Ingrediente
  });
  inputsProps.push({
    id: "Proveedor",
    placeholder: "Ingrese el proveedor",
    name: "Proveedor",
    label: "Nombre del proveedor:",
    value: inputValue.Proveedor
  });
  inputsProps.push({
    id: "Cliente",
    placeholder: "Ingrese el cliente",
    name: "cliente",
    label: "Nombre del cliente:",
    value: inputValue.Cliente
  });
  inputsProps.push({
    id: "Mesa",
    placeholder: "Ingrese el numero de mesa",
    name: "Mesa",
    label: "Numero de la mesa:",
    type: "number",
    value: inputValue.Mesa
  });
  inputsProps.push({
    id: "Sucursal",
    placeholder: "Ingrese la sucursal",
    name: "Sucursal",
    label: "Numero de la sucursal:",
    type: "number",
    value: inputValue.Sucursal
  });
  inputsProps.push({
    id: "FormaDePago",
    placeholder: "Ingrese la forma de pago",
    name: "Forma-De-pago",
    label: "Forma de pago:",
    value: inputValue.FormaDePago
  });
  inputsProps.push({
    id: "NombreDelivery",
    placeholder: "Ingrese el Nombre",
    name: "NombreDelivery",
    label: "Nombre del delivery:",
    value: inputValue.NombreDelivery
  });
  inputsProps.push({
    id: "NumeroDelivery",
    placeholder: "Ingrese el Numero",
    name: "NumeroDelivery",
    label: "Numero del delivery:",
    type: "number",
    value: inputValue.NumeroDelivery
  });
  inputsProps.push({
    id: "NumeroDeCaja",
    placeholder: "Ingrese el Numero caja",
    name: "NumeroDeCaja",
    label: "Numero de la caja:",
    type: "number",
    value: inputValue.NumeroDeCaja
  });
  inputsProps.push({
    id: "Administrador",
    placeholder: "Ingrese el Administrador",
    name: "Administrador",
    label: "Administrador:",
    value: inputValue.Administrador
  });
  inputsProps.push({
    id: "mesero",
    placeholder: "Ingrese el mesero",
    name: "Mesero",
    label: "Ingrese el mesero:",
    value: inputValue.mesero
  });
  inputsProps.push({
    id: "fecha",
    placeholder: "Ingrese la fecha",
    name: "fecha",
    label: "Ingrese la fecha:",
    type: "date",
    value: inputValue.fecha
  });

  const handleSubmit = (event) => {

    let form = event.target

    
        
    if (!form.checkValidity()){
        event.preventDefault()
        event.stopPropagation()
    } else {
        handleSubmitJsPdf()
    }
    form.classList.add('was-validated')
  }

  const handleChange = (e) => {
    let {name , value} = e.target

    setInputValue({...inputValue, [name]:value})
  }

  const handleSubmitJsPdf = () => {

    const doc = new jsPDF();

    let fecha="11-05-2022";

    let nombreProducto = inputsProps[0].value;
    
    let Categoria = inputsProps[3].value;

    doc.setFillColor(28, 41, 51);

    doc.rect(0, 0, 220, 60, 'f');

    //doc.addImage(ImageData, 10, 8, 106, 34);

    doc.setFontSize(14);

    doc.setTextColor(255, 255, 255);

    doc.text('PIZZERI NICA 2023',12, 50);

    let counter = 90

    doc.setTextColor(37, 40, 80);

    inputsProps.forEach((item) => {
        let input = item.value
        let label = item.label

        doc.text(`${label} ${input}`, 12, counter);
        counter = counter + 10;
    })

    let partes = fecha.split('-');

    var fechadoc = partes[2]+ '-'+ partes[1]+ '-' + partes[0];

    console.log("E");
    const docpdf = `${nombreProducto} ${Categoria} ${fechadoc}.pdf`;
    doc.save(docpdf);
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
                onSubmit={(e) => handleSubmit(e)}
                noValidate
              >
                <div className="row g-3">
                  {inputsProps &&
                    inputsProps.map((item) => (
                      <Input
                        id={item.id}
                        value = {item.value}
                        label={item.label}
                        placeholder={item.placeholder}
                        name={item.name}
                        type={item.type}
                        key={item.id}
                        onchange={(e) => handleChange(e)}
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
        </div>,
      </div>
    </>
  );
}

export default App;
