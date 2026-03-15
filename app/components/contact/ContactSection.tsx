"use client"

export default function ContactSection() {

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
      })
    });
  }

  return (
    <section id="contact" className="py-20 text-center">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">

        <input name="name" placeholder="Name" className="w-full p-3 border rounded" />

        <input name="email" placeholder="Email" className="w-full p-3 border rounded" />

        <textarea name="message" placeholder="Message" className="w-full p-3 border rounded" />

        <button className="px-6 py-3 bg-blue-600 rounded">
          Send
        </button>

      </form>
    </section>
  );
}