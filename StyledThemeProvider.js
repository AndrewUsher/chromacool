import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

const StyledThemeProvider = ({ children }) => (
  <ThemeProvider
    theme={{
      spacing: {
        small: '3vw'
      }
    }}
  >
    {children}
  </ThemeProvider>
)

StyledThemeProvider.propTypes = {
  children: PropTypes.element
}

export { StyledThemeProvider }
