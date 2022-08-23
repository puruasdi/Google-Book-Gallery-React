import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../auth/AuthContext";
import { Container, Navbar, Alert, Button } from 'react-bootstrap';

function NavbarComponent() {
  const { logout, currentUser } = useAuth();
  const [error, setError] = useState("")
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <Navbar bg="white" variant="white">
      <Container>
        {error && <Alert variant="danger">{error}</Alert>}
        <Navbar.Brand  >
          <h3 style={{ fontWeight: "700" }} className="text-success">
            GALLERY BOOK
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='me-4'>
            <h5>{currentUser?.email}</h5>
          </Navbar.Text>
          <Button variant="outline-success" size="sm" onClick={handleLogout}>Log out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;