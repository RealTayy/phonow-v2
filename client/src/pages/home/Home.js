import React, { Component } from 'react'
import { ContentContainer } from '../../components/Container';

export class Home extends Component {
  render() {
    return (
      <div>
        <ContentContainer
          leftContainerContent={
            <div>hi</div>
          }
          rightContainerContent={
            <div>hi</div>
          }
        />
      </div>
    )
  }
}

export default Home
