import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import FilterSidebar from '@/components/FilterSidebar/FilterSidebar';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import styles from './page.module.css';

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });
  if (!res.ok) {
    return [];
  }
  return res.json();
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
