function validate() {
  if (document.basketForm.Product.value == "-1")
  {
    alert("Please select a product!");
    return false;
  }

  if (document.basketForm.firstName.value == "")
  {
    alert("Please provide your first name!");
    document.basketForm.firstName.focus();
    return false;
  }

 if (document.basketForm.secondName.value == "")
 {
   alert("Please provide your second name!");
   document.basketForm.secondName.focus();
   return false;
 }

 if (document.basketForm.Email.value == "")
 {
   alert("Please provide your Email!");
   document.basketForm.Email.focus();
   return false;
 }

 var emailID = document.basketForm.Email.value;
 atpos = emailID.indexOf("@");
 dotpos = emailID.lastIndexOf(".");

 if (atpos < 1 || ( dotpos - atpos < 2 )) {
   alert("Please provide a correct email ID!")
   document.basketForm.Email.focus();
   return false;
 }

 if (document.basketForm.Address.value == "")
 {
   alert("Please provide an address!");
   document.basketForm.Address.focus();
   return false;
 }

if (document.basketForm.Postcode.value == "")
{
  alert("Please provide a postcode in the format #### ###!");
  document.basketForm.Postcode.focus();
  return false;
}

if (document.basketForm.creditcardNumber.value == "")
{
  alert("Please provide a credit card number!");
  document.basketForm.creditcardNumber.focus();
  return false;
}
 return(true);
}
