import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "_ESvyLLv5JnBScR7_sjfJ8anxOGzjWE8uOTWwMX3YwM",
});

export const fetchImageFromUnsplash = async (topic, page) => {
  try {
    const result = await unsplash.search.getPhotos({
      query: topic,
      perPage: 1,
      page,
    });
    if (result.response && result.response.results.length > 0) {
      return result.response.results[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching image from Unsplash", error);
    return null;
  }
};
