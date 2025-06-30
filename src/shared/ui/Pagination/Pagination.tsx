import React, { useState, useEffect } from 'react';

import styles from './Pagination.module.scss';
import Dedicated from '../Dedicated/Dedicated';
import Arrow from '../Arrow/Arrow';

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
}

const Pagination = ({
  page,
  setPage,
  totalPage,
}: PaginationProps) => {
  const [pages, setPages] = useState<(number | string)[]>([]);

  const getPages = () => {
    const res: (number | string)[] = [];
    const total = totalPage ? Math.ceil(totalPage / 10) : 0;
    const start = Math.max(1, page - 1);
    const end = Math.min(total, page + 3);

    if (start > 1) {
      res.push(1);
      if (start > 2) res.push('···');
    }
    for (let i = start; i <= end; i++) {
      res.push(i);
    }

    if (end < total) {
      if (end < total - 1) res.push('···');
      res.push(total);
    }
    setPages(res);
  };

  useEffect(() => {
    getPages();
  }, [page, totalPage]);

  return (
    <div className={styles.container}>
      <Arrow
        className={styles.btn_prev}
        onClick={() => page !== pages[0] && setPage((prev) => prev - 1)}
      />
      <ul className={styles.list}>
        {pages.map((e, id) => (
          <li key={id}>
            {typeof e === 'number' ? (
              <button onClick={() => setPage(e)} className={styles.number_page}>
                {e === page ? (
                  <Dedicated children={e} classname={true} />
                ) : (
                  <Dedicated children={e} />
                )}
              </button>
            ) : (
              <span>{e}</span>
            )}
          </li>
        ))}
      </ul>
      <Arrow
        className={styles.btn_next}
        onClick={() =>
          page !== pages[pages.length - 1] && setPage((prev) => prev + 1)
        }
      />
    </div>
  );
};

export default Pagination;
