import '../styles/header.css';
import { Layout } from 'antd';
import { KeyOutlined } from '@ant-design/icons'

const Header = () => {

    return (
        <Layout.Header className='header'>
            <KeyOutlined className='key_icon' />
            <h1> ZipSearch </h1>
        </Layout.Header>
    )
}

export { Header }
