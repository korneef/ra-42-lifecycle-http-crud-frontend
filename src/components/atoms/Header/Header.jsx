const classNames = require('classnames');

export default function Header({ className, children }) {
  const classes = classNames(className + '__header');

  return (
    <h1 className={classes}>{children}</h1>
  ) 
}