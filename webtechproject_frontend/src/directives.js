export default {
    mounted(el, binding) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add(binding.value || "show"); // Standardklasse: "show"
          } else {
            el.classList.remove(binding.value || "show");
          }
        });
      });
  
      observer.observe(el);
    },
  };