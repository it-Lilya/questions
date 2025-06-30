import { HeaderLogo } from '../../../shared/assets';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_context}>
        <div className={styles.header_container}>
          <img
            className={styles.logo}
            src={HeaderLogo}
            alt="logo"
				  />
          <h1>Yeahub</h1>
        </div>
        
      </div>
    </header>
  )
}

export default Header;