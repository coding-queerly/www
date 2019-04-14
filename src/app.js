import * as React from 'react'
import $ from '@emotion/styled'

const Container = $.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  img {
    max-height: 262px;
    max-width: 898px;
  }
`

function App () {
  return (
    <Container>
      <a href='https://codingqueerly.com/links/youtube' title='Coding Queerly / Summer 2019'>
        <img src='https://github.com/coding-queerly/assets/raw/master/CQ-full.png' alt='Coding Queerly / Summer 2019' />
      </a>
    </Container>
  )
}

export default App
