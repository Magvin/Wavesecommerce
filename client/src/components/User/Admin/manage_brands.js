import React, { Component } from 'react'

import FormField from '../../utils/Form/formfield';
import { update, generateData, isFormValid, resetFields } from '../../utils/Form/formActions';
import { connect } from 'react-redux';
import { addBrands } from '../../../actions/products_actions';

class ManageBrands extends Component {

    state = {
        formError: false,
        formSuccess: false,
        formdata: {
            name: {
                element: 'input',
                value: '',
                config: {
                    label: 'Brand name',
                    name: 'brand_input',
                    type: 'text',
                    placeholder: 'Enter your name of brand'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showlabel: true
            },
        }
    }



    render() {
        return (
        


        )
    }
}


const mapStateToProps = (state) => {
    return {
        brands: state.brands
    }
}

export default connect(mapStateToProps)(ManageBrands)
