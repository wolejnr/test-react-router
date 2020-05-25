import React from 'react';
import {
    Link
} from 'react-router-dom';

export default class Posts extends React.Component{
    constructor(){
        super();
        this.state = {name: "Adewole"};
    }

    loopBlogData()
    {
        const posts = this.props.data;
        return posts.map((blog, i) => {
            return (
                <div key={i}>
                    <Link to={`/blog/${blog.slug}`}><h1>{blog.title}</h1></Link>
                    <p>{blog.content}</p>
                </div>
            );
        });
    }
    

    render(){
        return (
            <div>
                {this.loopBlogData()}
            </div>
        );
    } 
} 

