export const dynamic = "force-dynamic";

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import FilterSidebar from '@/components/FilterSidebar/FilterSidebar';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import styles from './page.module.css';

const fallbackProducts = [
  { id: 1, title: 'PPXOC MILKYWAY DRESS IN...', price: 120, category: "women's clothing", image: 'https://picsum.photos/seed/bag/400/500' },
  { id: 2, title: 'PRODUCT NAME', price: 49.99, category: "accessories", image: 'https://picsum.photos/seed/shoes/400/500' },
  { id: 3, title: 'PRODUCT NAME', price: 35.0, category: "accessories", image: 'https://picsum.photos/seed/watch/400/500' },
  { id: 4, title: 'PRODUCT NAME', price: 60.0, category: "clothing", image: 'https://picsum.photos/seed/shirt/400/500' },
  { id: 5, title: 'PRODUCT NAME', price: 25.0, category: "clothing", image: 'https://picsum.photos/seed/hat/400/500' },
  { id: 6, title: 'PRODUCT NAME', price: 99.99, category: "accessories", image: 'https://picsum.photos/seed/glasses/400/500' },
  { id: 7, title: 'PRODUCT NAME', price: 15.0, category: "clothing", image: 'https://picsum.photos/seed/jeans/400/500' },
  { id: 8, title: 'PRODUCT NAME', price: 40.0, category: "clothing", image: 'https://picsum.photos/seed/jacket/400/500' }
];

async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      cache: 'no-store', // 🔥 IMPORTANT FIX
    });

    if (!res.ok) {
      console.error('API responded with status:', res.status);
      return fallbackProducts;
    }

    const data = await res.json();

    return data && data.length > 0 ? data : fallbackProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    return fallbackProducts;
  }
}

export default async function Home() {
  const products = await getProducts();

  // JSON-LD Schema for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.title,
        image: product.image,
        description: product.description,
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'USD',
        },
      },
    })),
  };

  return (
    <div className="pageLayout">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="mainContent">
        <div className="container">
          <div className={styles.heroSection}>
            <h1 className={styles.pageTitle}>DISCOVER OUR PRODUCTS</h1>
            <p className={styles.pageDesc}>
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </p>
          </div>

          <div className={styles.controlsBar}>
            <div className={styles.itemsCount}>
              <strong>{products.length} ITEMS</strong>
              <button className={styles.toggleFilter}>&lt; HIDE FILTER</button>
            </div>
            <div className={styles.sortMobileFilter}>
              <span className={styles.mobileFilterToggle}>FILTER</span>
              <select className={styles.sortSelect} aria-label="Sort products">
                <option value="recommended">RECOMMENDED</option>
                <option value="newest">NEWEST FIRST</option>
                <option value="popular">POPULAR</option>
                <option value="high-low">PRICE: HIGH TO LOW</option>
                <option value="low-high">PRICE: LOW TO HIGH</option>
              </select>
            </div>
          </div>

          <div className={`contentRow ${styles.contentArea}`}>
            <FilterSidebar isVisible={true} />
            <div className={styles.gridWrapper}>
              <ProductGrid products={products} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
