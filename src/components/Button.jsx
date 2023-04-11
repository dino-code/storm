import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
}

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    indigo:
      'bg-indigo-500 text-white hover:text-slate-100 hover:bg-indigo-400 active:bg-indigo-400 active:text-indigo-100 focus-visible:outline-indigo-600',
    yellow:
      'bg-yellow-300 hover:text-slate-700 hover:bg-yellow-400 active:bg-yellow-400 active:text-slate-900 focus-visible:outline-yellow-600',
    white:
      'bg-white text-slate-800 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-slate-200 hover:text-slate-600 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    white:
      'ring-yellow-400 hover:ring-slate-500 active:ring-slate-700 hover:text-slate-600 active:text-slate-400 focus-visible:outline-white',
    yellow:
      'ring-indigo-400 dark:ring-yellow-300 hover:ring-yellow-200 text-indigo-400 dark:hover:text-indigo-500 dark:text-yellow-300 hover:text-yellow-200 active:text-yellow-300 focus-visible:outline-yellow-600',
    indigo:
      'ring-indigo-500 text-indigo-400 hover:ring-indigo-500 active:ring-indigo-400 hover:text-indigo-500 active:text-indigo-400 focus-visible:outline-indigo-600',
  },
}

export function Button({
  variant = 'solid',
  color = 'slate',
  className,
  href,
  ...props
}) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
