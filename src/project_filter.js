document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' class from all buttons and add it to the clicked one
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardTags = card.getAttribute('data-tag').split(' ');

        // Check if the card's tags include the filter value or if the filter is 'all'
        if (filterValue === 'all' || cardTags.includes(filterValue)) {
          card.style.display = 'block'; // Or whatever your default display is
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});