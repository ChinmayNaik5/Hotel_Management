import React, { Component } from 'react';
import './Amenities.css';
import Amen from './Amen';



class Amenities extends Component {
    static defaultProps = {
        items: [{ name: "Easy Booking", content: "Visit us for a memorable Hotel Experience in A small budget", image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" },
        {name:"World Wide Content & Best Price Guatantee" ,content:"Search and book global inventory from large suppliers accrooss the globe" },
        {name:"Travel Insurance - Now secure yourself",content:"The best travel insurance policy safeguards you from the financial losses"},
        { name: "A La Carte Restaurant", content: "Our Restaurant is opened for breakfast, lunch, and dinner and specializes in gourmet cuisines from around the world", image: "" },
        { name: "Transport Services", content: "Enjoy a comfortable ride to our luxury Spa resort and Hotel from the airport by booking our convenient shuttle services", image: "" },
        { name: "24-Hour Front Desk", content: "The reception is opened 24 hours a day. Our receptionists inform our guests of all the hotel facilities ", image: "" }]
    }
    render() {
        return (
            <div >
                <p className="Amen_Title">Services</p>
                <div className="Amen">
                    {this.props.items.map((p) => (
                        <Amen name={p.name} content={p.content} image={p.image} />
                    ))}
                </div>

            </div>
        );
    }
}

export default Amenities;