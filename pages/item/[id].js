import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Image, Descriptions, Button  } from 'antd';
import Head from 'next/head';
import AppLayout from '../../components/AppLayout';


const Detail = ({item}) => {
    console.log({item});
    // const router = useRouter();
    // const id = router.query.id;
    const [visible, setVisible] = useState(false);
    // const [item, setItem] = useState({});

    // const getItemInfo = () => {
    //     axios.get(`https://fakestoreapi.com/products/${id}`)
    //         .then(res => setItem(res.data));
    // }

    // useEffect(() => {
    //     getItemInfo();
    // },[]);
    
    return (

        
        <AppLayout>
            <Head>
                <title>상품상세</title>
            </Head>
            <Image
                preview={{ visible: false }}
                width={200}
                alt="item image"
                src={item.image}
                onClick={() => setVisible(true)}
            />
            <div style={{ display: 'none' }}>
                <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                <Image src={item.image} />
                </Image.PreviewGroup>
            </div>
            <Descriptions
                bordered
                title="item Infos"
                >
                <Descriptions.Item label="Product">{item.title}</Descriptions.Item>
                <Descriptions.Item label="Price">{item.price}</Descriptions.Item>
                <Descriptions.Item label="Rating">{item.rating && item.rating.rate}</Descriptions.Item>
                <Descriptions.Item label="Description">{item.description}</Descriptions.Item>
                </Descriptions>
        </AppLayout>
    )
}

export async function getServerSideProps(context){
    const id = context.params.id;
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const data = res.data;

    return{
        props: {
            item: data,
        },
    }
    
}

export default Detail;
