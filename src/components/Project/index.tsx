import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButtom } from './style'

const Project = () => (
  <Card>
    <Title>Projeto Lista feita com VueJS</Title>
    <Paragraph tipo="secundario">Lista de tarefas feita com VueJS</Paragraph>
    <LinkButtom>Visualizar</LinkButtom>
  </Card>
)

export default Project
