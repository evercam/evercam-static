<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" id="send-us" class="bg-gray">
    <div class="container">
      <h2>Send us something?</h2>
      <p>Cheques, Christmas and Valentines cards, all very welcome.</p>
      <ul>
        <li>
          <img
            decoding="async"
            src="https://evercam.io/wp-content/themes/evercam/img/Image 8.jpg"
            alt="Ireland"
          /><strong>Ireland (HQ):</strong> Evercam Ltd. – 6-7 Granby Row, Dublin
          1, D01 FW20, Ireland.
        </li>
        <li>
          <img
            decoding="async"
            src="https://evercam.io/wp-content/themes/evercam/img/Image 10.jpg"
            alt="United Kingdom"
          /><strong>United Kingdom:</strong> Evercam UK Ltd. – 344-354 Grays Inn
          Rd, London WC1X 8BP
        </li>
        <li>
          <img
            decoding="async"
            src="https://evercam.io/wp-content/themes/evercam/img/Image 9.jpg"
            alt="United States"
          /><strong>United States:</strong> Evercam US, Inc. – 9639 Hillcroft St
          #2022 Houston, TX 77096
        </li>
        <li>
          <img
            decoding="async"
            src="https://evercam.io/wp-content/themes/evercam/img/Image 12.jpg"
            alt="Australia"
          /><strong>Australia:</strong> Evercam AU Pty Ltd. – G 651 Doncaster
          Rd. Doncaster Vic 3108
        </li>
        <li>
          <img
            decoding="async"
            src="https://evercam.io/wp-content/themes/evercam/img/Image 11.jpg"
            alt="Singapore"
          /><strong>Singapore:</strong> Evercam SG Ltd. – 10 Anson Road #22-02
          International Plaza Singapore(079903)
        </li>
        <li>
          <img
            decoding="async"
            src="https://evercam.io/wp-content/themes/evercam/img/Image 13.jpg"
            alt="Pakistan"
          /><strong>Pakistan:</strong> Evercam PK Ltd. 871/B, First Floor,
          Peoples Colony, Faisalabad.
        </li>
        <li>
          <img
            decoding="async"
            class="alignnone size-full"
            src="https://evercam.io/wp-content/uploads/2022/02/flag-poland.jpg"
            alt=""
            width="43"
            height="28"
          /><strong>Poland:</strong> Evercam PL Sp. z o.o. ul. Gliwicka 2/7
          40-079 Katowice.
        </li>
      </ul>
    </div>
  </section>
</template>
