import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";

const createScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setcontent] = useState('');
    const { addBlogPost } = useContext(Context);

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(content) => setcontent(content)} />
            <Button 
            title='Add Blog Post'
            onPress={() => {
                addBlogPost(title, content, () => {navigation.navigate('Index')});
            }}
            /> 
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    label: {
        fontSize: 20,
        marginBottom: 6,
        marginLeft: 5,
    }
});

export default createScreen;