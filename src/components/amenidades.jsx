import {
  FaSwimmingPool,
  FaDumbbell,
  FaParking,
  FaShieldAlt,
  FaTree,
  FaHotTub,
  FaBasketballBall,
  FaWineGlassAlt
} from 'react-icons/fa';
import { FaElevator, FaHouse } from 'react-icons/fa6';
import { MdOutlineLocalLaundryService, MdOutlineEvent } from 'react-icons/md';

const GetAmenityIcon = amenidad => {
  const icons = {
    Piscina: <FaSwimmingPool />,
    Gimnasio: <FaDumbbell />,
    Parqueadero: <FaParking />,
    Ascensor: <FaElevator />,
    'Vigilancia 24h': <FaShieldAlt />,
    'Zonas verdes': <FaTree />,
    Jacuzzi: <FaHotTub />,
    'Cancha deportiva': <FaBasketballBall />,
    'Salón social': <MdOutlineEvent />,
    'Zona BBQ': <FaWineGlassAlt />,
    Lavandería: <MdOutlineLocalLaundryService />
  };

  return icons[amenidad] || <FaHouse />;
};

export default GetAmenityIcon;
