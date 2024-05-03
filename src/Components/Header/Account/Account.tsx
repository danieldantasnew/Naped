import styles from './Account.module.css';

type AccountType = React.ComponentProps<'button'>;

const Account = ({...props }: AccountType) => {
  return (
    <button className={styles.Account} {...props}>Minha conta</button>
  )
}

export default Account;