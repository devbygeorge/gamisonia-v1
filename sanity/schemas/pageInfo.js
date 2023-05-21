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
      fields: [
        {
          name: "description",
          title: "Description",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
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
      fields: [
        {
          name: "description",
          title: "Description",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "contactText",
      title: "ContactText",
      type: "localeText",
    },
  ],
};
