import React from 'react'
import MyButton from '../utils/button'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTruck from '@fortawesome/fontawesome-free-solid/faTruck'
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck'
// import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'

function ProdNfo(props) {
    const detail = props.detail

    const showProdTags = (detail) => (
        <div className="product_tags">
            {
                detail.shipping ?
                    <div className="tag">
                        <div><FontAwesomeIcon icon={faTruck} style={{ color: 'green' }} /></div>
                        <div className="tag_text">
                            <div>Free Shipping</div>
                            <div>And Return</div>
                        </div>
                    </div>

                    :
                    <div className="tag">
                        <div><FontAwesomeIcon icon={faTruck} style={{ color: 'red' }} /></div>
                        <div className="tag_text">
                            <div>Free Shipping is not available</div>

                        </div>
                    </div>
            }
            {detail.available ?
                <div className="tag">
                    <div><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /></div>
                    <div className="tag_text">
                        <div>Available</div>
                        <div>In store</div>
                    </div>
                </div>



                : <div className="tag">
                    <div><FontAwesomeIcon icon={faCheck} style={{ color: 'red' }} /></div>
                    <div className="tag_text">
                        <div>Not Available</div>
                        <div>Preorder</div>
                    </div>
                </div>}

        </div>
    )

    const showProdAction = (detail) => (
        <div className="product_actions">
            <div className="price">$ {detail.price}</div>
            <div className="cart">
                <MyButton
                    type='add_to_cart_link'
                    runAction={() => {
                        props.addToCart(detail._id)
                    }}
                />
            </div>
        </div>
    )

    const showProdSpecification = (detail) => (

        <div className="product_specifications">
            <h2>Specifications</h2>
            <div>
                <div className="item"><strong>Frets:</strong>{detail.frets}</div>
                <div className="item"><strong>Wood:</strong>{detail.wood.name}</div>
            </div>
        </div>
    )

    return (
        <div>
            <h1>{detail.brand.name} {detail.name}</h1>
            <p>{detail.description}</p>


            {showProdTags(detail)}
            {showProdAction(detail)}
            {showProdSpecification(detail)}
        </div>
    )
}

export default ProdNfo
