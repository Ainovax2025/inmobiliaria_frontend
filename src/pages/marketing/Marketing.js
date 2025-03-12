// eslint-disable-next-line no-unused-vars
import styles from '../../styles/marketing.css';
import { useState, useEffect } from "react";
import LoadingSpinner from "../../components/spinner.jsx"
import InstagramPost from "../../components/visualInstagram.jsx"
import { FaWandMagicSparkles } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BASE_URL = process.env.REACT_APP_BACKEND_URL;


function Marketing() {

  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [inputText, setInputText] = useState(""); 
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const generatePost = async () => {



    if (!inputText.trim()) {
      alert("Por favor, ingresa una descripción antes de generar la publicación.");
      return;
    }
    
    setLoading(true);
    setResponseText(""); 
    setImageUrl(null);

    try {
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


  const publicarPost = async (responseText,imageUrl) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/api/generate-postInstagram`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ responseText,imageUrl })
      });

      if(response.ok){
        toast.success("Publicación generada con éxito!");
      }

      console.log(response)

    } catch (error) {
      console.error("Error en la generación:", error);
      setResponseText("Ocurrió un error al generar la respuesta.");
    } finally {
      setLoading(false);
    }

  }

  return (
    <section    className="container-App"
    style={{
      height: screenWidth <= 1000
        ? !responseText && !imageUrl
          ? "100vh"
          : responseText && imageUrl
            ? "auto"
            : ""
        : ""
    }}>
       {loading && <LoadingSpinner />}
       <ToastContainer />
      <div className={responseText && imageUrl ? "LeftContainer" : "justLeftContainer"}>
      <div className='containerPrompt'> 
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
                <button className="GenerarPost" onClick={generatePost} disabled={loading}>
                  <span><FaWandMagicSparkles/> Generar publicación</span>
                </button>
            </div>
          </div>   
        </div>
      </div>
      {(responseText && imageUrl) && (
      <div className='RightContainer'>
        <InstagramPost 
            username="david montero l"
            imageSrc={imageUrl}
            caption = {responseText}
          />
          <button className='subirPost'  onClick={() => publicarPost(responseText, imageUrl)} >
            Subir publicación
          </button>
      </div>
     )} 
    </section>
  );
}

export default Marketing;
