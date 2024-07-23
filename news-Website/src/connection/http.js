import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function fetchNews({ searchTerm, max, signal }) {
  let url = "http://localhost:3000/news";

  const params = new URLSearchParams();
  if (searchTerm) params.append("search", searchTerm);
  if (max) params.append("max", max);

  if (params.toString()) {
    url += `?${params.toString()}`;
  }

  const response = await fetch(url, { signal });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the News");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { news } = await response.json();

  return news;
}

export async function fetchHaber({ id, signal }) {
  const response = await fetch(`http://localhost:3000/news/${id}`, {
    signal,
  });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the News");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { haber } = await response.json();
  console.log(haber);
  return haber;
}
