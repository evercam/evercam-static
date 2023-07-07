

export const navigationList = () => {
    // Accessing localePath inside component
    const localePath = useLocalePath();
    const headerList = [
        {
            href: localePath("/projects"),
            label: "Projects",
        },
        {
            label: "Features",
            children: [
                {
                    href: localePath("/features/construction-time-lapse"),
                    label: "Time - lapse",
                },
                {
                    href: localePath("/features/live-view-of-construction-site"),
                    label: "Live View",
                },
                {
                    href: localePath(
                        "/features/recordings-with-evercam-construction-site-security-cameras"
                    ),
                    label: "Recordings",
                },
                {
                    href: localePath("/features/gate-report"),
                    label: "Gate Report",
                },
                {
                    href: localePath("/features/x-ray-tool-for-construction-site-projects"),
                    label: "X - Ray",
                },
                {
                    href: localePath(
                        "/features/evercam-construction-project-management-software-integrations"
                    ),
                    label: "Integrations",
                },
                {
                    href: localePath("/features/drone-view"),
                    label: "Drone View",
                },
                {
                    href: localePath("/features"),
                    label: "All features",
                },
                {
                    href: localePath("/construction-camera-specs"),
                    label: "Camera Specs",
                },
            ],
        },
        {
            href: localePath("/pricing"),
            label: "Pricing",
        },
        {
            href: localePath("/blog"),
            label: "Blog",
        },
        {
            href: localePath("/contact"),
            label: "Contact",
        },
    ];


    const listCameras = [
        {
            id: "li-405",
            href: localePath("/pricing"),
            label: "Pricing",
        },
        {
            id: "li-568",
            href: localePath("/blog"),
            label: "Blog",
        },
        {
            id: "li-406",
            href: localePath("/contact"),
            label: "Contact Us",
        },
        {
            id: "li-559",
            href: localePath("/tutorials"),
            label: "Tutorials",
        },
    ];

    const listProductivity = [
        {
            id: "li-29063",
            href: localePath(
                "/features/evercam-construction-project-management-software-integrations"
            ),
            label: "Software Integrations",
        },
        {
            id: "li-29064",
            href: localePath("/project-management"),
            label: "Project Management",
        },
        {
            id: "li-29065",
            href: localePath("/marketing"),
            label: "Marketing",
        },
        {
            id: "li-29066",
            href: localePath("/machine-learning-for-construction"),
            label: "A.I. for Construction",
        },
    ];

    const listAbout = [
        {
            id: "li-376",
            href: localePath("/terms"),
            label: "Terms & Conditions",
        },
        {
            id: "li-34950",
            href: localePath("/trust"),
            label: "Trust",
        },
        {
            id: "li-30377",
            href: "https://jobs.evercam.io/jobs/Careers",
            label: "Job Opportunities",
        },
        {
            id: "li-24896",
            href: localePath("/about"),
            label: "About",
        },
        {
            id: "li-29228",
            href: "https://jobs.evercam.io/jobs/Careers",
            label: "Careers",
        },
        {
            id: "li-31853",
            href: localePath("/testimonials"),
            label: "Testimonials",
        },
    ];

    const listPartners = [
        {
            id: "li-25747",
            href: localePath("/become-an-installer"),
            label: "Become An Installer",
        },
        {
            id: "li-1705",
            href: localePath("/partners"),
            label: "Find An Installer",
        },
    ];

    const listFeatures = [
        {
            id: "li-29056",
            href: localePath("/features/construction-time-lapse"),
            label: "Time-lapse",
        },
        {
            id: "li-29057",
            href: localePath("/features/live-view-of-construction-site"),
            label: "Live View",
        },
        {
            id: "li-29058",
            href: localePath(
                "/features/recordings-with-evercam-construction-site-security-cameras"
            ),
            label: "Recordings",
        },
        {
            id: "li-28138",
            href: localePath("/features/gate-report"),
            label: "Gate Report",
        },
        {
            id: "li-29059",
            href: localePath("/features/x-ray-tool-for-construction-site-projects"),
            label: "X-Ray",
        },
        {
            id: "li-492",
            href: localePath("/features/bim-time-lapse-integration"),
            label: "BIM Integration",
        },
        {
            id: "li-29060",
            href: localePath("/features/the-measuring-tool"),
            label: "Measuring Tool",
        },
        {
            id: "li-29062",
            href: localePath("/features/the-compare-tool-for-construction-sites"),
            label: "Compare Tool",
        },
        {
            id: "li-29061",
            href: localePath("/features/edit-tool"),
            label: "Edit Tool",
        },
    ];

    const listSocials = [
        {
            href: "https://wa.me/353894481651",
            label: "Whatsapp",
            icon: "fa-brands fa-whatsapp",
        },
        {
            href: "https://github.com/evercam",
            label: "Github",
            icon: "fa-brands fa-github",
        },
        {
            href: "https://www.linkedin.com/company/evercam",
            label: "Linkedin",
            icon: "fa-brands fa-linkedin-in",
        },
        {
            href: "https://twitter.com/evrcm",
            label: "Twitter",
            icon: "fa-brands fa-twitter",
        },
        {
            href: "https://www.facebook.com/evrcm/",
            label: "Facebook",
            icon: "fa-brands fa-facebook-f",
        },
        {
            href: "https://vimeo.com/evercam",
            label: "Vimeo",
            icon: "fa-brands fa-vimeo-v",
        },
        {
            href: "https://www.youtube.com/evercam",
            label: "Youtube",
            icon: "fa-brands fa-youtube",
        },
        {
            href: "https://www.instagram.com/evercam/",
            label: "Instagram",
            icon: "fa-brands fa-instagram",
        },
    ];

    const listApp = [
        {
            href: "https://play.google.com/store/apps/details?id=io.evercam.androidapp",
            label: "Google Play",
            image_src: "https://evercam.io/wp-content/themes/evercam/img/google_play_download.png",
        },
        {
            href: "https://itunes.apple.com/ie/app/evercam-play-ip-camera-viewer/id983189658?mt=8",
            label: "Apple Store",
            image_src: "https://evercam.io/wp-content/themes/evercam/img/ios-logo.png",
        }
    ];

    // Make seperate from all the object above 
    return {
        headerList,
        listCameras,
        listProductivity,
        listAbout,
        listPartners,
        listFeatures,
        listSocials,
        listApp
    }

}