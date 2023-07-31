import React from 'react'
import MainLayout from '../Layouts/MainLayout/MainLayout'


export default function AboutPage() {
  return (
    <MainLayout>
      <h1>About Page</h1>
      <h2>Things that are coming</h2>
      <ul>
        <li>1. Dashboard of all enginering trades
          <ul>
            <li> - Turn out time graph </li>
            <li> - Total projects handled so far </li>
            <li> - Total on going projects by each engineer </li>
          </ul>
        </li>
        <li>
          2. Dashboard of all projects handling by tec-lab
          <ul>
            <li> - How many ongoing?</li>
            <li> - Weekly output</li>
            <li> - How many are in each stage: [drafting, eng, plat, permit, bbp]</li>
            <li> - How many home siting are being done</li>
            <li> - how many scans are being done</li>
          </ul>
        </li>
      </ul>
    </MainLayout>
  )
}