import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import ArticleDetailPage from "../pages/ArticleDetailPage";

// Mock useLocation and useNavigate
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

describe("ArticleDetailPage", () => {
  const mockNavigate = jest.fn();

  const mockArticle = {
    title: "Test Article",
    byline: "By John Doe",
    published_date: "2023-12-31",
    abstract: "This is a test article abstract.",
    media: [
      {
        "media-metadata": [{}, {}, { url: "https://via.placeholder.com/300" }],
      },
    ],
    url: "https://nytimes.com/test-article",
    source: "The New York Times",
    section: "Technology",
  };

  beforeEach(() => {
    useLocation.mockReturnValue({ state: { article: mockArticle } });
    useNavigate.mockReturnValue(mockNavigate);
  });

  it("renders article details correctly", () => {
    render(
      <MemoryRouter>
        <ArticleDetailPage />
      </MemoryRouter>
    );

    expect(screen.getByText("Test Article")).toBeInTheDocument();
    expect(screen.getByText("By John Doe")).toBeInTheDocument();
    expect(screen.getByText(/Published:/)).toBeInTheDocument();
    expect(screen.getByText(mockArticle.abstract)).toBeInTheDocument();
    expect(screen.getByText(/Source:/)).toBeInTheDocument();
    expect(screen.getByText(/View full article/)).toHaveAttribute(
      "href",
      mockArticle.url
    );
  });

  it("navigates back when article is missing", () => {
    useLocation.mockReturnValue({ state: null });

    render(
      <MemoryRouter>
        <ArticleDetailPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Article not found/)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Go back/));
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
