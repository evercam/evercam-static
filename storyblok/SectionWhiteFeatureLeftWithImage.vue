<script setup>
defineProps({ blok: Object })
</script>

<template>
    <section v-editable="blok" id="our-projects" class="pricing-page">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 align-self-center">
                    <h2>€395<small>/month + hardware + installation</small></h2>
    <p>Time-lapse Recording<br>
    Full 4k Video Recording<br>
    Live View (Private or Shared)<br>
    Mobile Phone Access<br>
    Scheduled Images by email<br>
    Incident Archiving<br>
    Uptime Monitoring (Tampering / Failure alert)<br>
    4G Broadband<br>
    Unlimited User Accounts<br>
    Project Management Software Integration</p>
    <p><a class="btn-style" href="/contact">Book a demo</a></p>
                </div>
                <div class="col-lg-7 align-self-center">
                    <img src="https://evercam.io/wp-content/uploads/2021/06/new-devices.jpg" alt="image">
                </div>
            </div>
        </div>
    </section>
</template>