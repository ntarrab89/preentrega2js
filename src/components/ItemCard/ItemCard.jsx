import { Link } from "react-router-dom";
import Boton from "../Boton/Boton";
import './ItemCard.scss'
const ItemCard = ({item}) => {

  return (
    <article className="w-80 text-center card-height flex-row justify-between content-center">
      <img src={item.img}  className='img-size' alt={item.name} />
      <h3 className="text-2xl font-semibold">{item.name}</h3>
      <hr />
      <p>{item.description}</p>
      <p className="text-xl font-bold">Precio: ${item.price}</p>
      <Boton className="">
        <Link to={`/item/${item.id}`}>Ver más</Link>
      </Boton>
    </article>
  );
};

export default ItemCard;
