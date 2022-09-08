import './card.css'
import sample_data from "../../data_sample.js"

const Card = () => {


    return (


        <div class="row row-cols-1 row-cols-md-3 g-4">

            {sample_data.map((sample) => {
                const col = (
                    <>
                        <div class="col">
                            <div class="card h-100">
                                <img src={sample.img} class="card-img-top" alt="contact-logo" style={{width: "", objectFit: "contain"}} />
                                <div class="card-body">
                                    <h5 class="card-title">{sample.name}</h5>
                                    <p class="card-text">
                                        Phone: <a href='tel:+12345'>{sample.phone}</a> <br />
                                        Email: <a href='mailto:john@test.co'>{sample.email}</a>
                                    </p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">{sample.last_updated}</small>
                                </div>
                            </div>
                        </div>
                    </>
                )
                return col
            })
            }






        </div>
    )
}

export default Card