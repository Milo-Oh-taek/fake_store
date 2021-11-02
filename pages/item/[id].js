import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Image } from 'antd';
import Head from 'next/head';
import AppLayout from '../../components/AppLayout';


const detail = () => {
    const router = useRouter();
    const query = router.query;

    
    return (
        <AppLayout>
            <Head>
                <title>상품상세</title>
            </Head>
            <h1>상품상세</h1>
        </AppLayout>
    )
}

export default detail;
