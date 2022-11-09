import type { NextPage } from 'next'
import Button from '../components/button/button'
import InputControl from '../components/input'
import Profile from '../components/profile'
import { Background } from '../styles/components/background'
import { Form } from '../styles/components/form'
import { WindowStyled } from '../styles/components/window'


const Home: NextPage = () => {
  return (
    <Background>
      <WindowStyled>
       <Profile/>
       <Form>
        <InputControl type="name" placeholder='Name' required></InputControl>
        <InputControl type="email" placeholder='Email' required></InputControl>
        <InputControl type="password" placeholder='Password' required></InputControl>
        <InputControl type="password" placeholder='Confirm Password' required></InputControl>
        <Button type="submit">Cadastra-se</Button>
      </Form>
      </WindowStyled>
    </Background>
  )
}

export default Home



