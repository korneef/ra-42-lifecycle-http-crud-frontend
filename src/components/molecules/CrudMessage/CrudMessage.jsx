import { Message, Button } from '../../index';
import classNames from 'classnames';

export default function CrudMessage({children, id, handleDelete, className}) {
  const classes = classNames(className + '-message')
  return (
    <div className={classes}>
      <Message className={classes}>{children}</Message>
      <Button className={classes} id={id} handler={handleDelete}/>
    </div>
  )
}