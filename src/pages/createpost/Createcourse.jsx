import React, { use, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import './Createcourse.css'
export default function Createcourse() {
  const [title,setTitle]=useState('');
  const [img,setImg]=useState('');
  const [body,setBody]=useState('');
  const[desc,setDesc]=useState('');
  const [level,setLevel]=useState('');
  const [prerequisites,setPrerequisites]=useState('');
  const [price,setPrice]=useState(0);
  const[progress,setProgress]=useState(0);
  const [satisfaction,setSatisfaction]=useState(0);
  const[student,setStudent]=useState(0);
  const [support,setSupport]=useState('');
  const[type,setType]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newCourse={
      id:Math.floor(Math.random()*100),
      baseurl:'/courses',
      desc,
      img,
      level,
      prerequisite:prerequisites,
      price,
      progress,
      satisfaction,
      students:student,
      support,
      title,
      type,
      body
    }
    fetch('https://academy-d62cf-default-rtdb.firebaseio.com/CourseData.json',{
      method:'POST',
      body:JSON.stringify(newCourse)
    }).then(res=>{
      res.json();
      console.log(res); 
    })
  }
  return (
    <Form className='CourseForm' onSubmit={(e)=>handleSubmit(e)}>
        <Container>
            <Row className='d-flex'>
              <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>title</Form.Label>
                <Form.Control type="text" placeholder="course title" onChange={(e)=>setTitle(e.target.value)}/>
            </Form.Group>
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Image URL</Form.Label>
                <Form.Control type='text' placeholder='Image URL 'onChange={(e)=>setImg(e.target.value)} />
            </Form.Group>
              </Col>
            </Row>
            <Row className='d-flex'>
              <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>body</Form.Label>
                <Form.Control type="text" placeholder="course body" onChange={(e)=>setBody(e.target.value)} />
            </Form.Group>
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>course description</Form.Label>
                <Form.Control as='textarea' type='text' placeholder='description' onChange={(e)=>setDesc(e.target.value)} />
            </Form.Group>
              </Col>
            </Row>
            <Row className='d-flex'>
              <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>level</Form.Label>
                <Form.Control type="text" placeholder="course level" onChange={(e)=>setLevel(e.target.value)} />
            </Form.Group>
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>prerequisites</Form.Label>
                <Form.Control  type='text' placeholder='yse or no' onChange={(e)=>setPrerequisites(e.target.value)} />
            </Form.Group>
              </Col>
            </Row>
            <Row className='d-flex'>
              <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>price</Form.Label>
                <Form.Control type="number" placeholder="course price" onChange={(e)=>setPrice(e.target.value)} />
            </Form.Group>
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>progress</Form.Label>
                <Form.Control  type='number' placeholder='course progress' onChange={(e)=>setProgress(e.target.value)} />
            </Form.Group>
              </Col>
            </Row>
            <Row className='d-flex'>
              <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={(e)=>setSatisfaction(e.target.value)}>
                <Form.Label>satisfaction
                </Form.Label>
                <Form.Control type="number" placeholder="course satisfaction" />
            </Form.Group>
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" onChange={(e)=>setStudent(e.target.value)}>
                <Form.Label>students
                </Form.Label>
                <Form.Control  type='number' placeholder='course students' />
            </Form.Group>
              </Col>
            </Row>
            <Row className='d-flex'>
              <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>support
                </Form.Label>
                <Form.Control type="text" placeholder="course support (email whatsapp telephone,...)"  onChange={(e)=>setSupport(e.target.value)}/>
            </Form.Group>
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>type
                </Form.Label>
                <Form.Control  type='text' placeholder='course type (frontend,backend,...)' onChange={(e)=>setType(e.target.value)} />
            </Form.Group>
              </Col>
            </Row>
            <button type='submit' className='btn btn-info w-100 p-3'>Create course</button>
        </Container>
    </Form>
  )
}
