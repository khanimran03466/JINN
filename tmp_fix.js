const fs = require('fs');
const f = 'src/components/svgs/about/OurMission.jsx';
let content = fs.readFileSync(f, 'utf8');

const regex = /gsap\.set\("\.left-hand",[\s\S]*?\}, \[\]\);/;

const replacement = `gsap.fromTo(
      ".left-hand",
      { x: -646, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".our-mission-section",
          start: "top top",
          end: "+=2000",
          scrub: 1.5,
        },
      }
    );

    gsap.fromTo(
      ".right-hand",
      { x: 646, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".our-mission-section",
          start: "top top",
          end: "+=2000",
          scrub: 1.5,
        },
      }
    );
  }, []);`;

content = content.replace(regex, replacement);
fs.writeFileSync(f, content, 'utf8');
