import React, { Component } from 'react'
import PageTop from '../utils/page_top';
import { connect } from 'react-redux';
import { getProductDetail } from '../../actions/products_actions';




class Product extends Component {




    componentDidMount() {

        const id = this.props.match.params._id
        this.props.dispatch(getProductDetail(id))



    }

    render() {
        return (
            <div>
                <PageTop title="Product Details" />
                Product
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