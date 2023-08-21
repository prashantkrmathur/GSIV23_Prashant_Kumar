import { Space } from 'antd'
import React from 'react'
import { HomeOutlined, SearchOutlined } from "@ant-design/icons"
import { Input } from 'antd';

const Navbar = (props) => {
    console.log("props", props)

    return (
        <div style={{display:"flex", justifyContent:"space-between", margin:"2em"}}>
            <Space>
                <Input   prefix={<SearchOutlined />} />
            </Space>
            <Space>
                <HomeOutlined />
            </Space>
        </div>
    )
}

export default Navbar
