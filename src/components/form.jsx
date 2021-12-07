import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Button, Form, Grid, Header, Icon, Table } from 'semantic-ui-react'

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [salario, setSalario] = useState('');
  const [hobby, setHobby] = useState('');
  const [APIdata, setAPIdata] = useState([]);
  const [refresh, setRefresh] = useState([]);

  // const onSubmit = () => {
  //   axios.post('https://sheet.best/api/sheets/d60fc42e-f169-4567-9553-46b6d3de3dbd', {
  //     nombre, edad, salario, hobby
  //   })
  //   .then((data) => {
  //     setRefresh(data)
  //   })
  // }

  const onSubmit = (e) => {
    e.preventDefault();

    const objt = { nombre, edad, salario, hobby };
    axios
      .post(
        'https://sheet.best/api/sheets/b4ef8e38-797b-4599-b0b3-5a7ca608a65a',
        objt
      )
      .then((data) => {
        setRefresh(data)
        // console.log(data);
      });
  };

  useEffect(() => {
    axios.get('https://sheet.best/api/sheets/b4ef8e38-797b-4599-b0b3-5a7ca608a65a')
      .then((incomingData) => {
        setAPIdata(incomingData.data);
      });
  }, [refresh])

  return (
    <>
      <Grid centered textAlign='left' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 400 }} >
          <Header as='h2' color='teal'>
            {/* <img src='logo.svg'/> */}
            FOMULARIO
          </Header>
          <Form style={{ maxWidth: 300 }} textAlign='left'>
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
              <label><Icon circular name='plus' />Hobby</label>
              <input border='red' placeholder='Ingresa tu hobby' type="text"
                onChange={(e) => setHobby(e.target.value)} />
            </Form.Field>

            <Button color="red" type='submit' onClick={onSubmit}>Enviar</Button>
          </Form>

          <Table fixed >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Nombre</Table.HeaderCell>
                <Table.HeaderCell>Edad</Table.HeaderCell>
                <Table.HeaderCell>Salario</Table.HeaderCell>
                <Table.HeaderCell>Hobby</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {APIdata.map((data) => {
                return (
                  <Table.Row key={data.id}>
                    <Table.Cell>{data.nombre}</Table.Cell>
                    <Table.Cell>{data.edad}</Table.Cell>
                    <Table.Cell>{data.salario}</Table.Cell>
                    <Table.Cell>{data.hobby}</Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </>
  )
}


