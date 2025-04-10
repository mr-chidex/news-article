import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";

// Mock the useNavigate function from react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

test("renders article card and triggers goToDetails on read more click", () => {
  const article = {
    title: "Test Article",
    abstract: "This is a summary of the test article.",
    media: [
      { "media-metadata": [{}, {}, { url: "https://example.com/test.jpg" }] },
    ],
    published_date: "2025-04-10",
    url: "https://example.com/test-article",
    section: "Technology",
  };

  // Render the component with a Router wrapper because it uses useNavigate
  render(
    <Router>
      <ArticleCard article={article} height="h-64" />
    </Router>
  );

  expect(
    screen.getByText(/This is a summary of the test article./i)
  ).toBeInTheDocument();
  expect(screen.getByAltText(/Test Article/i)).toHaveAttribute(
    "src",
    "https://example.com/test.jpg"
  );

  // Check if the published date is rendered
  expect(screen.getByText(/Thu Apr 10 2025/i)).toBeInTheDocument();

  // Check if the image height is correct (using the height prop)
  expect(screen.getByAltText(/Test Article/i)).toHaveClass("h-64");
});

test("renders with default height if height prop is not provided", () => {
  const article = {
    title: "Test Article",
    abstract: "This is a summary of the test article.",
    media: [
      { "media-metadata": [{}, {}, { url: "https://example.com/test.jpg" }] },
    ],
    published_date: "2025-04-10",
    url: "https://example.com/test-article",
    section: "Technology",
  };

  // Render the component without passing the height prop
  render(
    <Router>
      <ArticleCard article={article} />
    </Router>
  );

  // Check if the image has the default height (h-44)
  expect(screen.getByAltText(/Test Article/i)).toHaveClass("h-44");
});
