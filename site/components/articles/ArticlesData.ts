export interface Article {
  title: string;
  subtitle?: string;
  link: string;
  isSpotlight: boolean;
  datePublished: string;
}

export const data: Article[] = [
  {
    title: "PART 1: Introduction To Azure Container Apps",
    subtitle:
      "Series: Building Microservices using Azure Container Apps and Terraform",
    datePublished: "2022.10.30",
    link: "https://armandjordaan.hashnode.dev/part-1-introduction-to-azure-container-apps",
    isSpotlight: true,
  },
  {
    title: "PART 0: Adding some spicy to Microservice vs Monolith",
    subtitle:
      "Series: Building Microservices using Azure Container Apps and Terraform",
    datePublished: "2022.10.24",
    link: "https://armandjordaan.hashnode.dev/overview-azure-load-balancing",
    isSpotlight: false,
  },
  {
    title: "Overview: Azure load balancing.",
    subtitle: "What are the different types of Azure Loadbalancer services?",
    datePublished: "2022.10.14",
    link: "https://armandjordaan.hashnode.dev/overview-azure-load-balancing",
    isSpotlight: false,
  },
  {
    title:
      "CQRS & Mediator Part 2: Domain scaffolding with Roslyn API and Dotnet CLI",
    subtitle: undefined,
    datePublished: "2020.02.10",
    link: "https://medium.com/itnext/cqrs-mediator-part-2-domain-scaffolding-with-roslyn-api-and-dotnet-cli-7c99b5b011f",
    isSpotlight: false,
  },
  {
    title:
      "CQRS & Mediator Part 1: Why and how I implemented CQRS and Mediator patterns in a microservice",
    subtitle: undefined,
    datePublished: "2020.01.21",
    link: "https://medium.com/itnext/why-and-how-i-implemented-cqrs-and-mediator-patterns-in-a-microservice-b07034592b6d",
    isSpotlight: false,
  },
];
