for (let i = 0; i < 35; i++) {
    const gridMaker = document.getElementById("gallows"); 
    const placeGrid = document.createElement("div");
      placeGrid.classList.add("hangGallows");
      placeGrid.id = (i); 
      placeGrid.textContent = i;
      gridMaker.appendChild(placeGrid);
}