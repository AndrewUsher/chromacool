import 'typeface-open-sans'
import React, { Fragment, useState } from 'react'
import { render } from 'react-dom'
import { Box, Text } from 'rebass'
import { FiCode } from 'react-icons/fi'
import { CSSTransition } from 'react-transition-group'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { up } from 'styled-breakpoints'
import colors from './data.json'
import { GlobalStyles } from './GlobalStyles.js'
import { CopyConfirmation } from './CopyConfirmation.js'

const ColorGroupTextContainer = styled(Box)`
  padding: 20px;
`

const cardAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(50px, 50vh)  scale(0.7);
  }

  to {
    opacity: 1;
    transform: initial;
  }
`

const ColorGroup = styled(Box)`
  animation: ${cardAnimation} ${props => props.cardNumber * 40 + 500}ms;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-family: 'Open Sans';
`

const ColorsContainer = styled.main`
  padding: 3vw;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`

const TextWithColor = styled(Text)`
  color: ${props => props.textColor};
  font-size: 18px;
`

const ColorImage = styled.div`
  background-image: linear-gradient(
    135deg,
    ${props => props.firstColor} 10%,
    ${props => props.secondColor} 100%
  );
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 200px;
  width: 100%;
`

const ColorOptions = styled.div`
  margin-bottom: 10px;
  margin-right: 20px;
`

const Header = styled.header`
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  padding: 20px 3vw;

  ${up('tablet')} {
    position: sticky;
    top: 0;
  }
`

const CodeCopyIcon = styled(FiCode)`
  cursor: pointer;
`

const App = () => {
  const [confirmationStatus, toggleConfirmationStatus] = useState(false)

  const handleClipboardSuccess = () => {
    toggleConfirmationStatus(true)
    setTimeout(() => toggleConfirmationStatus(false), 2000)
  }

  const copyToClipboard = (firstColor, secondColor) => _ => {
    const codeTemplate = `background-image: linear-gradient(135deg, ${firstColor} 10%, ${secondColor} 100%);`
    console.log(codeTemplate)
    navigator.clipboard
      .writeText(codeTemplate)
      .then(handleClipboardSuccess)
      .catch(e => console.log(`Error: ${e}`))
  }
  return (
    <Fragment>
      <GlobalStyles />
      <Header>
        <h1>Chromacool</h1>
      </Header>
      <ColorsContainer>
        {colors.map(([firstColor, secondColor], index) => (
          <ColorGroup cardNumber={index}>
            <ColorImage firstColor={firstColor} secondColor={secondColor}>
              <ColorOptions>
                <CodeCopyIcon
                  onClick={copyToClipboard(firstColor, secondColor)}
                  stroke="#fff"
                  size={30}
                />
              </ColorOptions>
            </ColorImage>
            <ColorGroupTextContainer>
              <TextWithColor textColor="#343434">{firstColor}</TextWithColor>
              <TextWithColor textColor={secondColor}>
                {secondColor}
              </TextWithColor>
            </ColorGroupTextContainer>
          </ColorGroup>
        ))}
      </ColorsContainer>
      {confirmationStatus && (
        <CopyConfirmation>Copied to clipboard 👍</CopyConfirmation>
      )}
    </Fragment>
  )
}
render(<App />, document.getElementById('app'))
