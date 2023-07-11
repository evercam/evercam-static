<script setup>
defineProps({ blok: Object })
const tutorials = ref(null)
const page = ref(1)
const currentPage = ref(1)

const storyblokApi = useStoryblokApi()
const { data, refresh } = await storyblokApi.get("cdn/stories", {
  version: useRoute().query._storyblok ? "draft" : "published",
  starts_with: "tutorials",
  is_startpage: false,
  sort_by: "first_published_at",
  per_page: 25,
  page: currentPage,
})

tutorials.value = data.stories
</script>

<template>
  <section id="my-team" class="tutorials">
    <div class="container">
      <h1 class="slide-up">Evercam Tutorials</h1>

      <p class="slide-up">
        Check out this complete introduction to some of the most useful features
        in evercam software.
      </p>

      <p></p>
      <div class="row">
        <TutorialsCard
          v-for="tutorial in tutorials"
          :key="tutorial.uuid"
          :tutorial="tutorial.content"
          :slug="tutorial.full_slug"
          v-model="currentPage"
        />
        <div class="col-md-3 slide-up">
          <a href="https://dash.evercam.io/v2/users/integrations">
            <img
              src="https://evercam.io/wp-content/uploads/2022/08/image2608202212380666.jpg"
              alt=" " />
            <h3></h3>
            <p></p
          ></a>
          <h3>
            <a href=""></a
            ><a
              href="https://dash.evercam.io/v2/users/integrations"
              target="_blank"
              rel="noopener"
              >Integrations (Procore/Aconex)</a
            >
          </h3>
          <p>&nbsp;</p>
          <p></p>
        </div>
      </div>
      <div class="text-left">
        <a
          href="https://dash.evercam.io/v2/users/signin"
          target="_blank"
          class="btn-style"
          >Login to Evercam</a
        >
      </div>
    </div>
  </section>
</template>
