import React, { Component } from 'react'
import ReactImages from 'react-images'
import ImageLigtbox from '../utils/lighbox';


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
    handelLighbox = (position) => {
        if (this.state.lighboxImages.length > 0) {
            this.setState({
                lightbox: true,
                imagePos: position
            })

        }
    }
    handelLighboxClose = () => {
        this.setState({
            lightbox: false
        })
    }
    showThumbs = (detail) => (
        this.state.lighboxImages.map((item, i) => (
            i > 0 ?
                <div
                    className="thumb"
                    key={i}
                    onClick={() => this.handelLighbox(i)}
                    style={{ background: `url(${item}) no-repeat` }}

                >


                </div>

                : null
        ))

    )


    render() {
        const { detail } = this.props;
        return (
            <div className="product_image_container">
                <div className="main_pic">
                    <div
                        style={{ background: `url(${this.renderCardImage(detail.images)}) no-repeat` }}
                        onClick={() => this.handelLighbox(0)}
                    >

                    </div>
                </div>
                <div className="main_thumbs">
                    {
                        this.showThumbs(detail)
                    }
                </div>
                {
                    this.state.lightbox ? <ImageLigtbox
                        id={detail.id}
                        images={this.state.lighboxImages}
                        open={this.state.open}
                        position={this.state.imagePos}
                        onclose={() => this.handelLighboxClose()}


                    /> : null
                }

            </div>

        )
    }
}
export default ProdImg