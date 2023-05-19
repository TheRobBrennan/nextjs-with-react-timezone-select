"use client" // This is a client component 👈🏽 - see https://nextjs.org/docs/getting-started/react-essentials

import { useState } from 'react'
import TimezoneSelect from 'react-timezone-select'

// See https://github.com/ndom91/react-timezone-select more ideas on exploring this component
export default function Timezone() {
  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )

  return (
    <div className="App">
      <h2>react-timezone-select</h2>
      <blockquote>Please make a selection</blockquote>
      <div style={{
        borderRadius: '5px',
      }}
      >
        <TimezoneSelect
          value={selectedTimezone}
          /* @ts-ignore 2023.05.19 - Types need to be manually updated for this specific node module as their simple example does not support this typing */
          onChange={setSelectedTimezone}
        />
      </div>
      <h3>Output:</h3>
      <div
        style={{
          backgroundColor: '#ccc',
          padding: '10px',
          borderRadius: '5px',
          width: '95vw'
        }}
      >
        <pre
          style={{
            fontWeight: 500,
            fontFamily: 'monospace',
          }}
        >
          {JSON.stringify(selectedTimezone, null, 2)}
        </pre>
      </div>
    </div>
  )
}