import React from 'react'
import { BillableToggle, EntryName, ProjectSelect, WorkspaceSelect } from '..'

const ToggleInspector: React.FC = () => {
  return (
    <>
      <EntryName />
      <WorkspaceSelect />
      <ProjectSelect />
      <BillableToggle />
    </>
  )
}

export default ToggleInspector
