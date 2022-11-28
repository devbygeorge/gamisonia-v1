export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "localeString",
    },
    {
      name: "title",
      title: "Title",
      type: "localeString",
    },
    {
      name: "description",
      title: "Description",
      type: "localeString",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
