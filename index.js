$(document).ready(function(){
    var curtab = 1;
    var tabWidth = $('#tabs .tab').width();
    var totalcost = 0;

    var orderReady = {  'size':'',
                        'crust':'',
                        'cheese':'',
                        'sauce':'',
                        'meats':[],
                        'vegis':[]
                    };
    var pizzasize = {
                    1:'Personal Pizza',
                    2:'Medium Pizza',
                    3:'Large Pizza',
                    4:'Extra Large Pizza'
                }

    var crust = {   1:'Plain Crust',
                    2:'Garlic Butter Crust',
                    3:'Spicy Crust',
                    4:'House Special Crust',
                    5:'Cheese Stuffed Crust'
                }
    var cheese = {  
    1:'Regular Cheese',         
    2:'Extra Cheese',     
    3:'No Cheese'
    }
    
    var sauce = {  
         1:'Marinara Sauce',       
         2:'White Sauce',        
         3:'Barbeque Sauce',          
         4:'No Sauce'
    }

    var meats = {
        1:'Pepperoni',            
        2:'Sausage',         
        3:'Canadian Bacon',        
        4:'Ground Beef',          
        5:'Anchovies',
        6:'Chicken'

    }
    var veggi = {   
        1:'Tomatoes',       
        2:'Onions',      
        3:'Olives',    
        4:'Green Peppers',       
        5:'Mushrooms',         
        6:'Pineapple',         
        7:'Spinach',       
        8:'Jalapenos'
    }    

    var costs = {   
        'size':{1:350, 2:500, 3:750, 4:1200},
        'crust':{1:0, 2:0, 3:0, 4:0, 5:250},
        'cheese':{1:0, 2:250, 3:0},
        'extra-toppings':250
    } 

})