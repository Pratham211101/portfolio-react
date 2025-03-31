const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
        Want to talk? Just hit me an email at{" "}
        <a
          href="mailto:goswamipratham21112001@gmail.com" //change this
          className="text-primary hover:underline"
        >
          goswamipratham21112001@gmail.com 
        </a>
        . I'll respond as soon as I can.
      </p>
    </section>
  )
}

export default Contact
