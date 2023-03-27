<script setup>
defineProps({ blok: Object })
</script>

<template>
    <section class="bottom-content-section">
                <div class="container ">
                    <div class="row">
                        <div class="col-md-7">
                                                            <img src="https://evercam.io/wp-content/uploads/2021/02/aconex.b677de5.jpg" class=" lazyloaded" data-src="https://evercam.io/wp-content/uploads/2021/02/aconex.b677de5.jpg" alt="image">

                                
                                                    </div>
                        <div class="col-md-5 text-md-right">
                            <h2>Aconex</h2>
<p>Evercam’s new integration with <a href="https://evercam.io/blog/evercam-with-aconex-integration">Aconex</a> allows users to get project site updates and automatic site documentation sent to your Aconex account using Evercam’s Snapmail tool. Project Site Documentation just got easier.</p>
                        </div>
                    </div>
                </div>
            </section>
    <section class="bottom-content-section">
                <div class="container ">
                    <div class="row">
                        <div class="col-md-7 order-md-2">
                                                            <img :src="blok.image.filename" class=" lazyloaded" data-src="https://evercam.io/wp-content/uploads/2022/02/BIM-compare-Bentley-4d-view.jpg" alt="image">

                                
                                                    </div>
                        <div class="col-md-5">
                            <h2>{{ blok.name }}</h2>
                            <p>Evercam’s new integration with <a href="https://evercam.io/blog/evercam-with-aconex-integration">Aconex</a> allows users to get project site updates and automatic site documentation sent to your Aconex account using Evercam’s Snapmail tool. Project Site Documentation just got easier.</p>
                        </div>
                    </div>
                </div>
            </section>
</template>