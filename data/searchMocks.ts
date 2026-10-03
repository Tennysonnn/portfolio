import { SearchResult } from "@/lib/types";

export const examplePrompts: string[] = [
  "AI trends in digital business",
  "Product management resources",
  "Digital business opportunities",
  "Tell me about Hakhong's projects",
];

// Builds a real, working link for a mock result instead of a dead
// placeholder URL. "Open result" sends the visitor to an actual search
// for the result's title, so every link resolves to something real.
function searchLinkFor(title: string): string {
  return `https://www.google.com/search?q=${encodeURIComponent(title)}`;
}

// Keyed mock result sets. This is placeholder data standing in for a real
// web-search + LLM response — see the README for where that connects later.
const mockResultSets: { keywords: string[]; results: SearchResult[] }[] = [
  {
    keywords: ["ai", "trend", "artificial intelligence"],
    results: [
      {
        title: "How AI is reshaping digital business models",
        source: "Example Business Review",
        description:
          "An overview of how companies are adapting products, operations, and strategy as AI tools become part of everyday business.",
        url: searchLinkFor("How AI is reshaping digital business models"),
      },
      {
        title: "Practical AI adoption for small and growing businesses",
        source: "Example Digital Insights",
        description:
          "A look at where AI tends to add real value first — customer support, content, and internal workflows — versus where it's overhyped.",
        url: searchLinkFor("Practical AI adoption for small and growing businesses"),
      },
      {
        title: "The product manager's guide to working with AI features",
        source: "Example Product Journal",
        description:
          "What changes for product teams when AI becomes a feature rather than a novelty, from scoping to measuring impact.",
        url: searchLinkFor("product manager's guide to working with AI features"),
      },
    ],
  },
  {
    keywords: ["product management", "product manager", "product owner"],
    results: [
      {
        title: "A starter reading list for new product owners",
        source: "Example Product School",
        description:
          "Foundational articles on discovery, prioritization, and working with engineering and design as a new product owner.",
        url: searchLinkFor("reading list for new product owners"),
      },
      {
        title: "Frameworks for prioritizing what to build next",
        source: "Example Product Journal",
        description:
          "A comparison of common prioritization frameworks and when each one tends to fit a team's stage and constraints.",
        url: searchLinkFor("product prioritization frameworks"),
      },
      {
        title: "From business graduate to product role: common paths",
        source: "Example Careers Digest",
        description:
          "How people with a business background typically move into product roles, and the skills that transfer well.",
        url: searchLinkFor("from business graduate to product management role"),
      },
    ],
  },
  {
    keywords: ["digital business", "opportunit"],
    results: [
      {
        title: "Where digital business opportunities are emerging",
        source: "Example Market Digest",
        description:
          "A survey of sectors where digital transformation is opening new roles and business models, particularly in Southeast Asia.",
        url: searchLinkFor("digital business opportunities Southeast Asia"),
      },
      {
        title: "Cambodia's growing digital economy: an overview",
        source: "Example Regional Report",
        description:
          "A summary of trends shaping the digital economy in Cambodia and the wider region.",
        url: searchLinkFor("Cambodia digital economy overview"),
      },
      {
        title: "Bridging business and technology: a career overview",
        source: "Example Careers Digest",
        description:
          "What it looks like to work at the intersection of business strategy and technology execution.",
        url: searchLinkFor("careers bridging business and technology"),
      },
    ],
  },
  {
    keywords: ["hakhong", "project", "work", "portfolio"],
    results: [
      {
        title: "Phum Website Transformation",
        source: "Hakhong's Portfolio — Projects",
        description:
          "A website rebuild focused on improving how a local business represents itself online.",
        url: "#projects",
      },
      {
        title: "OCIC Market Research",
        source: "Hakhong's Portfolio — Projects",
        description:
          "Market research work supporting business decision-making at OCIC.",
        url: "#projects",
      },
      {
        title: "JOUL",
        source: "Hakhong's Portfolio — Projects",
        description:
          "Early-stage contribution to a digital product within a startup team.",
        url: "#projects",
      },
    ],
  },
];

const defaultResults: SearchResult[] = [
  {
    title: "This is a mock result",
    source: "Example Source",
    description:
      "The AI search interface is running on placeholder data for now. Once connected to a real search and language model backend, this card will show an actual result for your query.",
    url: searchLinkFor("digital business and product management"),
  },
  {
    title: "Try one of the example prompts",
    source: "Example Source",
    description:
      "The example prompts below are tuned to return more specific mock results, such as topics in digital business, product management, and AI.",
    url: searchLinkFor("digital business trends"),
  },
  {
    title: "About this search experience",
    source: "Hakhong's Portfolio",
    description:
      "This box is designed to later connect to a real web-search API and an LLM. For now, every answer is a fixed, hand-written placeholder.",
    url: "#about",
  },
];

export function getMockResults(query: string): SearchResult[] {
  const q = query.toLowerCase();
  const match = mockResultSets.find((set) =>
    set.keywords.some((keyword) => q.includes(keyword))
  );
  return match ? match.results : defaultResults;
}
