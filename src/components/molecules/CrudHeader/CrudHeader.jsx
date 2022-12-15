import { Header, Button } from '../../index';
import classNames from 'classnames';

export default function CrudHeader({handleGetMessages, children, className}) {
  const classes = classNames(className + '-header');

  return (
    <div className={classes}>
      <Header className={classes}>{children}</Header>
      <Button className={classes} handler={handleGetMessages} />
    </div>
  )
}