import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Button, Form, Grid, Header, Icon, Table } from 'semantic-ui-react'

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [salario, setSalario] = useState('');
  const [ocupacion, setOcupacion] = useState('');
  const [APIdata, setAPIdata] = useState([]);
  const [refresh, setRefresh] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    const objt = { nombre, edad, salario, ocupacion };
    axios
      .post(
        'https://sheet.best/api/sheets/80dc56f8-a607-4dc6-a602-82452045405c',
        objt
      )
      .then(() => {
        setRefresh([])
        setNombre('');
        // console.log(data);
      });
  };

  useEffect(() => {
    axios.get('https://sheet.best/api/sheets/80dc56f8-a607-4dc6-a602-82452045405c')
      .then((incomingData) => {
        setAPIdata(incomingData.data);
      });
  }, [refresh])

  return (
    <>
      <Grid divided='vertically' centered textAlign='left' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Row columns={2}>
          <Grid.Column centered width={3} backgroundColor='teal'>
            <Header as='h2' color='teal'>
              {/* <img src='logo.svg'/> */}
              FOMULARIO
            </Header>
            <Form textAlign='left'>
              <Form.Field>
                <label><Icon circular name='users' iconPosition='left' />Nombre</label>
                <input placeholder='Ingresa tu nombre' type="text"
                  onChange={(e) => setNombre(e.target.value)} />
              </Form.Field>
              <Form.Field>
                <label><Icon circular name='money bill alternate' />Edad</label>
                <input placeholder='Ingresa tu edad' type="number"
                  onChange={(e) => setEdad(e.target.value)} />
              </Form.Field>
              <Form.Field>
                <label><Icon circular name='money bill alternate' />Salario</label>
                <input placeholder='Ingresa tu salario' type="number"
                  onChange={(e) => setSalario(e.target.value)} />
              </Form.Field>
              <Form.Field>
                <label><Icon circular name='plus' />Ocupación</label>
                <input border='red' placeholder='Ingresa tu ocupacion' type="text"
                  onChange={(e) => setOcupacion(e.target.value)} />
              </Form.Field>

              <Button color="red" type='submit' onClick={onSubmit}>Enviar</Button>
            </Form>
          </Grid.Column>

          <Grid.Column centered width={5} >
            <Table fixed style={{ marginLeft: "10em" }}  >
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Nombre</Table.HeaderCell>
                  <Table.HeaderCell>Edad</Table.HeaderCell>
                  <Table.HeaderCell>Salario</Table.HeaderCell>
                  <Table.HeaderCell>Ocupación</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {APIdata.map((data) => {
                  return (
                    <Table.Row key={data.id}>
                      <Table.Cell>{data.nombre}</Table.Cell>
                      <Table.Cell>{data.edad}</Table.Cell>
                      <Table.Cell>{data.salario}</Table.Cell>
                      <Table.Cell>{data.ocupacion}</Table.Cell>
                    </Table.Row>
                  )
                })}
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}


