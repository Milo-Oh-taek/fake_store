import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import axios from 'axios';
import Router from 'next/router';
import AppLayout from '../components/AppLayout';

const { Meta } = Card;

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const index = () => {

  useEffect(() => {
    fetchList();
  }, [])

  const [nailPolish, setNailPolish] = useState([]);

  const fetchList = () => {
      axios.get("https://fakestoreapi.com/products")
          .then(res => setNailPolish(res.data));
  }

  const goDetail = (id) => {
      Router.push(`http://localhost:3000/item/${id}`)
  }

  return (
    
      <AppLayout>
          <h1>BrandNew items</h1>
          <Card >
          {nailPolish.map((item) => (
              <Card.Grid style={gridStyle} onClick={() => {goDetail(item.id)}}>
                  <img style={{ width: 150, height:150}} alt="example" src={item.image} />
                  <Meta title={item.title} description={item.price + "$"} />
              </Card.Grid>
          ))}
          </Card>
          
      </AppLayout>
    
  )
}

export default index
