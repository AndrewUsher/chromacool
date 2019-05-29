import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'rebass'
import { FiCode } from 'react-icons/fi'
import styled, { keyframes } from 'styled-components'

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

const ColorImage = styled.div`
  background-image: linear-gradient(135deg, ${props => props.firstColor} 10%, ${props => props.secondColor} 100%);
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

const CodeCopyIcon = styled(FiCode)`
  cursor: pointer;
`

const ColorGroupTextContainer = styled(Box)`
  padding: 20px;
`

const TextWithColor = styled(Text)`
  color: #343434;
  font-size: 18px;
`

const Colors = ({ colors, copyToClipboard }) => (
  <Fragment>
    {colors.map(([firstColor, secondColor], index) => (
      <ColorGroup cardNumber={index} key={`${firstColor} ${secondColor}`}>
        <ColorImage firstColor={firstColor} secondColor={secondColor}>
          <ColorOptions>
            <CodeCopyIcon onClick={copyToClipboard(firstColor, secondColor)} stroke="#fff" size={30} />
          </ColorOptions>
        </ColorImage>
        <ColorGroupTextContainer>
          <TextWithColor>{firstColor}</TextWithColor>
          <TextWithColor>{secondColor}</TextWithColor>
        </ColorGroupTextContainer>
      </ColorGroup>
    ))}
  </Fragment>
)

Colors.propTypes = {
  colors: PropTypes.array.isRequired,
  copyToClipboard: PropTypes.func.isRequired
}

export { Colors }
