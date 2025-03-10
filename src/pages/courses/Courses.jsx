
import Table from 'react-bootstrap/Table';
import './Courses.css'
import { useEffect, useState } from 'react';

function Courses() {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('https://academy-d62cf-default-rtdb.firebaseio.com/CourseData.json')
            .then(res => res.json())
            .then(data => {
                setCourse(Object.entries(data));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

        
  console.log(course);
  
  return (
    <Table  bordered  size="sm" className='tableCourse'>
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Course Image</th>
          <th>Course Description</th>
          <th>price</th>

        </tr>
      </thead>
      <tbody>
        {course.length > 0 && course.map(([id, cour]) => (
        <tr key={cour.id}>
        <td className='text-center'>{cour.title}</td>
        <td className='d-flex justify-content-center'>
            <img style={{width:"100px"}} src={cour.img} alt="" />
        </td>
        <td className='text-center'>{cour.body}</td>
        <td className='text-center'>{cour.price}</td>
      </tr>
        ))}


      </tbody>
    </Table>
  );
}

export default Courses;