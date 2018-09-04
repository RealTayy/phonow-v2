import React, { Component } from 'react'
import { ContentContainer } from '../../components/Container';
import { Carousel } from '../../components/Carousel/Carousel';
import { ContentTitle, ContentWrapper, ContentBody } from '../../components/Content';

export class Info extends Component {
  render() {
    const imagesPath = [
      "http://via.placeholder.com/2048x1365",
      "http://via.placeholder.com/2048x1365",
      "http://via.placeholder.com/2048x1365",
    ]
    return (
      <div className="_Info">
        <ContentContainer
          leftContainerContent={            
              <ContentWrapper>
                <ContentTitle
                  title="The Restaurant"
                />
                <ContentBody
                  body={
                    <div>
                      asdf
                    </div>
                  }
                />
              </ContentWrapper>            
          }
          rightContainerContent={
            <Carousel imagesPath={imagesPath} />
          }
        />
      </div>
    )
  }
}

export default Info
