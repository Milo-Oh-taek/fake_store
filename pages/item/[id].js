import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const detail = () => {
    const router = useRouter();
    const query = router.query;
    return (
        
        <div>
            상품상세 {query.id}
        </div>
    )
}

export default detail;
