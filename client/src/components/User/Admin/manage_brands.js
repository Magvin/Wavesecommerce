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
    updateForm = (element) => {
        const newFormdata = update(element, this.state.formdata, 'brand');
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }
    submitForm = (event) => {
        event.preventDefault();

        let dataToSubmit = generateData(this.state.formdata, 'brand');
        let formIsValid = isFormValid(this.state.formdata, 'brand')

        if (formIsValid) {
            this.props.dispatch(addBrands(dataToSubmit))

        } else {
            this.setState({
                formError: true
            })
        }
    }
    resetFieldHandler = () => {
        const newFormData = resetFields(this.state.formdata, "brand")
        this.setState({
            formdata: newFormData,
            formSuccess: true

        })

    }

    render() {
        return (
            <form onSubmit={(event) => this.submitForm(event)}>
                <FormField
                    id={'name'}
                    formdata={this.state.formdata.name}
                    change={(element) => this.updateForm(element)}
                />
                {this.state.formError ?
                    <div className="error_label">
                        Please check your data
                                        </div>
                    : null}
                <button onClick={(event) => this.submitForm(event)}>
                    Add Brand
                        </button>
            </form>


        )
    }
}


const mapStateToProps = (state) => {
    return {
        brand: state.addBrands
    }
}

export default connect(mapStateToProps)(ManageBrands)
