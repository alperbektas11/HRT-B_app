document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('dynamic-updates');
  if (!container) return;

  try {
    const response = await fetch('updates.json');
    const updates = await response.json();
    container.innerHTML = '';
    updates.forEach(update => {
      const div = document.createElement('div');
      div.className = 'p-6 bg-white shadow-lg rounded-lg space-y-1';
      const date = new Date(update.date).toLocaleDateString();
      div.innerHTML = `\n        <p class="text-sm text-gray-500">${date}</p>\n        <h4 class="text-xl font-semibold">${update.title}</h4>\n        <p>${update.summary}</p>\n      `;
      container.appendChild(div);
    });
  } catch (err) {
    console.error('Failed to load updates', err);
    container.innerHTML = '<p class="text-red-600">Failed to load updates.</p>';
  }
});
