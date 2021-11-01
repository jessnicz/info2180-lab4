window.addEventListener('load', ()=>{

    var supSearch = document.querySelector('input#supSearch').value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/,'');;
    var searchBtn = document.querySelector('#searchBtn');
    var xhttp;
    
    searchBtn.addEventListener('click', function(element) {
        element.preventDefault();

        xhttp = new XMLHttpRequest();

        var url = `superheroes.php?query=${supSearch}`;
        xhttp.onreadystatechange = searchButton;
        xhttp.open('GET', url);
        xhttp.send();
        });


    function searchButton() {
        if (xhttp.readyState == XMLHttpRequest.DONE) {
            if (xhttp.status == 200) {
                var response = xhttp.response;
                var result = document.querySelector('#result');
                result.innerHTML = response;
                //alert(response);
          } 
        }
      }

     
});