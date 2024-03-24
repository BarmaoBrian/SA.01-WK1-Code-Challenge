
function calculate() {
   
    const speed = parseInt(document.getElementById('speed').value);
    let points = 0;
    
    if (speed < 70) {
      document.getElementById('result').textContent = 'Ok';
    } else {
    
      points = Math.floor((speed - 70) / 5);
        
      if (points > 12) {
        document.getElementById('result').textContent = 'License suspended';
      } else {
        document.getElementById('result').textContent = 'Points: ' + points;
      }
    }
  }