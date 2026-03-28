
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");

  
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;

  
  lastModifiedSpan.textContent = document.lastModified;


  const temp = 10; 
  const windSpeed = 12; 

  const windChillSpan = document.getElementById("windchill");

  function calculateWindChill(tempC, speedKmH) {
    
    return (
      13.12 +
      0.6215 * tempC -
      11.37 * Math.pow(speedKmH, 0.16) +
      0.3965 * tempC * Math.pow(speedKmH, 0.16)
    ).toFixed(1);
  }


  if (temp <= 10 && windSpeed > 4.8) {
    windChillSpan.textContent = calculateWindChill(temp, windSpeed) + " °C";
  } else {
    windChillSpan.textContent = "N/A";
  }
});
