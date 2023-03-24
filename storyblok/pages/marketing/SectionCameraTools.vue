<script setup>
defineProps({ blok: Object })
</script>

<template>
    <section v-editable="blok" id="matketing-tools">
        <div class="container">
            <h2 class="text-center">Evercam Marketing Tools</h2>
            <p class="text-center">With Evercam you get a lot more in&nbsp;<strong>1 system.</strong></p>
            <div class="row justify-content-center">
                <div class="col-lg-4 ">
                    <div class="wrapper record">
                        <h3>Record</h3>
                        <p><strong>Record high-resolution images</strong>&nbsp;for every second of the construction site progress. This gives you a full recording of the&nbsp;<strong>entire duration</strong>&nbsp;of the project from green field to handover.</p>
                    </div>
                </div>
                <div class="col-lg-4 ">
                    <div class="wrapper compare">
                        <h3>Compare</h3>
                        <p>Compare&nbsp;<strong>before and after</strong>&nbsp;images from any point in time. Embed these neat visual aids on your website or promotional material.</p>
                    </div>
                </div>
                <div class="col-lg-4 ">
                    <div class="wrapper bmi-model">
                        <h3>BIM Integration</h3>
                        <p>Integrate your BIM model with Evercam to tell the story of your projects journey.</p>
                    </div>
                </div>
                <div class="col-lg-4 ">
                    <div class="wrapper live-view">
                        <h3>Live View</h3>
                        <p>Enjoy a&nbsp;<strong>live view</strong>&nbsp;of your construction site from anywhere. Use your mobile, laptop or tablet from the office, on the road or even on-site.</p>
                    </div>
                </div>
                <div class="col-lg-4 ">
                    <div class="wrapper snapmail">
                        <h3>Snapmail</h3>
                        <p>Snapmail is a perfect way to send a regular, scheduled reminder about all the key&nbsp;<strong>events and project milestones</strong>.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>