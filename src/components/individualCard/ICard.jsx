import './iCard.css'

const ICard = () => {
    return (

        <div class="row row-cols-1 row-cols-md-3 g-4">

            <div class="col">
                <div class="card h-100 pointer">
                    <img src="https://source.unsplash.com/random/800x600" class="card-img-top" alt="contact-logo" style={{ width: "", objectFit: "contain" }} />
                    <div class="card-body">
                        <h5 class="card-title">TEST NAME</h5>
                        <p class="card-text">
                            Phone: <a href='tel:+12345'>1245666</a> <br />
                            Email: <a href='mailto:john@test.co'>de@ma.co</a>
                        </p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">17 min ago</small>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ICard