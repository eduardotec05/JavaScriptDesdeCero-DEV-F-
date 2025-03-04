document.addEventListener("DOMContentLoaded", function () {
  const lengthSlider = document.getElementById("length-slider");
  const lengthValue = document.getElementById("length-value");
  const uppercaseCheckbox = document.getElementById("uppercase");
  const lowercaseCheckbox = document.getElementById("lowercase");
  const numbersCheckbox = document.getElementById("numbers");
  const symbolsCheckbox = document.getElementById("symbols");
  const generateBtn = document.getElementById("generate-btn");
  const passwordDisplay = document.getElementById("password");
  const copyBtn = document.getElementById("copy-btn");

  // Actualizar el valor mostrado del slider
  lengthSlider.addEventListener("input", function () {
    lengthValue.textContent = this.value;
    updateStrengthMeter();
  });

  // Función para generar contraseña
  function generatePassword() {
    const length = lengthSlider.value;
    const useUppercase = uppercaseCheckbox.checked;
    const useLowercase = lowercaseCheckbox.checked;
    const useNumbers = numbersCheckbox.checked;
    const useSymbols = symbolsCheckbox.checked;

    // Verificar que al menos una opción esté seleccionada
    if (!useUppercase && !useLowercase && !useNumbers && !useSymbols) {
      alert("Selecciona al menos un tipo de carácter");
      return;
    }

    let charset = "";
    if (useUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (useNumbers) charset += "0123456789";
    if (useSymbols) charset += "!@#$%^&*()_+{}[]|:;<>,.?/~";

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    passwordDisplay.textContent = password;
    updateStrengthMeter();
  }

  // Función para actualizar el medidor de fuerza
  function updateStrengthMeter() {
    const length = parseInt(lengthSlider.value);
    const complexity =
      (uppercaseCheckbox.checked ? 1 : 0) +
      (lowercaseCheckbox.checked ? 1 : 0) +
      (numbersCheckbox.checked ? 1 : 0) +
      (symbolsCheckbox.checked ? 1 : 0);

    const bars = document.querySelectorAll(".bar");
    let strength = "";
    let activeBars = 0;

    if (length < 8) {
      strength = "DÉBIL";
      activeBars = 1;
    } else if (length < 10 && complexity < 3) {
      strength = "DÉBIL";
      activeBars = 1;
    } else if (length < 12 && complexity < 4) {
      strength = "MEDIA";
      activeBars = 3;
    } else if (length >= 12 && complexity >= 3) {
      strength = "FUERTE";
      activeBars = 4;
    } else {
      strength = "MEDIA";
      activeBars = 2;
    }

    document.querySelector(".strength-value").textContent = strength;

    bars.forEach((bar, index) => {
      if (index < activeBars) {
        bar.classList.add("active");
      } else {
        bar.classList.remove("active");
      }
    });
  }

  // Copiar contraseña al portapapeles
  copyBtn.addEventListener("click", function () {
    const password = passwordDisplay.textContent;
    navigator.clipboard.writeText(password).then(() => {
      copyBtn.textContent = "✓";
      setTimeout(() => {
        copyBtn.textContent = "📋";
      }, 800);
    });
  });

  // Generar contraseña al hacer clic en el botón
  generateBtn.addEventListener("click", generatePassword);

  // Actualizar medidor de fuerza cuando cambian las opciones
  uppercaseCheckbox.addEventListener("change", updateStrengthMeter);
  lowercaseCheckbox.addEventListener("change", updateStrengthMeter);
  numbersCheckbox.addEventListener("change", updateStrengthMeter);
  symbolsCheckbox.addEventListener("change", updateStrengthMeter);

  // Inicializar
  updateStrengthMeter();
});
