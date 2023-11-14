import '../styles/loading.css';
import { Layout, Skeleton } from 'antd';

const Loading = () => {
    return (
        <Layout className='loading'>
            <div className='skeleton_grid'>
                <Skeleton className='skeleton' />
                <Skeleton className='skeleton' />
                <Skeleton className='skeleton' />
                <Skeleton className='skeleton' />
            </div>

        </Layout>
    )
}

export { Loading }
