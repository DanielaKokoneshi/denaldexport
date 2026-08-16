import { ASSETS, CONTACT, SITE } from '../data/assets'

function InstagramIcon() {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-60">
      <title>Instagram</title>
      <path
        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
        fill="currentColor"
      />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-60">
      <title>TikTok</title>
      <path
        d="M21 8.02c-1.2 0-2.36-.36-3.33-1.02A5.94 5.94 0 0 1 15 2h-3.5v13.2a2.8 2.8 0 1 1-2.8-2.8c.3 0 .6.05.87.14V9.1a6.3 6.3 0 0 0-.87-.06 6.3 6.3 0 1 0 6.3 6.3V8.97c1.2.86 2.64 1.33 4.1 1.33V8.02H21z"
        fill="currentColor"
      />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-60">
      <title>Facebook</title>
      <path
        d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
        fill="currentColor"
      />
    </svg>
  )
}

const socialLinks = [
  { href: CONTACT.social.instagram, label: 'Instagram', icon: <InstagramIcon /> },
  { href: CONTACT.social.tiktok, label: 'Tiktok', icon: <TikTokIcon /> },
  { href: CONTACT.social.facebook, label: 'Facebook', icon: <FacebookIcon /> },
] as const

export function Footer() {
  return (
    <footer className="bg-white px-4 pb-8 pt-8 md:px-8 md:pt-16">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid grid-cols-1 gap-10 pb-8 md:grid-cols-3 md:gap-12 md:pb-16">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <img
              src={ASSETS.logo}
              loading="lazy"
              width={250}
              alt="Denald Export"
              className="mb-3 w-full max-w-[250px]"
            />
            <p className="text-xs font-semibold uppercase tracking-wide text-ink">{SITE.motto}</p>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="mb-3 text-base font-bold uppercase tracking-wide">Contact</h3>
            <ul className="space-y-2 text-left text-xs font-medium uppercase tracking-wide text-ink/60">
              <li
                className="bg-[length:20px] bg-[left_center] bg-no-repeat pl-8"
                style={{ backgroundImage: `url(${ASSETS.footerIcons.location})` }}
              >
                <a href={CONTACT.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-ink">
                  {CONTACT.address}
                </a>
              </li>
              <li
                className="bg-[length:20px] bg-[left_center] bg-no-repeat pl-8 normal-case"
                style={{ backgroundImage: `url(${ASSETS.footerIcons.phone})` }}
              >
                {CONTACT.phone}
              </li>
              <li
                className="bg-[length:20px] bg-[left_center] bg-no-repeat pl-8 lowercase"
                style={{ backgroundImage: `url(${ASSETS.footerIcons.email})` }}
              >
                {CONTACT.email}
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="mb-3 text-base font-bold uppercase tracking-wide">Find Us</h3>
            <div className="flex flex-col items-center gap-1.5 md:items-start">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 py-1 text-xs font-medium uppercase tracking-wide text-ink/50 hover:text-ink"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-8 border-t border-black/10" />
        <p className="pt-4 text-center text-sm">© 2026 {SITE.name}</p>
      </div>
    </footer>
  )
}
