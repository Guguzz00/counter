window.onload = function () {
  // Stili base del body
  document.body.style.margin = '0';
  document.body.style.backgroundColor = '#000';
  document.body.style.display = 'flex';
  document.body.style.justifyContent = 'center';
  document.body.style.alignItems = 'center';
  document.body.style.height = '100vh';
  document.body.style.fontFamily = 'Helvetica Neue, sans-serif';

  // Contenitore calcolatrice bianco
  const calculator = document.createElement('div');
  calculator.style.backgroundColor = '#fff';
  calculator.style.borderRadius = '30px';
  calculator.style.padding = '30px';
  calculator.style.boxShadow = '0 0 30px rgba(0,0,0,0.3)';
  calculator.style.display = 'flex';
  calculator.style.flexDirection = 'column';
  calculator.style.alignItems = 'center';
  calculator.style.width = '320px';

  // Display in alto
  const display = document.createElement('div');
  display.innerText = '0';
  display.style.color = '#000';
  display.style.fontSize = '64px';
  display.style.textAlign = 'right';
  display.style.width = '100%';
  display.style.padding = '20px 10px';
  display.style.boxSizing = 'border-box';
  display.style.minHeight = '90px';
  display.style.borderBottom = '1px solid #ccc';

  // Contenitore bottoni + e −
  const buttonRow = document.createElement('div');
  buttonRow.style.display = 'flex';
  buttonRow.style.justifyContent = 'space-around';
  buttonRow.style.marginTop = '30px';
  buttonRow.style.width = '100%';

  // Funzione per creare pulsanti + e −
  function createRoundButton(label) {
    const btn = document.createElement('button');
    btn.innerText = label;
    btn.style.backgroundColor = '#f2f2f2';
    btn.style.color = '#000';
    btn.style.fontSize = '32px';
    btn.style.border = 'none';
    btn.style.borderRadius = '50%';
    btn.style.width = '80px';
    btn.style.height = '80px';
    btn.style.cursor = 'pointer';
    btn.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    btn.style.transition = 'all 0.2s ease';

    // Hover effect
    btn.onmouseover = () => {
      btn.style.backgroundColor = '#ddd';
    };
    btn.onmouseout = () => {
      btn.style.backgroundColor = '#f2f2f2';
    };

    // Click animation
    btn.onmousedown = () => {
      btn.style.transform = 'scale(0.95)';
    };
    btn.onmouseup = () => {
      btn.style.transform = 'scale(1)';
    };

    return btn;
  }

  // Funzione per creare pulsante Reset
  function createResetButton(label) {
    const btn = document.createElement('button');
    btn.innerText = label;
    btn.style.backgroundColor = '#e0e0e0';
    btn.style.color = '#000';
    btn.style.fontSize = '20px';
    btn.style.border = 'none';
    btn.style.borderRadius = '15px';
    btn.style.padding = '12px 30px';
    btn.style.marginTop = '30px';
    btn.style.cursor = 'pointer';
    btn.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.15)';
    btn.style.transition = 'all 0.2s ease';

    btn.onmouseover = () => {
      btn.style.backgroundColor = '#ccc';
    };
    btn.onmouseout = () => {
      btn.style.backgroundColor = '#e0e0e0';
    };

    btn.onmousedown = () => {
      btn.style.transform = 'scale(0.98)';
    };
    btn.onmouseup = () => {
      btn.style.transform = 'scale(1)';
    };

    return btn;
  }

  // Variabile counter
  let count = 0;

  // Bottoni + e −
  const minusBtn = createRoundButton('−');
  const plusBtn = createRoundButton('+');

  minusBtn.onclick = () => {
    count--;
    display.innerText = count;
  };

  plusBtn.onclick = () => {
    count++;
    display.innerText = count;
  };

  // Bottone Reset
  const resetBtn = createResetButton('Reset');
  resetBtn.onclick = () => {
    count = 0;
    display.innerText = count;
  };

  // Aggiunta elementi al DOM
  buttonRow.appendChild(minusBtn);
  buttonRow.appendChild(plusBtn);
  calculator.appendChild(display);
  calculator.appendChild(buttonRow);
  calculator.appendChild(resetBtn);
  document.body.appendChild(calculator);
};
