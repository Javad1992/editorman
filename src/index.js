import React, { useState } from 'react'
import Modal from './components/Modal'
import 'antd/dist/antd.css';

export const EditorContainer = ({ toEdit, setEdited, setModal, staticData, forWhat }) => {
  const [editable] = useState(toEdit)
  const [element] = Object.entries(editable)

  // modal
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div>
    {isOpen && <Modal setModal={setModal} setIsOpen={setIsOpen} setEdited={setEdited} editableTitle={element[0]} editableValue={element[1]} staticData={staticData} forWhat={forWhat}/>}
    </div>
 )
}
