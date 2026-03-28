import styles from './FilterSidebar.module.css';

export default function FilterSidebar({ isVisible }) {
  if (!isVisible) return null;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.filterGroup}>
        <h3 className={styles.filterTitle}>IDEAL FOR <span className={styles.icon}>▼</span></h3>
        <ul className={styles.filterList}>
          <li><label><input type="checkbox" /> Men</label></li>
          <li><label><input type="checkbox" /> Women</label></li>
          <li><label><input type="checkbox" /> Baby & Kids</label></li>
        </ul>
      </div>

      <hr className={styles.divider} />
      
      <div className={styles.filterGroup}>
        <h3 className={styles.filterTitle}>OCCASION <span className={styles.icon}>▼</span></h3>
      </div>
      
      <hr className={styles.divider} />
      
      <div className={styles.filterGroup}>
        <h3 className={styles.filterTitle}>WORK <span className={styles.icon}>▼</span></h3>
      </div>
      
      <hr className={styles.divider} />
      
      <div className={styles.filterGroup}>
        <h3 className={styles.filterTitle}>FABRIC <span className={styles.icon}>▼</span></h3>
      </div>
    </aside>
  );
}
