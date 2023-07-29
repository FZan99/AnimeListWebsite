import React from 'react';

const PaginationControls = ({
  loadPreviousPage,
  loadNextPage,
  currentPage,
  lastPage,
}) => (
  <div id="pagination">
    <button onClick={loadPreviousPage} disabled={currentPage === 1}>
      Previous
    </button>
    <button onClick={loadNextPage} disabled={currentPage === lastPage}>
      Next
    </button>
  </div>
);

export default PaginationControls;
