const modal = document.querySelector('.modal');

const exportColor = () => {
  const colorPalettes = document.querySelectorAll('.color-palette__row');
  const colorSelector = document.querySelectorAll('.color-palette__cell-hex-value');
  const colors = [...colorSelector];
  const textArea = document.querySelector('#jsonText');
  const COLOR_LABELS = ['900', '800', '700', '600', '500', '400', '300', '200', '100', '50'];
  let exported = {};

  if (colorPalettes.length > 2) {
    let labelIndex = 0;
    colorPalettes.forEach((palette, paletteIndex) => {
      if (paletteIndex === 0) {
        const filteredColors = colors.filter((color, colorIndex) => colorIndex < 10);
        filteredColors.forEach((hex, hexIndex) => {
          exported['Primary'] = {
            ...exported['Primary'],
            [COLOR_LABELS[labelIndex]]: hex.textContent,
          };
          labelIndex++;
        });
      }
      if (paletteIndex === 1) {
        let labelIndex = 0;
        const filteredColors = colors.filter((color, colorIndex) => colorIndex >= 10 && colorIndex < 20);
        filteredColors.forEach((hex, hexIndex) => {
          exported['Complementary'] = {
            ...exported['Complementary'],
            [COLOR_LABELS[labelIndex]]: hex.textContent,
          };
          labelIndex++;
        });
      }
      if (paletteIndex === 2) {
        let labelIndex = 0;
        const filteredColors = colors.filter((color, colorIndex) => colorIndex >= 20 && colorIndex < 30);
        filteredColors.forEach((hex, hexIndex) => {
          exported['Analogous - 1'] = {
            ...exported['Analogous - 1'],
            [COLOR_LABELS[labelIndex]]: hex.textContent,
          };
          labelIndex++;
        });
      }
      if (paletteIndex === 3) {
        let labelIndex = 0;
        const filteredColors = colors.filter((color, colorIndex) => colorIndex >= 30 && colorIndex < 40);
        filteredColors.forEach((hex, hexIndex) => {
          exported['Analogous - 2'] = {
            ...exported['Analogous - 2'],
            [COLOR_LABELS[labelIndex]]: hex.textContent,
          };
          labelIndex++;
        });
      }
      if (paletteIndex === 4) {
        let labelIndex = 0;
        const filteredColors = colors.filter((color, colorIndex) => colorIndex >= 40 && colorIndex < 50);
        filteredColors.forEach((hex, hexIndex) => {
          exported['Triadic - 1'] = {
            ...exported['Triadic - 1'],
            [COLOR_LABELS[labelIndex]]: hex.textContent,
          };
          labelIndex++;
        });
      }
      if (paletteIndex === 5) {
        let labelIndex = 0;
        const filteredColors = colors.filter((color, colorIndex) => colorIndex >= 50);
        filteredColors.forEach((hex, hexIndex) => {
          exported['Triadic - 2'] = {
            ...exported['Triadic - 2'],
            [COLOR_LABELS[labelIndex]]: hex.textContent,
          };
          labelIndex++;
        });
      }
    });
  } else {
    colorPalettes.forEach((palette, paletteIndex) => {
      if (paletteIndex === 0) {
        let labelIndex = 0;
        const filteredColors = colors.filter((color, colorIndex) => colorIndex < 10);
        filteredColors.forEach((hex, hexIndex) => {
          exported['Primary'] = {
            ...exported['Primary'],
            [COLOR_LABELS[labelIndex]]: hex.textContent,
          };
          labelIndex++;
        });
      } else {
        let labelIndex = 0;
        const filteredColors = colors.filter((color, colorIndex) => colorIndex >= 10);
        filteredColors.forEach((hex, hexIndex) => {
          exported['Secondary'] = {
            ...exported['Secondary'],
            [COLOR_LABELS[labelIndex]]: hex.textContent,
          };
          labelIndex++;
        });
      }
    });
  }

  textArea.textContent = JSON.stringify(exported, null, '  ');
  modal.style.display = 'block';
};

// Controls

const closeButton = document.querySelector('.close');
const contentArea = document.querySelector('.color-tool');

contentArea.insertAdjacentHTML(
  'beforeend',
  `<div class="exportContainer" onclick="exportColor()" title="Export Palette">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon-file-export" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3" />
    </svg>`,
);

// When the user clicks on <button> (x), close the modal
closeButton.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
