import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Buttons/Button/Button'

import css from './register.module.css'

export default function register() {
  return (
    <div className={css.container}>
        
    <form className={css.form}>
        <fieldset className={css.form_inputs}>
            <legend>Регистрация</legend>
            <Input type='email' placeholder='Почта' required>Почта</Input>
            <Input type='password' placeholder='Пароль' required>Пароль</Input>
            <Input type='password' placeholder='Подтвердите пароль' required>Подтвердите пароль</Input>

            
        </fieldset>
        <Button type='button' className='btn btn-secondary' id={css.btn}>Зарегистрироваться</Button>
    </form>
    </div>
  )
}
