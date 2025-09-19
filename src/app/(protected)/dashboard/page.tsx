import CTAButtton from '@/components/custom/CTAButtton'
import React from 'react'

export default function Page() {
  return (
    <div>
      <div>
        <h1>Hello , Abdul Lahir 👋</h1>
        <h1>Quizzes</h1>
        <p>Create AI-powered quizzes or build your own from scratch to practice, revise, and track progress.</p>
        <span>No quizzes found</span>
      </div>
      <div>
        <CTAButtton route="/create-quiz" />
      </div>
    </div>
  )
}
