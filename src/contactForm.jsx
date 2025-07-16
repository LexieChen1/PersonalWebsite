import emailjs from 'emailjs-com';

function handleSubmit(e) {
  e.preventDefault();
  emailjs.sendForm('service_ju3od6w', 'template_ks3jnag', e.target, '3WmOmtdWXL4Tt554X')
    .then(() => alert('Message sent!'))
    .catch((error) => alert('Failed to send message'));
}

export default function ContactForm() {
    return (
      <section id="contact" className="bg-background text-white py-16 px-6">
        <div className="text-center">
            <h2 className="text-4xl font-bold mb-2 border-b-4 border-text inline-block">
                Get In Touch
            </h2>
            <p className="text-gray-300 mb-10">Have a question or want to work together? Drop me a message below!</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-300">
            <p>Fill up the form and I'll get back to you as soon as possible.</p>
  
            <div>
              <p className="font-semibold">📧 Email</p>
              <p>sun901026@gmail.com</p>
            </div>
  
            <div>
              <p className="font-semibold">📞 Phone</p>
              <p>+1 (315) 572-9094</p>
            </div>
  
            <div>
              <p className="font-semibold">📍 Location</p>
              <p>Charlottesville, VA</p>
            </div>
  
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/LexieChen1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github text-2xl hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/in/lexiechen---/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-2xl hover:text-white" />
              </a>
              <a href="mailto:dkt4kr@virginia.edu">
                <i className="fas fa-envelope text-2xl hover:text-white" />
              </a>
            </div>
          </div>
  
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-text p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
                <input name="name" type="text" placeholder="Your Name" className="p-3 rounded bg-white text-black outline-none" />
                <input name="email" type="email" placeholder="Your Email" className="p-3 rounded bg-white text-black outline-none" />
            </div>
            <input name="subject" type="text" placeholder="Subject" className="p-3 rounded bg-white text-black w-full outline-none" />
            <textarea name="message" placeholder="Your message here..." rows="5" className="p-3 rounded bg-white text-black w-full outline-none" />
            <button type="submit" className="bg-white hover:bg-background px-6 py-3 rounded font-semibold text-black w-full">
                Send Message
            </button>
        </form>
        </div>
      </section>
    );
  }
  