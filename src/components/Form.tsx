import React, { useState } from 'react'
import Client from '../core/Client'
import { Button } from './Button'
import { Input } from './Input'
interface FormProps {
  client: Client
}


export const Form = (client) => {
  const clientId = client?.id
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  return (
    <div>
      {clientId ? (
        <Input
          onlyRead
          text='Codigo'
          value={clientId}
        />
      ) : false}
      <Input
        type='text'
        text='Nome'
        value={name}
        onChange={setName}
        className='mb-5'
      />

      <Input
        type='text'
        text='Idade'
        value={age}
        onChange={setAge}
        className='mb-5'
      />

      <div className='flex justify-end mt-7'>
        <Button className='mr-2'>Salvar</Button>
        <Button>Cancelar </Button>
      </div>
    </div>
  )
}
