import styles from './Toast.module.css';
import cx from 'classnames'



function Toast({type, message}) {

  return (
    <div className={styles.container}>
      <div className={cx(styles.toastTheme,styles[`${type}`])}></div>
      <div className={styles.text}>{message}</div>
      <div className={styles.close}>&#x2716;</div>
    </div>
  )
}

Toast.defaultProps = {
  type: 'default'
}

export default Toast
