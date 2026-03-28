import Image from 'next/image';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  // Use fakestoreapi image, or fallback
  const imageSrc = product.image || 'https://via.placeholder.com/300x400';

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {/* Fill layout to respect container aspect ratio */}
        <Image
          src={imageSrc}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
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
