import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

export default function FormikValidationComponent() {
  return (
    <div className="container-fluid">
      <Formik
        initialValues={{
          Name: "",
          Email: "",
          Age: 0,
          City: "",
        }}
        validationSchema={yup.object({
          Name: yup
            .string()
            .min(4, "Name too Short")
            .max(10, "Name too long")
            .required("Name Required"),
          Email: yup.string().required("Email Required").email("Invalid Email"),
          Age: yup.number().required("Age Required"),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        <Form>
          {
            <div className="m-5 d-flex justify-content-center">
              <dl>
                <dt>UserName</dt>
                <dd>
                  <Field type="text" name="Name"></Field>
                  <ErrorMessage name="Name"></ErrorMessage>
                </dd>

                <dt>Email</dt>
                <dd>
                  <Field type="text" name="Email"></Field>
                  <ErrorMessage name="Email"></ErrorMessage>
                </dd>

                <dt>Age</dt>
                <dd>
                  <Field type="text" name="Age"></Field>
                  <ErrorMessage name="Age"></ErrorMessage>
                </dd>

                <dt>City</dt>
                <dd>
                  <Field as="select" name="City">
                      <option>Hyd</option>
                      <option>Delhi</option>
                  </Field>
                  <ErrorMessage name="fieldName"></ErrorMessage>
                </dd>
                <button>Register</button>

              </dl>
            </div>
          }
        </Form>
      </Formik>
    </div>
  );
}
