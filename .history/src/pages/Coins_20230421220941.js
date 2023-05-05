import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function CoinsPage() {
    const { id } = useParams();
    useEffect(() => {
     
 },[id])

  return <div>CoinsPage</div>;
}

export default CoinsPage;