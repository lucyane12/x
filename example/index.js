  <script>

    const zeev = new XMLHttpRequest();

    const method = "GET";

    const url = "https://zeev-x.github.io/x/parent.json";

    zeev.open(method,url,true);

    zeev.onreadystatechange = function(){

    if(this.readyState == 4 && this.status == 200){

      var data = JSON.parse(zeev.responseText);

      var y = Math.floor(Math.random()*data.length);

      var res = data[y].img;

      var web = `<img src="${res}" width="500px">`;

      var sty = `<style>body { text-align: center; }</style>`

      //document.getElementById("result").innerHTML = web;

      document.write(web + sty)

    }

    };

    zeev.send();

  </script>
