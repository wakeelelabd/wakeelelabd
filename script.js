const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_7peduj3';
   const templateID = 'template_bo4yzrb';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'تم تسجيل البيانات';
      alert('تم الارسال');
    }, (err) => {
      btn.value = 'اعد الارسال';
      alert(JSON.stringify(err));
    });
});
// var today;
// DocumentTimeline.arguments.DocumentTimeline.addEventListener(
//   SubmitEvent , ()=>{
//     if (!new Date();){
//       today="thanks for thanks";
//     }
//     else{
//       today="please try again";
//     }
//   }
// )