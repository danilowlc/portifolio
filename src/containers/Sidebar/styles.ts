import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Decription = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const ThemeButton = styled.button`
  padding: 8px;
  border-radius: 12px;
  color: ${(props) => props.theme.backgroudColor};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.mainColor};
  cursor: pointer;
`
export const SidebarContainer = styled.div`
  position: sticky;
  left: 0;
  top: 80px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
