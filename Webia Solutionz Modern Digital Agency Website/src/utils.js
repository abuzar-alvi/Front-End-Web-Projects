export const boston = {
  scrollToActiveNav() {
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section");
      const navLi = document.querySelectorAll(".navbar-nav li");

      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
      navLi.forEach((li) => {
        let a = li.getElementsByTagName("a")[0];
        if (current !== null) {
          a.classList.remove("active");
        }
        if (a.getAttribute("href") == `#${current}`) {
          a.classList.add("active");
        }
      });
    });
  },
  imgToSvg() {
    document.querySelectorAll("img.svg").forEach((el) => {
      const imgID = el.getAttribute("id");
      const imgClass = el.getAttribute("class");
      const imgURL = el.getAttribute("src");
      fetch(imgURL)
        .then((data) => data.text())
        .then((response) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response, "text/html");
          let svg = xmlDoc.querySelector("svg");
          if (svg) {
            if (typeof imgID !== "undefined") {
              svg.setAttribute("id", imgID);
            }

            if (typeof imgClass !== "undefined") {
              svg.setAttribute("class", imgClass + " replaced-svg");
            }

            svg.removeAttribute("xmlns:a");
            if (el.parentNode) {
              el.parentNode.replaceChild(svg, el);
            }
          }
        })
        .catch((error) => {
          console.error("Error fetching SVG:", error);
        });
    });
  },
};
