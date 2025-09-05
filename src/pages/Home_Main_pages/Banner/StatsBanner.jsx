import { FaUsers, FaClock, FaAward, FaCar } from 'react-icons/fa'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function StatsBanner() {
  const stats = [
    { icon: FaUsers, value: 25, label: 'TEACHERS', suffix: '+' },
    { icon: FaClock, value: 2500, label: 'TRAINING HOURS', suffix: '+' },
    { icon: FaAward, value: 20, label: 'WORKING YEARS', suffix: '+' },
    { icon: FaCar, value: 20000, label: 'TRAINED PERSONS', suffix: '+' }
  ]

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  return (
    <div className="bg-myBg" style={{ backgroundColor: '#1e3a8a' }} ref={ref}>
      <div className="grid grid-cols-2 lg:grid-cols-4 text-center text-white">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="py-12 px-6 border border-white/20"
          >
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <stat.icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </div>

            {/* Value with CountUp */}
            <div className="text-3xl md:text-5xl font-bold mb-4 leading-none">
              {inView ? (
                <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
              ) : (
                0
              )}
            </div>

            {/* Label */}
            <div className="text-sm md:text-base font-semibold tracking-widest uppercase opacity-90">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
