import React, { useContext, useState, useRef } from 'react'
import ItemCount from './ItemCount'
import CartContext from '../../context/CartContext'
import UserContext from '../../context/UserContext'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa';

import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'

import "../../styles/Product.css"

const ItemDetail = ({ item }) => {
	const { id, imagen, title, price, stock } = item
	const { addToCart, isInCart } = useContext(CartContext);
	const { logueado, setToWishList } = useContext(UserContext);
	const existe = isInCart(item.id)

	const addToWishlist = (e) => {
		e.preventDefault();
		setToWishList(item.id);
		setShow(!show)
	}

	const [show, setShow] = useState(false);
  const target = useRef(null);
	
		return (
			<div className="row no-gutters detail-content">
				<div className="col-sm-1">&nbsp;</div>
				<div className="photo-detail col-sm-5 align-self-center text-center">
					<img src={imagen} alt={title} />
				</div>
				<div className="col-sm-1">&nbsp;</div>
				<div className="col-sm-4">
					<div className="separador">&nbsp;</div>
					<h1>{title} - {id}</h1>
					<span className="price-item align-self-center">${price}</span>{" "}
					<div className="text-center stock mb-2">({stock} disponibles)</div>
					{ logueado && 
						<>
							<button ref={target} onClick={addToWishlist} className="btn btn-danger">
								<FaHeart />
							</button>
							<Overlay target={target.current} show={show} placement="right">
								{(props) => (
									<Tooltip id="overlay-example" {...props}>
										Agregado a Wishlist
									</Tooltip>
								)}
							</Overlay>
						</>
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
				</div>
			</div>
		)
	
}

export default ItemDetail
