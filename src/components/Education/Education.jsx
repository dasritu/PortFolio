import React from "react";
import { useInView } from "react-intersection-observer";
import Card from "react-bootstrap/Card";
import './Education.css';
import SchoolIcon from '@mui/icons-material/School';

export default function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return (
    <div className="Education" id="edu">
      <br></br>
        <h2>Education <SchoolIcon fontSize="large"/></h2>
       
      <div className="main-card"  ref={ref}>
        <Card  className={`cards ${inView ? "visible animate-left" : ""}`}>
          <Card.Body variant="primary">
            <Card.Title>MCA</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Master Of Computer Application 
            </Card.Subtitle>
            <Card.Text>
              Techno College Hooghly<br></br>
              Grade:9.23<br></br>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={`cards ${inView ? "visible animate-left" : ""}`}>
          <Card.Body variant="primary">
            <Card.Title>BCA</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" >
              Bachelor Of Computer Application
            </Card.Subtitle>
            <Card.Text>
              Techno College Hooghly<br></br>
              Grade:9.76<br></br>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={`cards ${inView ? "visible animate-left" : ""}`}>
          <Card.Body variant="primary">
            <Card.Title>Higher Secondary</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" >
              W.B.B.C.H.S.E
            </Card.Subtitle>
            <Card.Text>
              Krishna Bhabini Nari Shiksha Mandir<br></br>
              66%<br></br>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card  className={`cards ${inView ? "visible animate-left" : ""}`}>
          <Card.Body variant="primary">
            <Card.Title>Secondary</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" >
              W.B.B.S.E
            </Card.Subtitle>
            <Card.Text>
              St.Anthony's School<br></br>
              89%<br></br>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
