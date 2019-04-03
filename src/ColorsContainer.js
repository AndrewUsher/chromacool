import styled from 'styled-components'

const ColorsContainer = styled.main`
  padding: ${props => props.theme.spacing.small};
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`

export { ColorsContainer }
