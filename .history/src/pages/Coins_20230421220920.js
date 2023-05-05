import React from 'react'
import { useParams } from 'react-router-dom';

function CoinsPage() {
    const { id } = useParams();
 

  return <div>CoinsPage</div>;
}

export default CoinsPage;