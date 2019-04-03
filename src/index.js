import 'typeface-open-sans'
import React, { Fragment, useState } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import colors from './data.json'
import { createCodeSnippet } from './utils'
import { GlobalStyles } from './GlobalStyles'
import { Colors } from './Colors'
import { ColorsContainer } from './ColorsContainer'
import { CopyConfirmation } from './CopyConfirmation'
import { StyledThemeProvider } from './StyledThemeProvider'

const Header = styled.header`
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  padding: 20px ${props => props.theme.spacing.small};

  ${up('tablet')} {
    position: sticky;
    top: 0;
  }
`

const App = () => {
  const [confirmationStatus, toggleConfirmationStatus] = useState(false)

  const handleClipboardSuccess = () => {
    toggleConfirmationStatus(true)
    setTimeout(() => toggleConfirmationStatus(false), 2000)
  }

  const copyToClipboard = (firstColor, secondColor) => _ => {
    const codeSnippet = createCodeSnippet(firstColor, secondColor)
    navigator.clipboard
      .writeText(codeSnippet)
      .then(handleClipboardSuccess)
      .catch(e => console.log(`Error: ${e}`))
  }

  return (
    <StyledThemeProvider>
      <Fragment>
        <GlobalStyles />
        <Header>
          <h1>Chromacool</h1>
        </Header>
        <ColorsContainer>
          <Colors colors={colors} copyToClipboard={copyToClipboard} />
        </ColorsContainer>
        {confirmationStatus && <CopyConfirmation>Copied to clipboard 👍</CopyConfirmation>}
      </Fragment>
    </StyledThemeProvider>
  )
}

render(<App />, document.getElementById('app'))
