const productList = document.querySelector('table');
productList.addEventListener('click', function(event) {
  event.preventDefault();
  const btnExcluir = event.target;
  if (btnExcluir.classList.contains('btn-excluir')) {
    const url = btnExcluir.href;
    
    fetch(url, {
      method: 'DELETE'
    }).then(function() {
      btnExcluir.parentNode.parentNode.remove();
    })
  }
})

