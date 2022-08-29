import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
import Modal from './components/Modal'

export const EditorContainer = ({ toEdit, setEdited, setModal, staticData }) => {
  const [editable] = useState(toEdit)
  const [element] = Object.entries(editable)

  // modal
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div>
      {console.log("editorman is here")}
    {isOpen && <Modal setModal={setModal} setIsOpen={setIsOpen} setEdited={setEdited} editableTitle={element[0]} editableValue={element[1]} staticData={staticData}/>}
    </div>
 )
}
