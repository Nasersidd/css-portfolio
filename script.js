// Run everything after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // === Project Details Toggle ===
  document.querySelectorAll('.toggle-details-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const details = this.nextElementSibling;
      if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        this.textContent = "Hide Details";
      } else {
        details.style.display = "none";
        this.textContent = "Show Details";
      }
    });
  });

  // === Contact Form Validation ===
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    // Clear previous errors and success
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('formSuccess').textContent = '';

    // Name validation
    const name = document.getElementById('name').value.trim();
    if (name === '') {
      document.getElementById('nameError').textContent = 'Please enter your name.';
      valid = false;
    }

    // Email validation (basic)
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Enter a valid email address.';
      valid = false;
    }

    // Message validation
    const message = document.getElementById('message').value.trim();
    if (message === '') {
      document.getElementById('messageError').textContent = 'Please enter a message.';
      valid = false;
    }

    // If valid, show success message and reset
    if (valid) {
      document.getElementById('formSuccess').textContent = 'Message sent! (Demo only)';
      form.reset();
    }
  });

  // === Bonus: Chart.js Skills Chart ===
  if (window.Chart) {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'Git'],
        datasets: [{
          label: 'Skill Level',
          data: [9, 8, 7, 7],
          backgroundColor: [
            'rgba(106, 176, 76, 0.7)',
            'rgba(90, 90, 200, 0.7)',
            'rgba(245, 183, 49, 0.7)',
            'rgba(75, 192, 192, 0.7)'
          ]
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true, max: 10 }
        }
      }
    });
  }
});
