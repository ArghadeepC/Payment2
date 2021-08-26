function valform()
{
  var cardno =document.myform.ucard;
  var name= document.myform.uname;
  var cvv=document.myform.upass;
  if(card_val(cardno))
  {
    if(cvv_val(cvv))
    {
    if(name_val(name))
    {
    return true;
  }
}
  }
else
{
  return false;
}
}
function card_val(cardno)
{
  var val_card=/^[0-9]{16}$/
  if(cardno.value.match(val_card))
  {
    return true;
  }
  else
  {
    alert('Wrong CardNo.')
    cardno.focus();
    return false;
  }
}
function name_val(name)
{
  
  var val_name=/^[A-Z a-z]{5,20}$/
  if(name.value.match(val_name))
  {
    return true;
  }
  else
  {
    alert('Name too short')
    name.focus();
    return false;
  }
}
function cvv_val(cvv)
{
  var val_cvv=/^[0-9]{3}$/
  if(cvv.value.match(val_cvv))
  {
    return true;
  }
  else
  {
    alert('Incorrect CVV')
    cvv.focus();
    return false;
  }
}