import React from 'react';
import './Blog.css'
import { Container, Row } from 'react-bootstrap';
import blogData from '../../fakeData/blog.json'
import SingleBlog from './SingleBlog/SingleBlog';

const Blog = () => {
    return (
        <div className='my-5 text-center'>
             <h1 className='text-center'>My <span style={{ borderBottom: '1px solid #64ffda' }}> Blogs</span></h1>
            <Container>
                <Row xs={1} md={3} className="g-4 my-5 mx-0">
                    {
                        blogData.map(blog => <SingleBlog blog={blog} key={blog.id}></SingleBlog>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Blog;