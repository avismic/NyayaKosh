import MaximsList from '@/components/MaximsList'
import { Suspense } from 'react'

export const revalidate = 60 // ISR - update every 60s

export default function LegalMaximsPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Legal Maxims</h1>

      <Suspense fallback={<p>Loading maxims...</p>}>
        <MaximsList />
      </Suspense>
    </div>
  )
}
