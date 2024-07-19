const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');


if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  // show light icon
  themeToggleLightIcon.classList.remove('hidden');
} else {
  themeToggleDarkIcon.classList.remove('hidden');
}

// Listen for toggle button click

themeToggleBtn.addEventListener('click', toggleMode);

function toggleMode() {
  console.log("Toggle button clicked");

  // Toggle icons
  themeToggleDarkIcon.classList.toggle('hidden');
  themeToggleLightIcon.classList.toggle('hidden');

  // If theme is set in local storage
  if (localStorage.getItem('color-theme')) {
    // If light, make dark and save in local storage
    if (localStorage.getItem('color-theme') === 'light') {
      console.log("Switching to dark mode");
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      console.log("Switching to light mode");
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  } else {
    // If theme is not in local storage
    if (document.documentElement.classList.contains('dark')) {
      console.log("Removing dark mode");
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      console.log("Adding dark mode");
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
}
