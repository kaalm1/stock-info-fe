import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Icon, Table} from 'semantic-ui-react'
import TableHeader from './components/header'
import Stock from './components/stock'

class App extends Component {
  state = {
    stocks: [],
    headers: [],
  }

  componentDidMount(){
    fetch(`http://localhost:3000/favorites`)
    .then(res=>res.json())
    .then(data=>this.setState({stocks: data, headers:Object.keys(data[0])}))
    .catch(()=>console.log('no api'))

  }

  render() {
    console.log(this.state)
    return (
      <Container>
        <Table celled striped>
            <Table.Header>
              <TableHeader headers={this.state.headers}/>
            </Table.Header>
            <Table.Body>
              {this.state.stocks.map(stock=><Stock key={stock} stock={stock}/>)}
            </Table.Body>
          </Table>
      </Container>
    );
  }
}

export default App;
