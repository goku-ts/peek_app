import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface PostFormValues {
  title: string;
  description : string
  content: string;
  isPublic: boolean;
}

const PostForm: React.FC = () => {
  const initialValues: PostFormValues = {
    title: '',
    description : "",
    content: '',
    isPublic: false,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    content: Yup.string().required('Content is required'),
    description: Yup.string().required('Description is required'),
  });

  const handleSubmit = (values: PostFormValues) => {
    // Perform post submission logic here
    console.log(values);
  };

  const [submit, isSubmit] = useState(false)

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={values.title}
              onChangeText={handleChange('title')}
            />
            {(submit && errors.title) && <Text style={styles.errorText}>{errors.title}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Description"
              value={values.description}
              onChangeText={handleChange('description')}
            />
            {(submit && errors.description) && <Text style={styles.errorText}>{errors.description}</Text>}

            <View style={styles.contentInput}>

            <TextInput
              placeholder="Content"
              multiline
              value={values.content}
              onChangeText={handleChange('content')}
              
            />
            </View>
            {(submit && errors.content) && <Text style={styles.errorText}>{errors.content}</Text>}
           
            <TouchableOpacity onPress={()=>{isSubmit(true);handleSubmit()}} >
                <Text>Submit</Text>
                </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  contentInput: {
    height:300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
 
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
});

export default PostForm;
