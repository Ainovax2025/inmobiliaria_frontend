import { 
    FaSwimmingPool, 
    FaDumbbell, 
    FaParking, 
    FaShieldAlt, 
    FaWifi, 
    FaTree, 
    FaHotTub, 
    FaBasketballBall, 
    FaWineGlassAlt,
  } from "react-icons/fa";
  import {    FaElevator, FaHouse} from "react-icons/fa6";
  import { MdOutlineLocalLaundryService, MdOutlineEvent } from "react-icons/md";
  
  const GetAmenityIcon = (amenidad) => {
    const icons = {
      "Piscina": <FaSwimmingPool />,
      "Gimnasio": <FaDumbbell />,
      "Parqueadero": <FaParking />,
      "Ascensor": <FaElevator />,
      "Seguridad 24/7": <FaShieldAlt />,
      "WiFi en áreas comunes": <FaWifi />,
      "Zonas verdes": <FaTree />,
      "Jacuzzi": <FaHotTub />,
      "Cancha deportiva": <FaBasketballBall />,
      "Salón social": <MdOutlineEvent />,
      "Área de BBQ": <FaWineGlassAlt />,
      "Lavandería": <MdOutlineLocalLaundryService />
    };
  
    return icons[amenidad] || <FaHouse/>; 
  };
  
  export default GetAmenityIcon;
  