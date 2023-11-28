export function getClassName(formik, text, type) {
  if (formik.errors.password === text && formik.touched.password) {
    return "red";
  } else {
    return "green";
  }
}
