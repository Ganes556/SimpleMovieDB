import { Container, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Navigation({ total_pages, baseNavigate }) {
  const params = useParams();
  const [page, setPage] = useState(parseInt(params.movieId) || 1);
  const navigate = useNavigate();
  useEffect(() => {
    if (!params?.movieId) {
      setPage(1);
    }
  }, [params?.movieId]);

  return (
    <Container
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Pagination
        count={total_pages}
        page={page}
        onChange={(_, v) => {
          setPage(v);
          navigate(`${baseNavigate}/${v}`);
        }}
      />
    </Container>
  );
}

export default Navigation;
