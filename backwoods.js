window.onload = function() {
  setTimeout(function() {
    const spanElement = document.querySelector('span[data-set="user-profile"]');
    if (spanElement) {
      const imgElement = spanElement.querySelector('img');
      if (imgElement) {
        imgElement.src = 'x';
      } else {
        console.warn('Image element inside the span not found!');
      }
    } else {
      console.warn('Span element with data-set="user-profile" not found!');
    }
  }, 1500);
};
