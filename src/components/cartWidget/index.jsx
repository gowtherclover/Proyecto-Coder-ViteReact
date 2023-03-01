import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { FiShoppingCart } from "react-icons/fi";

function CartWidget({cantidad}) {
    return(
        <Nav.Link className="d-flex me-3">
            <Button className="position-relative text-dark" variant="transparent">
                <FiShoppingCart size={25}/> <Badge className="position-absolute top-0 start-100 translate-middle rounded-pill text-dark" bg="light">{cantidad}</Badge>
            </Button>
        </Nav.Link>
    )
}

export default CartWidget