import { useState } from 'react';

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) return <section className="wrap narrow"><h1>Message sent</h1><p>Thanks for getting in touch.</p></section>;

  return (
    <section className="wrap narrow">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>Name<input type="text" required /></label>
        <label>Email<input type="email" required /></label>
        <label>Message<textarea rows="5" required /></label>
        <button className="btn">Send message</button>
      </form>
    </section>
  );
}

export default Contact;
