import axios from "axios";
import { getArticles } from "../services/api";

// Mock the axios library
jest.mock("axios");

describe("getArticles", () => {
  it("should fetch articles and return the data", async () => {
    // Mock the response data
    const mockData = {
      results: [
        {
          title: "Article 1",
          abstract: "Abstract for Article 1",
          url: "https://example.com/article1",
        },
        {
          title: "Article 2",
          abstract: "Abstract for Article 2",
          url: "https://example.com/article2",
        },
      ],
    };

    // Setup axios mock to return the mocked data
    axios.get.mockResolvedValue({ data: mockData });

    // Call the function
    const result = await getArticles();

    // Assertions
    expect(axios.get).toHaveBeenCalledWith(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_SAMPLE_KEY}`
    );
    expect(result).toEqual(mockData.results);
  });

  it("should throw an error if the request fails", async () => {
    // Mock axios to throw an error
    axios.get.mockRejectedValue(new Error("Network error"));

    // Assertions to handle the error
    await expect(getArticles()).rejects.toThrow("Network error");
  });
});
