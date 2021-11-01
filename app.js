window.onload = function() {

    var heroSearch = document.querySelector('input#supSearch').value;
      var loadSearchBtn = document.querySelector('#searchBtn');
      var httpRequest;
    
      loadSearchBtn.addEventListener('click', function(element) {
        element.preventDefault();
    
        httpRequest = new XMLHttpRequest();
    
        // GET Request
        var url = `superheroes.php?search= ${heroSearch}`;
        httpRequest.onreadystatechange = searchButton;
        httpRequest.open('GET', url);
        httpRequest.send();
      });
    
      function searchButton() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            var response = httpRequest.responseText;
            var result = document.querySelector('#result');
            result.innerHTML = response;
            alert(response);
          } 
        }
      }
    
    };
