import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import CartContext from '../../context/CartContext'
import UserContext from '../../context/UserContext'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa';

import "../../styles/Product.css"

const ItemDetail = ({ item }) => {
	const { id, images, title, price, stock, nombreCategoria } = item
	const { addToCart, isInCart } = useContext(CartContext);
	const { logueado, setToWishList } = useContext(UserContext);
	const existe = isInCart(item.id)

	const addToWishlist = (e) => {
		e.preventDefault();
		setToWishList(item.id);
	}
	
    return (
		<div className="row no-gutters detail-content">
			<div className="col-sm-1">&nbsp;</div>
			<div className="photo-detail col-sm-5 align-self-center text-center">
				<img src={images[0]} alt={title} />
			</div>
			<div className="col-sm-1">&nbsp;</div>
			<div className="col-sm-4">
				<div className="separador">&nbsp;</div>
				<h1>{title} - {id}</h1>
				<span className="price-item align-self-center">${price}</span>{" "}
				<div className="text-center stock">({stock} disponibles)</div>
				{ logueado && 
					<button className="btn btn-danger" onClick={addToWishlist}><FaHeart /></button>
				}
				<div className="item-count">
					{stock>0?
						(
							!existe? (
								<ItemCount item={item} addToCart={addToCart} />
							):(
								<Link to="/cart" className="btn btn-outline-primary btn-sm">Terminar Compra</Link>
							)
						)
						:
						<button type="button" className="btn btn-primary disabled" disabled>Sin Stock</button>
					}
				</div>
				<Link to={`/categorias/${nombreCategoria}`}>Volver a {nombreCategoria}</Link>
			</div>
		</div>
    )
}

export default ItemDetail
