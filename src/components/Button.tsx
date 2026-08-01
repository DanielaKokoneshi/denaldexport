import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'jumbo'

const variants: Record<ButtonVariant, string> = {
  primary:
    'hidden lg:inline-flex items-center justify-center bg-brand px-6 py-3 text-xs font-medium uppercase tracking-[2px] text-white transition-colors duration-300 hover:bg-brand-hover',
  secondary:
    'inline-flex items-center justify-center border border-white bg-transparent px-6 py-3 text-xs font-medium uppercase tracking-[2px] text-white transition-colors duration-300 hover:bg-white/10',
  jumbo:
    'inline-flex items-center justify-center bg-brand px-9 py-4 text-sm font-medium uppercase tracking-[2px] text-white transition-colors duration-300 hover:bg-brand-hover',
}

type ButtonLinkProps = {
  to: string
  children: ReactNode
  variant?: ButtonVariant
  className?: string
}

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  className = '',
}: ButtonLinkProps) {
  return (
    <Link to={to} className={`${variants[variant]} ${className}`.trim()}>
      {children}
    </Link>
  )
}

type ExternalButtonProps = {
  href: string
  children: ReactNode
  className?: string
}

export function ExternalButton({ href, children, className = '' }: ExternalButtonProps) {
  return (
    <a href={href} className={`${variants.primary} ${className}`.trim()}>
      {children}
    </a>
  )
}
