import styles from "./pagination.module.css"
const Pagination = ({currentPage, totalPages, onPageChange}) => {
  const pages = Array.from ({length: totalPages}, (_, i) => i + 1);
  return (
    <div className={styles.pagination}>
      {pages.map (page => (
        <button
          key={page}
          className={page === currentPage ? styles.active : ''}
          onClick={() => onPageChange (page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
