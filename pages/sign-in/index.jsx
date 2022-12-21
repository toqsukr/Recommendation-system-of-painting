import {useState, React, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Buttons/Button/Button'
import { getFetch, postFetch } from '../../utils/Fetch';
import { setCookie } from '../../utils/setCookies';
import { Layout } from '../../components/Layout/Layout';
import {useRouter} from "next/router"
import Link from 'next/link'
import css from './SignIn.module.css'

export default function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [correct, setCorrect] = useState(true)
  const [auth, setAuth] = useState(false)
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/')
  }, [])
  function FormHandler(e) {
      e.preventDefault()
      postFetch("https://norma.nomoreparties.space/api/auth/login", {
          email,
          password,
      }).then(res => {
        if(!res["success"])   throw Error("Incorrect email or password!")
        setCookie("accessToken", res.accessToken, 2);
        setCookie("refreshToken", res.refreshToken);
        setAuth(true)
        router.push("/")
      }).catch(() => {
        setCorrect(false)
      })
  }
  return (
    <Layout title="Вход" onlyOnAuth={!auth}>
      <div className={css.container}>
        <form onSubmit={FormHandler} className={css.form}>
            <fieldset className={css.form_inputs}>
            {!correct && (
              <div class="alert alert-danger d-flex align-items-center" role="alert">
              <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"></svg>
              <div>
              Неверный email или пароль!
              </div>
            </div>
            )}
                <legend>Войдите в аккаунт</legend>
                <Input onChange={e => setEmail(e.target.value)} value={email} type='email' placeholder='Почта' required>Почта</Input>
                <Input onChange={e => setPassword(e.target.value)} value={password} type='password' placeholder='Пароль' required>Пароль</Input>
                
            </fieldset>
            <Button type="submit" className='btn btn-primary'>Войти</Button>
            <Link id={css.to_registr} href="/register">Регистрация</Link>
        </form>
      </div>
    </Layout>
  )
}
