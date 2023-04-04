import Title from '../../components/Title'
import P from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <P>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab harum
      molestiae sed voluptatum porro assumenda veniam numquam praesentium
      deserunt, earum illum sequi et est quas dignissimos quisquam amet quaerat
      consectetur.
    </P>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=danilowlc&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=danilowlc&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)
export default About
