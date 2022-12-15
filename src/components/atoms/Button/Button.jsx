const classNames = require('classnames');

export default function Button({className, handler, id}) {
  const classes = classNames(className + '__button', 'button')
  return (
    <button type='submit' className={classes} onClick={ handler ? (evt) => {evt.preventDefault(); handler(id)} : () => {}}></button>
  ) 
}