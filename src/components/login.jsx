import React, { useState } from "react";
import "../styles/login.css";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";

const Login = ({ isOpen, onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const sanitizeInput = (input) => {
    return input.replace(/['"<>;]/g, "");
  };

  const isSafeInput = (input) => {
    const unsafeChars = /[`~!#$%^&*()+={}|[\]\\:";'<>?,/]/;
    return !unsafeChars.test(input);
  };

  const isStrongPassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!isValidEmail(formData.email)) {
      newErrors.email = "Correo inválido";
    }

    if (!isSafeInput(formData.name) && !isSignIn) {
      newErrors.name = "El nombre contiene caracteres no permitidos.";
    }

    if (!isStrongPassword(formData.password)) {
      newErrors.password =
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial";
    }

    if (!isSignIn && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrors(newErrors);

    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      password: formData.password,
    };

    if (Object.keys(newErrors).length === 0) {
      if (isSignIn) {
        console.log("Enviando datos de Login:", sanitizedData);
      } else {
        console.log("Enviando datos de Registro:", sanitizedData);
      }
    }
  };
  if (!isOpen) return null;

  const toggleMode = () => {
    setIsSignIn(!isSignIn);
    setErrors({});
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content ${isSignIn ? "sign-in" : "sign-up"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <div
          className={`containerParts ${
            isSignIn ? "left-panel" : "right-panel"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(93,98,68,1) 0%, rgba(89,73,67,1) 100%)",
            width: "40%",
          }}
        >
          <div className="ContainerText">
            <div>
              <h2>{isSignIn ? "Bienvenido de nuevo" : "Crea tu cuenta"}</h2>
              <p>
                {isSignIn
                  ? "inicia sesión con tu cuenta."
                  : "Usa tu correo personal para registrate"}
              </p>
            </div>

            <div
              onClick={toggleMode}
              style={{ position: "absolute", bottom: "15px" }}
            >
              <h3
                style={{
                  fontSize: "12px",
                  fontWeight: "200",
                  margin: "10px 0px",
                }}
              >
                {isSignIn ? "No tienes una cuenta ?" : "Ya tienes una cuenta?"}
              </h3>
              {!isSignIn ? (
                <button style={{ margin: "0px" }}>Iniciar sesión</button>
              ) : (
                <button style={{ margin: "0px" }}>Crear cuenta</button>
              )}
            </div>
          </div>
        </div>
        <div
          className={`containerParts ${
            isSignIn ? "right-panel" : "left-panel"
          }`}
          style={{ padding: "90px", width: "60%" }}
        >
          <div className="ContainerSignUp">
            <div className="modal-header">
              <h2>{isSignIn ? "Iniciar sesión" : "Crear cuenta"}</h2>
            </div>

            {isSignIn ? (
              <form onSubmit={handleSubmit}>
                <div className="ContainerInputFrom">
                  <MdOutlineMail />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="ContainerInputFrom">
                  <RiLockPasswordLine />
                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                {Object.keys(errors).length > 0 && (
                  <div
                    style={{
                      background: "#FFD3E2",
                      padding: "10px",
                      borderRadius: "7px",
                    }}
                  >
                    {errors.email && <p className="error"> - {errors.email}</p>}
                    {errors.password && (
                      <p className="error"> - {errors.password}</p>
                    )}
                    {errors.confirmPassword && (
                      <p className="error"> - {errors.confirmPassword}</p>
                    )}
                  </div>
                )}

                <button type="submit">Iniciar sesión</button>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="ContainerInputFrom">
                  <CiUser />
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="ContainerInputFrom">
                  <MdOutlineMail />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="ContainerInputFrom">
                  <RiLockPasswordLine />
                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="ContainerInputFrom">
                  <RiLockPasswordLine />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Repetir contraseña"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                {Object.keys(errors).length > 0 && (
                  <div
                    style={{
                      background: "#FFD3E2",
                      padding: "10px",
                      borderRadius: "7px",
                    }}
                  >
                    {errors.name && <p className="error"> - {errors.name}</p>}
                    {errors.email && <p className="error"> - {errors.email}</p>}
                    {errors.password && (
                      <p className="error"> - {errors.password}</p>
                    )}
                    {errors.confirmPassword && (
                      <p className="error"> - {errors.confirmPassword}</p>
                    )}
                  </div>
                )}
                <button type="submit">Crear cuenta</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
