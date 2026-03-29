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
const resetBtn = document.getElementById('reset-btn');

sleepForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (
    !mondayInput.value ||
    !tuesdayInput.value ||
    !wednesdayInput.value ||
    !thursdayInput.value ||
    !fridayInput.value ||
    !saturdayInput.value ||
    !sundayInput.value ||
    !idealHoursInput.value
  ) {
    results.innerHTML = `
        <h2>Your Results</h2>
        <p>Please fill in all fields before calculating.</p>
    `;
    return;
  }

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
  let status = '';

  if (actualSleepHours === idealSleepHours) {
    message = 'You got the perfect amount of sleep this week.';
    status = 'Perfect';
  } else if (actualSleepHours > idealSleepHours) {
    const extraSleep = actualSleepHours - idealSleepHours;
    message = `You got ${extraSleep} more hours of sleep than you needed this week.`;
    status = 'Above Ideal';
  } else {
    const sleepDebt = idealSleepHours - actualSleepHours;
    message = `You should get some rest. You were short by ${sleepDebt} hours this week.`;
    status = 'Below Ideal';
  }

  results.innerHTML = `
    <h2>Your Results</h2>
    <p><strong>Actual sleep:</strong> ${actualSleepHours} hours</p>
    <p><strong>Ideal sleep:</strong> ${idealSleepHours} hours</p>
    <p><strong>Status:</strong> ${status}</p>
    <p>${message}</p>

  `;
});

resetBtn.addEventListener('click', () => {
  sleepForm.reset();

  results.innerHTML = `
        <h2>Your Results</h2>
        <p>Results cleared. Enter new values.</p>
    `;
});
