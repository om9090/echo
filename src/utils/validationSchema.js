import * as Yup from "yup";

export const addPostSchema = Yup.object().shape({
  title: Yup.string().required("Title is a required field").label("Title"),
  //   body: Yup.string().required("Body is a required field").label("Body"),
  tags: Yup.string().label("Tags"),
//   image: Yup.mixed().required("Image is a required field").label("Image"),
});
