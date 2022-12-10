import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Buttons/Button/Button'
import Link from 'next/link'
import css from './SignIn.module.css'

export default function SignIn() {
  return (
    <div className={css.container}>
        
    <form className={css.form}>
        <fieldset className={css.form_inputs}>
            <legend>Войдите в аккаунт</legend>
            <Input type='email' placeholder='Почта' required>Почта</Input>
            <Input type='password' placeholder='Пароль' required>Пароль</Input>
            
        </fieldset>
        <Button className='btn btn-primary'>Войти</Button>
        <Link className='btn btn-secondary' href="/register">Зарегистрироваться</Link>
    </form>
    </div>
  )
}
