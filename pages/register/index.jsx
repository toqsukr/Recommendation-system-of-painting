import {useState, useEffect, React} from 'react'
import "bootstrap/dist/css/bootstrap.css";
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
    const [auth, setAuth] = useState(true)
    const router = useRouter();

    useEffect(() => {
      getFetch("https://norma.nomoreparties.space/api/auth/user", getCookie("accessToken")).then(
          res => {
          if(res["success"]) router.push('/')
          else  setAuth(false)
        }
      )
    }, [])

    function FormHandler(e) {
      e.preventDefault()
      postFetch("https://norma.nomoreparties.space/api/auth/register", {
          email,
          password,
          name,
      }).then(res => {
        getFetch("https://norma.nomoreparties.space/api/auth/user", getCookie("accessToken")).then(
        obj => {
          if(!obj["success"]) throw Error("Same email has already exist!")
          setCookie("accessToken", res["accessToken"], 1);
          setCookie("refreshToken", res["refreshToken"])
          router.push("/")
        }).catch(() => {
          setCorrect(false)
        })
      })
    }
    
  return (
    <>
      <title>Регистрация</title>
      {!auth && (
        <div className={css.container}>
        <form onSubmit={FormHandler} className={css.form}>
            <fieldset className={css.form_inputs}>
            {!correct && (
              <div className="alert alert-danger d-flex align-items-center" role="alert">
              <div>
              Этот email уже используется!
              </div>
            </div>
            )}
              <legend>Регистрация</legend>
              <Input onChange={e => setEmail(e.target.value.toString().toLowerCase())} value={email} type='email' placeholder='Почта' required>Почта</Input>
              <Input onChange={e => setName(e.target.value)} value={name} type='text' placeholder='Имя' required>Имя</Input>
              <Input onChange={e => setPassword(e.target.value)} value={password} type='password' placeholder='Пароль' required>Пароль</Input>
              
          </fieldset>
          <Button type="submit" className='btn btn-primary'>Зарегистрироваться</Button>
          <Link id={css.to_signin} href="/sign-in">Вход</Link>
      </form>
    </div>
    )}
    </>
  )
}
