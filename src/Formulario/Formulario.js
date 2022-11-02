import React, { useState } from "react";
import {
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import Enviado from "../Enviado/Enviado";
import Modal from "./Modal";

const Root = styled("div")(({ theme }) => ({
  "& .container": {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
    marginTop: 97,
    marginLeft: 100,
    marginRight: 100,
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    },
  },
  "& .textfields": {
    marginBottom: 12,
    marginTop: 12,
    margin: 12,
    backgroundColor: "white",
    width: "100%",
  },
  "& .form": {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "white",
    padding: 20,
    marginTop: 76,
    marginBottom: 77,
    borderRadius: 20,
    width: "50%",
    [theme.breakpoints.down("md")]: {
      marginTop: 49,
      marginBottom: 49,
      marginLeft: 10,
      marginRight: 10,
    },
  },
  "& .title": {
    display: "flex",
    justifyContent: "center",
    color: "#000",
  },
  "& .appearance": {
    margin: 12,
    width: "100%",
  },
  "& .position": {
    display: "flex",
    flexDirection: "row",
  },
}));

function Formulario() {
  // const [textField, setTextField] = useState('')
  // const [textField2, setTextField2] = useState('')
  // const [textField3, setTextField3] = useState('')
  // const [errors, setErrors] = useState(false)

  // const textField1 = (event) => {
  //     setTextField(event.target.value)
  // }

  // const textFieldTwo = (event) => {
  //     setTextField2(event.target.value)
  // }

  // const textFieldThree = (event) => {
  //     setTextField3(event.target.value)
  // }

  // const sendInfo = () => {
  //     if (textField === '' || textField2 === '' || textField3 === '') {
  //         alert('Campos obligatorios')
  //         setErrors(true)
  //     } else {
  //         alert('Sus datos se han enviado')
  //         setErrors(false)
  //     }
  // }

  const [formulario, setFormulario] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState(false);
  const [helpertext, setHelpertext] = useState(false);
  const [checkbox, setCheckbox] = useState(false);

  const onChangeText = (event) => {
    setFormulario(event.target.value);
  };

  const [ocupation, setOcupation] = useState("");

  const onChangeOcupation = (event) => {
    setOcupation(event.target.value);
  };

  const sendInfo = () => {
    if (
      formulario.name === "" ||
      formulario.email === "" ||
      ocupation === "" ||
      formulario.phone === "" ||
      checkbox === false
    ) {
      alert("Campos obligatorios");
      setErrors(true);
      setHelpertext(true);
    } else {
      alert("Sus datos se han enviado");
      setErrors(false);
      setHelpertext(false);
      setCheckbox(true);
      setFormulario({
        name: "",
        email: "",
        phone: "",
      });
      setOcupation({
        ocupation: "",
      });
      setCheckbox({
        checkbox: false,
      });
    }
  };
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div>
      <Root>
        <div className="container">
          <div className="form">
            <Typography className="title">Datos</Typography>
            <TextField
              className="textfields"
              placeholder="Nombre *"
              value={formulario.name}
              onChange={onChangeText}
              error={errors}
              helperText={helpertext === true ? "campos obligatorios" : false}
            />
            <FormControl fullWidth className="appearance">
              <InputLabel id="demo-simple-select-autowidth-label">
                Ocupación
              </InputLabel>
              <Select
                value={ocupation}
                onChange={onChangeOcupation}
                autoWidth
                label="Ocupación"
                error={errors}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Estudiante</MenuItem>
                <MenuItem value={2}>Empleado</MenuItem>
                <MenuItem value={3}>Profesor</MenuItem>
              </Select>
            </FormControl>
            <TextField
              className="textfields"
              placeholder="Correo *"
              value={formulario.email}
              onChange={onChangeText}
              error={errors}
              helperText={helpertext === true ? "campos obligatorios" : false}
            />
            <TextField
              className="textfields"
              placeholder="Telefono *"
              type="number"
              value={formulario.phone}
              onChange={onChangeText}
              error={errors}
              helperText={helpertext === true ? "campos obligatorios" : false}
            />
            <div className="position">
              <Checkbox value={checkbox} {...label} />
              <Button onClick={toggleModal}>Terminos y Condiciones</Button>
            </div>
            <Button onClick={sendInfo} variant="contained">
              Enviar
            </Button>
            <Modal open={open} toggleModal={toggleModal} />
          </div>
        </div>
        <Routes>
          <Route path="/enviado" element={<Enviado />} />
        </Routes>
      </Root>
    </div>
  );
}

export default Formulario;
