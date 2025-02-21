import exerciseIcon from '@/assets/10-time-tracking/icon-exercise.svg'
import playIcon from '@/assets/10-time-tracking/icon-play.svg'
import selfCareIcon from '@/assets/10-time-tracking/icon-self-care.svg'
import socialIcon from '@/assets/10-time-tracking/icon-social.svg'
import studyIcon from '@/assets/10-time-tracking/icon-study.svg'
import workIcon from '@/assets/10-time-tracking/icon-work.svg'

type TimeFrameData = {
  current: number
  previous: number
}

type ActivityType = 'Work' | 'Play' | 'Study' | 'Exercise' | 'Social' | 'Self Care'

export type TrackedActivity = {
  title: string
  timeframes: {
    daily: TimeFrameData
    weekly: TimeFrameData
    monthly: TimeFrameData
  }
}

export type TrackedActivityResponse = {
  title: string
  timeframes: {
    daily: TimeFrameData
    weekly: TimeFrameData
    monthly: TimeFrameData
  }
  color: string
  icon: string
}

type ActivityMetadata = {
  color: string
  icon: string // Substitua com o tipo correto se não for string
}

const ActivityMetadataMap: Record<ActivityType, ActivityMetadata> = {
  Work: { color: 'bg-[#ff8c66]', icon: workIcon },
  Play: { color: 'bg-[#56c2e6]', icon: playIcon },
  Study: { color: 'bg-[#ff5c7c]', icon: studyIcon },
  Exercise: { color: 'bg-[#4acf81]', icon: exerciseIcon },
  Social: { color: 'bg-[#7536d3]', icon: socialIcon },
  'Self Care': { color: 'bg-[#f1c65b]', icon: selfCareIcon },
}

export const addMetadataToActivities = (activities: TrackedActivity[]) => {
  return activities.map(activity => ({
    ...activity,
    title: activity.title as ActivityType,
    color: ActivityMetadataMap[activity.title as ActivityType].color,
    icon: ActivityMetadataMap[activity.title as ActivityType].icon,
  }))
}
