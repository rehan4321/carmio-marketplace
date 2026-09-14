import { type ReactNode, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Bell, BriefcaseBusiness, ChevronDown, Grid2X2, Home, LogOut, Menu, MessageCircle, Search, Settings, ShieldCheck, Sparkles, WalletCards, X } from 'lucide-react';
import { type Mode } from '@/lib/mock-data';

export function Logo({ compact = false }: { compact?: boolean }) {
  return <Link href="/" data-testid="link-logo" className="flex items-center gap-2.5 text-[hsl(var(--sidebar-foreground))]"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[hsl(var(--sidebar-primary))] font-bold text-[hsl(var(--sidebar-primary-foreground))] shadow-[3px_3px_0_hsl(var(--sidebar-primary)/.22)]">C</span>{!compact && <span className="display-font text-xl font-bold tracking-tight">car<span className="text-[hsl(var(--sidebar-primary))]">mio</span></span>}</Link>;
}

const navItems = [
  { href: '/', label: 'Overview', icon: Home },
  { href: '/services', label: 'Find services', icon: Search },
  { href: '/work', label: 'Find work', icon: BriefcaseBusiness },
  { href: '/messages', label: 'Messages', icon: MessageCircle, count: 2 },
  { href: '/dashboard', label: 'My dashboard', icon: Grid2X2 },
];

export function AppShell({ children, mode, onModeChange }: { children: ReactNode; mode: Mode; onModeChange: (mode: Mode) => void }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const setToast = (text: string) => { setNotice(text); window.setTimeout(() => setNotice(''), 2600); };
  return <div className="noise min-h-[100dvh] bg-[hsl(var(--background))]">
    <aside className={`fixed inset-y-0 left-0 z-40 flex w-[248px] -translate-x-full flex-col bg-[hsl(var(--sidebar))] px-5 py-6 text-[hsl(var(--sidebar-foreground))] transition-transform lg:translate-x-0 ${open ? 'translate-x-0' : ''}`}>
      <div className="flex items-center justify-between"><Logo /><button onClick={() => setOpen(false)} className="rounded-lg p-1 lg:hidden" data-testid="button-close-menu"><X size={18} /></button></div>
      <div className="mt-10 rounded-2xl border border-[hsl(var(--sidebar-border))] bg-[hsl(var(--sidebar-accent)/.55)] p-2">
        <p className="px-2 pb-2 text-[10px] font-bold uppercase tracking-[.18em] text-[hsl(var(--sidebar-foreground)/.54)]">Your mode</p>
        <div className="grid grid-cols-2 gap-1 rounded-xl bg-[hsl(var(--sidebar)/.45)] p-1">
          <button onClick={() => { onModeChange('customer'); setToast('Customer mode on'); }} className={`rounded-lg px-2 py-2 text-xs font-semibold transition ${mode === 'customer' ? 'bg-[hsl(var(--sidebar-primary))] text-[hsl(var(--sidebar-primary-foreground))]' : 'text-[hsl(var(--sidebar-foreground)/.7)]'}`} data-testid="button-mode-customer">Hire</button>
          <button onClick={() => { onModeChange('worker'); setToast('Worker mode on'); }} className={`rounded-lg px-2 py-2 text-xs font-semibold transition ${mode === 'worker' ? 'bg-[hsl(var(--sidebar-primary))] text-[hsl(var(--sidebar-primary-foreground))]' : 'text-[hsl(var(--sidebar-foreground)/.7)]'}`} data-testid="button-mode-worker">Work</button>
        </div>
      </div>
      <nav className="mt-7 space-y-1">{navItems.map(item => { const Icon = item.icon; const active = item.href === '/' ? location === '/' : location.startsWith(item.href); return <Link key={item.href} href={item.href} onClick={() => setOpen(false)} data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`} className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition ${active ? 'bg-[hsl(var(--sidebar-primary))] text-[hsl(var(--sidebar-primary-foreground))] shadow-[3px_3px_0_hsl(var(--sidebar-primary)/.2)]' : 'text-[hsl(var(--sidebar-foreground)/.72)] hover:bg-[hsl(var(--sidebar-accent))] hover:text-[hsl(var(--sidebar-foreground))]'}`}><span className="flex items-center gap-3"><Icon size={17} strokeWidth={active ? 2.4 : 1.8} />{item.label}</span>{item.count && <span className={`rounded-full px-1.5 py-0.5 text-[10px] ${active ? 'bg-[hsl(var(--sidebar-foreground)/.18)]' : 'bg-[hsl(var(--accent))] text-white'}`}>{item.count}</span>}</Link> })}</nav>
      <div className="mt-auto space-y-1 border-t border-[hsl(var(--sidebar-border))] pt-5">
        <Link href="/earnings" data-testid="link-earnings" className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[hsl(var(--sidebar-foreground)/.72)] hover:bg-[hsl(var(--sidebar-accent))]"><WalletCards size={17} />Earnings & payouts</Link>
        <Link href="/settings" data-testid="link-settings" className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[hsl(var(--sidebar-foreground)/.72)] hover:bg-[hsl(var(--sidebar-accent))]"><Settings size={17} />Settings</Link>
      <div className="mt-4 flex items-center gap-3 rounded-xl bg-[hsl(var(--sidebar-accent))] p-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-[hsl(var(--primary))] text-xs font-bold text-[hsl(var(--primary-foreground))]">NS</span><div className="min-w-0 flex-1"><p className="truncate text-xs font-bold">Nisha Shah</p><p className="text-[10px] text-[hsl(var(--sidebar-foreground)/.56)]">Both modes active</p></div><button onClick={() => setToast('Signed out of this demo')} data-testid="button-sign-out" className="text-[hsl(var(--sidebar-foreground)/.55)]"><LogOut size={14} /></button></div>
      </div>
    </aside>
    {open && <button aria-label="Close navigation" onClick={() => setOpen(false)} className="fixed inset-0 z-30 bg-[hsl(var(--foreground)/.32)] lg:hidden" data-testid="button-overlay" />}
    <main className="min-h-[100dvh] lg:pl-[248px]">
      <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-[hsl(var(--border)/.8)] bg-[hsl(var(--background)/.92)] px-4 backdrop-blur-md sm:px-8">
        <button onClick={() => setOpen(true)} className="rounded-xl border border-[hsl(var(--border))] p-2 lg:hidden" data-testid="button-open-menu"><Menu size={18} /></button>
        <div className="hidden items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] sm:flex"><span className="h-2 w-2 rounded-full bg-[hsl(var(--primary))]" /> Bengaluru network <span className="text-[hsl(var(--border))]">/</span> <span className="text-[hsl(var(--foreground))]">{mode === 'customer' ? 'Hiring mode' : 'Working mode'}</span></div>
        <div className="flex items-center gap-2 sm:gap-4"><button onClick={() => setToast('You are all caught up')} className="relative rounded-xl p-2 text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))]" data-testid="button-notifications"><Bell size={19} /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" /></button><Link href="/settings" className="hidden items-center gap-2 rounded-xl border border-[hsl(var(--border))] px-2 py-1.5 sm:flex" data-testid="link-header-profile"><span className="grid h-7 w-7 place-items-center rounded-full bg-[hsl(var(--primary))] text-[10px] font-bold text-[hsl(var(--primary-foreground))]">NS</span><span className="text-xs font-semibold">Nisha</span><ChevronDown size={13} /></Link></div>
      </header>
      <div key={location} className="route-swipe mx-auto max-w-[1380px] px-4 py-6 sm:px-8 sm:py-8">{children}</div>
    </main>
    {notice && <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[hsl(var(--primary)/.4)] bg-[hsl(var(--foreground))] px-4 py-3 text-sm font-semibold text-[hsl(var(--background))] shadow-xl rise-in" data-testid="status-toast"><Sparkles size={15} className="text-[hsl(var(--primary))]" />{notice}</div>}
  </div>;
}

export function PageIntro({ eyebrow, title, description, action }: { eyebrow: string; title: string; description?: string; action?: ReactNode }) {
  return <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="mono mb-2 text-[10px] font-bold uppercase tracking-[.2em] text-[hsl(var(--primary))]">{eyebrow}</p><h1 className="display-font max-w-3xl text-3xl font-bold leading-[1.05] sm:text-5xl">{title}</h1>{description && <p className="mt-3 max-w-2xl text-sm leading-6 text-[hsl(var(--muted-foreground))]">{description}</p>}</div>{action}</div>;
}

export function Avatar({ initials, color = 'bg-[hsl(var(--primary))]', size = 'md' }: { initials: string; color?: string; size?: 'sm' | 'md' | 'lg' }) {
  return <span className={`grid shrink-0 place-items-center rounded-full font-bold text-[hsl(var(--primary-foreground))] ${color} ${size === 'sm' ? 'h-8 w-8 text-[10px]' : size === 'lg' ? 'h-16 w-16 text-lg' : 'h-11 w-11 text-xs'}`}>{initials}</span>;
}

export function Badge({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'green' | 'yellow' | 'coral' }) {
  const tones = { neutral: 'bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]', green: 'bg-[hsl(var(--primary)/.16)] text-[hsl(var(--primary))]', yellow: 'bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]', coral: 'bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))]' };
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.08em] ${tones[tone]}`}>{children}</span>;
}

export function Button({ children, variant = 'primary', className = '', onClick, href, type = 'button', disabled = false, loading = false, testId }: { children: ReactNode; variant?: 'primary' | 'secondary' | 'ghost' | 'danger'; className?: string; onClick?: () => void; href?: string; type?: 'button' | 'submit'; disabled?: boolean; loading?: boolean; testId?: string }) {
  const styles = { primary: 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-[3px_3px_0_hsl(var(--primary)/.2)] hover:-translate-y-0.5', secondary: 'bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] shadow-[3px_3px_0_hsl(var(--secondary)/.35)] hover:-translate-y-0.5', ghost: 'border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--primary)/.7)] hover:bg-[hsl(var(--muted))]', danger: 'bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))]' };
  if (href) return <Link href={href} data-testid={testId} className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition ${styles[variant]} ${className}`}>{children}</Link>;
  return <button type={type} disabled={disabled || loading} aria-busy={loading} onClick={onClick} data-testid={testId} className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant]} ${className}`}>{loading ? <span className="animate-pulse">Working…</span> : children}</button>;
}

export function StatCard({ label, value, detail, accent = 'teal' }: { label: string; value: string; detail: string; accent?: 'teal' | 'yellow' | 'coral' }) {
  const color = { teal: 'bg-[hsl(var(--primary)/.14)] border-[hsl(var(--primary)/.22)]', yellow: 'bg-[hsl(var(--muted))] border-[hsl(var(--border))]', coral: 'bg-[hsl(var(--secondary)/.65)] border-[hsl(var(--border))]' }[accent];
  return <div className={`rounded-2xl border p-5`}><div className={`-m-5 mb-4 h-1 rounded-t-2xl ${color.split(' ')[0]}`} /><p className="text-xs font-semibold text-[hsl(var(--foreground)/.65)]">{label}</p><p className="display-font mt-3 text-3xl font-bold">{value}</p><p className="mt-1 text-xs text-[hsl(var(--foreground)/.62)]">{detail}</p></div>;
}