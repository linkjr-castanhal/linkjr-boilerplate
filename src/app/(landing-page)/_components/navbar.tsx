import { MobileNav } from '@/app/(landing-page)/_components/mobile-nav'
import { buttonVariants } from '@/components/ui/button'
import { WidthWrapper } from '@/components/width-wrapper'
import { PAGES } from '@/config/pages'
import Link from 'next/link'

export function Navbar() {
  return (
    <header className="bg-background supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur">
      <WidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <span>LOGO</span>
          </Link>

          <nav className="absolute right-1/2 hidden translate-x-1/2 md:block">
            <ul className="flex gap-8">
              {PAGES.map((page) => (
                <li key={page.label}>
                  <Link href={page.href}>{page.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/contato"
            className={buttonVariants({
              className: 'md:infline-flex hidden',
              size: 'sm',
            })}
          >
            Entrar em contato
          </Link>

          <MobileNav />
        </div>
      </WidthWrapper>
    </header>
  )
}
