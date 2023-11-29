import React from "react";

const Field = ({ classblock, name, type, formik, placeholder }) => {
  return (
    <>
      <input
        className={classblock}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </>
  );
};

export default Field;
