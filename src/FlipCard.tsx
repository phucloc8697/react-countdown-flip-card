import { useRef } from 'react'

import styles from './styles.module.css'

interface AnimatedCardInterface {
  animation: string
  digit: string | number  
}
const AnimatedCard = (props: AnimatedCardInterface) => {
  return (
    <div className={`${styles.flipCard} ${props.animation}`}>
      <span>{props.digit}</span>
    </div>
  )
}

interface StaticCardInterface {
  position: string
  digit: string | number  
}
const StaticCard = (props: StaticCardInterface) => (
  <div className={props.position}>
    <span>{props.digit}</span>
  </div>
)

interface FlipCardInterface {
  digit: string
  className?: string
  width?: number
  height?: number
}

const FlipCard = (props: FlipCardInterface) => {
  const { digit, className, width = 40, height = 50 } = props
  const lastDigitRef = useRef('0')
  const shuffleRef = useRef(false)
  
  if (digit !== lastDigitRef.current) {
    lastDigitRef.current = digit
    shuffleRef.current = !shuffleRef.current
  }

  const shuffle = shuffleRef.current
  let currentDigit = digit
  let previousDigit = digit === '9' ? 0 : Number(digit) + 1

  // shuffle digits
  const digit1 = shuffle ? previousDigit : currentDigit
  const digit2 = !shuffle ? previousDigit : currentDigit
  // shuffle animations
  const animation1 = shuffle ? styles.fold : styles.unfold
  const animation2 = !shuffle ? styles.fold : styles.unfold

  return (
    <div className={`${styles.flipContainer} ${className || ''}`} style={{ width, height }}>
      <StaticCard position={styles.upperCard} digit={currentDigit} />
      <StaticCard position={styles.lowerCard} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
    </div>
  )
}

export default FlipCard
