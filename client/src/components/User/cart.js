import React, { Component } from 'react'

import UserLayout from '../../hoc/user'
import UserProductBlock from '../utils/User/product_block';

import { connect } from 'react-redux'
import { getCartItem, removeCartItem } from '../../actions/user_actions'


import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faFrown from '@fortawesome/fontawesome-free-solid/faFrown'
import faSmile from '@fortawesome/fontawesome-free-solid/faSmile'
import Paypal from '../utils/paypal';


class Cart extends Component {


    state = {
        loading: true,
        total: 0,
        showTotal: false,
        showSuccess: false,

    }

    componentDidMount() {
        let cartItems = [];
        let user = this.props.user;
        let userCart = user.userData.cart

        if (userCart) {
            if (userCart.length > 0) {

                userCart.forEach(item => {
                    cartItems.push(item.id)
                });

                this.props.dispatch(getCartItem(cartItems, userCart))
                    .then(() => {
                        if (this.props.user.cartDetail.length > 0) {
                            this.calculateTotal(this.props.user.cartDetail)
                        }


                    })


            }
        }

    }


    calculateTotal = (cartDetail) => {
        let total = 0;
        cartDetail.forEach(item => {
            total += parseInt(item.price, 10) * item.quantity
        });
        this.setState({
            total: total,
            showTotal: true
        })
    }

    removeFromCart = (id) => {
        this.props.dispatch(removeCartItem(id))
            .then(() => {
                if (this.props.user.cartDetail.length <= 0) {
                    this.setState({
                        showTotal: false
                    })
                } else {
                    this.calculateTotal(this.props.user.cartDetail)
                }
            })

    }
    showNoItemMessage = () => (
        <div className="cart_no_items">
            <FontAwesomeIcon icon={faFrown} />
            <div>No items</div>
        </div>
    )


    transactionError = (data) => {
        console.log(data)
    }


    transactionCanceled = (data) => {
        console.log(data)
    }


    transactionSuccess = (data) => {

        this.setState({
            showTotal: false,
            showSuccess: true

        })


    }
    render() {
        return (
            <UserLayout>
                <h1>My Cart</h1>
                <div className="user_cart">

                    <UserProductBlock
                        products={this.props.user}
                        type='cart'
                        removeItem={(id) => this.removeFromCart(id)}

                    />
                    {this.state.showTotal ? <div className='user_cart_sum'>Total amount: $ {this.state.total}</div> : this.state.showSuccess ?
                        <div className="cart_success">
                            <FontAwesomeIcon icon={faSmile} />
                            <div>
                                Thank you
                            </div>
                            <div>
                                Order is completed
                            </div>
                        </div>


                        :
                        this.showNoItemMessage()}
                    {
                        this.state.showTotal ?
                            <div className="paypal_button_container">
                                <Paypal
                                    toPay={this.state.total}
                                    transactionError={(data) => this.transactionError(data)}
                                    transactionCanceled={(data) => this.transactionCanceled(data)}
                                    onSuccess={(data) => this.transactionSuccess(data)}

                                />
                            </div>

                            : null
                    }
                </div>

            </UserLayout>
        )
    }
}


const mapStateToProps = (state) => {
    return {

        user: state.user
    }
}
export default connect(mapStateToProps)(Cart)