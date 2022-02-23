import React, { useContext } from "react";
import { StyleSheet } from 'react-native';
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";


const editScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { state, editBlogPost } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === id
    );

    return (
    <BlogPostForm 
    initalValues={{ title: blogPost.title, content: blogPost.content }}
    onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
        // .pop() sends you back to previous screen
    }}
    />
    )
};

const styles = StyleSheet.create({});

export default editScreen;