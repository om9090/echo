import * as Yup from "yup";

export const addPostSchema = Yup.object().shape({
  title: Yup.string().required("Title is a required field").label("Title"),
  // body: Yup.string()
  //   .required("Body is a required field")
  //   .test("is-html", "Body must be valid HTML", (value) => {
  //     if (!value) return true; // If body is empty, it's considered valid
  //     const parser = new DOMParser();
  //     try {
  //       const doc = parser.parseFromString(value, "text/html");
  //       return doc && doc.body && doc.body.childElementCount > 0; // Check if body has any child elements
  //     } catch (error) {
  //       return false; // If parsing fails, body is invalid
  //     }
  //   })
  //   .label("Body"),
  tags: Yup.array().of(
    Yup.object().shape({
      value: Yup.string().required("Value is a required field").label("Value"),
      label: Yup.string().required("Label is a required field").label("Label"),
    })
  ),
  // image: Yup.mixed().required("Image is a required field").label("Image"),
});
