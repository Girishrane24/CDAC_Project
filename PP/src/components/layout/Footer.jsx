import React from 'react'

function Footer() {
    return (
        <>

            <footer class="bg-dark text-light py-4">
        <div class="container">

            <div class="row text-center text-md-start">

                <div class="col-md-4 mb-3">
                    <h5>My Store</h5>
                    <p>
                        Quality products with affordable prices and
                        excellent customer service.
                    </p>
                </div>

                <div class="col-md-4 mb-3">
                    <h5>Quick Links</h5>

                    <ul class="list-unstyled">
                        <li><a href="#" class="text-light text-decoration-none">Home</a></li>
                        <li><a href="#" class="text-light text-decoration-none">Products</a></li>
                        <li><a href="#" class="text-light text-decoration-none">Services</a></li>
                        <li><a href="#" class="text-light text-decoration-none">Contact</a></li>
                    </ul>
                </div>

                <div class="col-md-4 mb-3">
                    <h5>Contact Us</h5>
                    <p>📧 info@mystore.com</p>
                    <p>📞 +91 9876543210</p>
                    <p>📍 Pune, Maharashtra</p>
                </div>

            </div>

            <hr/>

            <div class="text-center">
                <p class="mb-0">
                    © 2026 My Store. All Rights Reserved.
                </p>
            </div>

        </div>
    </footer>

        </>
    )
}

export default Footer
