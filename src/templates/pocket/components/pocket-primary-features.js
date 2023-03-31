function initPocketPrimaryFeatures() {
  let selectedIndex = 0;
  let debounce = false;

  const filters = document.querySelectorAll("[data-filter-index]");
  const slides = document.querySelectorAll("[data-slide-index]");
  const filterText = document.querySelectorAll("[data-text-index]");

  filters.forEach((filter) => {
    const filterIndex = parseInt(filter.dataset.filterIndex)
    filter.addEventListener("click", () => filterSlides(filterIndex))
  })

  function filterSlides(filterIndex) {
    selectedIndex = filterIndex;

    if (!debounce) {
      debounce = true;

      filters.forEach(filter => {
        if (parseInt(filter.dataset.filterIndex) === selectedIndex) { // if selected
          filter.classList.add("bg-zinc-800");
          filter.querySelector("[data-icon]")?.classList.add("text-primary");
          filter.querySelector("[data-icon]")?.classList.remove("text-zinc-100");

          const screenContent = [...slides].filter(slide => parseInt(slide.dataset.slideIndex) === selectedIndex);
          screenContent.forEach(slide => {
            slide.setAttribute("aria-hidden", false);
            slide.querySelector("[data-screen-header]").classList.remove("opacity-0");
            slide.querySelector("[data-screen-body]").classList.add("z-10");
            slide.querySelector("[data-screen-body]").classList.remove("translate-y-full", "scale-75", "blur-md", "opacity-0");
          });

          const filterBtnContent = [...filterText].filter(text => parseInt(text.dataset.textIndex) === selectedIndex);
          filterBtnContent.forEach(text => {
            text.setAttribute("aria-hidden", false);
            text.classList.remove("opacity-0");
            text.classList.add("z-10");
          });


        } else { // if not selected
          filter.classList.remove("bg-zinc-800");
          filter.querySelector("[data-icon]")?.classList.remove("text-primary");
          filter.querySelector("[data-icon]")?.classList.add("text-zinc-100");

          const screenContent = [...slides].filter(slide => parseInt(slide.dataset.slideIndex) !== selectedIndex);
          screenContent.forEach(slide => {
            slide.setAttribute("aria-hidden", true);
            slide.querySelector("[data-screen-header]").classList.add("opacity-0");
            slide.querySelector("[data-screen-body]").classList.remove("z-10");
            slide.querySelector("[data-screen-body]").classList.add("translate-y-full", "scale-75", "blur-md", "opacity-0");
          });

          const filterBtnContent = [...filterText].filter(text => parseInt(text.dataset.textIndex) !== selectedIndex);
          filterBtnContent.forEach(text => {
            text.setAttribute("aria-hidden", true);
            text.classList.add("opacity-0");
            text.classList.remove("z-10");
          });
        };
      });

      setTimeout(() => {
        debounce = false;
      }, 700);
    };
  };

  filterSlides(selectedIndex);
};

const pocketPrimaryFeaturesSrc = document.currentScript?.src ?? null;

if (pocketPrimaryFeaturesSrc) {
  togafy.module.registerScripts(pocketPrimaryFeaturesSrc, (event) => {
    try {
      initPocketPrimaryFeatures();
    } catch (err) {
      console.log(err)
    }
  });
} else {
  console.error('Couldnt register script!', pocketPrimaryFeaturesSrc);
};