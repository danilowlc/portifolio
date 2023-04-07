import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
`
export const LinkButtom = styled.a`
  color: ${(props) => props.theme.backgroudColor};
  font-size: 14px;
  background-color: ${(props) => props.theme.buttomColor};
  text-decoretion: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
