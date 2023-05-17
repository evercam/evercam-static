<template>
    <SeoKit />
    <!-- a. Generates browser screenshots for every page -->
    <OgImageScreenshot />
    <!-- b. Generate saotir images for every page (uses the default template) -->
    <OgImageStatic />
    <slot/>
    <SectionFooter/>
</template>