const partnersApp = Vue.createApp({
  data() {
    return {
      partnerSections: [
        // MAIN
        {
          // Section data
          active: true,
          i: 0,
          id: "main_section",
          partner_class: "",
          label: "Main Partner",
          url: "/pages/index.html",
          icon_fill: "#009DDF",
          d: "M7.388 9h9.225l-4.613 14-4.612-14zm.612-2h8l-4-5.333-4 5.333zm10.5 0h5.5l-6-6h-4l4.5 6zm-13 0l4.5-6h-3.916l-6.084 6h5.5zm-5.5 2l9.234 12-3.955-12h-5.279zm18.721 0l-3.924 12 9.203-12h-5.279z",
          svgMarkup:
            '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="#009DDF"><path d="M7.388 9h9.225l-4.613 14-4.612-14zm.612-2h8l-4-5.333-4 5.333zm10.5 0h5.5l-6-6h-4l4.5 6zm-13 0l4.5-6h-3.916l-6.084 6h5.5zm-5.5 2l9.234 12-3.955-12h-5.279zm18.721 0l-3.924 12 9.203-12h-5.279z"/></svg>',

          // Partner data
          class_partnerDiv: "main_partner",
          showP: true,
          partners: [
            {
              i: 0,
              logo: "title/Archer_White.png",
              url: "https://www.archerwell.com/",
              txt: "Archer is a global oil services company with a heritage that stretches back over 40 years, with a strong focus on safety and delivering the highest quality products and services.  \n Archer operates in 40 locations providing drilling services, well integrity & intervention, plug & abandonment and decommissioning to its upstream oil and gas clients.",
            },
          ],
        },
        // PLAT
        {
          // Section data
          active: true,
          i: 1,
          id: "plat_section",
          partner_class: "",
          label: "Platinum",
          url: "/pages/about.html",
          icon_fill: "#CFCFCE",
          d: "M3 19l1 3h16l1-3h-18zm14.015-2h-2.443c3.507-4.616 3.37-8.547 1.021-8.909-1.355-.209-2.593.597-2.593 2.226v6.683h-2v-6.683c0-1.63-1.238-2.435-2.593-2.226-2.348.362-2.485 4.293 1.022 8.909h-2.444c-2.909-4.446-2.688-8.076-1.027-9.815.737-.772 1.772-1.185 2.813-1.185.79 0 1.565.251 2.229.671 0-.5-.098-.922-.471-1.326-.328-.354-.529-.825-.529-1.345 0-1.104.896-2 2-2s2 .896 2 2c0 .52-.201.991-.529 1.345-.374.405-.471.826-.471 1.326.664-.419 1.44-.671 2.23-.671 1.038 0 2.073.412 2.812 1.185 1.66 1.739 1.882 5.369-1.027 9.815zm-12.194 0h-2.671c-1.481-1.91-2.15-3.845-2.15-5.496 0-1.095.303-2.064.827-2.819.883-1.27 2.321-1.815 3.954-1.625-.384.549-.671 1.205-.843 1.951-.618.055-1.126.324-1.468.815-1.004 1.444-.482 4.386 2.351 7.174zm19.179-5.496c0 1.651-.669 3.586-2.15 5.496h-2.671c2.833-2.788 3.355-5.73 2.352-7.174-.342-.491-.851-.76-1.469-.815-.172-.746-.459-1.401-.843-1.951 1.633-.189 3.071.355 3.954 1.625.524.754.827 1.724.827 2.819z",
          svgMarkup:
            '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="#CFCFCE"><path d="M3 19l1 3h16l1-3h-18zm14.015-2h-2.443c3.507-4.616 3.37-8.547 1.021-8.909-1.355-.209-2.593.597-2.593 2.226v6.683h-2v-6.683c0-1.63-1.238-2.435-2.593-2.226-2.348.362-2.485 4.293 1.022 8.909h-2.444c-2.909-4.446-2.688-8.076-1.027-9.815.737-.772 1.772-1.185 2.813-1.185.79 0 1.565.251 2.229.671 0-.5-.098-.922-.471-1.326-.328-.354-.529-.825-.529-1.345 0-1.104.896-2 2-2s2 .896 2 2c0 .52-.201.991-.529 1.345-.374.405-.471.826-.471 1.326.664-.419 1.44-.671 2.23-.671 1.038 0 2.073.412 2.812 1.185 1.66 1.739 1.882 5.369-1.027 9.815zm-12.194 0h-2.671c-1.481-1.91-2.15-3.845-2.15-5.496 0-1.095.303-2.064.827-2.819.883-1.27 2.321-1.815 3.954-1.625-.384.549-.671 1.205-.843 1.951-.618.055-1.126.324-1.468.815-1.004 1.444-.482 4.386 2.351 7.174zm19.179-5.496c0 1.651-.669 3.586-2.15 5.496h-2.671c2.833-2.788 3.355-5.73 2.352-7.174-.342-.491-.851-.76-1.469-.815-.172-.746-.459-1.401-.843-1.951 1.633-.189 3.071.355 3.954 1.625.524.754.827 1.724.827 2.819z"/></svg>',

          // Partner data
          class_partnerDiv: "plat_partner",
          showP: true,
          partners: [
            {
              i: 0,
              logo: "platinum/uis.png",
              url: "https://www.uis.no/en",
              txt: "The University of Stavanger (UiS) is an innovative and international university with a strong commitment to well-being, green transition, and lifelong learning. It fosters an open and collaborative environment for education, research, and artistic development, engaging with global communities for meaningful impact.",
            },
            {
              i: 1,
              logo: "platinum/metallteknikk.png",
              url: "https://metallteknikk.no/",
              txt: "Metallteknikk is a subsupplier of advanced sheet metal processing and welding of mainly stainless-steel materials. Metallteknikk has modern machinery for the processing of plates, consisting of lasers, plasma, punching, and bending machines. ",
            },
          ],
        },
        // GOLD
        {
          // Section data
          active: true,
          i: 2,
          id: "gold_section",
          partner_class: "",
          label: "Gold",
          url: "/pages/team.html",
          icon_fill: "#FFD700",
          d: "M24 3c-.372 4.105-2.808 8.091-6.873 9.438.297-.552.596-1.145.882-1.783 2.915-1.521 4.037-4.25 4.464-6.251h-2.688c.059-.45.103-.922.139-1.405h4.076zm-24 0c.372 4.105 2.808 8.091 6.873 9.438-.297-.552-.596-1.145-.882-1.783-2.915-1.521-4.037-4.25-4.464-6.251h2.688c-.058-.449-.102-.922-.138-1.404h-4.077zm19-2c0 9.803-5.094 13.053-5.592 17h-2.805c-.498-3.947-5.603-7.197-5.603-17h14zm-7.305 13.053c-1.886-3.26-2.635-7.432-2.646-11.053h-1.699c.205 4.648 1.99 8.333 4.345 11.053zm1.743 4.947h-2.866c-.202 1.187-.63 2.619-2.571 2.619v1.381h8v-1.381c-1.999 0-2.371-1.432-2.563-2.619z",
          svgMarkup:
            '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#FFD700"><path d="M24 3c-.372 4.105-2.808 8.091-6.873 9.438.297-.552.596-1.145.882-1.783 2.915-1.521 4.037-4.25 4.464-6.251h-2.688c.059-.45.103-.922.139-1.405h4.076zm-24 0c.372 4.105 2.808 8.091 6.873 9.438-.297-.552-.596-1.145-.882-1.783-2.915-1.521-4.037-4.25-4.464-6.251h2.688c-.058-.449-.102-.922-.138-1.404h-4.077zm19-2c0 9.803-5.094 13.053-5.592 17h-2.805c-.498-3.947-5.603-7.197-5.603-17h14zm-7.305 13.053c-1.886-3.26-2.635-7.432-2.646-11.053h-1.699c.205 4.648 1.99 8.333 4.345 11.053zm1.743 4.947h-2.866c-.202 1.187-.63 2.619-2.571 2.619v1.381h8v-1.381c-1.999 0-2.371-1.432-2.563-2.619z"/></svg>',

          // Partner data
          class_partnerDiv: "gold_partner",
          partners: [
            {
              i: 0, 
              logo: "gold/nablaflow.png",
              url: "https://nablaflow.io/en",
            },
            {
              i: 1, 
              logo: "gold/skf.png",
              url: "https://www.skf.com/no",
            },
            {
              i: 2, 
              logo: "gold/ansys.png",
              url: "https://www.ansys.com/",
            },
            {
              i: 3,
              logo: "gold/trainor.png",
              url: "https://trainor.no/",
            },
            {
              i: 4,
              logo: "gold/molex.png", // TODO: Full white logo / missing logo
              url: "https://www.molex.com/en-us/home"
            },
            {
              i: 5,
              logo: "gold/coficab.png",
              url: "https://www.coficab.com/",
            },
            {
              i: 6, 
              logo: "gold/WinTec.png",
              url: "https://www.spilka.com/no",
            },
          ],
        },
        // SILVER
        {
          // Section data
          active: true,
          i: 3,
          id: "silver_section",
          partner_class: "",
          label: "Silver",
          url: "/pages/garage.html",
          icon_fill: "#C0C0C0",
          d: "M12 10c-3.865 0-7 3.134-7 7s3.135 7 7 7 7-3.134 7-7-3.135-7-7-7zm0 12c-2.762 0-5-2.239-5-5s2.238-5 5-5 5 2.239 5 5-2.238 5-5 5zm1.484-4.315l1.516-1.457-2.083-.287-.917-1.892-.917 1.892-2.083.287 1.516 1.457-.369 2.07 1.853-.992 1.854.992-.37-2.07zm.058-11.918l-.919-1.233 3.377-4.534h1.867l-4.325 5.767zm5.574-5.767l-4.952 6.603.939 1.26 5.897-7.863h-1.884zm-6.986 8h1.828l-5.958-8h-1.869l5.999 8zm-7.249-8h-1.881l6 8h1.881l-6-8z",
          svgMarkup:
            '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#C0C0C0"><path d="M12 10c-3.865 0-7 3.134-7 7s3.135 7 7 7 7-3.134 7-7-3.135-7-7-7zm0 12c-2.762 0-5-2.239-5-5s2.238-5 5-5 5 2.239 5 5-2.238 5-5 5zm1.484-4.315l1.516-1.457-2.083-.287-.917-1.892-.917 1.892-2.083.287 1.516 1.457-.369 2.07 1.853-.992 1.854.992-.37-2.07zm.058-11.918l-.919-1.233 3.377-4.534h1.867l-4.325 5.767zm5.574-5.767l-4.952 6.603.939 1.26 5.897-7.863h-1.884zm-6.986 8h1.828l-5.958-8h-1.869l5.999 8zm-7.249-8h-1.881l6 8h1.881l-6-8z"/></svg>',

          // Partner data
          class_partnerDiv: "silver_partner",
          partners: [
            {
              i: 0, 
              logo: "silver/tekna.png",
              url: "https://www.tekna.no/en/",
            },
            // { // might need to go live?
            //   i: 5,      
            //   logo: "silver/vectornav.png",
            //   url: "https://www.vectornav.com/",
            // },
            {
              i: 1, 
              logo: "silver/vibemyr.png",
              url: "https://vibemyr.no/",
            },
            {
              i: 2,
              logo: "silver/hydroscand.png",
              url: "https://www.hydroscand.no"
            },
            {
              i: 3,
              logo: "", // TODO: Missing logo
              // logo: "silver/ideatec.png", // TODO: Missing logo
              url: "https://www.ideatec.no"
            },
            {
              i: 4,
              logo: "silver/solatrykkeri.jpg",
              url: "https://www.solatrykkeri.no"
            },
            {
              i: 5,
              logo: "silver/bohn.png",
              url: "https://www.bohncontainer.no/",
            },
            {
              i: 6,
              logo: "silver/smed.png",
              url: "https://smed.no/",
            },
          ],
        },
        // BRONZE
        {
          // Section data
          active: true,
          i: 4,
          id: "bronze_section",
          partner_class: "",
          label: "Bronze",
          url: "/pages/partners.html",
          icon_fill: "#CD7F32",
          d: "m385-412 36-115-95-74h116l38-119 37 119h117l-95 74 35 115-94-71-95 71ZM244-40v-304q-45-47-64.5-103T160-560q0-136 92-228t228-92q136 0 228 92t92 228q0 57-19.5 113T716-344v304l-236-79-236 79Zm236-260q109 0 184.5-75.5T740-560q0-109-75.5-184.5T480-820q-109 0-184.5 75.5T220-560q0 109 75.5 184.5T480-300ZM304-124l176-55 176 55v-171q-40 29-86 42t-90 13q-44 0-90-13t-86-42v171Zm176-86Z",
          svgMarkup:
            '<svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="24" fill="#CD7F32"><path d="m385-412 36-115-95-74h116l38-119 37 119h117l-95 74 35 115-94-71-95 71ZM244-40v-304q-45-47-64.5-103T160-560q0-136 92-228t228-92q136 0 228 92t92 228q0 57-19.5 113T716-344v304l-236-79-236 79Zm236-260q109 0 184.5-75.5T740-560q0-109-75.5-184.5T480-820q-109 0-184.5 75.5T220-560q0 109 75.5 184.5T480-300ZM304-124l176-55 176 55v-171q-40 29-86 42t-90 13q-44 0-90-13t-86-42v171Zm176-86Z"/></svg>',

          // Partner data
          class_partnerDiv: "bronze_partner",
          partners: [
            {
              i: 0, 
              logo: "bronze/rs.png",
              url: "https://no.rs-online.com/web/",
            },
            {
              i: 1,
              logo: "bronze/propaint.png",
              url: "", //no url
            },
            {
              i: 2,
              logo: "bronze/vmv.png",
              url: "https://vmv.as/en/,"
            },
            // {
            //   i: 13,
            //   logo: "bronze/haaflu.png",
            //   url: "",
            // },
            {
              i: 3,
              logo: "bronze/astrup.png",
              url: "https://astrup.no",
            },
            {
              i: 4, 
              logo: "bronze/nito.svg",
              url: "https://www.nito.no/en/",
            },
            {
              i: 5,
              logo: "", // TODO: Missing logo
              // logo: "bronze/steelwork.png", // TODO: Missing logo
              url: "https://steelwork.no"
            },
            {
              i: 6, 
              logo: "bronze/stamas.webp",
              url: "https://www.stamas.no/",
            },
            {
              i: 7,
              logo: "bronze/sundfornaturstein.png",
              url: ""
            },
            {
              i: 8,
              logo: "bronze/tredal.png", // TODO: Color issue with black text on black background
              url: "https://tredal.no"
            },
          ],
        },
        {
          // Section data
          active: true,
          i: 4,
          id: "supportplus_section",
          partner_class: "",
          label: "Support+",
          url: "/pages/partners.html",
          icon_fill: "#CD7F32",
          d: '',
          svgMarkup: '',
          // Partner data
          class_partnerDiv: "supportplus_partner",
          partners: [
            {
              i: 0, 
              logo: "supportplus/3dnet.png",
              url: "https://3dnet.no"
            },
            {
              i: 1, 
              logo: "supportplus/hydro.png",
              url: "https://www.hydro.com/",
            },
            {
              i: 2, 
              logo: "supportplus/biesterfeld.png",
              url: "https://biesterfeld.no/",
            },
          ],
        },
        {
          // Section data
          active: true,
          i: 4,
          id: "support_section",
          partner_class: "",
          label: "Support",
          url: "/pages/partners.html",
          icon_fill: "#CD7F32",
          d: '',
          svgMarkup: '',
          // Partner data
          class_partnerDiv: "support_partner",
          partners: [
            {
              i: 0, 
              logo: "support/unitek.png", // TODO: Logo issue black text on black background
              url: "https://www.unitek-industrie-elektronik.de/en/",
            },
            {
              i: 1,
              logo: "support/mekonomen.png",
              url: "https://www.mekonomen.no"
            },
            {
              i: 2,
              logo: "support/polymaker.png",
              url: "https://polymaker.com"
            },
            {
              i: 3, 
              logo: "support/kna.png",
              url: "https://knakleppmotorsport.no/",
            },
            {
              i: 4, 
              logo: "",
              // logo: "support/reime.png",
              url: "https://www.reime.no/",
            },
          ],
        },
        {
          // Section data
          active: true,
          i: 4,
          id: "software_section",
          partner_class: "",
          label: "Software",
          url: "/pages/partners.html",
          icon_fill: "#CD7F32",
          d: '',
          svgMarkup: '',
          // Partner data
          class_partnerDiv: "software_partner",
          partners: [
            {
              i: 0, 
              logo: "software/altium.svg",
              url: "https://www.altium.com/",
            },
            {
              i: 1,
              logo: "software/caetek.png",
              url: "https://caetek.fi/"
            },
            {
              i: 2,
              logo: "software/kisssoft.svg",
              url: "https://www.kisssoft.com/en"
            },
            {
              i: 3, 
              logo: "software/rapidharness.png",
              url: "https://rapidharness.com/",
            },
          ],
        },
      ],
    };
  },
}).mount("#partners_container");
