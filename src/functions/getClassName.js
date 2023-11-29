export function getClassName(formik, text) {
  if (formik.errors.password === text && formik.touched.password) {
    return "red";
  } else if (formik.errors.password !== text && formik.touched.password) {
    return "green";
  } else {
    return "";
  }
}
