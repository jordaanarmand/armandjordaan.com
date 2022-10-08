export interface Article {
  title: string;
  link: string;
  isSpotlight: boolean;
  datePublished: string;
}

export const data: Article[] = [
  // {
  //   title:
  //     "There are many variations of passages of Lorem Ipsum available There\n" +
  //     "are many variations of passages of Lorem Ipsum available There are\n" +
  //     "many variations of passages of Lorem Ipsum available",
  //   datePublished: "2022.10.06",
  //   link: "https://medium.com/itnext/cqrs-mediator-part-2-domain-scaffolding-with-roslyn-api-and-dotnet-cli-7c99b5b011f",
  //   isSpotlight: true,
  // },
  {
    title:
      "CQRS & Mediator Part 2: Domain scaffolding with Roslyn API and Dotnet CLI",
    datePublished: "2020.02.10",
    link: "https://medium.com/itnext/cqrs-mediator-part-2-domain-scaffolding-with-roslyn-api-and-dotnet-cli-7c99b5b011f",
    isSpotlight: false,
  },
  {
    title:
      "CQRS & Mediator Part 1: Why and how I implemented CQRS and Mediator patterns in a microservice",
    datePublished: "2020.01.21",
    link: "https://medium.com/itnext/why-and-how-i-implemented-cqrs-and-mediator-patterns-in-a-microservice-b07034592b6d",
    isSpotlight: false,
  },
];
