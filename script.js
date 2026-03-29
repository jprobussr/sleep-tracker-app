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

sleepForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const monday = Number(mondayInput.value);
  const tuesday = Number(tuesdayInput.value);
  const wednesday = Number(wednesdayInput.value);
  const thursday = Number(thursdayInput.value);
  const friday = Number(fridayInput.value);
  const saturday = Number(saturdayInput.value);
  const sunday = Number(sundayInput.value);
  const idealHours = Number(idealHoursInput.value);

  console.log(monday);
  console.log(tuesday);
  console.log(wednesday);
  console.log(thursday);
});
