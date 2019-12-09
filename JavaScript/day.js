var day;
switch (new Date().getDay()) {
case 0:
   day = "Sunday! Today's offer is 10% off all products!";
   break;
case 1:
   day = "Monday! Today's offer is 10% off our Brownie!";
   break;
case 2:
   day = "Tuesday! Today's offer is 10% off our Chocolate Cookie!";
   break;
case 3:
   day = "Wednesday! Today's offer is 10% off our Chocolate Chip Cookie!";
   break;
case 4:
   day = "Thursday! Today's offer is 10% off our Cupcake!";
case 5:
   day = "Friday! Todays offer is 10% off our regular Chocolate!";
   break;
case 6:
   day = "Saturday! Today's offer is 10% off our Vegan Chocolate!";
}

document.getElementById("offer").innerHTML = "It's " + day;
