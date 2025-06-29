import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

// ✅ Hook to fetch user's short URLs
export const useFetchMyShortUrls = (token, onError) => {
  return useQuery({
    queryKey: ["my-shortenurls"],
    queryFn: async () => {
      const response = await api.get("/api/urls/myurls", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
      return response;
    },
    select: (data) => {
      const sortedData = data.data.sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      );
      return sortedData;
    },
    onError,
    staleTime: 5000,
  });
};

// ✅ Hook to fetch total clicks
export const useFetchTotalClicks = (token, onError) => {
  const currentYear = new Date().getFullYear();
  const startDate = `${currentYear}-01-01`;
  const endDate = `${currentYear}-12-31`;

  return useQuery({
    queryKey: ["url-totalclick", currentYear],
    queryFn: async () => {
      const response = await api.get(
        `/api/urls/totalclicks?startDate=${startDate}&endDate=${endDate}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      return response;
    },
    select: (data) => {
      return Object.keys(data.data).map((key) => ({
        clickDate: key,
        count: data.data[key],
      }));
    },
    onError,
    staleTime: 5000,
  });
};
