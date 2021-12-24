import { useFormik } from "formik";

export default function FormikDemoComponent() {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Price: 0,
      City: "",
      Stock: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div className="containerfluid">
      <h2>Submit Form</h2>
      <form onSubmit={formik.handleSubmit}>
      <dl>
<dt>Name</dt>
<dd><input type="text" name="Name" onChange={formik.handleChange} value={formik.values.Name} /></dd>
<dt>Price</dt>
<dd><input type="text" name="Price" onChange={formik.handleChange} value={formik.values.Price}  /></dd>
<dt>Shipped To</dt>
<dd>
    <select name="City" onChange={formik.handleChange}>
        <option value='Delhi'>Delhi</option>
        <option value='Hyderabad'>Hyd</option>
    </select>
</dd>
<dt>Stock</dt>
<dd className="form-switch">
    <input type="checkbox" name="Stock" onChange={formik.handleChange} checked={formik.values.Stock} className="form-check-input" /> Available
</dd>
</dl>
        <button type="submit" name="register">
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
}
