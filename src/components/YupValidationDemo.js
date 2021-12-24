import * as yup from "yup";
import { useFormik } from "formik";


export default function YupValidationDemo() {
    const formik = useFormik({
        initialValues: {
            Name: '',
            Email: '',
            Age:0
        },
        validationSchema: yup.object({
            Name: yup.string().required('Username required').min(4, 'too short').max(10, 'too Long'),
            Email: yup.string().required('Email required').email("Invalid Email"),
            Age: yup.string().required('Age required').min(4, 'too short')
                        
       }),

        onsubmit: values =>{
            alert(JSON.stringify(values))
        }
    })
  return (
    <div className="container-fluid">
      <div className=" m-5 d-flex justify-content-center">
        <form className='border border-primary m-3 p-5' onSubmit={formik.handleSubmit} >
          <h2 className='align-center'>Register Form</h2>
          <dl>
              <dt>UserName</dt>
              <dd><input type="text"  {...formik.getFieldProps("Name")}/></dd>
              <dd>{(formik.touched.Name &&formik.errors.Name ? formik.errors.Name : null)}</dd>
              <dt>Email</dt>
              <dd><input type="text"  {...formik.getFieldProps("Email")}/></dd>

              <dd>{(formik.touched.Email &&formik.errors.Email ? formik.errors.Email : null)}</dd>

              <dt>Age</dt>
              <dd><input type="text"  {...formik.getFieldProps("Age")}/></dd>

              <dd>{(formik.touched.Age &&formik.errors.Age ? formik.errors.Age : null)}</dd>

          </dl>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
}
