import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import { View, Pressable, StyleSheet } from 'react-native';
import { formTheme } from '../theme';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';
import useReview from '../hooks/useReview';

const styles = StyleSheet.create(formTheme);

const initialValues = {
  repositoryOwnerName: '',
  repositoryName: '',
  rating: '',
  review: '',
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name required'),
  repositoryName: yup.string().required('Repository name required'),
  rating: yup
    .number()
    .min(0)
    .max(100)
    .required('number must be between 0 and 100'),
  text: yup.string(),
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.textField}
        name='ownerName'
        placeholder='Repository owner name'
      />
      <FormikTextInput
        style={styles.textField}
        name='repositoryName'
        placeholder='Repository name'
      />
      <FormikTextInput
        style={styles.textField}
        name='rating'
        placeholder='Rating between 0 and 100'
      />
      <FormikTextInput
        style={styles.textField}
        multiline={true}
        name='text'
        placeholder='Review'
      />
      <Pressable style={styles.pressable} onPress={onSubmit}>
        <Text style={styles.buttonText} fontSize='subheading' fontWeight='bold'>
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

const Review = () => {
  const navigate = useNavigate();
  const [review] = useReview();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    try {
      const { createReview } = await review({
        ownerName,
        repositoryName,
        rating: Number(rating),
        text,
      });
      navigate(`/repositories/${createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default Review;
