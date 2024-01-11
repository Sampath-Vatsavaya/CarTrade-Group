fetch("carsdata.json")
      .then(function(response) {
        return response.json()})
      .then(function(data){
           const tabledata = document.querySelector("#tabledata");
           let out="";
           i=0;
          var urls = ["https://cdn.wallpapersafari.com/37/15/6Fk0sM.jpg","https://tse2.mm.bing.net/th?id=OIP.JvXQaPWIaAAr9lzvbjvMlgHaEg&pid=Api&P=0&h=180","http://1.bp.blogspot.com/-_3-IWOA7uE0/Tbi__JwBd-I/AAAAAAAABcg/RQe4UgEQa-k/s1600/cars-wallpaper-188.jpg","https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-bugatti-3.jpg","https://tse2.mm.bing.net/th?id=OIP.3BnpuUo3Lrwh_-t2I9VjKgHaDl&pid=Api&P=0&h=180","https://purepng.com/public/uploads/large/red-edition-audi-luxury-car-jdc.png"]
           var c=1;
           for(let d of data)
           {
            console.log(d.id);
            var arr = d.body_styles
            console.log(arr);
              out += 
              ` <tr>
              <td>${c}</td>
                <td>${d.year}</td>
                <td><img src="${urls[i]}"></td>
                <td>${d.make}</td>
                <td>${d.model}</td>
                
                <td>${d.body_styles}</td>
              </tr> `;
              i=i+1;
              c=c+1;
              if(i==6)
              {
                i=0;
              }
           }
           tabledata.innerHTML = out;
      }
      .catch(error)
      {
        console.log(error);
      })

    

   