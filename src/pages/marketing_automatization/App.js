// eslint-disable-next-line no-unused-vars
import styles from '../../styles/App.css';
import { useState } from "react";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [inputText, setInputText] = useState(""); 

  const generatePost = async () => {
    if (!inputText.trim()) {
      alert("Por favor, ingresa una descripción antes de generar la publicación.");
      return;
    }
    
    setLoading(true);
    setResponseText(""); 
    setImageUrl(null);

    try {
      // Llamada única al backend para obtener el texto y la imagen generada
      const response = await fetch(`${BASE_URL}/api/generate-post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inputText })
      });

      if (!response.ok) throw new Error("Error en la generación del post");

      const { responseText, imageUrl } = await response.json();
      setResponseText(responseText);
      setImageUrl(imageUrl);

    } catch (error) {
      console.error("Error en la generación:", error);
      setResponseText("Ocurrió un error al generar la respuesta.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container-App">
      <div className="Container-Prompt">
        <div> 
          <div className="tittle-prompt">
            <h1>Generador de marketing</h1>
            <h4>Crea tu publicación con ayuda de tu asistente virtual Sofia</h4>
          </div>

          <div className="container-input-prompt">
            <div className="box-prompt">
              <div className="box-tittle">
                <h4>Describe tu publicación</h4>
              </div>
              <div className="box-textarea">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Escribe el texto para tu anuncio..."
                />
              </div>

              <div className="GenerarPost">
                <button onClick={generatePost} disabled={loading}>
                  {loading ? "Generando..." : "Generar"}
                </button>
              </div>
            </div>
          </div>   
        </div>
        
        {(responseText && imageUrl) && (
          <div className="Publicacion">
            <div className='ContainerPublicacion'>
              <h4>Vista previa</h4> 
              <div className='ContainerPreview'>
                <div className='containerImage'>
                  {imageUrl ? <img src={imageUrl} alt="Imagen generada" /> : <p>Imagen en proceso...</p>}
                </div>
                <div className='ContainerTextGenerator'>
                  <div className='contenedortexto'>
                    <h4>Texto Generado</h4>
                    <h5>{responseText || "Texto en proceso..."}</h5>
                  </div>    
                  <div className='ContainerBtnPublicar'>
                    <button>Publicar</button>
                  </div>          
                </div>
              </div> 
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
