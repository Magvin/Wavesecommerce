import React, { Component } from 'react'

import UserLayout from '../../hoc/user'

import { connect } from 'react-redux'

class Cart extends Component {
    render() {
        return (
            <UserLayout>

            </UserLayout>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        products: products.state
    }

}
export default connect()(Cart)