<script>
import SectionNavigationWhite from '@/storyblok/SectionNavigationWhite.vue';
import SectionBreadcrumbLeftAll from '@/storyblok/SectionBreadcrumbLeftAll.vue';
import SectionChatbox from '@/storyblok/SectionChatbox.vue';
import SectionFooter from '@/storyblok/SectionFooter.vue';
import SectionRelatedProject from '@/storyblok/SectionRelatedProject.vue';
// import VueCompareImage from 'vue-compare-image';
// import SectionCompareImages from '@/storyblok/SectionCompareImages.vue';

export default {
    components: {
      SectionNavigationWhite,
      SectionBreadcrumbLeftAll,
      SectionChatbox,
      SectionFooter,
      SectionRelatedProject,
      // VueCompareImage,
      // SectionCompareImages
    }
}
</script>

<script setup>
const props = defineProps({ blok: Object });

const resolvedRichText = computed(() => renderRichText(props.blok.content));
</script>

<template>
  <SectionNavigationWhite/>
  <SectionChatbox/>
  <SectionBreadcrumbLeftAll/>
  <section class="single-blog projects-single" id="page-34491">
    <div class="container">
      <div class="top-content">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            class="embed-responsive-item"
            src="https://player.vimeo.com/video/699767276?h=a0f73a286b"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="standard-content" v-html="resolvedRichText"></div>
          <div>
            <!-- <VueCompareImage
              leftImage="https://evercam.io/wp-content/uploads/2022/09/Technimark-Longford-2021-November-20-13-00-Evercam-Time-lase-screenshot.jpg"
              rightImage="https://evercam.io/wp-content/uploads/2022/09/Technimark-Longford-2022-September-21-12-00-Evercam-Time-lapse-screenshot.jpg"
            /> -->
          </div>
          <!-- <SectionCompareImages/> -->
        </div>
        <div class="col-md-4 right-sidebar">
          <h3>Project Details</h3>
          <table class="table">
            <tbody>
              <tr>
                <td>Client:</td>
                <td>
                  <p>
                    <a :href="blok.client_link"
                      >{{blok.client_name}}</a
                    >
                  </p>
                </td>
              </tr>
              <tr>
                <td>Contractor:</td>
                <td>
                  <p>
                    <a :href="blok.contractor_link"
                      >{{blok.contractor_name}}</a
                    >
                  </p>
                </td>
              </tr>
              <tr>
                <td>Steel Erection:</td>
                <td>
                  <p>
                    <a :href="blok.other_link"
                      >{{blok.other_name}}</a
                    >
                  </p>
                </td>
              </tr>
              <tr>
                <td>Construction Type:</td>
                <td><p>{{blok.construction_type}}</p></td>
              </tr>
            </tbody>
          </table>
          <iframe
            :src="blok.maps"
            style="border: 0"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
  <SectionRelatedProject/>
  <SectionFooter/>
</template>
