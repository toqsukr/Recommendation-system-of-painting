import {useState, useEffect, React} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Buttons/Button/Button'
import { getFetch, postFetch } from '../../utils/Fetch';
import { getCookie, setCookie } from '../../utils/setCookies';
import {useRouter} from 'next/router';
import { api } from '../../components/information';
import crc32 from "crc-32"
import Link from 'next/link';
import css from './register.module.css'

export default function register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [correct, setCorrect] = useState(true)
    const [name, setName] = useState('')
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
      // postFetch("https://norma.nomoreparties.space/api/auth/register", {
      //     email: email,
      //     password: password,
      //     name: name,
      // }).then(res => {
      //     console.log(res)
      //     if(!res["success"])  throw Error("This email has already exist!")
      //     setCookie("accessToken", res["accessToken"], 1);
      //     setCookie("refreshToken", res["refreshToken"])
      //     postFetch(`${api.url}/user/userID`, {
      //       userID: crc32.str(email, crc32).toString(),
      //     }).then(res => console.log(res))
      //     router.push("/")
      //   }).catch(() => {
      //     setCorrect(false)
      // })
    }
    
  return (
    <>
      <title>Регистрация</title>
        <div className={css.container}>
        <form onSubmit={FormHandler} className={css.form}>
            <fieldset className={css.form_inputs}>
            {!correct && (
              <div className={`alert alert-danger d-flex align-items-center ${css.container_alert}`} role="alert">
                <img id={css.danger_icon} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYklEQVR4nOXYTarCMBAH8OjdxuzV+9S3qBsFPYIb4d2gV0jd6UkqNAx0ExlhCi58Nt95+IeBUmz50SQ1HSG+Iaaq5i3ARi0WHRUd0zlRQkxVzS9Snm+rVX+va0NFx3QuO9IIMbtIeboul32/2xk8HJ6l93tzXa+1kvI3G/IdDktAfsJhTuRUHOZA2uIwJdIVhymQvjiMibTBcZIhbZ8cJ8mTdBlWTvThdp1znKhz0mdBcKItHN/VyomyukO8Sjgu1/6JDPWe47he/xbZAvzQHo5+4HpzDABkJFlo0zsCaRd83269boyBgFS06VUA3SuwrssFtgCboofYCDFTJS+SkEiMgcuN1Lb/Jk7I49EMTfOsaDgf5NA04xycivTe0dggB0tgsD2hLXJIhXNFYkpcaKSO/WXng9Spvo1dkDp1d8EGqXP1Z6Ygde4Olyq1/fYJqUvA/YsWMGdsogN0VEU10WPnAbbPAnDwNWzfAAAAAElFTkSuQmCC"/>
                <div id={css.alert_text}>
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
    </>
  )
}
