  function scrollToNextSection(nextSection) {
    const currentSection = getCurrentSection();
    const targetSection = Math.min(currentSection + 1, nextSection);
    scrollToSection(targetSection);
  }
  
  function getCurrentSection() {
    const sections = document.querySelectorAll('.section');
    let currentSection = 1;
  
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        currentSection = index + 1;
      }
    });
  
    return currentSection;
  }
  
  function scrollToSection(sectionNumber) {
    const section = document.getElementById(`section${sectionNumber}`);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  //delayed scroll section

  function delayedScrollToNextSection(targetSection) {
    setTimeout(function () {
      scrollToNextSection(targetSection);
    }, 650); 
  }
  
  // animation-elastic band 

  const container = document.querySelector('.animation-form');
  const animation = container.querySelector('sl-animation');
  const button = container.querySelector('sl-button');

  button.addEventListener('click', () => {
    animation.play = true;
  });

