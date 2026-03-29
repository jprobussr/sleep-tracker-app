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

  const actualSleepHours =
    monday + tuesday + wednesday + thursday + friday + saturday + sunday;

  const idealSleepHours = idealHours * 7;

  let message = '';

  if (actualSleepHours === idealSleepHours) {
    message = 'You got the perfect amount of sleep this week.';
  } else if (actualSleepHours > idealSleepHours) {
    const extraSleep = actualSleepHours - idealSleepHours;
    message = `You got ${extraSleep} more hours of sleep than you needed this week.`;
  } else {
    const sleepDebt = idealSleepHours - actualSleepHours;
    message = `You should get some rest. You were short by ${sleepDebt}`;
  }

  results.innerHTML = `
    <h2>Your Results</h2>
    <p><strong>Actual sleep:</strong> ${actualSleepHours} hours</p>
    <p><strong>Ideal sleep:</strong> ${idealSleepHours} hours</p>
    <p><strong>Message:</strong> ${message}</p>

  `;
});
