function ContactForm() {
  return (
    <div class="form">
      <h1>MESSAGE ME</h1>
      <p>Your message will be sent directly to my Gmail inbox.</p>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="2c6f8bf7-7454-47a4-afa6-aaf1abe507c7"
        />

        <input type="text" name="name" placeholder="Name" required />
        <br />
        <input type="email" name="email" placeholder="Email" required />
        <br />
        <input type="text" name="subject" placeholder="Subject" required />
        <br />
        <textarea name="message" placeholder="Message" required></textarea>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
