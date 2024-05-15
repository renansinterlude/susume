import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination';


export const apiUrlBase = 'http://localhost:3000/vocabularioN1?page=';


function Paginacao({ onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Atualiza a URL da API com base na página atual
    const apiUrl = `${apiUrlBase}${pageNumber}`;
    // Passa a nova URL da API para a função onPageChange
    onPageChange(apiUrl);
  };

  return (
    <Pagination>
      <Pagination.First onClick={() => handlePageClick(1)} />
      <Pagination.Prev onClick={() => handlePageClick(currentPage - 1)} />
      {[...Array(10)].map((_, index) => (
        <Pagination.Item
          key={index}
          onClick={() => handlePageClick(index + 1)}
          active={index + 1 === currentPage}
        >
          {index + 1}
        </Pagination.Item>
      ))}
      <Pagination.Ellipsis />
      <Pagination.Next onClick={() => handlePageClick(currentPage + 1)} />
      <Pagination.Last onClick={() => handlePageClick(129)} />
    </Pagination>
  );
}

export default Paginacao;
