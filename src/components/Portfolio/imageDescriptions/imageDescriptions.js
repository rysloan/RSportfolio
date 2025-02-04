const ImgDesc = () => {
  return (
    <ol style={{ listStyleType: 'decimal' }}>
      <li className='imageDescriptionItem'>
        Contact Area code uses EmailJS in order to sned me emails. I use a form element for users to type their name, email, and message then when they click the submit
        button I call the sendEmail function. This calls the emailJS.sendForm fuctions that uses my form and coverts it to s formated email that in sent to my
        email address.
      </li>
      <li className='imageDescriptionItem'>
        This is the file structure for my project. You can see that I have a components folder so that I can break up my app into different elements, like a navbar or a skills section. By doing this
        my code is able to be more structured and overall look cleaner.
      </li>
      <li className='imageDescriptionItem'>
        This is the code for my navbar on the top of the website.
      </li>
      <li className='imageDescriptionItem'>
        This is the code for my portolio section on my home page.
      </li>
    </ol>
  )
}

export default ImgDesc