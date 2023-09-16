const successPrompt=document.querySelector(".success");
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzU0scvvLUukqURXfy5L_F6EaQqfwxAcaTT6N5j2YMj8VaU7ZSI3djULp1Jx3RWxArm/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        successPrompt.classList.add("displayBlock");
        form.reset()
        console.log('Success!', response)
        setTimeout(() => {
        successPrompt.classList.remove("displayBlock");
            
        }, 1500);
      })
      .catch(error => console.error('Error!', error.message))
  })