import {useState, React, useEffect} from 'react'
import {ReactSVG} from 'react-svg'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Buttons/Button/Button'
import { getFetch, postFetch } from '../../utils/Fetch';
import { setCookie } from '../../utils/setCookies';
import { getCookie } from '../../utils/setCookies';
import { api } from '../../components/information';
import {useRouter} from "next/router"
import crc32 from 'crc-32'
import Link from 'next/link'
import css from './SignIn.module.css'

export default function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [correct, setCorrect] = useState(true)
  const [auth, setAuth] = useState(true)
  const router = useRouter();

  // useEffect(() => {
  //   getFetch("https://norma.nomoreparties.space/api/auth/user", getCookie("accessToken")).then(
  //       res => {
  //       if(res["success"]) router.push('/')
  //       else  setAuth(false)
  //     }
  //   )
  // }, [])

  async function FormHandler(e) {
      e.preventDefault()
      // setCorrect(true)
      // postFetch("https://norma.nomoreparties.space/api/auth/login", {
      //     email,
      //     password,
      // }).then(res => {
      //   if(!res["success"])   throw Error("Incorrect email or password!")
      //   setCookie("accessToken", res["accessToken"], 1);
      //   setCookie("refreshToken", res["refreshToken"]);
      //   postFetch(`${api.url}/user/userID`, {
      //     userID: crc32.str(email, crc32).toString(),
      //   }).then(res => console.log(res))
      //   router.push("/")
      // }).catch(() => {
      //   setCorrect(false)
      // })
  }
  return (
    <>
      <title>Вход в аккаунт</title>
        <div className={css.container}>
        <form onSubmit={FormHandler} className={css.form}>
            <fieldset className={css.form_inputs}>
              <div className={css.container_alert} role="alert">
                <ReactSVG id={css.danger_icon} src='icons/error.svg' />
                <div id={css.alert_text}>
                Неверный email или пароль!
                </div>
              </div>
              <legend>Вход в аккаунт</legend>
              <Input onChange={e => setEmail(e.target.value.toString().toLowerCase())} value={email} type='email' placeholder='Почта' required>Почта</Input>
              <Input onChange={e => setPassword(e.target.value)} value={password} type='password' placeholder='Пароль' required>Пароль</Input>
              
          </fieldset>
          <Button type="submit">Войти</Button>
          <Link id={css.registration} href="/register">Регистрация</Link>
      </form>
    </div>
  </>  
  )
}
