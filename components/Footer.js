import React from 'react'

const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    bottom: 0, 
    height:40, 
    position:"absolute", 
    left: "40%"
}

const Footer = () => {
    return (
        <div style={footerStyle}>
            Ant Design ©2018 Created by Ant UED222
        </div>
    )
}

export default Footer


