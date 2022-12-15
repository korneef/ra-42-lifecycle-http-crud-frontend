import { Button } from '../../index'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import classNames from 'classnames';

export default function CrudSubmitForm({ handleGetMessages, className }) {
  const [form, setForm] = useState({ id: nanoid(), content: '' });

  const handleSubmit = (evt) => {
    evt.preventDefault()
    fetch('http://localhost:7777/notes', {
      method: 'POST',
      body: form.content
    })
      .then(response => response.status === 204 ? handleGetMessages() : console.log(`Status cod: ${response.status}. Status need to euqaal 204`))
      .catch((e) => console.log('Error: ' + e.message));

    setForm({ id: nanoid(), content: '' })
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }
  
  const classes = classNames(className + '__new-message-form');

  return (
    <form className={classes} action="" onSubmit={handleSubmit}>
      <textarea className={classNames(classes + '-textarea')} placeholder='Enter your message' name="content" value={form.content} id="" onChange={handleChange}></textarea>
      <Button className={classNames(classes + '-button')}/>
    </form>
  )
}