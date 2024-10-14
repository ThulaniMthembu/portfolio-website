import React from 'react'

interface SkillProgressBarProps {
  skill: string
  percentage: number
}

const SkillProgressBar: React.FC<SkillProgressBarProps> = ({ skill, percentage }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-900 dark:text-white">{skill}</span>
        <span className="text-sm font-medium text-gray-900 dark:text-white">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div 
          className="bg-primary h-2.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

export default SkillProgressBar