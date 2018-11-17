import React, { Component } from 'react';

import Header from '../components/Header_footer/Header';
import Footer from '../components/Header_footer/Footer';

class Layout extends Component {




    closeCookies = () => {
        let cookies = document.querySelectorAll('.cookies');
        cookies[0].style.display = 'none';
        document.cookie = 'expires= Fri, 15 Nov 2018 22:00;'

    }
    checkCookies(cookies) {

        if (document.cookie.length !== 0) {
            return true
        } else {
            return false
        }

    }
    render() {
        const cookieValue = document.cookie

        return (

            < div >
                <Header />
                <div className="page_container">
                    {this.props.children}
                </div>
                <Footer />

                {
                    this.checkCookies(cookieValue) ? <div className="cookies">
                        <div className="cookies_text">
                            <span className="close" onClick={() => this.closeCookies()}>&times;</span>
                            <div> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quod!</p></div> </div>
                    </div> : null
                }
            </div >
        );
    }
}

export default Layout;