function changeContent() {
    const heading = document.getElementById('dynamicText');
    heading.textContent = 'Text Updated with JavaScript!';
    heading.style.color = 'blue';
    heading.style.fontSize = '28px';
  }
  
  function toggleElement() {
    const container = document.getElementById('container');
    const existing = document.getElementById('removable');
  
    if (existing) {
      container.removeChild(existing);
    } else {
      const newDiv = document.createElement('div');
      newDiv.id = 'removable';
      newDiv.textContent = 'I was added via JavaScript!';
      container.appendChild(newDiv);
    }
  }
  