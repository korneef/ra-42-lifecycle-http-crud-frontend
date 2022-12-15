import classNames from "classnames"

export default function CrudMessagesContainer({children, className}) {
  const classes = classNames(className + '-messages-container');
  return (
    <div className={classes}>
      {children}
    </div>
  )
}