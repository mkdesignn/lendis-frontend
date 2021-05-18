import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CommitsTable from './Components/CommitsTable/CommitsTable';
import axios from 'axios'

function App() {

    const [data, setData] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            axios('https://lendis-backend.herokuapp.com/api/v1/commits').then(res => {
                setData(res.data);
            }).catch(err => {

            })

        };
        fetchData();
    }, []);


    return (
      <Container>
          <Row>
              <Col>
                  <CommitsTable data={data} />
              </Col>
          </Row>
      </Container>
  );
}

export default App;
