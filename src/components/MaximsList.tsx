'use client'

import { useEffect, useState } from 'react'
import { client } from "@/sanity/lib/client";
type LegalMaxim = {
  _id: string
  term: string
  definition: string
  origin?: string
  example?: string
}

export default function MaximsList() {
  const [maxims, setMaxims] = useState<LegalMaxim[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "legalMaxim"] | order(term asc){
            _id, term, definition, origin, example
          }`
        )
        setMaxims(data)
      } catch (err) {
        console.error('Fetch error:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const filteredMaxims = maxims.filter(maxim =>
    maxim.term.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <p className="text-center">Loading...</p>

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a maxim..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />

      {filteredMaxims.length === 0 ? (
        <p>No maxims found.</p>
      ) : (
        <ul className="space-y-4">
          {filteredMaxims.map(maxim => (
            <li key={maxim._id} className="p-4 border rounded shadow-sm">
              <h2 className="text-xl font-semibold">{maxim.term}</h2>
              <p className="text-gray-700 mt-1">{maxim.definition}</p>
              {maxim.origin && (
                <p className="text-sm text-gray-500 mt-1"><strong>Origin:</strong> {maxim.origin}</p>
              )}
              {maxim.example && (
                <p className="text-sm text-gray-500 mt-1"><strong>Example:</strong> {maxim.example}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
