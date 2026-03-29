const sleepForm = document.getElementById('sleepForm');
const mondayInput = document.getElementById('monday');
const tuesdayInput = document.getElementById('tuesday');
const wednesdayInput = document.getElementById('wednesday');
const thursdayInput = document.getElementById('thursday');
const fridayInput = document.getElementById('friday');
const saturdayInput = document.getElementById('saturday');
const sundayInput = document.getElementById('sunday');
const idealHoursInput = document.getElementById('idealHours');
const results = document.getElementById('results');

sleepForm.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log('clicked');
});
