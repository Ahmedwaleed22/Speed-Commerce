const switchButton = document.getElementById('switch');

// First Plan
const firstPlanBranches = document.getElementById('first-plan-branches');
const firstPlanPrice = document.getElementById('first-plan-price');
const firstPlanNotes = document.getElementById('first-plan-notes');

// Second Plan
const secondPlanBranches = document.getElementById('second-plan-branches');
const secondPlanPrice = document.getElementById('second-plan-price');
const secondPlanNotes = document.getElementById('second-plan-notes');

// Third Plan
const thirdPlanBranches = document.getElementById('third-plan-branches');
const thirdPlanPrice = document.getElementById('third-plan-price');
const thirdPlanNotes = document.getElementById('third-plan-notes');


if (switchButton) {
  switchButton.addEventListener('change', () => {
      if (switchButton.checked) {
        firstPlanPrice.innerHTML = '1%/sales vol.';
        firstPlanNotes.textContent = '1% of your total platform sales Per Provider.';
  
        secondPlanPrice.innerHTML = '0.5%/sales vol.';
        secondPlanNotes.textContent = '0.5% of your total platform sales Per Provider.';
  
        thirdPlanPrice.innerHTML = '0.25%/sales vol.';
        thirdPlanNotes.textContent = '0.25% of your total platform sales Per Provider.';
      } else {
        firstPlanPrice.textContent = '$999/yr.';
        firstPlanNotes.textContent = '999 Per single branch per year.';
  
        secondPlanPrice.textContent = '$799/yr';
        secondPlanNotes.textContent = '799 Per single branch per year.';
  
        thirdPlanPrice.textContent = '$599/yr.';
        thirdPlanNotes.textContent = '599 Per single branch per year.';
      }
  });
}

const messageField = document.getElementById('messageField');
if (messageField) {
  messageField.addEventListener('keyup', function (e) {
    console.log('test')
    var charCount = e.target.value.length;
    document.getElementById('charCount').textContent = charCount;
  });
}
