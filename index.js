// Your code goes here
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text');
    if (textElement) {
      textElement.textContent = 'This is really cool!';
    } else {
      console.alert('text not found');
    }
  });