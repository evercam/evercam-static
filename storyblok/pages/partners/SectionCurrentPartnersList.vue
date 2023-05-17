<script setup>
defineProps({ blok: Object });
</script>

<template>
  <section v-editable="blok" id="inner-page" class="standard-content">
    <div class="container">
      <SectionPartnerCard
        v-for="partner in blok.partner_row"
        :key="partner.uuid"
        :blok="partner"
      />
      <div class="row">
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="http://www.permanex.net/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2019/11/Permanex-Logo-e1563252541528.jpg"
                alt="Permanex Site Security"
              />
            </a>
          </div>
          <h2>Permanex Site Security</h2>
          <p>
            Permanex Group is a security and solution provider company that
            analyzes every risk associated with your construction site and
            provides precautionary measures in an effective way.
            Permanex&nbsp;have partnered with Evercam to provide time-lapse and
            project management cameras across the UK.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>UK
          </p>
          <p>
            <strong>Contact:</strong><br />
            Unit 1A Russett Farm Robertsbridge,<br />
            East Sussex TN32 5NG<br />
            <a href="tel://+442074286491">+442074286491</a><br />
            <a href="mailto:info@permanex.net">info@permanex.net</a><br />
            <a href="http://www.permanex.net/">Permanex</a>
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10043.943556120852!2d0.7262257!3d50.9979329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe77b8e6b0a260774!2sPermanex%20Site%20Security!5e0!3m2!1sen!2suk!4v1658944484643!5m2!1sen!2suk"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="http://www.decasolution.co.uk/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2019/12/DECA.jpg"
                alt="DECA Solutions"
              />
            </a>
          </div>
          <h2>DECA Solutions</h2>
          <p>
            Deca Solutions&nbsp; are a system integrator providing CCTV, alarms
            and communications on construction sites. Deca Solutions have
            partnered with Evercam to provide time-lapse and project management
            cameras in Scotland and northern England region.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>Scotland and Northern England
          </p>
          <p>
            <strong>Contact:<br /> </strong
            ><span class="_2iem">22 Morar Road&nbsp;</span
            ><span class="_2iem"
              >Glasgow,<br />
              United Kingdom<br /> </span
            ><a href="tel://+447907656072">+447907656072</a><br />
            <a href="mailto:info@decasolutions.co.uk"
              >info@decasolutions.co.uk</a
            ><br />
            <a href="http://decasolution.co.uk/">DECA Solutions</a>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="https://camba.tv/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2019/11/camba_logo_rgb_white_medium.jpg"
                alt="Camba.tv"
              />
            </a>
          </div>
          <h2>Camba.tv</h2>
          <div class="fusion-text">
            <p>
              Camba.tv provide CCTV surveillance, Access Control and Monitoring
              for Construction Projects in the Republic of Ireland. Construction
              time-lapse services are provided by Evercam.
            </p>
            <p>
              <strong>Areas Covered:<br /> </strong>Ireland
            </p>
            <p>
              <strong>Contact:<br /> </strong
              ><span class="_2iem"
                >Camba.tv Ltd, 6-7 Granby Row,<br />
                D01 FW20, Ireland<br /> </span
              ><a href="tel://+35315383333">+35315383333</a><br />
              <a href="mailto:info@camba.tv">info@camba.tv</a><br />
              <a href="https://camba.tv/">Camba.tv</a>
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9525.58726735606!2d-6.2667929!3d53.3540529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x45be1f9c29999f89!2sCamba.tv!5e0!3m2!1sen!2suk!4v1658944137602!5m2!1sen!2suk"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a
              href="http://www.cornerstonesecuritygroup.co.uk/"
              target="_blank"
            >
              <img
                src="https://evercam.io/wp-content/uploads/2019/11/Cornerstone-Security-Group-Logo-trans-small-1-e1563252789226.png"
                alt="Cornerstone Security"
              />
            </a>
          </div>
          <h2>Cornerstone Security</h2>
          <p>
            With Access Control, CCTV, Fire Detection and Integrated Security
            Systems, the design of the system is not just about the latest
            technology, it also takes into consideration and day-to-day
            operation of your business and ease of use.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>UK
          </p>
          <p>
            <strong>Contact:</strong><br />
            Unit 16 Gateway 1000,<br />
            Arlington Business Park, Whittle Way,<br />
            SG1 2FP, Stevenage, Hertfordshire.<br />
            <a href="tel://+448442474247">+448442474247</a><br />
            <a href="mailto:info@protectorsecurity.co.uk"
              >info@cornerstonegroup.co.uk</a
            ><br />
            <a href="http://www.cornerstonesecuritygroup.co.uk/"
              >Corner Stone Security Group</a
            >
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9849.89366255497!2d-0.2050131!3d51.8888241!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x90458c07dbad1ed!2sCornerstone%20Security%20Systems%20Ltd!5e0!3m2!1sen!2suk!4v1658944605043!5m2!1sen!2suk"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="http://directalarmsystems.com/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2019/12/directalarmsystemslogo.png"
                alt="Direct Alarm System"
              />
            </a>
          </div>
          <h2>Direct Alarm System</h2>
          <p>
            Direct Alarm Systems offers you the ultimate in security. They have
            many years of experience in designing, installing and maintaining
            Electronic Security Systems for both Domestic and Business premises.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>UK
          </p>
          <p>
            <strong>Contact:</strong><br />
            FREEPOST NAT22133,<br />
            Wirral CH62 0ZZ<br />
            <a href="tel://08001696960">+448001696960</a><br />
            <a href="http://directalarmsystems.com/">Direct Alarm System</a>
          </p>
        </div>
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="http://www.lensmen.ie/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2019/11/lensmenlogo-1.png"
                alt="Lensmen"
              />
            </a>
          </div>
          <h2>Lensmen</h2>
          <p>
            Photography, video&nbsp;production, time-lapse videos, drone and
            motion graphics, Lensmen does it all for you. Any type&nbsp;of
            project and lensmen will get it captured for you with a team full of
            professionals. For construction projects, Lensmen has teamed up with
            Evercam.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>Ireland
          </p>
          <p>
            <strong>Contact:<br /> </strong
            ><span class="_2iem"
              >17 Nottingham St, N Strand Rd, Ballybough, Dublin, D03 C654,
              Ireland<br />
              <a href="tel://:+35318197738">+35318197738</a></span
            ><br />
            <a href="mailto:info@lensmen.ie">info@lensmen.ie</a><br />
            <a href="http://www.lensmen.ie/contact-us/">Lensmen</a>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="http://danners.com/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2020/01/danners-1.jpg"
                alt="Danners"
              />
            </a>
          </div>
          <h2>Danners</h2>
          <p>
            Danner’s Security is a trusted security company with 80 years of
            experience in providing security services to businesses in Houston
            and the surrounding areas.
          </p>
          <p>
            Along with their traditional security services, Danners offer new
            technology that includes: Event-Based Security, Video Monitoring
            Services, Mobile Surveillance and Outdoor Wireless Security System.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>Houston &amp; Gulf Coast
            Region
          </p>
          <p>
            <strong>Contact:</strong><br />
            Danner’s Inc.<br />
            3551 Pasadena Blvd.<br />
            Pasadena, TX 77503<br />
            <a href="tel://+17139232651">+17139232651</a><br />
            <a href="https://www.danners.com/">Danners</a>
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13865.177060637103!2d-95.1604766!3d29.6822471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3a5cbf245b8b00d0!2sDanner's%20Security!5e0!3m2!1sen!2suk!4v1658944431601!5m2!1sen!2suk"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="http://www.phoenix-eye.co.uk/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2019/12/eyelogo-edit-10s-e1575381263609.gif"
                alt="Phoenix Eye"
              />
            </a>
          </div>
          <h2>Phoenix Eye</h2>
          <p>
            Phoenix Eye is part of the Danieli Holdings Group of Companies which
            also consists of Phoenix Security, one of the UK’s largest door
            supervision companies.
          </p>
          <p>
            Phoenix Eye Ltd currently holds SIA approved contractor scheme (ACS)
            status for the provision of security guarding, door supervision and
            keyholding.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>UK
          </p>
          <p>
            <strong>Contact:</strong><br />
            Patrick House, Gosforth Business Park<br />
            Newcastle upon Tyne<br />
            NE12 8EG<br />
            <a href="tel://+17139232651">+448002800089</a>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="http://www.starfmgroup.co.uk/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2020/01/starfm.jpg"
                alt="Star FM Group"
              />
            </a>
          </div>
          <h2>Star FM Group</h2>
          <p>
            Star FM Group are a leading UK provider of CCTV site monitoring
            towers.
          </p>
          <p>
            Star FM Group provide an all-in-one solution for construction site
            security including rapid deployment and 24/7 CCTV monitoring and
            response patrol service that operates in full compliance with BS
            7984.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>UK
          </p>
          <p>
            <strong>Contact:</strong><br />
            Strelley Hall<br />
            Nottingham<br />
            NG8 6PE<br />
            <a href="tel://+17139232651">+448005677029</a>
          </p>
        </div>
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="https://tagsystems.co.uk/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2020/01/tag-systems.jpg"
                alt="Tag Systems"
              />
            </a>
          </div>
          <h2>Tag Systems</h2>
          <p>
            Tag Systems is the leading company for wireless security. With
            design, manufacture and deployment of wireless systems, Tag System
            cover a wide variety of applications within Commercial, Domestic and
            Industrial security.
          </p>
          <p>
            Where appropriate, all systems conform to the necessary British
            Standards and Codes of Practice and are supported by the Company’s
            own ISO 9001 certification.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>UK
          </p>
          <p>
            <strong>Contact:</strong><br />
            Merlin House, Gibson Road<br />
            Lincolnshire<br />
            DN21 5TL<br />
            <a href="tel://+17139232651">+44 1427 666111</a>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="https://prime-secure.co.uk/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2020/01/prime.png"
                alt="Prime Secure +"
              />
            </a>
          </div>
          <h2>Prime Secure +</h2>
          <p>
            With offices and 500 sites UK-wide, Prime Secure are proud to remain
            an independent, family-run business with customer care to the fore.
          </p>
          <p>
            Covering all aspects of the UK security industry, their services
            include: Security guarding, Mobile patrolling, CCTV, Access and
            Safety Controls.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>UK
          </p>
          <p>
            <strong>Contact:</strong><br />
            Unit 12<br />
            Watford Enterprise Centre<br />
            Greenhill Crescent<br />
            London<br />
            WD18 8XU
          </p>
          <p><a href="tel:0845 200 2055">+44 345 88 88 333</a></p>
        </div>
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="http://www.csmfacilities.co.uk/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2021/02/download.jpg"
                alt="CSM Facilities"
              />
            </a>
          </div>
          <h2>CSM Facilities</h2>
          <p>
            CSM offers a full support services package for construction and
            demolition sites including Construction Site CCTV.
          </p>
          <p>
            CSM have been providing comprehensive facilities management
            including construction site cctv services since 2002, including
            various support services such as Cleaning, Security and Grounds
            Maintenance, across the Central belt of Scotland.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>Scotland
          </p>
          <p>
            <strong>Contact:</strong><br />
            217 MacLellan Street<br />
            Kinning Park<br />
            Glasgow<br />
            G41 1RR
          </p>
          <p>
            <a href="tel:0845 200 2055"
              >0845 430 8659<br />
              info@csmfacilities.co.uk</a
            >
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8959.192502233926!2d-4.2943246!3d55.8488178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc2090b307f8c2b53!2sCSM%20Facilities!5e0!3m2!1sen!2suk!4v1658945057705!5m2!1sen!2suk"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="https://redcctv.co.uk/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2021/02/download-1.jpg"
                alt="REDCCTV"
              />
            </a>
          </div>
          <h2>REDCCTV</h2>
          <p>
            Red CCTV work with the very latest technologically advanced systems.
          </p>
          <p>
            They have produced a range of eco-smart CCTV range of unique systems
            using technology such as High Definition and thermal CCTV cameras,
            video analytics whilst using low voltage, hybrid, fuel cell, and
            stand-alone green power such as solar and turbine.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>UK
          </p>
          <p>
            <strong>Contact:</strong><br />
            Ennis House<br />
            Sorby Road<br />
            Northbank Ind Estate<br />
            Irlam<br />
            Manchester<br />
            M44 5BA
          </p>
          <p>
            0845 241 0526<br />
            <a href="mailto:info@redcctv.co.uk">info@redcctv.co.uk</a>
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9507.363853215358!2d-2.4210916!3d53.4355518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x80c0c1cc3f9a0d69!2sRed%20CCTV!5e0!3m2!1sen!2suk!4v1658944882936!5m2!1sen!2suk"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="https://stalwart.ie/home-security-cork/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2021/05/logo-300x72-1.png"
                alt="Stalwart Security"
              />
            </a>
          </div>
          <h2>Stalwart Security</h2>
          <p>
            Our company designs installs, and services seamlessly integrated
            electronic security solutions for a wide range of verticals and
            industries. Serving single-site customers, as well as those with a
            national multi-site footprint, Stalwart will design a solution to
            meet both your current needs as well as your future growth plans.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>Ireland
          </p>
          <p>
            <strong>Contact:</strong><br />
            Unit G, Northside for Business Campus,<br />
            North Ring Road,<br />
            Cork<br />
            T23 PR92,
          </p>
          <p class="callu"><a href="tel:'00353214210360'">021 421 0360</a></p>
          <p class="callu">
            <a
              href="mailto:sales@stalwart.ie"
              target="_blank"
              rel="noreferrer noopener"
              >SALES@STALWART.IE</a
            >
          </p>
          <p><a href="https://stalwart.ie/">Stalwart Security</a></p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9843.942362587179!2d-8.463019!3d51.915974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdeccc4ca640086d8!2sStalwart%20Security%20Services%20Limited!5e0!3m2!1sen!2suk!4v1658945003989!5m2!1sen!2suk"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="https://www.acisecurity.ie/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2021/05/3_mfkMXI.jpg"
                alt="ACI Security Ltd"
              />
            </a>
          </div>
          <h2>ACI Security Ltd</h2>
          <p>
            ACI Security Ltd. was established in 2009 by James Walshe (BSc
            Integrated Circuit Engineering). We pride ourselves on being an
            innovative company with particular emphasis on customer service and
            delivery of the latest technology tailored to the customers’ needs.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>Ireland
          </p>
          <p>
            <strong>Contact:</strong><br />
            1 Oak Park Road<br />
            Co. Carlow, Leinster
          </p>
          <p class="callu">
            <a href="http://+353 59 913 5063">+353 59 913 5063</a>
          </p>
          <p class="callu">
            <a
              id="subvalue_ACCOUNTCF9"
              class="link"
              href="mailto:info@acisecurity.ie"
              data-zcqa="value_Email"
              >info@acisecurity.ie</a
            >
          </p>
          <p><a href="https://www.acisecurity.ie/">ACI Security</a></p>
        </div>
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="https://www.lets.ie/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2021/05/lets-limited-logo@1.png"
                alt="L.E.T.S Ltd."
              />
            </a>
          </div>
          <h2>L.E.T.S Ltd.</h2>
          <p>
            L.E.T.S Limited follows an approach that focuses on helping you
            achieve your desired business outcomes. Leveraging our expertise and
            best practices, we’ll work with you to align project goals to the
            outcomes of greatest value and priority to your organization, and
            help you accelerate.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>Ireland
          </p>
          <p>
            <strong>Contact:</strong><br />
            Dundalk,<br />
            Co. Louth,<br />
            Ireland.
          </p>
          <p class="callu"><a href="tel:00353429324567">042 932 4567</a></p>
          <p class="callu"><a href="mailto:info@lets.ie">info@lets.ie</a></p>
          <p><a href="http://www.lets.ie/">L.E.T.S Ltd.</a></p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="https://www.networksecurity.ie/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2021/05/1582129682880.jpg"
                alt="Network Security"
              />
            </a>
          </div>
          <h2>Network Security</h2>
          <p>
            Network Security Solutions is a wholly Irish owned company
            established in 1996. Our team is made up of highly skilled, young
            enthusiastic individuals with a wealth of experience, knowledge and
            dedication to meet your security needs.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>Ireland
          </p>
          <p>
            <strong>Contact:</strong><br />
            312 the Capel Building,<br />
            Capel street, Dublin 7.
          </p>
          <p class="callu"><a href="tel:01 257 3600">01 257 3600</a></p>
          <p class="callu">
            <a
              id="subvalue_ACCOUNTCF9"
              class="link"
              href="mailto:info@networksecurity.ie"
              data-zcqa="value_Email"
              >info@networksecurity.ie</a
            >
          </p>
          <p><a href="https://www.networksecurity.ie/">Network Security</a></p>
        </div>
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="http://www.northwestalarmsystems.com/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2021/05/logo-dark-300x85-1.png"
                alt="North West Alarms"
              />
            </a>
          </div>
          <h2>North West Alarms</h2>
          <p>
            North West Alarm Systems Ltd was established in 1980 to offer, the
            Commercial, Industrial and Residential, customer, state of the art
            Alarm Systems and CCTV equipment. We operate in all areas within and
            around Co. Donegal
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>Ireland
          </p>
          <p>
            <strong>Contact:</strong><br />
            North West Alarm Systems Ltd<br />
            Upper Main Street, Donegal Town, Co Donegal
          </p>
          <p class="callu"><a href="http://(074) 9721687">(074) 9721687</a></p>
          <p class="callu">
            <a href="mailto:enquiries@nwasystems.ie">enquiries@nwasystems.ie</a>
          </p>
          <p>
            <a href="https://northwestalarmsystems.com/"
              >North West Alarm Systems</a
            >
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9232.471845678518!2d-8.1036118!3d54.6547484!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabd2f6372b1443af!2sNorth%20West%20Alarm%20Systems%20Limited!5e0!3m2!1sen!2suk!4v1658944811726!5m2!1sen!2suk"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="http://alpinesecurity.ie/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2021/05/logo.jpg"
                alt="Alpine Security"
              />
            </a>
          </div>
          <h2>Alpine Security</h2>
          <p>
            With over 40 years’ experience, Alpine Security provides bespoke
            security services to both the construction and commercial sectors.
            From CCTV monitoring, keyholding, manned guarding, patrols, access
            and turnstile systems we can meet all of your security needs.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>Ireland
          </p>
          <p>
            <strong>Contact:</strong><br />
            Alpine Security<br />
            2017 Orchard Avenue<br />
            City West Business Campus<br />
            Dublin 24<br />
            Ireland
          </p>
          <p class="callu"><a href="http://+353 15253304">+353 15253304</a></p>
          <p><a href="http://alpinesecurity.ie/">Alpine Security</a></p>
        </div>
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a
              href="https://dnasecurity.wixsite.com/dna-security"
              target="_blank"
            >
              <img
                src="https://evercam.io/wp-content/uploads/2021/05/83456215_105803580993010_7667935659079761920_n.jpg"
                alt="DNA Security"
              />
            </a>
          </div>
          <h2>DNA Security</h2>
          <p>
            DNA Security provides a range of state-of-the-art security systems
            including &nbsp;Intruder / Burglar alarms, fire alarms,
            &nbsp;monitored alarms, emergency lighting, CCTV systems, electronic
            access &nbsp;control and automatic gates at the best price.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>Ireland
          </p>
          <p>
            <strong>Contact:</strong><br />
            Unit 2C, Sunbury Industrial Estate,
          </p>
          <p>Ballymount, Dublin 12</p>
          <p class="callu"><a href="http://086 256 6599">086 256 6599</a></p>
          <p><a href="mailto:info@dnasecurity.ie">info@dnasecurity.ie</a></p>
          <p>
            <a href="https://dnasecurity.wixsite.com/dna-security"
              >DNA Security</a
            >
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="https://www.vpsgroup.com/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2021/05/VPS_PMM_Logo_mid_res.1.jpg"
                alt="The VPS Group"
              />
            </a>
          </div>
          <h2>The VPS Group</h2>
          <p>
            <span class="caps">VPS</span> is a&nbsp;spe­cial­ist provider of
            vacant, occu­pied and site secu­ri­ty solutions.&nbsp;Our core
            ser­vices cov­er the vacant, unoc­cu­pied and void prop­er­ty
            life­cy­cle from an ini­tial risk assess­ment, secu­ri­ty,
            main­te­nance, clean­ing and prepa­ra­tion. We have&nbsp;<span
              class="numbers"
              >14</span
            >&nbsp;<span class="caps">VPS</span>&nbsp;Ser­vice Cen­tres across
            the&nbsp;<span class="caps">UK</span>.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>UK
          </p>
          <p>
            <strong>Contact:</strong><br />
            Broadgate House, Oldham Broadway Business Park,
          </p>
          <p>Middleton, OL9 9XA, Greater Manchester, England</p>
          <p class="callu">
            <a
              class="underline-effect text-blue no-underline"
              href="tel:0330 005 5300"
              >0330 005 5300</a
            >
          </p>
          <p>
            <a
              class="underline-effect text-blue no-underline"
              href="mailto:tellmemore@vpsgroup.com"
              >tellmemore@vpsgroup.com</a
            >
          </p>
          <p><a href="https://www.vpsgroup.com/">The VPS Group</a></p>
        </div>
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="https://icservices.ie/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2021/05/ICS-logo-medium.png"
                alt="I.C. Service &amp; Maintenance Ltd"
              />
            </a>
          </div>
          <h2>I.C. Service &amp; Maintenance Ltd</h2>
          <p>
            I.C. Service And Maintenance&nbsp;offer unrivalled certified
            expertise, standards and support flexibility across a wide range of
            sectors. CCTV, Intruder Alarms, Fire Alarms, Fire Suppression,
            Access Control, Data Infrastructure Installation, Physical Data
            Protection, Safes And Vaults.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>Ireland
          </p>
          <p>
            <strong>Contact:</strong><br />
            Unit G7 Riverview Business Park,
          </p>
          <p>Nangor Road, Dublin 12, D12 E440, Ireland</p>
          <p class="callu">
            <a href="http://(+353) 01 4500804">(+353) 01 4500804</a>
          </p>
          <p>
            <a href="https://icservices.ie/"
              >I.C. Service &amp; Maintenance Ltd</a
            >
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 partner">
          <div class="text-center">
            <a href="https://www.niallsmitharchitects.ie/" target="_blank">
              <img
                src="https://evercam.io/wp-content/uploads/2021/05/logo2.jpg"
                alt="Niall Carroll Drone Photography"
              />
            </a>
          </div>
          <h2>Niall Carroll Drone Photography</h2>
          <p>
            Niall Smith Architects are a design orientated practice with a
            commitment to the quality of architectural design and client service
            at all stages from initial brief definition, conceptual design,
            planning and tender processes, to the delivery of completed building
            projects.
          </p>
          <p>
            Working closely with our clients we develop a clear understanding of
            their demands and aspirations, through creative and exciting
            architectural solutions and to deliver these solutions within the
            timescale agreed.
          </p>
          <p>
            <strong>Areas Covered:<br /> </strong>Ireland
          </p>
          <p><strong>Contact:</strong></p>
          <p>Niall Smith Architects,</p>
          <p>Hall Street, Kingscourt, Co. Cavan</p>
          <p class="callu">
            <a href="http://(+353) 42-9693700">(+353) 42-9693700</a>
          </p>
          <p>
            <a href="mailto:info@niallsmitharchitects.ie"
              >info@niallsmitharchitects.ie</a
            >
          </p>
          <p>
            <a href="https://www.niallsmitharchitects.ie/"
              >Niall Carroll Drone Photography</a
            >
          </p>
        </div>
      </div>
      <div class="bottom-text">
        <h2>
          Evercam is currently recruiting approved installers for new locations.
        </h2>

        <p>Contact us now to find out how you can:</p>

        <ul>
          <li>Win new business in this growth sector</li>
          <li>
            Build key client relationships at the very first stage of a project
            development
          </li>
          <li>
            Get involved with larger projects within
            multinational&nbsp;construction companies.
          </li>
          <li>
            Learn all the important skills and best practices from an
            established market leader.
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
