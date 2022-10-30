import React, { useEffect, useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";
import { PersonEmailModel } from "../../models/personEmail.models";
import { EmailPerson } from "../../models/EmailPerson.model";
import {
  getListPerson,
  getEmailById,
  add,
  deleted,
} from "../../services/Email.services";

export function PersonEmail() {
  const [emailAlert, setEmailAlert] = useState("");
  const [isvalid, setValid] = useState(false);
  const [visible, setVisible] = useState(true);
  const [personList, setPersonList] = useState([PersonEmailModel()]);
  const [userId, setUserId] = useState("");
  const [change, setChange] = useState(false);
  const [formFields, setFormFields] = useState([EmailPerson()]);
  const types = ["success", "info", "warning", "error"];

  function toastNotify(message, type) {
    toast(message, {
      type: types[type],
      autoClose: 4000,
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }

  useEffect(() => {
    console.log(formFields.length);
    getListPerson().then((result) => {
      setPersonList(result);
    });
  }, [formFields]);

  const DeleteAction = (id, index) => {
    if (id === "") {
      let data = [...formFields];
      data.splice(index, 1);
      setFormFields(data);
    } else {
      Swal.fire({
        text: "Desea eliminar este registro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        confirmButtonColor: "rgb(194, 27, 69)",
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          deleted(id).then(() => {
            getEmailById(userId).then((data) => {
              setFormFields(data);
            });
          });
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  };

  const SubmitAction = (e) => {
    e.preventDefault();
    let bool = false;

    formFields.forEach((data) => {
      if (data.emailAddress === "") {
        bool = true;
      }
    });

    if (change && bool === false) {
      if (isvalid) {
        add(userId, formFields).then(() => {
          getEmailById(userId).then((data) => {
            setFormFields(data);
            toastNotify("Registros agregados exitosamente", 1);
          });
        });
      } else {
        toastNotify("ERROR!! Verifique los datos", 3);
        setEmailAlert("Formato de correo incorrecto");
      }
      setChange(false);
    } else {
      toastNotify("Agregue un nuevo registro", 3);
    }
  };

  const AddFieldMethod = (event) => {
    event.preventDefault();
    setFormFields([...formFields, EmailPerson()]);
  };

  const EditFieldAction = (id) => {
    Swal.fire({
      text: "Desea editar este registro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      confirmButtonColor: "rgb(194, 27, 69)",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      const newList = formFields.map((item, index) => {
        if (index === id) {
          const updatedItem = {
            ...item,
            active: !item.active,
          };
          return updatedItem;
        }
        return item;
      });
      setFormFields(newList);
    });
  };

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    const name = event.target.name;
    const value = event.target.value;
    if (validator.isEmail(value)) {
      setEmailAlert("Correcto");
      setValid(true);
    } else {
      setValid(false);
    }
    data[index][name] = value;
    setFormFields(data);
    setChange(true);
  };

  const handleChangeSelect = async (event) => {
    setFormFields([]);
    const value = event.value;
    setUserId(value);
    await getEmailById(value).then((data) => {
      setTimeout(() => {
        setFormFields(data);
      }, 2000);

      setVisible(false);
    });
  };

  const options = () => {
    return personList.map((data) => ({
      value: data.businessEntityID,
      label: data.firstName + " " + data.lastName,
    }));
  };

  return (
    <React.Fragment>
      <div className="container-fluid mt-5 mb-5 col-md-6">
        <div className="card">
          <div className="card-body">
            <span role="img">un 100 o pla pla pla 🔫</span>
            <hr></hr>
            <label htmlFor="inputState">
              <h6>Buscar correos de la persona</h6>
            </label>

            <Select onChange={handleChangeSelect} options={options()} />

            <div className="d-flex justify-content-center" hidden>
              <img
                alt="adeventureWorksCycle"
                hidden={!visible}
                style={{ width: "600px" }}
                src={process.env.PUBLIC_URL + "/descarga.png"}
              />
            </div>
            <div hidden={visible}>
              <button className="btn btn-pink mt-3" onClick={AddFieldMethod}>
                Add More..
              </button>
              {formFields.length < 1 ? (
                <div className="d-flex justify-content-center mt-2" hidden>
                  <img
                    alt="kirbywgun"
                    style={{ width: "300px" }}
                    src={process.env.PUBLIC_URL + "/rolling-kirby.gif"}
                  />
                </div>
              ) : (
                <form className="mt-3 mb-3" onSubmit={SubmitAction}>
                  {formFields.map((form, index) => {
                    return (
                      <div key={index} className="input-group mt-2 mb-2">
                        <input
                          disabled={
                            form.emailAddressID !== ""
                              ? !form.active
                              : form.active
                          }
                          type="text"
                          name="emailAddress"
                          className=" search-input form-control"
                          placeholder={
                            "Nueva direccion de correo electronico..."
                          }
                          onChange={(event) => handleFormChange(event, index)}
                          value={form.emailAddress || ""}
                        ></input>

                        <div className="input-group-append">
                          {form.emailAddressID !== "" ? (
                            <button
                              onClick={() => EditFieldAction(index)}
                              className="bttn btn-color"
                              type="button"
                            >
                              <i className="fa-solid fa-pen"></i>
                            </button>
                          ) : (
                            []
                          )}

                          <button
                            onClick={() =>
                              DeleteAction(form.emailAddressID, index)
                            }
                            className="bttn btn-color border-rigth"
                            type="button"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                  <div>
                    {" "}
                    <small>{emailAlert}</small>
                  </div>

                  <button className="btn btn-pink" type="submit">
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={8000} />
    </React.Fragment>
  );
}
