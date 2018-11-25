import React, { Component } from 'react'
import PageTop from '../utils/page_top';
import { connect } from 'react-redux';
import { getProductDetail, clearProductDetails } from '../../actions/products_actions';


import CircularProgress from '@material-ui/core/CircularProgress';
import ProdNfo from './prodNfo';
import ProdImg from './prodImg'




class Product extends Component {




    componentDidMount() {

        const id = this.props.match.params._id
        this.props.dispatch(getProductDetail(id))



    }


    componentWillUnmount() {
        this.props.dispatch(clearProductDetails())
    }


    addToCartHandler = (id) => {

    }

    render() {

        return (
            <div>
                <PageTop title="Product Details" />
                <div className="container">
                    {
                        this.props.products.infoProduct ?
                            <div className="product_detail_wrapper">
                                <div className="left">
                                    <div style={{ width: '500px' }}>
                                        <ProdImg
                                            detail={this.props.products.infoProduct}

                                        />


                                    </div>

                                </div>

                                <div className="right">
                                    <ProdNfo detail={this.props.products.infoProduct}

                                        addToCart={(id) => this.addToCartHandler(id)}

                                    />

                                </div>

                            </div>

                            : <div className='main_loader' style={{ margin: '0 auto' }}>
                                <CircularProgress style={{ color: '#2196F3' }} thickness={7} />
                            </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {

    return {
        products: state.products
    }
}




export default connect(mapStateToProps)(Product)