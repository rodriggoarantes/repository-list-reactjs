import React, { Component } from 'react';
import Container from '../../components/Container';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <h1>Home</h1>
      </Container>
    );
  }
}
