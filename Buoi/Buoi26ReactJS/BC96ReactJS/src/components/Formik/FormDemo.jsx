import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

export default function FormDemo() {
  const formLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("[👉 formik values]", values);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email không được bỏ trống")
        .email("Email không hợp lệ"),
      password: Yup.string()
        .required("Password không được bỏ trống")
        // .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt"),
        .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
        .matches(/[A-Z]/, "Mật khẩu phải có ít nhất 1 chữ hoa")
        .matches(/[a-z]/, "Mật khẩu phải có ít nhất 1 chữ thường")
        .matches(/[0-9]/, "Mật khẩu phải có ít nhất 1 chữ số")
        .matches(/[^A-Za-z0-9]/, "Mật khẩu phải có ít nhất 1 ký tự đặc biệt"),
    }),
  });

  /*
    initialValues: {
        email: "",
        password: "",
      }
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        });
    */
  return (
    <div className="container mx-auto my-4">
      <form action="submit" className="w-50" onSubmit={formLogin.handleSubmit}>
        <h2 className="mb-4">Login</h2>
        <div className="mb-3">
          <label>Email</label>
          <input
            className="form-control"
            name="email"
            value={formLogin.values.email}
            onChange={formLogin.handleChange}
            //    defaultValue={formLogin.values.email}
            onBlur={formLogin.handleBlur}
          />

          {formLogin.errors.email && formLogin.touched.email && (
            <p className="text-sm text-danger">{formLogin.errors.email}</p>
          )}
          {/* handleChange tự bắt cáci name="email" để nó update giá trị cho email */}
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            className="form-control"
            name="password"
            // type="password"
            value={formLogin.values.password}
            onChange={formLogin.handleChange}
            onBlur={formLogin.handleBlur}
          />
          {formLogin.errors.password && formLogin.touched.password && (
            <p className="text-sm text-danger">{formLogin.errors.password}</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Đăng nhập
        </button>
      </form>
    </div>
  );
}