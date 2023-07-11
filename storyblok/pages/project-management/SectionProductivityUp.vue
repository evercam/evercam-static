<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" id="marketing-up" class="project-management">
    <div class="container text-center">
      <h2>PRODUCTIVITY UP</h2>
      <p>
        At Evercam, we help you increase construction productivity by
        <strong>improving project visibility and team communications.</strong
        ><br />
        We build tools that capture the big picture, surface the relevant
        details, and encourage collaboration, giving you a complete overview of
        the status of your project.
      </p>
    </div>
    <div class="container tick-image">
      <div class="row">
        <div class="col-md-4">
          <span class="icon-increase-productivity"></span>
          <h3>Increase Productivity</h3>
          <p>Support Your Site Team With A Powerful Communications Tool.</p>
          <ul>
            <li>Increase Project Visibility</li>
            <li>Communicate Better</li>
            <li>Track Deliveries On-Site</li>
          </ul>
        </div>
        <div class="col-md-4">
          <span class="icon-collaborate-projects"></span>
          <h3>Collaborate</h3>
          <p>Empower Project Managers with the right image at the right time</p>
          <ul>
            <li>Share Progress</li>
            <li>Have live &amp; immediate access</li>
            <li>Access Anywhere</li>
          </ul>
        </div>
        <div class="col-md-4">
          <span class="icon-avoid_disputes"></span>
          <h3>Avoid Disputes</h3>
          <p>Don’t just win arguments, avoid them. You own the evidence.</p>
          <ul>
            <li>Own the evidence</li>
            <li>Share Footage</li>
            <li>Entire Project Duration</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
