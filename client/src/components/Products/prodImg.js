import React, { Component } from 'react'
import ReactImages from 'react-images'

class ProdImg extends Component {

    state = {
        lightbox: false,
        imagePos: 0,
        lighboxImages: []
    }

    componentDidMount() {
        if (this.props.detail.images.length > 0) {
            let lighboxImages = [];
            this.props.detail.images.forEach(item => {
                lighboxImages.push(item.url)
            })
            this.setState({
                lighboxImages: lighboxImages
            })
        }
    }

    renderCardImage = (images) => {
        if (images.length > 0) {
            return images[0].url

        } else {
            return `/images/image_not_availble.png`

        }
    }
    render() {
        const { detail } = this.props;
        return (
            <div className="product_image_container">
                <div className="main_pic">
                    <div
                        style={{ background: `url(${this.renderCardImage(detail.images)}) no-repeat` }}
                    >

                    </div>
                </div>

            </div>

        )
    }
}
export default ProdImg