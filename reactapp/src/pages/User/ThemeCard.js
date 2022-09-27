import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Logout from "../Logout.js";
import "./components/Booking.css";
function ThemeCard() {
  return (
      <div className="card-div">
    <Card style={{ width: '18rem' }}>
      <Card.Img  style={{ width: '18rem', }} variant="top" src="https://profiles.sulekha.com/mstore/43530795/albums/default/thumbnailfull/shutterstock-1254717979-jpg-edit.jpg" />
      <Card.Body>
        <Card.Title>SS Birthday Event</Card.Title>
        <Card.Text>
          Place: Hydherebadh
          Ratting: 4.5
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ThemeCard;