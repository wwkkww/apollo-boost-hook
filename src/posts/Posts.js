import React from 'react';
import usePostQuery from './usePostQuery';

const Posts = () => {
  const { loading, error, data } = usePostQuery()

  if (loading) return <p>Loading ...</p>;
  return (
    <ol>
      {
        data.allPosts.map(({ id, url, title }) => (
          <li key={id}>
            <h3>{title}</h3>
            <a href={url}>{url}</a>
          </li>
        ))
      }
    </ol>
  );
};

export default Posts;