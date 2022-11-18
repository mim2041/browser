const question =  confirm('Do you want to see the location of your website??');
if(question === true){
    console.log(document.location);
}
else{
    alert('thank you');
}