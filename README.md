# Big Kev's Pie Place

#### Object and Method Practice for Epicodus 11.6.2020

#### by _**Kevin Kirkley**_

## Description
This page is a basic example of a retail UI for a pizza parlor. The page takes input reguarding the size of the pizza and the toppings that the user wants on the pizza. In the business logic portion of the Javascript code, the program takes in these values and calculates the total cost of the pizza. It then returns this information back to the user as an order confirmation card at the bottom of the screen. There is still quite a bit to add to this program, such as the ability to order multiple pizzas, provide more options in the way of the pizzas and to add a delivery function that would then take user address and contact information. 
 

## Specifications

| Describe: | Input | Output |
| :-----------------------------------| :------------- | :------------- |
| object:Pizza() | | |
| Object: Pizza containing parameters; Size, Sauce, Toppings, Running Price| newPizza = new Pizza(Large, Pesto, Chicken, 20) | newPizza {"large", "pesto", "chicken", 20} |
|Changed Object: Pizza for simplicity | | |
| Object: Pizza containing parameters : sizes, toppings | newPizza = new Pizza("large", "pepperoni") | newPizza{"large", "pepperoni"} |
| Method: pizzaTotalPrice() | | |
|Broke down size and topping pricing into two different methods | | |
| Method: pizzaSizePrice() | | | 
| Takes size information and calculates a price | newPizza.pizzaPrice("large") | price = $15 |
| Method: checkToppings() | | |
| Takes user input from checkboxes and places them into array. | User Selects: Cheese, Pepperoni | checkToppings  {"Cheese","Pepperoni}
| Method: pizzaToppingsPrice() | | | 
| Takes topping inputs and calculates price based upon number of toppings and size of pizza| {"cheese","pepperoni"}" | pizzaToppingPrice = 2 | 
| Method: totalPrice() | | |
| This price adds the sizePrice and pizzaToppingPrice together | newPizza{Large, [pepperoni, cheese]} (15+6) | 21 |






## Setup/Installation Requirements

Software Requirements
1. Internet Browser
2. A code editor such as VSCode in order to view or edit codebase. 

Open by downloading:
1. Download the [repository](https://github.com/kevinkirkl3y/pizzaParlor.git) onto your computer by clicking the 'clone or download button'.
2. Double click the index.html to open it within your browser.

Open with Bash/GitBash:
1. Clone this repository onto your computer: 'git clone https://github.com/kevinkirkl3y/pizzaParlor.git'
2. Navigate into the 'MrRoboger' directory and open in VSCode or preferred text editor using 'code .' in your terminal.
3. Open index.html in Google Chrome or your preferred browser. 

View my live website here: 
[Pizza Parlor](kevinkirkl3y.github.io/pizzaParlor/)

## Known Bugs
* The only known bug is when a size is not input after the alert is displayed telling user to input a size the order confirmation pops up without all of the information neccessary. No know workaround yet. 



## Support and contact detail

_Contact Kevin Kirkley at [kevinmkirkley@gmail.com](mailto:kevinmkirkley@gmail.com) with and questions, concerns or additions._

## Technologies Used 

* _HTML_
* _CSS_
* _Bootstrap_
* _Markdown_
* _Git_
* _JQuery_
* _JavaScript_
* _VSCode_
* _Google Fonts_

### License

Copyright (c) 2020 **_Kevin Kirkley_**
This software is licensed under the MIT license.