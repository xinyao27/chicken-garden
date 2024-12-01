'use client'

import { type CSSProperties, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  style?: CSSProperties
  line?: boolean
  animate?: boolean
}

export default function Logo({ className, style, line, animate }: LogoProps) {
  useEffect(() => {
    const paths = document.querySelectorAll<SVGPathElement>('.logo-path')
    paths.forEach((path) => {
      const length = path.getTotalLength()
      path.style.strokeDasharray = length.toString()
      path.style.strokeDashoffset = length.toString()
      path.style.setProperty('--length', length.toString())
    })
  }, [])

  return (
    <svg
      className={cn('size-6 fill-primary stroke-primary stroke-[8] transition-all duration-300 ease-in-out', className)}
      fill="none"
      style={style}
      viewBox={line ? '0 0 169 119' : '0 0 128 128'}
      xmlns="http://www.w3.org/2000/svg"
    >
      {line ? (
        <>
          <path
            className={cn('logo-path', animate ? 'animate-svg-path' : '')}
            clipRule="evenodd"
            d="M43.2861 100.407C50.9973 89.3692 66.6897 81.813 84.794 81.813C102.898 81.813 118.591 89.3692 126.302 100.407C118.591 111.444 102.898 119 84.794 119C66.6897 119 50.9973 111.444 43.2861 100.407Z"
            fill="none"
            fillRule="evenodd"
          />
          <path
            className={cn('logo-path', animate ? 'animate-svg-path' : '')}
            d="M43.006 18.3961C50.7123 7.47595 66.3946 0 84.4874 0C102.58 0 118.263 7.47595 125.969 18.3961C118.263 29.3163 102.58 36.7922 84.4874 36.7922C66.3946 36.7922 50.7123 29.3163 43.006 18.3961Z"
            fill="none"
          />
          <path
            className={cn('logo-path', animate ? 'animate-svg-path' : '')}
            d="M85.2801 59.7175C74.0684 70.5465 58.8619 76.6302 43.006 76.6302C27.1502 76.6302 11.9437 70.5465 0.731934 59.7175L43.006 18.3961L85.2801 59.7175Z"
            fill="none"
          />
          <path
            className={cn('logo-path', animate ? 'animate-svg-path' : '')}
            d="M168.344 59.7378C157.132 70.5668 141.925 76.6505 126.07 76.6505C110.214 76.6505 95.0073 70.5668 83.7955 59.7378L126.07 18.3961L168.344 59.7378Z"
            fill="none"
          />
        </>
      ) : (
        <path
          className={cn('logo-path', 'stroke-primary stroke-[2]', animate ? 'animate-svg-path' : '')}
          clipRule="evenodd"
          d="M0 34.3415C0 15.3752 15.3752 0 34.3415 0H93.6585C112.625 0 128 15.3752 128 34.3415V93.6585C128 112.625 112.625 128 93.6585 128H34.3415C15.3752 128 0 112.625 0 93.6585V34.3415ZM41.6114 86.7107C45.89 80.5867 54.5969 76.3942 64.6421 76.3942C74.6873 76.3942 83.3942 80.5867 87.6728 86.7107C83.3942 92.8347 74.6873 97.0272 64.6421 97.0272C54.5969 97.0272 45.89 92.8347 41.6114 86.7107ZM41.4559 41.2071C45.7318 35.1481 54.4332 31 64.472 31C74.5108 31 83.2122 35.1481 87.4881 41.2071C87.4451 41.2681 87.4016 41.3288 87.3577 41.3894L87.5441 41.2071L111 64.1458C104.779 70.1543 96.3417 73.5298 87.5441 73.5298C78.9362 73.5298 70.6734 70.2984 64.4939 64.5311C58.3159 70.2913 50.0581 73.5185 41.4559 73.5185C32.6583 73.5185 24.2209 70.143 18 64.1345L41.4559 41.2071ZM64.5057 63.7374L82.6349 46.0081C77.9685 49.3505 71.5529 51.4143 64.472 51.4143C57.4977 51.4143 51.1689 49.4122 46.5211 46.1582L64.5057 63.7374Z"
          fillRule="evenodd"
        />
      )}
    </svg>
  )
}
