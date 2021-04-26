import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    name: ""
  }

  componentDidMount() {
    try {

      axios.get(`http://35.239.233.34:8083/getname`)
      .then(res => {
        const name = res.data;
        this.setState({ name });
      })
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    return (
      <ul>
        {this.state.name}
      </ul>
    )
  }
}