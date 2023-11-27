import { Field, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/UserSlice";
import * as yup from "yup";

const RegistrationPage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user);
  return (
    <>
      <h2>Создать аккаунт Lorby</h2>
      <Formik
        initialValues={{
          email: "",
          login: "",
          password: "",
          confirm: "",
        }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
          dispatch(setUser(values));
        }}
        validationSchema={yup.object({
          email: yup
            .string()
            .email("Поправте email")
            .required("Обязательное поле"),
          login: yup.string().required("Обязательное поле"),
          password: yup
            .string()
            .required("Обязательное поле")
            .min(8, "Минимум 8 символов ")
            .max(15),
          confirm: yup
            .string()
            .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
            .required("Обязательное поле для подтверждения пароля"),
        })}
      >
        <Form>
          <Field
            type="text"
            placeholder="Введите адрес почты"
            id="email"
            name="email"
          />
          <ErrorMessage name="email" component="div" />

          <Field
            id="login"
            type="text"
            placeholder="Придумай логин"
            name="login"
          />
          <ErrorMessage name="login" component="div" />

          <Field
            id="password"
            type="text"
            placeholder="Создай пароль"
            name="password"
          />
          <ErrorMessage name="password" component="div" />
          <Field
            id="confirm"
            type="text"
            name="confirm"
            placeholder="Повтори пароль"
          />
          <ErrorMessage name="confirm" component="div" />
          <button type="submit">Далее</button>
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationPage;

// import { Field, Form, Formik, ErrorMessage } from "formik";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setUser } from "../../redux/slices/UserSlice";

// const validate = (values) => {
//   const errors = {};

//   if (!values.email) {
//     errors.email = "Обязательное поле";
//   } else if (!/\S+@\S+/.test(values.email)) {
//     errors.email = "Введите корректный email";
//   }

//   if (!values.login) {
//     errors.login = "Обязательное поле";
//   }

//   if (!values.password) {
//     errors.password = "Обязательное поле";
//   } else if (values.password.length < 8) {
//     errors.password = "Минимум 8 символов";
//   } else if (values.password.length > 15) {
//     errors.password = "Максимум 15 символов";
//   }

//   if (!values.confirm) {
//     errors.confirm = "Обязательное поле для подтверждения пароля";
//   } else if (values.confirm !== values.password) {
//     errors.confirm = "Пароли должны совпадать";
//   }

//   return errors;
// };

// const RegistrationPage = () => {
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   console.log(user);

//   return (
//     <>
//       <h2>Создать аккаунт Lorby</h2>
//       <Formik
//         initialValues={{
//           email: "",
//           login: "",
//           password: "",
//           confirm: "",
//         }}
//         onSubmit={(values) => {
//           console.log(JSON.stringify(values, null, 2));
//           dispatch(setUser(values));
//         }}
//         validate={validate}
//       >
//         <Form>
//           <div>
//             <label>Email:</label>
//             <Field
//               type="text"
//               placeholder="Введите адрес почты"
//               id="email"
//               name="email"
//             />
//             <ErrorMessage name="email" component="div" />
//           </div>

//           <div>
//             <label>Login:</label>
//             <Field
//               type="text"
//               placeholder="Придумай логин"
//               id="login"
//               name="login"
//             />
//             <ErrorMessage name="login" component="div" />
//           </div>

//           <div>
//             <label>Password:</label>
//             <Field
//               type="password"
//               placeholder="Создай пароль"
//               id="password"
//               name="password"
//             />
//             <ErrorMessage name="password" component="div" />
//           </div>

//           <div>
//             <label>Confirm Password:</label>
//             <Field
//               type="password"
//               name="confirm"
//               placeholder="Повтори пароль"
//             />
//             <ErrorMessage name="confirm" component="div" />
//           </div>

//           <button type="submit">Далее</button>
//         </Form>
//       </Formik>
//     </>
//   );
// };

// export default RegistrationPage;
