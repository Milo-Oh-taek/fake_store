import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import axios from 'axios';
import Router from 'next/router';
import AppLayout from '../components/AppLayout';
import Image from 'next/image';
import { Spin } from 'antd';

const { Meta } = Card;

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const loadingStyle = {
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}

const Index = ({items}) => {


  // useEffect(() => {
  //   fetchList();
  // }, [])

  // const [newItems, setNewItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // const fetchList = () => {
  //     axios.get("https://fakestoreapi.com/products").then((res) => {
  //       setNewItems(res.data);
  //       // setIsLoading(false);
  //     })
  // }

  const goDetail = (id) => {
      Router.push(`http://localhost:3000/item/${id}`)
  }

  return (
    
      <AppLayout>
          <h1>BrandNew items</h1>
          {items && (
            <Card >
            {items.map((item) => (
                <Card.Grid style={gridStyle} key={item.id} onClick={() => {goDetail(item.id)}}>
                    <Image width= "150" height="150" alt="example" src={item.image} />
                    <Meta title={item.title} description={item.price + "$"} />
                </Card.Grid>
            ))}
            </Card>
          )}
          {/* {isLoading && (
            <div className="example" style={loadingStyle}>
            <Spin />
            </div>
          )}
          {!isLoading && (
            <Card >
            {newItems.map((item) => (
                <Card.Grid style={gridStyle} key={item.id} onClick={() => {goDetail(item.id)}}>
                    <Image width= "150" height="150" alt="example" src={item.image} />
                    <Meta title={item.title} description={item.price + "$"} />
                </Card.Grid>
            ))}
            </Card>
          )} */}

          
          
      </AppLayout>
    
  )
}

export async function getServerSideProps(context) {
  const res = await axios.get("https://fakestoreapi.com/products");
  const data = res.data;

  return {
    props: {
      items: data,
    },
  };
}

export default Index;


