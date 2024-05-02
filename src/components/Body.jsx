import "./body.css";
import massage from "../assets/massage.jpg"

const Body=()=>{
    return (
        <div className="body">
            <div className="poster">
                <img src={massage}/>
            </div>

            <div className="contact">
                <h1>Think Health. Think Massage</h1>
                <p>We are open 9am to 6pm; Monday through Sunday. If you would like to schedule an appointment <br /> with us, please call us at 987-654-3210 today!</p>
                <div>
                    <button>LEARN MORE ABOUT US</button>
                    <button>CONTACT US TODAY</button>
                </div>
            </div>

            <div className="info">
                <p className="brown">Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage.</p>
                <p>We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your performance with our treatments.</p>
                <p>We welcome you to come explore all the benefits you will enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland.</p>
                <hr />
            </div>

            <div className="address">
                <h2>Family Wellness Massage Therapy</h2>

                <p>9876 Main Street, Suite 123, Mainland, ML12345 <br />Tel: 987.654.3210</p>
            </div>
        </div>
    )
}

export default Body;

