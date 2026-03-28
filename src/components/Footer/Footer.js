import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.newsletter}>
            <h3 className={styles.heading}>BE THE FIRST TO KNOW</h3>
            <p className={styles.text}>Sign up for updates from Metta Muse.</p>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Enter your e-mail..." className={styles.input} />
              <button className={styles.button}>SUBSCRIBE</button>
            </div>
          </div>
          <div className={styles.contact}>
            <h3 className={styles.heading}>CONTACT US</h3>
            <p className={styles.text}>+44 221 133 5360</p>
            <p className={styles.text}>customercare@mettamuse.com</p>
            
            <h3 className={styles.heading} style={{marginTop: '24px'}}>CURRENCY</h3>
            <div className={styles.currency}>
              <img src="https://flagcdn.com/w20/us.png" alt="USD" />
              <span>USD</span>
            </div>
            <p className={styles.smallText}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>
        
        <hr className={styles.divider} />
        
        <div className={styles.bottomSection}>
          <div className={styles.linksBlock}>
            <h3 className={styles.heading}>metta muse</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Artisans</a></li>
              <li><a href="#">Boutiques</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">EU Compliances Docs</a></li>
            </ul>
          </div>
          
          <div className={styles.linksBlock}>
            <h3 className={styles.heading}>QUICK LINKS</h3>
            <ul>
              <li><a href="#">Orders & Shipping</a></li>
              <li><a href="#">Join/Login as a Seller</a></li>
              <li><a href="#">Payment & Pricing</a></li>
              <li><a href="#">Return & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div className={styles.linksBlock}>
            <h3 className={styles.heading}>FOLLOW US</h3>
            <div className={styles.socials}>
              <span className={styles.socialIcon}>IN</span>
              <span className={styles.socialIcon}>TW</span>
            </div>
            <h3 className={styles.heading} style={{marginTop: '24px'}}>metta muse ACCEPTS</h3>
            <div className={styles.payments}>
              <span>GPay</span>
              <span>Mastercard</span>
              <span>PayPal</span>
              <span>Amex</span>
              <span>Apple Pay</span>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>Copyright © 2026 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
