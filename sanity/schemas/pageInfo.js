export default {
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    {
      name: "heroTitle",
      title: "HeroTitle",
      type: "string",
    },
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
      type: "string",
    },
    {
      name: "aboutInfo",
      title: "AboutInfo",
      type: "string",
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
      type: "string",
    },
  ],
};
