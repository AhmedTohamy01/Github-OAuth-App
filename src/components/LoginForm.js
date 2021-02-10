import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import GitHubIcon from '@material-ui/icons/GitHub'
import config from '../server/config'

/*---> Component <---*/
function LoginForm() {
  return (
    <Wrapper>
      <Title>Welcome to Github Auth Demo App </Title>
      <SubTitle>
        Login using your Github account to view your Github profile data
      </SubTitle>

      <LoginButton
        startIcon={<GitHubIcon />}
        variant='contained'
        color='primary'
        href={`https://github.com/login/oauth/authorize?client_id=${config.client_id}&redirect_uri=${config.redirect_uri}`}
      >
        Login using GitHub
      </LoginButton>
    </Wrapper>
  )
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

export const Title = styled.p`
  font-size: 30px;
  font-weight: bolder;
  margin-top: 10%;
`

export const SubTitle = styled.p`
  font-size: 25px;
  font-weight: bolder;
  margin-top: 20px;
`

export const LoginButton = styled(Button)`
  text-transform: capitalize !important;
  margin-top: 30px !important;
`

export default LoginForm
