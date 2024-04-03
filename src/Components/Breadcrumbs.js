import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function DynamicBreadcrumbs({ items }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link underline="hover" color="inherit" href={item.href} onClick={handleClick}>
              {item.label}
            </Link>
          ) : (
            <Typography color="text.primary">{item.label}</Typography>
          )}
        </span>
      ))}
    </Breadcrumbs>
  );
}


