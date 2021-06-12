import { Container, Image, Col} from "react-bootstrap";
import newtonImage from '../../images/newton.jpg'

function Newton() {
  return (
    <div className="App pt-3">
    <Container>

            <header className="App-header">
            <h1>Newtons Lagar</h1>
            <Col>
                <h3 className="mx-5" >Sir Isaac Newton </h3>
                <Image className="rounded" src={newtonImage} ></Image>
            </Col>
            </header>
    </Container>
    </div>
  );
}

export default Newton;
