<script setup>
const props = defineProps({ blok: Object });
const projects = ref(null);
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories", {
  version: useRoute().query._storyblok ? "draft" : "published",
  starts_with: "projects",
  is_startpage: false,
});
projects.value = data.stories;

const urlPath = useRoute().path;
const isProjects = urlPath.includes("/projects");
const isBlog = urlPath.includes("/blog");

function changeBlogtoProject(d) {
  return d.replace('blog','')
}

// const imageThumbnail = props.project.image_thumbnail
//   ? props.project.image_thumbnail.filename
//   : "https://a.storyblok.com/f/208852/674x380/538e670581/image_thumbnail.jpg";
</script>

<template>
  <div v-if="isBlog">
    <div v-for="project in projects" class="post-wrapper">
      <a :href="'/projects/' + project.slug">
        <div class="post-div">
          <div class="data">
            <span class="post-title">{{ project.name }} </span>
          </div>
          <!-- Load the Image Dynamically -->
          <div class="img-div">
            <img
              v-if="!project.content.image_thumbnail.filename"
              src="https://a.storyblok.com/f/208852/674x380/bf71efc381/image_thumbnail.jpg"
              :alt="project.name"
            />
            <img
              v-else
              :src="project.content.image_thumbnail.filename"
              :alt="project.name"
            />
          </div>
        </div>
      </a>
    </div>
  </div>
  <section v-else id="related-posts" class="recent-projects">
    <div class="container">
      <h2>Recent Projects</h2>
      <div class="owl-carousel related-posts-slider owl-loaded owl-drag">
        <div class="owl-stage-outer">
          <div
            class="owl-stage"
            style="
              transform: translate3d(-1140px, 0px, 0px);
              transition: all 0s ease 0s;
              width: 4104px;
            "
          >
            <div
              class="owl-item cloned"
              style="width: 198px; margin-right: 30px"
            >
              <div class="item">
                <div class="image-wrapper">
                  <a
                    href="https://evercam.io/projects/cpac-modular-presentation-community-college-terenure"
                  >
                    <img
                      src="https://evercam.io/wp-content/uploads/2022/03/CPAC-CDETB-Terenure-2022-March-10-Evercam-Timelapse-Screenshot.jpg"
                      alt="CPAC Modular – Presentation Community College Terenure"
                    />
                  </a>
                </div>
                <div class="content">
                  <h3>
                    <a
                      href="https://evercam.io/projects/cpac-modular-presentation-community-college-terenure"
                      >CPAC Modular – Presentation Community College Terenure</a
                    >
                  </h3>
                </div>
              </div>
            </div>
            <div
              class="owl-item cloned"
              style="width: 198px; margin-right: 30px"
            >
              <div class="item">
                <div class="image-wrapper">
                  <a
                    href="https://evercam.io/projects/cluid-housing-broome-lodge"
                  >
                    <img
                      src="https://evercam.io/wp-content/uploads/2019/10/cluidhousing-vh-2016-06-23T17-00-18.000Z-300x214-min.jpg"
                      alt="Cluid Housing: Broome Lodge – Timelapse project"
                    />
                  </a>
                </div>
                <div class="content">
                  <h3>
                    <a
                      href="https://evercam.io/projects/cluid-housing-broome-lodge"
                      >Cluid Housing: Broome Lodge – Timelapse project</a
                    >
                  </h3>
                </div>
              </div>
            </div>
            <div
              class="owl-item cloned"
              style="width: 198px; margin-right: 30px"
            >
              <div class="item">
                <div class="image-wrapper">
                  <a
                    href="https://evercam.io/projects/dublin-bus-broadstone-garage-project"
                  >
                    <img
                      src="https://evercam.io/wp-content/uploads/2021/04/dublin-bus-depot.png"
                      alt="Dublin Bus Broadstone Garage Project"
                    />
                  </a>
                </div>
                <div class="content">
                  <h3>
                    <a
                      href="https://evercam.io/projects/dublin-bus-broadstone-garage-project"
                      >Dublin Bus Broadstone Garage Project</a
                    >
                  </h3>
                </div>
              </div>
            </div>
            <div
              class="owl-item cloned"
              style="width: 198px; margin-right: 30px"
            >
              <div class="item">
                <div class="image-wrapper">
                  <a
                    href="https://evercam.io/projects/clem-atlee-estate-fulham"
                  >
                    <img
                      src="https://evercam.io/wp-content/uploads/2020/07/clem-atlee-1.jpg"
                      alt="Clem Attlee Estate, Fulham"
                    />
                  </a>
                </div>
                <div class="content">
                  <h3>
                    <a
                      href="https://evercam.io/projects/clem-atlee-estate-fulham"
                      >Clem Attlee Estate, Fulham</a
                    >
                  </h3>
                </div>
              </div>
            </div>
            <div
              class="owl-item cloned"
              style="width: 198px; margin-right: 30px"
            >
              <div class="item">
                <div class="image-wrapper">
                  <a
                    href="https://evercam.io/projects/north-carolina-power-plant-demolition"
                  >
                    <img
                      src="https://evercam.io/wp-content/uploads/2019/10/2019-0508-buck.implosion.102018docx-300x214-min.jpg"
                      alt="North Carolina Power Plant Demolition"
                    />
                  </a>
                </div>
                <div class="content">
                  <h3>
                    <a
                      href="https://evercam.io/projects/north-carolina-power-plant-demolition"
                      >North Carolina Power Plant Demolition</a
                    >
                  </h3>
                </div>
              </div>
            </div>
            <div
              class="owl-item active"
              style="width: 198px; margin-right: 30px"
            >
              <div class="item">
                <div class="image-wrapper">
                  <a href="https://evercam.io/projects/st-pius-x-college">
                    <img
                      src="https://evercam.io/wp-content/uploads/2022/03/ST-Pius-x-college-CGI.jpg"
                      alt="ST Pius X College, Chatswood, Australia"
                    />
                  </a>
                </div>
                <div class="content">
                  <h3>
                    <a href="https://evercam.io/projects/st-pius-x-college"
                      >ST Pius X College, Chatswood, Australia</a
                    >
                  </h3>
                </div>
              </div>
            </div>
            <div
              class="owl-item active"
              style="width: 198px; margin-right: 30px"
            >
              <div class="item">
                <div class="image-wrapper">
                  <a
                    href="https://evercam.io/projects/actavo-gorey-school-development"
                  >
                    <img
                      src="https://evercam.io/wp-content/uploads/2022/07/PE-Gorey-ETSS.jpg"
                      alt="Actavo Gorey School Development"
                    />
                  </a>
                </div>
                <div class="content">
                  <h3>
                    <a
                      href="https://evercam.io/projects/actavo-gorey-school-development"
                      >Actavo Gorey School Development</a
                    >
                  </h3>
                </div>
              </div>
            </div>
            <div
              class="owl-item active"
              style="width: 198px; margin-right: 30px"
            >
              <div class="item">
                <div class="image-wrapper">
                  <a
                    href="https://evercam.io/projects/the-baird-family-hospital-and-the-anchor-centre"
                  >
                    <img
                      src="https://evercam.io/wp-content/uploads/2021/09/Baird-BIM-Model.png"
                      alt="The Baird Family Hospital and The ANCHOR Centre"
                    />
                  </a>
                </div>
                <div class="content">
                  <h3>
                    <a
                      href="https://evercam.io/projects/the-baird-family-hospital-and-the-anchor-centre"
                      >The Baird Family Hospital and The ANCHOR Centre</a
                    >
                  </h3>
                </div>
              </div>
            </div>
            <div
              class="owl-item active"
              style="width: 198px; margin-right: 30px"
            >
              <div class="item">
                <div class="image-wrapper">
                  <a
                    href="https://evercam.io/projects/cpac-modular-presentation-community-college-terenure"
                  >
                    <img
                      src="https://evercam.io/wp-content/uploads/2022/03/CPAC-CDETB-Terenure-2022-March-10-Evercam-Timelapse-Screenshot.jpg"
                      alt="CPAC Modular – Presentation Community College Terenure"
                    />
                  </a>
                </div>
                <div class="content">
                  <h3>
                    <a
                      href="https://evercam.io/projects/cpac-modular-presentation-community-college-terenure"
                      >CPAC Modular – Presentation Community College Terenure</a
                    >
                  </h3>
                </div>
              </div>
            </div>
            <div
              class="owl-item active"
              style="width: 198px; margin-right: 30px"
            >
              <div class="item">
                <div class="image-wrapper">
                  <a
                    href="https://evercam.io/projects/cluid-housing-broome-lodge"
                  >
                    <img
                      src="https://evercam.io/wp-content/uploads/2019/10/cluidhousing-vh-2016-06-23T17-00-18.000Z-300x214-min.jpg"
                      alt="Cluid Housing: Broome Lodge – Timelapse project"
                    />
                  </a>
                </div>
                <div class="content">
                  <h3>
                    <a
                      href="https://evercam.io/projects/cluid-housing-broome-lodge"
                      >Cluid Housing: Broome Lodge – Timelapse project</a
                    >
                  </h3>
                </div>
              </div>
            </div>
            <div class="owl-item" style="width: 198px; margin-right: 30px">
              <div class="item">
                <div class="image-wrapper">
                  <a
                    href="https://evercam.io/projects/dublin-bus-broadstone-garage-project"
                  >
                    <img
                      src="https://evercam.io/wp-content/uploads/2021/04/dublin-bus-depot.png"
                      alt="Dublin Bus Broadstone Garage Project"
                    />
                  </a>
                </div>
                <div class="content">
                  <h3>
                    <a
                      href="https://evercam.io/projects/dublin-bus-broadstone-garage-project"
                      >Dublin Bus Broadstone Garage Project</a
                    >
                  </h3>
                </div>
              </div>
            </div>
            <div class="owl-item" style="width: 198px; margin-right: 30px">
              <div class="item">
                <div class="image-wrapper">
                  <a
                    href="https://evercam.io/projects/clem-atlee-estate-fulham"
                  >
                    <img
                      src="https://evercam.io/wp-content/uploads/2020/07/clem-atlee-1.jpg"
                      alt="Clem Attlee Estate, Fulham"
                    />
                  </a>
                </div>
                <div class="content">
                  <h3>
                    <a
                      href="https://evercam.io/projects/clem-atlee-estate-fulham"
                      >Clem Attlee Estate, Fulham</a
                    >
                  </h3>
                </div>
              </div>
            </div>
            <div class="owl-item" style="width: 198px; margin-right: 30px">
              <div class="item">
                <div class="image-wrapper">
                  <a
                    href="https://evercam.io/projects/north-carolina-power-plant-demolition"
                  >
                    <img
                      src="https://evercam.io/wp-content/uploads/2019/10/2019-0508-buck.implosion.102018docx-300x214-min.jpg"
                      alt="North Carolina Power Plant Demolition"
                    />
                  </a>
                </div>
                <div class="content">
                  <h3>
                    <a
                      href="https://evercam.io/projects/north-carolina-power-plant-demolition"
                      >North Carolina Power Plant Demolition</a
                    >
                  </h3>
                </div>
              </div>
            </div>
            <div
              class="owl-item cloned"
              style="width: 198px; margin-right: 30px"
            >
              <div class="item">
                <div class="image-wrapper">
                  <a href="https://evercam.io/projects/st-pius-x-college">
                    <img
                      src="https://evercam.io/wp-content/uploads/2022/03/ST-Pius-x-college-CGI.jpg"
                      alt="ST Pius X College, Chatswood, Australia"
                    />
                  </a>
                </div>
                <div class="content">
                  <h3>
                    <a href="https://evercam.io/projects/st-pius-x-college"
                      >ST Pius X College, Chatswood, Australia</a
                    >
                  </h3>
                </div>
              </div>
            </div>
            <div
              class="owl-item cloned"
              style="width: 198px; margin-right: 30px"
            >
              <div class="item">
                <div class="image-wrapper">
                  <a
                    href="https://evercam.io/projects/actavo-gorey-school-development"
                  >
                    <img
                      src="https://evercam.io/wp-content/uploads/2022/07/PE-Gorey-ETSS.jpg"
                      alt="Actavo Gorey School Development"
                    />
                  </a>
                </div>
                <div class="content">
                  <h3>
                    <a
                      href="https://evercam.io/projects/actavo-gorey-school-development"
                      >Actavo Gorey School Development</a
                    >
                  </h3>
                </div>
              </div>
            </div>
            <div
              class="owl-item cloned"
              style="width: 198px; margin-right: 30px"
            >
              <div class="item">
                <div class="image-wrapper">
                  <a
                    href="https://evercam.io/projects/the-baird-family-hospital-and-the-anchor-centre"
                  >
                    <img
                      src="https://evercam.io/wp-content/uploads/2021/09/Baird-BIM-Model.png"
                      alt="The Baird Family Hospital and The ANCHOR Centre"
                    />
                  </a>
                </div>
                <div class="content">
                  <h3>
                    <a
                      href="https://evercam.io/projects/the-baird-family-hospital-and-the-anchor-centre"
                      >The Baird Family Hospital and The ANCHOR Centre</a
                    >
                  </h3>
                </div>
              </div>
            </div>
            <div
              class="owl-item cloned"
              style="width: 198px; margin-right: 30px"
            >
              <div class="item">
                <div class="image-wrapper">
                  <a
                    href="https://evercam.io/projects/cpac-modular-presentation-community-college-terenure"
                  >
                    <img
                      src="https://evercam.io/wp-content/uploads/2022/03/CPAC-CDETB-Terenure-2022-March-10-Evercam-Timelapse-Screenshot.jpg"
                      alt="CPAC Modular – Presentation Community College Terenure"
                    />
                  </a>
                </div>
                <div class="content">
                  <h3>
                    <a
                      href="https://evercam.io/projects/cpac-modular-presentation-community-college-terenure"
                      >CPAC Modular – Presentation Community College Terenure</a
                    >
                  </h3>
                </div>
              </div>
            </div>
            <div
              class="owl-item cloned"
              style="width: 198px; margin-right: 30px"
            >
              <div class="item">
                <div class="image-wrapper">
                  <a
                    href="https://evercam.io/projects/cluid-housing-broome-lodge"
                  >
                    <img
                      src="https://evercam.io/wp-content/uploads/2019/10/cluidhousing-vh-2016-06-23T17-00-18.000Z-300x214-min.jpg"
                      alt="Cluid Housing: Broome Lodge – Timelapse project"
                    />
                  </a>
                </div>
                <div class="content">
                  <h3>
                    <a
                      href="https://evercam.io/projects/cluid-housing-broome-lodge"
                      >Cluid Housing: Broome Lodge – Timelapse project</a
                    >
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="owl-nav">
          <button type="button" role="presentation" class="owl-prev">
            <span aria-label="Previous">‹</span></button
          ><button type="button" role="presentation" class="owl-next">
            <span aria-label="Next">›</span>
          </button>
        </div>
        <div class="owl-dots">
          <button role="button" class="owl-dot active"><span></span></button
          ><button role="button" class="owl-dot"><span></span></button>
        </div>
      </div>
    </div>
  </section>
</template>
