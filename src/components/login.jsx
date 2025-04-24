import { useState, useContext } from 'react';
import '../styles/login.css';
import { MdOutlineMail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { CiUser } from 'react-icons/ci';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCsrfToken } from './csrf.jsx';
import { EstadoUsuarioContext } from './estadoUsuarioActivo'; // 👈 Importa el contexto

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const Login = ({ isOpen, onClose }) => {
  const csrfToken = useCsrfToken();
  const { login } = useContext(EstadoUsuarioContext); // 👈 Usa la función login del contexto

  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const isMobile = window.innerWidth < 900;

  const isValidEmail = email => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const sanitizeInput = input => input.replace(/['"<>;]/g, '');
  const isSafeInput = input => !/[`~!#$%^&*()+={}|[\]\\:";'<>?,/]/.test(input);
  const isStrongPassword = password => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/.test(password);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
  };

  const handleSubmit = async e => {
    e.preventDefault();

    let newErrors = {};

    if (!isValidEmail(formData.email)) newErrors.email = 'Correo inválido';
    if (!isSignIn && !isSafeInput(formData.name)) newErrors.name = 'El nombre contiene caracteres no permitidos.';
    if (!isStrongPassword(formData.password)) {
      newErrors.password =
        'La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial';
    }
    if (!isSignIn && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    setErrors(newErrors);

    const sanitizedData = {
      nombre: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      contrasena: formData.password
    };

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch(`${BASE_URL}/usuarios/${isSignIn ? 'login' : 'crearUsuario'}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken
          },
          body: JSON.stringify(
            isSignIn ? { email: sanitizedData.email, contrasena: sanitizedData.contrasena } : sanitizedData
          )
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Error en el servidor');

        localStorage.setItem('token', data.token);
        login(data.user.user);
        localStorage.setItem('user', JSON.stringify(data.user.user));

        toast.success(isSignIn ? 'Iniciaste sesión' : 'Usuario creado exitosamente');
        setTimeout(() => {
          onClose(); // Cierra el modal
        }, 1000);
      } catch (error) {
        toast.error(error.message);
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
      <ToastContainer />
      <div className={`modal-content ${isSignIn ? 'sign-in' : 'sign-up'}`} onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <div
          className={`containerParts ${isSignIn ? 'left-panel' : 'right-panel'} ${
            isMobile && !isSignIn ? 'hide-right' : isMobile && isSignIn ? 'hide-left' : ''
          }`}
          style={{
            background: 'radial-gradient(circle, rgba(93,98,68,1) 0%, rgba(89,73,67,1) 100%)',
            width: isMobile ? '100%' : '40%'
          }}>
          <div className="ContainerText">
            <div>
              <h2>{isSignIn ? 'Bienvenido de nuevo' : 'Crea tu cuenta'}</h2>
              <p>{isSignIn ? 'inicia sesión con tu cuenta.' : 'Usa tu correo personal para registrate'}</p>
            </div>
            <div onClick={toggleMode} style={{ position: 'absolute', bottom: '15px' }}>
              <h3 style={{ fontSize: '12px', fontWeight: '200', margin: '10px 0px' }}>
                {isSignIn ? 'No tienes una cuenta ?' : 'Ya tienes una cuenta?'}
              </h3>
              <button style={{ margin: '0px' }}>{isSignIn ? 'Crear cuenta' : 'Iniciar sesión'}</button>
            </div>
          </div>
        </div>

        <div className={`containerParts ${isSignIn ? 'right-panel' : 'left-panel'}`}>
          <div className="ContainerSignUp">
            <div className="modal-header">
              <h2>{isSignIn ? 'Iniciar sesión' : 'Crear cuenta'}</h2>
            </div>

            <form onSubmit={handleSubmit}>
              {!isSignIn && (
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
              )}
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
              {!isSignIn && (
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
              )}

              {Object.keys(errors).length > 0 && (
                <div style={{ background: '#FFD3E2', padding: '10px', borderRadius: '7px' }}>
                  {Object.entries(errors).map(([key, message]) => (
                    <p key={key} className="error">
                      - {message}
                    </p>
                  ))}
                </div>
              )}

              <button type="submit">{isSignIn ? 'Iniciar sesión' : 'Crear cuenta'}</button>
            </form>

            {isMobile && (
              <div className="toggle-auth" onClick={toggleMode}>
                <p>{isSignIn ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}</p>
                <button>{isSignIn ? 'Crear cuenta' : 'Iniciar sesión'}</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
