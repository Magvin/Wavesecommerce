import React, { Component } from 'react'

import FormField from '../../utils/Form/formfield';
import { update, generateData, isFormValid, resetFields } from '../../utils/Form/formActions';
import { connect } from 'react-redux';
import { addBrands, getBrands } from '../../../actions/products_actions';

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
        },
        oldBrands: []
    }


    componentDidMount() {
        this.props.dispatch(getBrands())

    }
    componentDidUpdate() {
        this.props.dispatch(getBrands())
    }



    resetFieldHandler = () => {
        const newFormData = resetFields(this.state.formdata, 'brands');

        this.setState({
            formdata: newFormData,
            formSuccess: true
        });
        setTimeout(() => {
            this.setState({
                formSuccess: false
            })
        }, 3000)
    }

    showCategoryItems = () => (

        this.props.products.brands ?
            this.props.products.brands.map((item, i) => (
                <div className="category_item" key={item._id}>
                    {item.name}
                </div>
            ))

            : null
    )




    submitForm = (event) => {
        event.preventDefault();

        let dataToSubmit = generateData(this.state.formdata, 'brands');
        let formIsValid = isFormValid(this.state.formdata, 'brands')
        let existingBrand = this.props.products.brands

        if (formIsValid) {
            this.props.dispatch(addBrands(dataToSubmit, existingBrand)).then(response => {
                if (response.payload.success) {

                    this.resetFieldHandler()

                } else {
                    this.setState({ formError: true })

                }
            })
        } else {
            this.setState({
                formError: true

            })

        }

    }
    updateForm = (element) => {
        const newFormdata = update(element, this.state.formdata, 'brands');
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }


    addCategoryItem = () => (
        <div>
            <form onSubmit={(event) => this.submitForm(event)}>
                <FormField
                    id={'name'}
                    formdata={this.state.formdata.name}
                    change={(element) => this.updateForm(element)}
                />


            </form>
            {this.state.formSuccess ?
                <div className="form_success">
                    Success
                            </div>
                : null}

            {this.state.formError ?
                <div className="error_label">
                    Already exists.  Please check your data
                                        </div>
                : null}
            <button onClick={(event) => this.submitForm(event)}>
                Add product
                        </button>
        </div>
    )




    render() {
        return (
            <div className="admin_category_wrapper">
                <h1>Brands</h1>
                <div className="admin_two_column">
                    <div className="left">
                        <div className="brands_container">
                            {this.showCategoryItems()}
                        </div>
                    </div>
                    <div className="right">
                        {this.addCategoryItem()}
                    </div>
                </div>
            </div>
        )




    }
}


const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ManageBrands)
