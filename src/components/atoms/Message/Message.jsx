const classNames = require('classnames');

export default function Message({className, children}) {

  const classes = classNames(className + '__message', 'message');

  return (
    <div className={classes}>{children}</div>
  )
}
