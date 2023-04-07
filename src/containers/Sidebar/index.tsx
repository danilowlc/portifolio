import Title from '../../components/Title'
import ProfilePhoto from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import { Decription, ThemeButton, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <ProfilePhoto />
      <Title fontSize={18}>Danilo Cunha</Title>
      <Paragraph tipo="secundario" fontSize={16}>
        danilowlc
      </Paragraph>
      <Decription fontSize={12} tipo="principal">
        Python Developer
      </Decription>
      <ThemeButton>Trocar Tema</ThemeButton>
    </SidebarContainer>
  </aside>
)
export default Sidebar
