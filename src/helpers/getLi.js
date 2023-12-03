export function getLi(formik) {
  const arrLi = [
    { text: " От 8 до 15 символов", key: 1, style: "" },
    { text: " Строчные и прописные буквы", key: 2, style: "" },
    { text: "  Минимум 1 цифра", key: 3, style: "" },
    { text: " Минимум 1 спецсимвол (!,#,$)", key: 4, style: "" },
  ];

  if (formik.values.password.length > 8 && formik.values.password.length < 15) {
    arrLi[0].style = "green";
  } else if (formik.errors.password === "От 8 до 15 символов") {
    arrLi[0].style = "red";
  }
  if (
    /[a-z]/.test(formik.values.password) &&
    /[A-Z]/.test(formik.values.password)
  ) {
    arrLi[1].style = "green";
  } else if (formik.errors.password === "Строчные и прописные буквы") {
    arrLi[1].style = "red";
  }
  if (/\d/.test(formik.values.password)) {
    arrLi[2].style = "green";
  } else if (formik.errors.password === "Минимум 1 цифра") {
    arrLi[2].style = "red";
  }
  if (/[!@#$%^&*(),.?":{}|<>]/.test(formik.values.password)) {
    arrLi[3].style = "green";
  } else if (formik.errors.password === "Минимум 1 спецсимвол") {
    arrLi[3].style = "red";
  }

  return arrLi;
}
