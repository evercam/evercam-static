<script setup>
const props = defineProps({ blok: Object });
const resolvedContent = computed(() => renderRichText(props.blok.content));
/** Setup Form */
onMounted(() => {
  var salesIQFieldsArray = [
    { formFieldName: "Email", formFieldType: 9, salesIQFieldName: "Email" },
    {
      formFieldName: "Name",
      formFieldType: 7,
      salesIQFieldName: "Name",
      fieldCompLinkName: "Name_First",
    },
    {
      formFieldName: "SingleLine1",
      formFieldType: 1,
      salesIQFieldName: "Phone",
    },
  ]
  function zf_validateandsubmitdata() {
    var visitorinfo = {}
    var elements = document.getElementById("form").elements
    for (var elmIdx = 0; elmIdx < elements.length; elmIdx++) {
      var inpElem = elements[elmIdx]
      var fieldLinkName = inpElem.getAttribute("name")
      var fieldType = inpElem.getAttribute("fieldType")
      if (
        fieldType === "1" ||
        fieldType === "7" ||
        fieldType === "9" ||
        fieldType === "11"
      ) {
        for (var idx = 0; idx < salesIQFieldsArray.length; idx++) {
          var salesIQObj = salesIQFieldsArray[idx]
          var zfFieldName = salesIQObj.formFieldName
          var salesIQFieldName = salesIQObj.salesIQFieldName
          if (fieldType === "1") {
            if (fieldLinkName === zfFieldName) {
              var salesIQValue = inpElem.value
              if (salesIQFieldName === "Phone") {
                visitorinfo.contactnumber = salesIQValue
              }
              if (salesIQFieldName === "Name") {
                visitorinfo.name = salesIQValue
              }
            }
          }
          if (fieldType === "7") {
            var zfFldCompLinkName = salesIQObj.fieldCompLinkName
            if (fieldLinkName === zfFldCompLinkName) {
              var salesIQValue = inpElem.value
              visitorinfo.name = salesIQValue
            }
          }
          if (fieldType === "9") {
            if (fieldLinkName === zfFieldName) {
              var salesIQValue = inpElem.value
              visitorinfo.email = salesIQValue
            }
          }
          if (fieldType === "11") {
            fieldLinkName = inpElem.getAttribute("compname")
            if (fieldLinkName === zfFieldName) {
              var phoneFormat = inpElem.getAttribute("phoneFormat")
              var salesIQValue = ""
              if (phoneFormat === "1") {
                salesIQValue = document.getElementById(
                  "international_" + fieldLinkName + "_countrycode"
                ).value
                var isCodeEnabled = inpElem.getAttribute("isCountryCodeEnabled")
                if (
                  isCodeEnabled === "true" &&
                  salesIQValue != null &&
                  salesIQValue != ""
                ) {
                  salesIQValue =
                    document.getElementById(
                      "international_" + fieldLinkName + "_countrycodeval"
                    ).value + salesIQValue
                }
              } else if (phoneFormat === "2") {
                var countryCode = document.getElementById(
                  fieldLinkName + "_countrycode"
                ).value
                var first = document.getElementById(
                  fieldLinkName + "_first"
                ).value
                var last = document.getElementById(
                  fieldLinkName + "_second"
                ).value
                salesIQValue = countryCode + first + last
              }
              visitorinfo.contactnumber = salesIQValue
            }
          }
        }
      }
    }
    parent.postMessage(
      JSON.stringify({ type: "zoho.salesiq.apimessage", visitor: visitorinfo }),
      "*"
    )
  }
  var f = document.createElement("iframe");
  f.src =
    "https://forms.zohopublic.com/Evercam/form/LandingPageContactFormSGBACKUP/formperma/FDPAYx9lS9-6zXYtyY_61NCXyXEbg4_5PeAYDM4aCbI?zf_rszfm=1";
  f.style.border = "none";
  f.style.height = "721px";
  f.style.width = "100%";
  f.style.transition = "all 0.5s ease";

  var d = document.getElementById(
    "zf_div_FDPAYx9lS9-6zXYtyY_61NCXyXEbg4_5PeAYDM4aCbI"
  );
  d.appendChild(f);
  window.addEventListener(
    "message",
    function () {
      var evntData = event.data;
      if (evntData && evntData.constructor == String) {
        var zf_ifrm_data = evntData.split("|");
        if (zf_ifrm_data.length == 2) {
          var zf_perma = zf_ifrm_data[0];
          var zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px";
          var iframe = document
            .getElementById(
              "zf_div_FDPAYx9lS9-6zXYtyY_61NCXyXEbg4_5PeAYDM4aCbI"
            )
            .getElementsByTagName("iframe")[0];
          if (
            iframe.src.indexOf("formperma") > 0 &&
            iframe.src.indexOf(zf_perma) > 0
          ) {
            var prevIframeHeight = iframe.style.height;
            if (prevIframeHeight != zf_ifrm_ht_nw) {
              iframe.style.height = zf_ifrm_ht_nw;
            }
          }
        }
      }
    },
    false
  );
});
</script>

<template>
  <section v-editable="blok" id="ask-us">
    <div class="container">
      <div class="row">
        <div class="col-md-6 slideLeft pr-md-5">
          <div v-html="resolvedContent"></div>
          <ul v-if="blok.brand_list" class="row">
            <LogoIndividual
              v-for="blok in blok.brand_list"
              :blok="blok"
              :key="blok.uuid"
              :class="props.blok.list_class"
            />
          </ul>
        </div>
        <div class="col-md-6 form-iframe-wrapper">
          <div class="wpcf7 js" id="wpcf7-f27498-o1" lang="en-US" dir="ltr">
            <div class="screen-reader-response">
              <p role="status" aria-live="polite" aria-atomic="true"></p>
              <ul></ul>
            </div>
            <div style="overflow: hidden">
              <div
                id="zf_div_FDPAYx9lS9-6zXYtyY_61NCXyXEbg4_5PeAYDM4aCbI"
                style="transform: scale(1.14)"
              ></div>
            </div>
            <!--<form
              action="/#wpcf7-f27498-o1"
              method="post"
              class="wpcf7-form init"
              id="contact-form-ireland"
              aria-label="Contact form"
              novalidate="novalidate"
              data-status="init"
              siq_id="autopick_129"
            >
              <div style="display: none">
                <input type="hidden" name="_wpcf7" value="27498" />
                <input type="hidden" name="_wpcf7_version" value="5.7.4" />
                <input type="hidden" name="_wpcf7_locale" value="en_US" />
                <input
                  type="hidden"
                  name="_wpcf7_unit_tag"
                  value="wpcf7-f27498-o1"
                />
                <input type="hidden" name="_wpcf7_container_post" value="0" />
                <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                <input
                  type="hidden"
                  name="_wpcf7_recaptcha_response"
                  value="03AFY_a8U7nFdZsdd_hxf1lDwyTklRyge77PaTiDwLx3xUSQgQRQIOdroRp5PYr0s_DUum5zVjdvWjyl24zK04ERiKS2-kHarzyEk6l6m8x5ORTP2pbxbcFuU_6160cRfLPJPw6cgKFntdOKBD7zyOSZvuQlxb1C3p21QY0Ukz_m04BaNMYIEmyVCg50jfqBBkJ_PyKyjktgD4B7hk95HSpfw3sHBffq4TET4vaYnlyfrQ4bOjPkrqXk2mERx_qWHzlLO-zIOLBIMESZCytbdHNMGa9LRLBFKNpoNAuNe7TaH6AE0C7jzuKFJtsq3SyYQ_Vi2QZdDh7c7VOY80vIlZYbNxqemw9pqfIKEgoeBaRXcfKmCIbYP7Oei8D9q6kLwh--ITSKOCN_-8cKlkHBKK0iQD51-eFy8wgH5uk6XIL1PoNKBlGvZYmPEvha9xzkMqUn8OPfte10-fUvaXpzZmm1KXeUEJa02B0P5mbpL_Foj0DTMu78AS1MXPf-lCbxDMP1JL3NxCsufb2-31ViNWLuqmRl79ocAcYg"
                />
              </div>
              <p>
                <input
                  class="wpcf7-form-control wpcf7-utm_source_cf7"
                  name="utm_source_cf7-616"
                  type="hidden"
                  value="https://evercam.io/contact"
                /><input
                  class="wpcf7-form-control wpcf7-utm_medium_cf7"
                  name="utm_medium_cf7-351"
                  type="hidden"
                  value="referral"
                /><input
                  class="wpcf7-form-control wpcf7-utm_term_cf7"
                  name="utm_term_cf7-157"
                  type="hidden"
                  value=""
                /><input
                  class="wpcf7-form-control wpcf7-utm_content_cf7"
                  name="utm_content_cf7-342"
                  type="hidden"
                  value=""
                /><input
                  class="wpcf7-form-control wpcf7-utm_campaign_cf7"
                  name="utm_campaign_cf7-72"
                  type="hidden"
                  value=""
                /><input
                  class="wpcf7-form-control wpcf7-handl_original_ref_cf7"
                  name="handl_original_ref_cf7-260"
                  type="hidden"
                  value="https://evercam.com/"
                /><input
                  class="wpcf7-form-control wpcf7-handl_landing_page_cf7"
                  name="handl_landing_page_cf7-708"
                  type="hidden"
                  value="https://evercam.io/"
                /><input
                  class="wpcf7-form-control wpcf7-handl_ip_cf7"
                  name="handl_ip_cf7-429"
                  type="hidden"
                  value="180.252.249.63"
                /><input
                  class="wpcf7-form-control wpcf7-handl_ref_cf7"
                  name="handl_ref_cf7-924"
                  type="hidden"
                  value="https://evercam.com/"
                /><input
                  class="wpcf7-form-control wpcf7-handl_url_cf7"
                  name="handl_url_cf7-870"
                  type="hidden"
                  value="https://evercam.io/"
                /><input
                  class="wpcf7-form-control wpcf7-fbclid_cf7"
                  name="fbclid_cf7-904"
                  type="hidden"
                  value=""
                /><input
                  class="wpcf7-form-control wpcf7-gaclientid_cf7"
                  name="gaclientid_cf7-977"
                  type="hidden"
                  value=""
                /><input
                  class="wpcf7-form-control wpcf7-organic_source_cf7"
                  name="organic_source_cf7-141"
                  type="hidden"
                  value="https://evercam.com/"
                /><input
                  class="wpcf7-form-control wpcf7-organic_source_str_cf7"
                  name="organic_source_str_cf7-387"
                  type="hidden"
                  value="Other"
                /><input
                  class="wpcf7-form-control wpcf7-gclid_cf7"
                  name="gclid_cf7-901"
                  type="hidden"
                  value="undefined"
                />
              </p>
              <div class="form-group">
                <p>
                  <label class="d-none">Your Name*</label
                  ><span class="wpcf7-form-control-wrap" data-name="lastname"
                    ><input
                      size="40"
                      class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Your Name*"
                      value=""
                      type="text"
                      name="lastname"
                  /></span>
                </p>
              </div>
              <div class="form-group">
                <p>
                  <label class="d-none">Email*</label
                  ><span class="wpcf7-form-control-wrap" data-name="your-email"
                    ><input
                      size="40"
                      class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Email*"
                      value=""
                      type="email"
                      name="your-email"
                  /></span>
                </p>
              </div>
              <div class="form-group">
                <p>
                  <label class="d-none">Company</label
                  ><span class="wpcf7-form-control-wrap" data-name="company"
                    ><input
                      size="40"
                      class="wpcf7-form-control wpcf7-text form-control"
                      aria-invalid="false"
                      placeholder="Company Name"
                      value=""
                      type="text"
                      name="company"
                  /></span>
                </p>
              </div>
              <div class="form-group">
                <p>
                  <label class="d-none">Phone*</label
                  ><span class="wpcf7-form-control-wrap" data-name="tel-315"
                    ><input
                      size="40"
                      class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-control"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Phone*"
                      value=""
                      type="tel"
                      name="tel-315"
                  /></span>
                </p>
              </div>
              <div class="form-group">
                <p>
                  <label class="d-none">Message*</label
                  ><span
                    class="wpcf7-form-control-wrap"
                    data-name="your-message"
                  >
                    <textarea
                      cols="40"
                      rows="10"
                      class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Message*"
                      name="your-message"
                    ></textarea>
                  </span>
                </p>
              </div>
              <div class="form-group">
                <p>
                  <input
                    class="wpcf7-form-control has-spinner wpcf7-submit btn-style"
                    id="form-submit"
                    type="submit"
                    value="Send Message"
                  /><span class="wpcf7-spinner"></span>
                </p>
              </div>
              <p>
                <input
                  type="hidden"
                  id="zc_gad"
                  name="zc_gad"
                  value="undefined"
                />
              </p>
              <div class="wpcf7-response-output" aria-hidden="true"></div>
              <input type="hidden" name="vx_width" value="1440" /><input
                type="hidden"
                name="vx_height"
                value="900"
              /><input
                type="hidden"
                name="vx_url"
                value="https://evercam.io/"
              />
            </form>  -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.templateWidth {
  padding: 0 !important;
}
</style>
