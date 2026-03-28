import Image from 'next/image';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  // Use fakestoreapi image, or fallback
  const imageSrc = product.image || 'https://via.placeholder.com/300x400';

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {/* Using standard img tag entirely bypasses Next.js Image Optimization 502 Vercel errors */}
        <img 
          src={imageSrc} 
          alt={product.title} 
          className={styles.image}
          style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '16px' }}
        />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{product.title}</h2>
        <div className={styles.bottomInfo}>
          <span className={styles.pricingText}>
            <a href="#" className={styles.signInLink}>Sign in</a> or Create an account to see pricing
          </span>
          <button className={styles.heartIcon} aria-label="Like">♡</button>
        </div>
      </div>
    </div>
  );
}
