import styles from './SignupForm.module.css';
import useLocalStorage from '../../hooks/useLocalStorage.js';

export default function SignupForm() {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>Пошта</span>
        <input type="email" name="email" onChange={handleChange} value={email} />
      </label>
      <label className={styles.label}>
        <span>Пароль</span>
        <input type="password" name="password" onChange={handleChange} value={password} />
      </label>
      <button type="submit">Зареєструватися</button>
    </form>
  );
}
