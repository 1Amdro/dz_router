import { Form } from "react-router-dom";
import "./index.css";

function TheForm() {
  return (
    <Form className="form-section">
      <input placeholder="name" type="text" name="name" />
      <input placeholder="email" type="email" name="email" />
      <button type="submit">Subscribe</button>
    </Form>
  );
}

export default TheForm;
