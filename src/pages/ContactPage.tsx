import { useState, type FormEvent } from 'react'
import { ASSETS, CONTACT } from '../data/assets'
import { Hero } from '../components/Hero'

type FormStatus = 'idle' | 'success' | 'error'

const fieldClass =
  'mb-5 w-full border border-black/15 bg-white px-4 py-3 text-base text-ink outline-none transition-colors focus:border-brand'

export function ContactPage() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!email.trim()) {
      setStatus('error')
      return
    }

    try {
      const response = await fetch('https://formspree.io/f/mrpzavwe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim() || '—',
          email: email.trim(),
          message: message.trim(),
        }),
      })

      if (response.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Hero title="Contact Us" image={ASSETS.backgrounds.contact} />

      <section className="mx-auto max-w-[1140px] px-5 pb-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="mb-8 text-3xl font-normal">Contact us</h2>

            {status !== 'success' && (
              <form onSubmit={handleSubmit}>
                <label htmlFor="Name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  className={fieldClass}
                  maxLength={256}
                  name="name"
                  placeholder="Enter your name"
                  type="text"
                  id="Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />

                <label htmlFor="Email" className="mb-2 block text-sm font-medium">
                  Email Address
                </label>
                <input
                  className={fieldClass}
                  maxLength={256}
                  name="Email"
                  placeholder="Enter your email"
                  type="email"
                  id="Email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />

                <label htmlFor="Message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="Message"
                  name="Message"
                  placeholder="Hi there, I’m reaching out because I think we can collaborate…"
                  maxLength={5000}
                  rows={6}
                  className={`${fieldClass} resize-y`}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />

                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center border-0 bg-brand px-6 py-3 text-xs font-medium uppercase tracking-[2px] text-white transition-colors duration-300 hover:bg-brand-hover"
                >
                  Submit
                </button>
              </form>
            )}

            {status === 'success' && (
              <div className="bg-green-50 p-6 text-brand">
                Thank you! Your submission has been received!
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 bg-red-50 p-4 text-red-700">
                Oops! Something went wrong while submitting the form.
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-widest">Our Office</p>
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-ink/70 underline hover:text-ink"
              >
                {CONTACT.address}
              </a>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-widest">Contact</p>
              <a href={CONTACT.mailto} className="mb-2 block text-brand underline">
                {CONTACT.email}
              </a>
              <p className="text-ink/70">{CONTACT.phone}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
