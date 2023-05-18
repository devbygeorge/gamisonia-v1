// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient, groq } from "next-sanity";

import { PageInfo, Project, Social } from "typings";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: "2022-11-16",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_TOKEN,
};

const sanityClient = createClient(config);

type Data = {
  pageInfo: PageInfo;
  interior: Project[];
  architecture: Project[];
  object: Project[];
  socials: Social[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { locale } = JSON.parse(req.body);

  const pageInfoQuery = groq`
    *[_type == "pageInfo"][0] {
      "heroImage": heroImage,
      "aboutTitle": aboutTitle.${locale},
      "aboutInfo": aboutInfo.${locale},
      "aboutImage": aboutImage,
      "contactText": contactText.${locale},
    }
  `;

  const interiorQuery = groq`
    *[_type == "project" && category == "interior"] | order(lower(name) asc) {
      "_id": _id,
      "name": name,
      "category": category,
      "title": title.${locale},
      "description": description.${locale},
      "image": image
    }
  `;

  const architectureQuery = groq`
    *[_type == "project" && category == "architecture"] | order(lower(name) asc) {
      "_id": _id,
      "name": name,
      "category": category,
      "title": title.${locale},
      "description": description.${locale},
      "image": image
    }
  `;

  const objectQuery = groq`
  *[_type == "project" && category == "object"] | order(lower(name) asc) {
    "_id": _id,
    "name": name,
    "category": category,
    "title": title.${locale},
    "description": description.${locale},
    "image": image
  }
`;

  const socialsQuery = groq`
    *[_type == "social"]
  `;

  const [pageInfo, interior, architecture, object, socials] = await Promise.all(
    [
      sanityClient.fetch(pageInfoQuery),
      sanityClient.fetch(interiorQuery),
      sanityClient.fetch(architectureQuery),
      sanityClient.fetch(objectQuery),
      sanityClient.fetch(socialsQuery),
    ]
  );

  res.status(200).json({
    pageInfo,
    interior,
    architecture,
    object,
    socials,
  });
}
