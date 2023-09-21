import React, { useState } from 'react'
import Modal from './components/Modal'
import 'antd/dist/antd.css';

export const EditorContainer = ({ toEdit, callBack, setModal, staticData, forWhat }) => {
  const [editable] = useState(toEdit)
  const [element] = Object.entries(editable)

  // modal
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div>
    {isOpen && <Modal setModal={setModal} setIsOpen={setIsOpen} callBack={callBack} setEdited={setEdited} editableTitle={element[0]} editableValue={element[1]} staticData={staticData} forWhat={forWhat}/>}
    </div>
 )
}
