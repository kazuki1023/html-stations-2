function displayList() {
  const u = document.createElement('ul');

  document.querySelectorAll('p').forEach((p) => {
    p.style.display = 'none';
    const text = p.textContent;
    const l = document.createElement('li');
    l.textContent = text;
    u.appendChild(l); 
  });

  document.getElementById('fruits').appendChild(u);
}