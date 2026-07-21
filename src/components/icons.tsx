// lucide-react ne fournit plus d'icones de marques: SVG LinkedIn maison
interface IconProps {
  className?: string
  size?: number
}

export function LinkedInIcon({ className, size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

export function WhatsAppIcon({ className, size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.47 14.38c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.75.95-.92 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.03c.15.2 2.06 3.14 4.99 4.41.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.73-.71 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.12-.26-.2-.55-.35z" />
      <path d="M12.02 2C6.5 2 2.03 6.47 2.03 12c0 1.79.47 3.53 1.36 5.06L2 22l5.08-1.33A9.95 9.95 0 0 0 12.02 22C17.55 22 22 17.53 22 12S17.55 2 12.02 2zm0 18.13c-1.63 0-3.23-.44-4.62-1.27l-.33-.2-3.02.79.81-2.94-.22-.31A8.1 8.1 0 0 1 3.9 12c0-4.48 3.65-8.13 8.13-8.13S20.15 7.52 20.15 12s-3.65 8.13-8.13 8.13z" />
    </svg>
  )
}

export function InstagramIcon({ className, size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon({ className, size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  )
}

export function TikTokIcon({ className, size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M16.6 5.82c-1.2-1.13-1.87-2.7-1.87-4.36h-3.44v14.35a2.6 2.6 0 0 1-4.68 1.56 2.6 2.6 0 0 1 2.36-4.1c.25 0 .49.03.72.1V9.9a6.1 6.1 0 0 0-.72-.04A6.1 6.1 0 1 0 15.1 15.9V9.28a8.2 8.2 0 0 0 4.8 1.54V7.4a4.85 4.85 0 0 1-3.3-1.58z" />
    </svg>
  )
}
