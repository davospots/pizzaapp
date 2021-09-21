
  $(document).ready(function(){
    function pizza(size, sauce, meat, veggie) {
        this.size = size;
        this.sauce = sauce; 
        this.meat = meat;
        this.veggie = veggie;
      }
      
      pizza.prototype.price = function() {
        var pieSize = this.size;
        var pieMeat = this.meat.length;
        var pieVeggie = this.veggie.length;


        if (pieSize === "Six") {
          return 6 + (pieMeat*100) + (pieVeggie*50);
        } else if (pieSize === "Ten") {
          return 10 + (pieMeat*100) + (pieVeggie*50);
        } else if (pieSIze === "Twelve"){
          return 12  + (pieMeat*100) + (pieVeggie*50);
        }
        else{
            return 14 + (pieMeat*100) + (pieVeggie*50)
        }
      }  


    $("form#order-form").submit(function(event){
        event.preventDefault();
        
        var orderSize = $('#size').val();
        var orderSauce = $('#sauce').val();
        var orderMeat = [];
        var orderVeggie = [];
        console.log(orderSize, orderSauce, orderMeat, orderVeggie);
      
        $("input:checkbox[name=meat]:checked").each(function () {
          orderMeat.push($(this).val());
        });
        $("input:checkbox[name=veggie]:checked").each(function () {
          orderVeggie.push($(this).val());
        });
    
        var newOrder = new Pizza(orderSize, orderSauce, orderMeat, orderVeggie);
        var orderPrice = newOrder.price().toFixed(2);
      
       
        $('.price').text(orderPrice);
        $('.size').text(newOrder.size);
        $('.sauce').text(newOrder.sauce);
        $('.meat').text(newOrder.meat);
        $('.veggie').text(newOrder.veggie);
    
        $('#receipt').show();
      
      });
  });
  