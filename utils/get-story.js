// const storyblokApi = useStoryblokApi();
import { apiPlugin } from "@storyblok/vue";

export default async function getBlogPosts() {
  const { storyblokApi } = apiPlugin({
    apiOptions: { accessToken: process.env.STORYBLOK_API_KEY }
  });

  const params = {
    version: "published",
    is_startpage: false,
    per_page: 100,
    sort_by: "content.date_published:desc"
  };

  try {
    const { data, headers } = await storyblokApi.get('cdn/stories/', params);
    const { total, per_page: perPage = total > 25 ? 25 : null } = headers;
    const pages = perPage ? Math.ceil(total / perPage) : 0;
    const stories = [...data.stories];

    for (let page = 2; page <= pages; page += 1) {
      const { data: data2 } = await storyblokApi.get('cdn/stories/', { ...params, page });
      stories.push(...data2.stories);
    }

    return stories;
  } catch (error) {
    console.error(error);
    return [];
  }
};