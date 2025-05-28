// Shirt type/color selection
document.querySelectorAll('.circle-button').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.circle-button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    };
  });
  
  document.querySelectorAll('.color-button').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.color-button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    };
  });
  
  // Switch front/back side
  document.getElementById('switchSide').onclick = () => {
    currentSide = currentSide === 'front' ? 'back' : 'front';
    clearCanvas();
    alert(`Switched to ${currentSide} side`);
  };
  