import {useState, useEffect, React} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Layout } from '../../components/Layout/Layout';
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Buttons/Button/Button'
import { getFetch, postFetch } from '../../utils/Fetch';
import { getCookie, setCookie } from '../../utils/setCookies';
import {useRouter} from 'next/router';
import Link from 'next/link';
import css from './register.module.css'

export default function register() {
  const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [correct, setCorrect] = useState(true)
const [name, setName] = useState('')
const router = useRouter();
useEffect(() => {
  router.prefetch('/')
}, [])
function FormHandler(e) {
  e.preventDefault()
  postFetch("https://norma.nomoreparties.space/api/auth/register", {
      email,
      password,
      name,
  }).then(res => {
    getFetch("https://norma.nomoreparties.space/api/auth/user", getCookie("accessToken")).then(
    res => {
      if(!res.user) throw Error("Same email has already exist!")
      setCookie("accessToken", res.accessToken, 1);
      setCookie("refreshToken", res.refreshToken)
      router.push("/")
    }).catch(() => {
      setCorrect(false)
    })
  })
}
  return (
    <Layout title="Регистрация" onlyOnAuth>
      <div className={css.container}>
        <form onSubmit={FormHandler} className={css.form}>
            <fieldset className={css.form_inputs}>
            {!correct && (
              <div class="alert alert-danger" role="alert">
              Этот email уже используется!
            </div>
            )}
                <legend>Войдите в аккаунт</legend>
                <Input onChange={e => setEmail(e.target.value)} value={email} type='email' placeholder='Почта' required>Почта</Input>
                <Input onChange={e => setName(e.target.value)} value={name} type='text' placeholder='Имя' required>Имя</Input>
                <Input onChange={e => setPassword(e.target.value)} value={password} type='password' placeholder='Пароль' required>Пароль</Input>
                
            </fieldset>
            <Button type="submit" className='btn btn-primary'>Зарегистрироваться</Button>
            <Link id={css.to_signin} href="/sign-in">Вход</Link>
        </form>
      </div>
    </Layout>
  )
}