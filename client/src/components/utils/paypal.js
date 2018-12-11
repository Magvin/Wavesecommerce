import React, { Component } from 'react'
import PaypalExpressBtn from 'react-paypal-express-checkout';


class Paypal extends Component {
    render() {

        const onSuccess = (payment) => {
            // console.log(JSON.stringify(payment))
            this.props.onSuccess(payment)

        }
        const onCancel = (data) => {
            console.log(JSON.stringify(data))
        }
        const onError = (err) => {
            console.log(JSON.stringify(err))

        }

        let env = 'sandbox';
        let currency = 'USD';
        let total = this.props.toPay

        const client = {
            sandbox: 'AR2jZX9yAvRpGdf2ryBD07E1P5OmDMF2Vnnkkw6iBQ_OYrogwT9J54B-O3KNjV3W6If4ToYYlYqZHK9y',
            production: ''
        }



        //     {"paid":true,
        //     "cancelled":false,
        //     "payerID":"3WW88R3XU8H4G",
        //     "paymentID":"PAY-6UP90292EH0880149LQIA4SA",
        //     "paymentToken":"EC-1VE611563L3734725",
        //     "returnUrl":"https://www.sandbox.paypal.com/?paymentId=PAY-6UP90292EH0880149LQIA4SA&token=EC-1VE611563L3734725&PayerID=3WW88R3XU8H4G",
        //     "address":{
        //         "recipient_name":"test buyer",
        //         "line1":"Spitalfields Arts Market, 112 Brick Lane,",
        //         "city":"London",
        //         "state":"London",
        //         "postal_code":"E1 6RL",
        //         "country_code":"GB"
        //     },
        //     "email":"anastaisha.litinska-buyer@gmail.com"
        // }


        return (
            <div>
                <PaypalExpressBtn
                    env={env}
                    client={client}
                    currency={currency}
                    total={total}
                    onError={onError}
                    onSuccess={onSuccess}
                    onCancel={onCancel}
                    style={{
                        size: 'large',
                        color: 'blue',
                        shape: 'rect',
                        label: 'checkout'
                    }}


                />
            </div>
        )
    }
}
export default Paypal