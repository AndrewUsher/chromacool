import React from 'react'
import styled, { keyframes } from 'styled-components'

const slideInAnimation = keyframes`
  from {
    transform: translateY(200px) scale(0.5);
  }

  to {
    transform: initial;
  }
`

const StyledCopyConfirmation = styled.div`
  animation: ${slideInAnimation} 400ms;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  width: 200px;
  padding: 10px 15px;
  position: sticky;
  bottom: 20px;
  left: 3vw;

  @supports (width: max-content) {
    width: max-content;
  }
`

const CopyConfirmation = () => (
  <StyledCopyConfirmation>Copied to clipboard 👍</StyledCopyConfirmation>
)

export { CopyConfirmation }
