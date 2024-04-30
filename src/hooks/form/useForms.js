import { useFormik } from "formik";
// import ValidationSchema from "../components/partner/ValidationSchema";
export const useForm = (initialValues, onSubmit, validationSchema) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return {
    values: formik.values,
    errors: formik.errors,
    touched: formik.touched,
    handleChange: formik.handleChange,
    handleBlur: formik.handleBlur,
    handleSubmit: formik.handleSubmit,
    isSubmitting: formik.isSubmitting,
    setFieldValue: formik.setFieldValue,
  };
};