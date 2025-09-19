import CTAButtton from '@/components/custom/CTAButtton'
import Navbar from '@/components/custom/Navbar'
import React from 'react'

export default function Page() {
  return (
    <section>
      <Navbar/>
      <div>
        <h1>Create Smart Quizzes with AI in Seconds</h1>
        <p>Upload your content, enter a topic, or paste notes — our AI turns them into quiz questions you can edit, share, and practice.</p>
      </div>
      <div>
         <CTAButtton route="/dashboard" />
      </div>
      <div>
        <h1><span>AI That Works </span><span>With You</span></h1>
        <p>Harness the power of AI at every step—from creating quizzes and generating flashcards to refining questions and evaluating answers. Stay focused while AI handles the heavy lifting.</p>
      </div>
    </section>
  )
}
