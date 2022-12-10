export default {
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    {
      name: "heroImage",
      title: "HeroImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "aboutTitle",
      title: "AboutTitle",
      type: "localeString",
    },
    {
      name: "aboutInfo",
      title: "AboutInfo",
      type: "localeText",
    },
    {
      name: "aboutImage",
      title: "AboutImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "contactText",
      title: "ContactText",
      type: "localeText",
    },
  ],
};
