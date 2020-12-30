import React,{useState} from 'react'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'

const Contact  = () => {

  const [email, setEmail] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [image, setImage] = useState(" ");
  const onSubmitForm = async (e) => {
    e.preventDefault();
   const body ={ email,phone,title,description}
    console.log(body);
  };
        return(
            <Container>
            <h1> To Contact Us Please Fill The Following Information </h1>
            <Row style={{ marginTop: "50px" }}>
              <Col md={{ span: 6, offset: 3 }}>
                <Form onSubmit={onSubmitForm} >
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter your phone" value={phone}
                     onChange={e => setPhone(e.target.value)} />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter the title" required value = {title}
                     onChange={e => setTitle(e.target.value)} />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Post Body</Form.Label>
                    <Form.Control type="text" as="textarea" value={description}  
                    onChange={e => setDescription(e.target.value)}
                    placeholder="add your post body" rows={6} />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                   Submit  Contact
                  </Button>
                </Form>
              </Col>
            </Row>
            <br></br>
            <h1>
              <strong>Or</strong>
              Here Contact via Email:-<br></br> <a href='https://mail.google.com/mail/u/1/'>kebesoftware@gmail.com</a>
              <br></br>
              Call_us via-Mobile <a href='tel:+251938318340'>+251 9383 183 40</a>
            </h1>
          </Container>
        )
}
export default Contact;