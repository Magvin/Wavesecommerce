import React, { Component } from 'react'
import Ligtbox from 'react-images'
class ImagesLigtbox extends Component {

    state = {
        lightboxIsOpen: true,
        currentImage: this.props.position,
        images: []
    }

    static getDerivedStateFromProps(props, state) {
        if (props.images) {
            const images = [];
            props.images.forEach(el => {
                images.push({ src: `${el}` })
            })
            return state = {
                images
            }

        }

        return false
    }
    closeLigbox = () => {
        this.props.onclose();
    }
    gotoPrevious = () => {
        this.setState({
            currentImage: this.state.currentImage - 1
        })
    }
    gotoNext = () => {
        this.setState({
            currentImage: this.state.currentImage + 1
        })
    }


    render() {
        return (
            <Ligtbox
                currentImage={this.state.currentImage}
                images={this.state.images}
                isOpen={this.state.lightboxIsOpen}
                onClickPrev={() => this.gotoPrevious()}
                onClickNext={() => this.gotoNext()}
                onClose={() => this.closeLigbox()}

            />
        )
    }
}

export default ImagesLigtbox
