import React from 'react';
import {
    useParams
} from "react-router-dom";

export default function BlogPost(props){
    let {slug} = useParams();
    const data = props.data;

    let blog = data.filter((item) => {
        return item.slug === slug;
    });
    
    return (
        <div>
            <h1>{blog[0].title}</h1>
            <p>{blog[0].content}</p> 
        </div>
    );
}