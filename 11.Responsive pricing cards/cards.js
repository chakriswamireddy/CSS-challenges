


function observeCheckbox() {
    const checkbox = document.getElementById('square');
    const basic = document.getElementById('price1');
    const prof = document.getElementById('price2');
    const mast = document.getElementById('price3');
  
    checkbox.addEventListener('change', (event) => {
      if (event.target.checked) {
        basic.innerText = '$20';
        prof.innerText = '$30';
        mast.innerText = '$40';
      } else {
        basic.innerText = '$200';
        prof.innerText = '$250';
        mast.innerText = '$400';
      }
    });
  }
