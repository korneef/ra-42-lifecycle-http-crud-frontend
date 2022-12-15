import { CrudHeader, CrudMessagesContainer, CrudSubmitForm, CrudMessage } from '../../index'
import { useState, useEffect } from 'react'
import classNames from 'classnames'

export default function CrudPage(props) {
  const [messages, setMessages] = useState([])

  const getMessages = () => {
    fetch('http://localhost:7777/notes')
      .then(response => response.json())
      .then(response => setMessages(response))
      .catch((e) => console.log('Error: ' + e.message));
  }

  useEffect(() => {
    getMessages();
  }, [])

  const handleDelete = (id) => {
    fetch(`http://localhost:7777/notes/${id}`, { method: 'DELETE' })
      .then(response => response.status === 204 ? getMessages() : console.log(`Status cod: ${response.status}. Status need to euqaal 204`))
      .catch((e) => console.log('Error: ' + e.message));
  }

  const className = 'crud'

  return (
    <div className={classNames(className + '-container')}>
      <CrudHeader className={className} handleGetMessages={getMessages}>Notes</CrudHeader>
      <CrudMessagesContainer className={className}>
        {messages.map(item => <CrudMessage
          className={className}
          id={item.id}
          key={item.id}
          handleDelete={handleDelete}>
          {item.content}
        </CrudMessage>)}
      </CrudMessagesContainer>
      <CrudSubmitForm className={className} handleGetMessages={getMessages} />
    </div>
  )
}
