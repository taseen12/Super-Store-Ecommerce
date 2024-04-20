import React from 'react'
import styled from 'styled-components';
const Contact = () => {
  return (
    <Wrapper>
      <h2 className='common-heading'>Contact Page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7039409324357!2d90.3708019!3d23.757934700000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf56d7c17a9d%3A0x4687cbce06903840!2sLalmatia%20Aarong%20Rd%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1711473691093!5m2!1sen!2sbd"
      width="100%" 
      height="400" 
      style={{ border:0 }}
      allowFullscreen="" 
      loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className='container'>
        <div className='contact-form'>
          <form action="" method='POST' className='contact-inputs'>
            <input 
            type="text" 
            placeholder='username' name='username' 
            required
            autoComplete='off'
            value=""/>
            <input 
            type="email" 
            placeholder='Email' 
            name='Email' 
            required
            autoComplete='off'
            value=""/>
            <textarea 
            name="Message" 
            cols="30" 
            rows="10" 
            required
            autoComplete='off'
            placeholder='Enter Your Message'></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
      </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
text-align: center;

.container {
  margin-top: 6rem;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;

export default Contact