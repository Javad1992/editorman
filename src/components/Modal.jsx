import React, { Fragment, useState } from 'react'
import styles from './styles.module.css'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { RiCloseLine } from 'react-icons/ri'
import { useEffect } from 'react'
import DatePicker from './DatePicker'
import Cropper from 'react-easy-crop'
import { useCallback } from 'react'
import getCroppedImg from '../helper/cropImage'
import axios from 'axios'
import { Modal as AntModal } from 'antd'

const Modal = ({
  setModal,
  setIsOpen,
  callBack,
  setEdited,
  editableTitle,
  editableValue,
  staticData,
  forWhat
}) => {
  // configs
  const animatedComponents = makeAnimated()
  // setting editted values by user
  // expert
  const [editedValue, setEditedValue] = useState(editableValue)
  // questionnaire
  const [queEditedValue, setQueEditedValue] = useState([])
  // selected file
  const [selectedFile, setSelectedFile] = useState()
  const [fileExtension, setFileExtension] = useState()
  const [cropedFile, setCropedFile] = useState()
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [rotation, setRotation] = useState(0)
  const [privateLink, setPrivateLink] = useState(null)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        selectedFile,
        croppedAreaPixels,
        rotation
      )
      setCropedFile(croppedImage)
    } catch (e) {
      console.error(e)
    }
  }, [croppedAreaPixels, rotation])
  //

  // different type of questionnaire questions
  const EDIT_TEXT_TEXT = 0
  const EDIT_TEXT_NUMBER = 1
  const DATE = 2
  const RADIOBUTTON = 3
  const SELECTION = 4
  const AREA = 7
  const WEIGHT = 8

  // academicDegree
  let academicDegreeIdEditedValue = ''
  const [academicDegreeIdValue, setAcademicDegreeIdValue] = useState('')

  let academicDegreeDefaultValue

  if (editableTitle === 'academicDegree') {
    academicDegreeDefaultValue = {
      value: editableValue?.name,
      label: editableValue?.name,
      item: editableValue
    }
  }

  const setAcademicDegreeId = (e) => {
    setAcademicDegreeIdValue(e?.item?.id)
  }

  const createAcademicDegree = (academicDegreeId) => {
    academicDegreeIdEditedValue = academicDegreeId
  }

  // academicField
  let academicFieldIdEditedValue = ''
  const [academicFieldIdValue, setAcademicFieldIdValue] = useState('')

  let academicFieldDefaultValue

  if (editableTitle === 'academicField') {
    academicFieldDefaultValue = {
      value: editableValue?.name,
      label: editableValue?.name,
      item: editableValue
    }
  }

  const setAcademicFieldId = (e) => {
    setAcademicFieldIdValue(e?.item?.id)
  }

  const createAcademicField = (academicFieldId) => {
    academicFieldIdEditedValue = academicFieldId
  }

  // academicRank
  let academicRankIdEditedValue = ''
  const [academicRankIdValue, setAcademicRankIdValue] = useState('')

  let academicRankDefaultValue

  if (editableTitle === 'academicRank') {
    academicRankDefaultValue = {
      value: editableValue?.name,
      label: editableValue?.name,
      item: editableValue
    }
  }

  const setAcademicRankId = (e) => {
    setAcademicRankIdValue(e?.item?.id)
  }

  const createAcademicRank = (academicRankId) => {
    academicRankIdEditedValue = academicRankId
  }

  // workplaceOrganizationPosition
  let workplaceOrganizationPositionIdEditedValue = ''
  const [
    workplaceOrganizationPositionIdValue,
    setWorkplaceOrganizationPositionIdValue
  ] = useState('')

  let workplaceOrganizationPositionDefaultValue

  if (editableTitle === 'workplaceOrganizationPosition') {
    workplaceOrganizationPositionDefaultValue = {
      value: editableValue?.name,
      label: editableValue?.name,
      item: editableValue
    }
  }

  const setWorkplaceOrganizationPositionId = (e) => {
    setWorkplaceOrganizationPositionIdValue(e?.item?.id)
  }

  const createWorkplaceOrganizationPosition = (
    workplaceOrganizationPositionId
  ) => {
    workplaceOrganizationPositionIdEditedValue = workplaceOrganizationPositionId
  }

  // workplaceOrganizationType
  let workplaceOrganizationTypeIdEditedValue = ''
  const [
    workplaceOrganizationTypeIdValue,
    setWorkplaceOrganizationTypeIdValue
  ] = useState('')

  let workplaceOrganizationTypeDefaultValue

  if (editableTitle === 'workplaceOrganizationType') {
    workplaceOrganizationTypeDefaultValue = {
      value: editableValue?.name,
      label: editableValue?.name,
      item: editableValue
    }
  }

  const setWorkplaceOrganizationTypeId = (e) => {
    setWorkplaceOrganizationTypeIdValue(e?.item?.id)
  }

  const createWorkplaceOrganizationType = (workplaceOrganizationTypeId) => {
    workplaceOrganizationTypeIdEditedValue = workplaceOrganizationTypeId
  }

  // activityFields
  let activityFieldsEditedValue = []
  const [activityFieldsValue, setActivityFieldsValue] = useState([])

  let activityFieldsDefaultValue

  if (editableTitle === 'activityFields') {
    activityFieldsDefaultValue = editableValue
      .map((item) => {
        if (item.categoryEN === 'EXECUTIVE_SKILLS_ACTIVITY') {
          return { value: item.name, label: item.name, item: item }
        }
      })
      .filter(Boolean)
  }

  const setActivities = (e) => {
    let items = e.map((e) => e.item)
    setActivityFieldsValue(items)
  }

  const createActivities = (fieldName) => {
    fieldName?.length > 0 &&
      fieldName?.map((item) => {
        activityFieldsEditedValue?.push({
          categoryEN: item?.categoryEN,
          categoryFA: item?.categoryFA,
          id: item?.id,
          name: item?.name
        })
      })
  }

  // consultingFields
  let consultingFieldsEditedValue = []
  const [consultingFieldsValue, setConsultingFieldsValue] = useState([])

  let consultingFieldsDefaultValue

  if (editableTitle === 'consultingFields') {
    consultingFieldsDefaultValue = editableValue
      .map((item) => {
        if (item.categoryEN === 'EXECUTIVE_SKILLS_CONSULTING') {
          return { value: item.name, label: item.name, item: item }
        }
      })
      .filter(Boolean)
  }

  const setConsultings = (e) => {
    let items = e.map((e) => e.item)
    setConsultingFieldsValue(items)
  }

  const createConsultings = (fieldName) => {
    fieldName?.length > 0 &&
      fieldName?.map((item) => {
        consultingFieldsEditedValue?.push({
          categoryEN: item?.categoryEN,
          categoryFA: item?.categoryFA,
          id: item?.id,
          name: item?.name
        })
      })
  }

  // expertises
  let expertisesEditedValue = []
  const [gardensValue, setGardensValue] = useState([])
  const [farmsValue, setFarmsValue] = useState([])
  const [earthenGreenhouseValue, setEarthenGreenhouseValue] = useState([])
  const [hydroponicGreenhouseValue, setHydroponicGreenhouseValue] = useState([])
  const [livestockAndBirdsValue, setLivestockAndBirdsValue] = useState([])
  const [veterinaryValue, setVeterinaryValue] = useState([])

  let gardenDefaultValue
  let farmsDefaultValue
  let earthenGreenhouseDefaultValue
  let hydroponicGreenhouseDefaultValue
  let livestockAndBirdsDefaultValue
  let veterinaryDefaultValue

  if (editableTitle === 'expertises') {
    gardenDefaultValue = editableValue
      .map((item) => {
        if (item.categoryEN === 'EXPERTISES_GARDENS') {
          return { value: item.name, label: item.name, item: item }
        }
      })
      .filter(Boolean)
    farmsDefaultValue = editableValue
      .map((item) => {
        if (item.categoryEN === 'EXPERTISES_FARMS') {
          return { value: item.name, label: item.name, item: item }
        }
      })
      .filter(Boolean)
    earthenGreenhouseDefaultValue = editableValue
      .map((item) => {
        if (item.categoryEN === 'EXPERTISES_EARTHEN_GREENHOUSE') {
          return { value: item.name, label: item.name, item: item }
        }
      })
      .filter(Boolean)
    hydroponicGreenhouseDefaultValue = editableValue
      .map((item) => {
        if (item.categoryEN === 'EXPERTISES_HYDROPONIC_GREENHOUSE') {
          return { value: item.name, label: item.name, item: item }
        }
      })
      .filter(Boolean)
    livestockAndBirdsDefaultValue = editableValue
      .map((item) => {
        if (item.categoryEN === 'EXPERTISES_LIVESTOCK_POULTRY') {
          return { value: item.name, label: item.name, item: item }
        }
      })
      .filter(Boolean)
    veterinaryDefaultValue = editableValue
      .map((item) => {
        if (item.categoryEN === 'EXPERTISES_VETERINARY_MEDICINE') {
          return { value: item.name, label: item.name, item: item }
        }
      })
      .filter(Boolean)
  }

  const setGardens = (e) => {
    let items = e.map((e) => e.item)
    setGardensValue(items)
  }

  const setFarms = (e) => {
    let items = e.map((e) => e.item)
    setFarmsValue(items)
  }

  const setEarthenGreenhouse = (e) => {
    let items = e.map((e) => e.item)
    setEarthenGreenhouseValue(items)
  }

  const setHydroponicGreenhouse = (e) => {
    let items = e.map((e) => e.item)
    setHydroponicGreenhouseValue(items)
  }

  const setLivestockAndBirds = (e) => {
    let items = e.map((e) => e.item)
    setLivestockAndBirdsValue(items)
  }

  const setVeterinary = (e) => {
    let items = e.map((e) => e.item)
    setVeterinaryValue(items)
  }

  const createExpertises = (fieldName) => {
    fieldName?.length > 0 &&
      fieldName?.map((item) => {
        expertisesEditedValue?.push({
          categoryEN: item?.categoryEN,
          categoryFA: item?.categoryFA,
          id: item?.id,
          name: item?.name
        })
      })
  }

  // professions
  let professionsEditedValue = []

  const [agricultureAndGardenValue, setAgricultureAndGardenValue] = useState([])
  const [greenhouseValue, setgreenhouseValue] = useState([])
  const [
    livestockAndBirdsProfessionsValue,
    setLivestockAndBirdsProfessionsValue
  ] = useState([])
  const [veterinaryProfessionsValue, setVeterinaryProfessionsValue] = useState(
    []
  )
  const [comprehensiveProfessionsValue, setComprehensiveProfessionsValue] =
    useState([])

  let agricultureAndGardenDefaultValue
  let greenhouseDefaultValue
  let livestockAndBirdsProfessionsDefaultValue
  let veterinaryProfessionsDefaultValue
  let comprehensiveProfessionsDefaultValue

  if (editableTitle === 'professions') {
    agricultureAndGardenDefaultValue = editableValue
      .map((item) => {
        if (item.categoryEN === 'PROFESSIONS_FARMS_AND_GARDENS') {
          return { value: item.name, label: item.name, item: item }
        }
      })
      .filter(Boolean)
    greenhouseDefaultValue = editableValue
      .map((item) => {
        if (item.categoryEN === 'PROFESSIONS_GREENHOUSE') {
          return { value: item.name, label: item.name, item: item }
        }
      })
      .filter(Boolean)
    livestockAndBirdsProfessionsDefaultValue = editableValue
      .map((item) => {
        if (item.categoryEN === 'PROFESSIONS_LIVESTOCK_POULTRY') {
          return { value: item.name, label: item.name, item: item }
        }
      })
      .filter(Boolean)
    veterinaryProfessionsDefaultValue = editableValue
      .map((item) => {
        if (item.categoryEN === 'PROFESSIONS_VETERINARY_MEDICINE') {
          return { value: item.name, label: item.name, item: item }
        }
      })
      .filter(Boolean)
    comprehensiveProfessionsDefaultValue = editableValue
      .map((item) => {
        if (item.categoryEN === 'PROFESSIONS_COMPREHENSIVE_PROFESSIONS') {
          return { value: item.name, label: item.name, item: item }
        }
      })
      .filter(Boolean)
  }
  const setAgricultureAndGarden = (e) => {
    let items = e.map((e) => e.item)
    setAgricultureAndGardenValue(items)
  }

  const setGreenhouse = (e) => {
    let items = e.map((e) => e.item)
    setgreenhouseValue(items)
  }

  const setLivestockAndBirdsProfessions = (e) => {
    let items = e.map((e) => e.item)
    setLivestockAndBirdsProfessionsValue(items)
  }

  const setVeterinaryProfessions = (e) => {
    let items = e.map((e) => e.item)
    setVeterinaryProfessionsValue(items)
  }

  const setComprehensiveProfessions = (e) => {
    let items = e.map((e) => e.item)
    setComprehensiveProfessionsValue(items)
  }

  const createProfessions = (fieldName) => {
    fieldName?.length > 0 &&
      fieldName?.map((item) => {
        professionsEditedValue?.push({
          categoryEN: item?.categoryEN,
          categoryFA: item?.categoryFA,
          id: item?.id,
          name: item?.name
        })
      })
  }

  // inputs, radioButtons and selections
  const onChangeHandler = (e) => {
    if (e.target.type === 'file') {
      const file = e.target.files[0]
      if (typeof file === 'string') {
        setSelectedFile(e.target.files[0])
      } else {
        setFileExtension(file.type.split('/')[1])
        getBase64(e.target.files[0])
      }
    } else {
      setEditedValue(e.target.value)
    }
  }

  const onPrivateAndNonCroppedFilesChangeHandler = (e) => {
    const file = e.target.files[0]
    setSelectedFile(e.target.files[0])
    setFileExtension(file.type.split('/')[1])
  }

  // for Questionnaires
  const queOnChangeHandler = (e, id) => {
    let qev = queEditedValue.filter((item) => id !== item.id)
    qev.push({ answer: e.target.value, id: id })
    setQueEditedValue(qev)
  }

  // true false radioButtons
  const trueFalseOnChangeHandler = (e) => {
    setEditedValue(e)
  }

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setSelectedFile(reader.result)
        return resolve(reader.result)
      }
      reader.onerror = (error) => reject(error)
    })

  const sendFileName = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_BASE_URL + 'api/files/s3-upload-file',
        { filename: editableTitle + '.' + fileExtension }
      )

      const { url, fields } = response?.data?.data?.result
      const { key } = fields

      let formData = new FormData()
      Object.entries(fields).map(([key, value]) => {
        formData.append(key, value)
      })

      fetch(cropedFile)
        .then((res) => res.blob())
        .then(async (blob) => {
          var file = new File([blob], editableTitle + '.' + fileExtension)
          formData.append('file', file)
          const arvanResponse = await axios.post(url, formData)
          // setEdited({ [editableTitle]: key })
          callBack({ [editableTitle]: key })
          setIsOpen(false)
          setModal(null)
        })
    } catch (error) {
      console.log('error', error)
      alert('خطا در ارسال فایل')
    }
  }

  const sendPrivateAndNonCroppedFileName = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_BASE_URL + 'api/files/s3-upload-file',
        { filename: editableTitle + '.' + fileExtension }
      )

      const { url, fields } = response?.data?.data?.result
      const { key } = fields

      let formData = new FormData()
      Object.entries(fields).map(([key, value]) => {
        formData.append(key, value)
      })
      formData.append('file', selectedFile)
      const arvanResponse = await axios.post(url, formData)
      // setEdited({ [editableTitle]: key })
      callBack({ [editableTitle]: key })
      setIsOpen(false)
      setModal(null)
    } catch (error) {
      console.log('error', error)
      alert('خطا در ارسال فایل')
    }
  }

  const getPrivateLink = async () => {
    const response = await axios.get(
      process.env.REACT_APP_BASE_URL + `api/files/${editableValue}`
    )
    setPrivateLink(response?.data?.data?.result?.url)
  }

  // show related component
  function returnRelatedComponentForExperts() {
    switch (typeof editableValue) {
      case 'string':
        if (editableTitle === 'expectedPage') {
          return (
            <div className={styles.radioButtonContainer}>
              <div>
                <input
                  type='radio'
                  value='کاردان'
                  name='expectedPage'
                  defaultChecked={editedValue === 'کاردان'}
                  onChange={onChangeHandler}
                />
                کاردان
              </div>
              <div>
                <input
                  type='radio'
                  value='متخصص'
                  name='expectedPage'
                  defaultChecked={editedValue === 'متخصص'}
                  onChange={onChangeHandler}
                />
                متخصص
              </div>
            </div>
          )
        } else if (editableTitle === 'avatar' || editableTitle === 'cover') {
          return (
            <div className={styles.imageSelectorContainer}>
              {cropedFile ? (
                <img
                  className={
                    editableTitle === 'avatar' ? styles.avatar : styles.cover
                  }
                  src={cropedFile}
                />
              ) : selectedFile ? (
                <>
                  <Cropper
                    image={selectedFile}
                    crop={crop}
                    zoom={zoom}
                    aspect={editableTitle === 'avatar' ? 1 : 13 / 4}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                  />
                  <button
                    className={styles.cropButton}
                    onClick={showCroppedImage}
                  >
                    اعمال
                  </button>
                </>
              ) : (
                <>
                  <img
                    className={
                      editableTitle === 'avatar' ? styles.avatar : styles.cover
                    }
                    src={'https://s3.ir-thr-at1.arvanstorage.ir/' + editableValue}
                  />
                  <label for='file-upload' className={styles.fileUpload}>
                    آپلود فایل جدید
                  </label>
                  <input
                    className={styles.inputFile}
                    id='file-upload'
                    type='file'
                    accept='.jpg,.jpeg,.png'
                    multiple={false}
                    onChange={onChangeHandler}
                  />
                </>
              )}
            </div>
          )
        } else if (
          editableTitle === 'identityDocument' ||
          editableTitle === 'studentCard' ||
          editableTitle === 'engineeringSystemCard'
        ) {
          return (
            <div className={styles.imageSelectorContainer}>
              {privateLink ? (
                <a href={privateLink} target='_blank'>
                  دانلود فایل
                </a>
              ) : (
                <p onClick={getPrivateLink} className={styles.filePreviewLink}>
                  مشاهده فایل
                </p>
              )}
              <label for='file-upload' className={styles.fileUpload}>
                آپلود فایل جدید
              </label>
              <input
                className={styles.inputFile}
                id='file-upload'
                type='file'
                accept='.jpg,.jpeg,.png'
                multiple={false}
                onChange={onPrivateAndNonCroppedFilesChangeHandler}
              />
            </div>
          )
        } else if (editableTitle === 'resume') {
          return (
            <div className={styles.imageSelectorContainer}>
              <a
                href={'https://s3.ir-thr-at1.arvanstorage.ir/' + editableValue}
                target='_blank'
              >
                دانلود فایل
              </a>
              <label for='file-upload' className={styles.fileUpload}>
                آپلود فایل جدید
              </label>
              <input
                className={styles.inputFile}
                id='file-upload'
                type='file'
                accept='.pdf'
                multiple={false}
                onChange={onPrivateAndNonCroppedFilesChangeHandler}
              />
            </div>
          )
        } else if (editableTitle === 'academicDegreeDocument') {
          return (
            <div className={styles.imageSelectorContainer}>
              {privateLink ? (
                <a href={privateLink} target='_blank'>
                  دانلود فایل
                </a>
              ) : (
                <p onClick={getPrivateLink} className={styles.filePreviewLink}>
                  مشاهده فایل
                </p>
              )}
              <label for='file-upload' className={styles.fileUpload}>
                آپلود فایل جدید
              </label>
              <input
                className={styles.inputFile}
                id='file-upload'
                type='file'
                accept='.pdf, .jpg'
                multiple={false}
                onChange={onPrivateAndNonCroppedFilesChangeHandler}
              />
            </div>
          )
        } else if (editableTitle === 'aboutMe') {
          return (
            <textarea
              className={styles.bigCenterInput}
              type='text'
              defaultValue={editableValue}
              onChange={onChangeHandler}
            />
          )
        } else {
          return (
            <input
              className={styles.centerInput}
              type='text'
              defaultValue={editableValue}
              onChange={onChangeHandler}
            />
          )
        }
      case 'number':
        return (
          <input
            className={styles.centerInput}
            type='number'
            defaultValue={editableValue}
            onChange={onChangeHandler}
          />
        )
      case 'boolean':
        if (editableTitle === 'agriculturalActivity') {
          return (
            <div className={styles.radioButtonContainer}>
              <div>
                <input
                  type='radio'
                  value='true'
                  name='agriculturalActivity'
                  defaultChecked={editedValue}
                  onChange={(e) =>
                    trueFalseOnChangeHandler(Boolean(e.target.value))
                  }
                />
                بله
              </div>
              <div>
                <input
                  type='radio'
                  value=''
                  name='agriculturalActivity'
                  defaultChecked={!editedValue}
                  onChange={(e) =>
                    trueFalseOnChangeHandler(Boolean(e.target.value))
                  }
                />
                خیر
              </div>
            </div>
          )
        } else if (editableTitle == 'willingMakeVisit') {
          return (
            <div className={styles.radioButtonContainer}>
              <div>
                <input
                  type='radio'
                  value='true'
                  name='willingMakeVisit'
                  defaultChecked={editedValue}
                  onChange={(e) =>
                    trueFalseOnChangeHandler(Boolean(e.target.value))
                  }
                />
                بله
              </div>
              <div>
                <input
                  type='radio'
                  value=''
                  name='willingMakeVisit'
                  defaultChecked={!editedValue}
                  onChange={(e) =>
                    trueFalseOnChangeHandler(Boolean(e.target.value))
                  }
                />
                خیر
              </div>
            </div>
          )
        } else if (editableTitle === 'hasVehicle') {
          return (
            <div className={styles.radioButtonContainer}>
              <div>
                <input
                  type='radio'
                  value='true'
                  name='hasVehicle'
                  defaultChecked={editedValue}
                  onChange={(e) =>
                    trueFalseOnChangeHandler(Boolean(e.target.value))
                  }
                />
                بله
              </div>
              <div>
                <input
                  type='radio'
                  value=''
                  name='hasVehicle'
                  defaultChecked={!editedValue}
                  onChange={(e) =>
                    trueFalseOnChangeHandler(Boolean(e.target.value))
                  }
                />
                خیر
              </div>
            </div>
          )
        } else if (
          editableTitle === 'agriculturalEngineeringSystemOrganizationMember'
        ) {
          return (
            <div className={styles.radioButtonContainer}>
              <div>
                <input
                  type='radio'
                  value='true'
                  name='agriculturalEngineeringSystemOrganizationMember'
                  defaultChecked={editedValue}
                  onChange={(e) =>
                    trueFalseOnChangeHandler(Boolean(e.target.value))
                  }
                />
                بله
              </div>
              <div>
                <input
                  type='radio'
                  value=''
                  name='agriculturalEngineeringSystemOrganizationMember'
                  defaultChecked={!editedValue}
                  onChange={(e) =>
                    trueFalseOnChangeHandler(Boolean(e.target.value))
                  }
                />
                خیر
              </div>
            </div>
          )
        } else if (editableTitle === 'phoneNumberIsPublic') {
          return (
            <div className={styles.radioButtonContainer}>
              <div>
                <input
                  type='radio'
                  value='true'
                  name='phoneNumberIsPublic'
                  defaultChecked={editedValue}
                  onChange={(e) =>
                    trueFalseOnChangeHandler(Boolean(e.target.value))
                  }
                />
                بله
              </div>
              <div>
                <input
                  type='radio'
                  value=''
                  name='phoneNumberIsPublic'
                  defaultChecked={!editedValue}
                  onChange={(e) =>
                    trueFalseOnChangeHandler(Boolean(e.target.value))
                  }
                />
                خیر
              </div>
            </div>
          )
        }
      case 'object':
        if (editableTitle === 'academicDegree') {
          useEffect(() => {
            setAcademicDegreeId(academicDegreeDefaultValue?.item?.id)
          }, [])

          let academicDegreeOptions = staticData?.ACADEMIC_DEGREE?.map(
            (item) => {
              if (item.categoryEN === 'ACADEMIC_DEGREE') {
                return { value: item.name, label: item.name, item: item }
              }
            }
          ).filter(Boolean)

          return (
            <Select
              className={styles.singleSelect}
              IsMulti={false}
              name='academicDegree'
              closeMenuOnSelect={true}
              components={animatedComponents}
              options={academicDegreeOptions}
              isSearchable={true}
              defaultValue={academicDegreeDefaultValue}
              onChange={setAcademicDegreeId}
            />
          )
        } else if (editableTitle === 'academicField') {
          useEffect(() => {
            setAcademicFieldId(academicFieldDefaultValue?.item?.id)
          }, [])

          let academicFieldOptions = staticData?.ACADEMIC_FIELDS?.map(
            (item) => {
              if (item.categoryEN === 'ACADEMIC_FIELD') {
                return { value: item.name, label: item.name, item: item }
              }
            }
          ).filter(Boolean)

          return (
            <Select
              className={styles.singleSelect}
              IsMulti={false}
              name='academicField'
              closeMenuOnSelect={true}
              components={animatedComponents}
              options={academicFieldOptions}
              isSearchable={true}
              defaultValue={academicFieldDefaultValue}
              onChange={setAcademicFieldId}
            />
          )
        } else if (editableTitle === 'academicRank') {
          useEffect(() => {
            setAcademicRankId(academicRankDefaultValue?.item?.id)
          }, [])

          let academicRankOptions = staticData?.ACADEMIC_RANKS?.map((item) => {
            if (item.categoryEN === 'ACADEMIC_RANKS') {
              return { value: item.name, label: item.name, item: item }
            }
          }).filter(Boolean)

          return (
            <Select
              className={styles.singleSelect}
              IsMulti={false}
              name='academicRank'
              closeMenuOnSelect={true}
              components={animatedComponents}
              options={academicRankOptions}
              isSearchable={true}
              defaultValue={academicRankDefaultValue}
              onChange={setAcademicRankId}
            />
          )
        } else if (editableTitle === 'workplaceOrganizationPosition') {
          useEffect(() => {
            setWorkplaceOrganizationPositionId(
              workplaceOrganizationPositionDefaultValue?.item?.id
            )
          }, [])

          let workplaceOrganizationPositionOptions =
            staticData?.WORKPLACE_ORGANIZATIONS_POSITIONS?.map((item) => {
              if (item.categoryEN === 'WORKPLACE_ORGANIZATIONS_POSITIONS') {
                return { value: item.name, label: item.name, item: item }
              }
            }).filter(Boolean)

          return (
            <Select
              className={styles.singleSelect}
              IsMulti={false}
              name='workplaceOrganizationPosition'
              closeMenuOnSelect={true}
              components={animatedComponents}
              options={workplaceOrganizationPositionOptions}
              isSearchable={true}
              defaultValue={workplaceOrganizationPositionDefaultValue}
              onChange={setWorkplaceOrganizationPositionId}
            />
          )
        } else if (editableTitle === 'workplaceOrganizationType') {
          useEffect(() => {
            setWorkplaceOrganizationTypeId(
              workplaceOrganizationTypeDefaultValue?.item?.id
            )
          }, [])

          let workplaceOrganizationTypeOptions =
            staticData?.WORKPLACE_ORGANIZATIONS?.map((item) => {
              if (item.categoryEN === 'WORKPLACE_ORGANIZATIONS') {
                return { value: item.name, label: item.name, item: item }
              }
            }).filter(Boolean)

          return (
            <Select
              className={styles.singleSelect}
              IsMulti={false}
              name='workplaceOrganizationType'
              closeMenuOnSelect={true}
              components={animatedComponents}
              options={workplaceOrganizationTypeOptions}
              isSearchable={true}
              defaultValue={workplaceOrganizationTypeDefaultValue}
              onChange={setWorkplaceOrganizationTypeId}
            />
          )
        } else if (editableTitle === 'activityFields') {
          useEffect(() => {
            setActivities(activityFieldsDefaultValue)
          }, [])

          let activityFieldsOptions = staticData?.EXECUTIVE_SKILLS?.map(
            (item) => {
              if (item.categoryEN === 'EXECUTIVE_SKILLS_ACTIVITY') {
                return { value: item.name, label: item.name, item: item }
              }
            }
          ).filter(Boolean)

          return (
            <Select
              className={styles.multiSelect}
              name='activityFields'
              closeMenuOnSelect={true}
              components={animatedComponents}
              isMulti
              options={activityFieldsOptions}
              isSearchable={true}
              defaultValue={activityFieldsDefaultValue}
              onChange={setActivities}
            />
          )
        } else if (editableTitle === 'consultingFields') {
          useEffect(() => {
            setConsultings(consultingFieldsDefaultValue)
          }, [])

          let consultingFieldsOptions = staticData?.EXECUTIVE_SKILLS?.map(
            (item) => {
              if (item.categoryEN === 'EXECUTIVE_SKILLS_CONSULTING') {
                return { value: item.name, label: item.name, item: item }
              }
            }
          ).filter(Boolean)

          return (
            <Select
              className={styles.multiSelect}
              name='consultingFields'
              closeMenuOnSelect={true}
              components={animatedComponents}
              isMulti
              options={consultingFieldsOptions}
              isSearchable={true}
              defaultValue={consultingFieldsDefaultValue}
              onChange={setConsultings}
            />
          )
        } else if (editableTitle === 'expertises') {
          useEffect(() => {
            setGardens(gardenDefaultValue)
            setFarms(farmsDefaultValue)
            setEarthenGreenhouse(earthenGreenhouseDefaultValue)
            setHydroponicGreenhouse(hydroponicGreenhouseDefaultValue)
            setLivestockAndBirds(livestockAndBirdsDefaultValue)
            setVeterinary(veterinaryDefaultValue)
          }, [])

          // garden
          let gardensOptions = staticData?.EXPERTISES?.map((item) => {
            if (item.categoryEN === 'EXPERTISES_GARDENS') {
              return { value: item.name, label: item.name, item: item }
            }
          }).filter(Boolean)

          // farm
          let farmsOptions = staticData?.EXPERTISES?.map((item) => {
            if (item.categoryEN === 'EXPERTISES_FARMS') {
              return { value: item.name, label: item.name, item: item }
            }
          }).filter(Boolean)

          // earthenGreenhouse
          let earthenGreenhouseOptions = staticData?.EXPERTISES?.map((item) => {
            if (item.categoryEN === 'EXPERTISES_EARTHEN_GREENHOUSE') {
              return { value: item.name, label: item.name, item: item }
            }
          }).filter(Boolean)

          // hydroponicGreenhouse
          let hydroponicGreenhouseOptions = staticData?.EXPERTISES?.map(
            (item) => {
              if (item.categoryEN === 'EXPERTISES_HYDROPONIC_GREENHOUSE') {
                return { value: item.name, label: item.name, item: item }
              }
            }
          ).filter(Boolean)

          // livestockAndBirds
          let livestockAndBirdsOptions = staticData?.EXPERTISES?.map((item) => {
            if (item.categoryEN === 'EXPERTISES_LIVESTOCK_POULTRY') {
              return { value: item.name, label: item.name, item: item }
            }
          }).filter(Boolean)

          // veterinary
          let veterinaryOptions = staticData?.EXPERTISES?.map((item) => {
            if (item.categoryEN === 'EXPERTISES_VETERINARY_MEDICINE') {
              return { value: item.name, label: item.name, item: item }
            }
          }).filter(Boolean)

          return (
            <div className={styles.element}>
              <div className={styles.row}>
                <div className={styles.element}>
                  <label>باغات</label>
                  <Select
                    className={styles.multiSelect}
                    name='gardens'
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    isMulti
                    options={gardensOptions}
                    isSearchable={true}
                    defaultValue={gardenDefaultValue}
                    onChange={setGardens}
                  />
                </div>
                <div className={styles.element}>
                  <label>مزارع</label>
                  <Select
                    className={styles.multiSelect}
                    name='farms'
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    isMulti
                    options={farmsOptions}
                    isSearchable={true}
                    defaultValue={farmsDefaultValue}
                    onChange={setFarms}
                  />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.element}>
                  <label>گلخانه خاکی</label>
                  <Select
                    className={styles.multiSelect}
                    name='earthenGreenhouse'
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    isMulti
                    options={earthenGreenhouseOptions}
                    isSearchable={true}
                    defaultValue={earthenGreenhouseDefaultValue}
                    onChange={setEarthenGreenhouse}
                  />
                </div>
                <div className={styles.element}>
                  <label>گلخانه هیدروپونیک</label>
                  <Select
                    className={styles.multiSelect}
                    name='hydroponicGreenhouse'
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    isMulti
                    options={hydroponicGreenhouseOptions}
                    isSearchable={true}
                    defaultValue={hydroponicGreenhouseDefaultValue}
                    onChange={setHydroponicGreenhouse}
                  />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.element}>
                  <label>دام و طیور</label>
                  <Select
                    className={styles.multiSelect}
                    name='livestockAndBirds'
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    isMulti
                    options={livestockAndBirdsOptions}
                    isSearchable={true}
                    defaultValue={livestockAndBirdsDefaultValue}
                    onChange={setLivestockAndBirds}
                  />
                </div>
                <div className={styles.element}>
                  <label>دامپزشکی</label>
                  <Select
                    className={styles.multiSelect}
                    name='veterinary'
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    isMulti
                    options={veterinaryOptions}
                    isSearchable={true}
                    defaultValue={veterinaryDefaultValue}
                    onChange={setVeterinary}
                  />
                </div>
              </div>
            </div>
          )
        } else if (editableTitle === 'professions') {
          useEffect(() => {
            setAgricultureAndGarden(agricultureAndGardenDefaultValue)
            setGreenhouse(greenhouseDefaultValue)
            setLivestockAndBirdsProfessions(
              livestockAndBirdsProfessionsDefaultValue
            )
            setVeterinaryProfessions(veterinaryProfessionsDefaultValue)
            setComprehensiveProfessions(comprehensiveProfessionsDefaultValue)
          }, [])

          // agricultureAndGarden
          let agricultureAndGardenOptions = staticData?.PROFESSIONS?.map(
            (item) => {
              if (item.categoryEN === 'PROFESSIONS_FARMS_AND_GARDENS') {
                return { value: item.name, label: item.name, item: item }
              }
            }
          ).filter(Boolean)

          // greenhouse
          let greenhouseOptions = staticData?.PROFESSIONS?.map((item) => {
            if (item.categoryEN === 'PROFESSIONS_GREENHOUSE') {
              return { value: item.name, label: item.name, item: item }
            }
          }).filter(Boolean)

          // livestockAndBirds
          let livestockAndBirdsOptions = staticData?.PROFESSIONS?.map(
            (item) => {
              if (item.categoryEN === 'PROFESSIONS_LIVESTOCK_POULTRY') {
                return { value: item.name, label: item.name, item: item }
              }
            }
          ).filter(Boolean)

          // veterinaryProfessions
          let veterinaryProfessionsOptions = staticData?.PROFESSIONS?.map(
            (item) => {
              if (item.categoryEN === 'PROFESSIONS_VETERINARY_MEDICINE') {
                return { value: item.name, label: item.name, item: item }
              }
            }
          ).filter(Boolean)

          //comprehensiveProfessions
          let comprehensiveProfessionsOptions = staticData?.PROFESSIONS?.map(
            (item) => {
              if (item.categoryEN === 'PROFESSIONS_COMPREHENSIVE_PROFESSIONS') {
                return { value: item.name, label: item.name, item: item }
              }
            }
          ).filter(Boolean)

          return (
            <div className={styles.element}>
              <div className={styles.row}>
                <div className={styles.element}>
                  <label>زراعت و باغ</label>
                  <Select
                    className={styles.multiSelect}
                    name='agricultureAndGarden'
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    isMulti
                    options={agricultureAndGardenOptions}
                    isSearchable={true}
                    defaultValue={agricultureAndGardenDefaultValue}
                    onChange={setAgricultureAndGarden}
                  />
                </div>
                <div className={styles.element}>
                  <label>گلخانه</label>
                  <Select
                    className={styles.multiSelect}
                    name='greenhouse'
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    isMulti
                    options={greenhouseOptions}
                    isSearchable={true}
                    defaultValue={greenhouseDefaultValue}
                    onChange={setGreenhouse}
                  />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.element}>
                  <label>دام و طیور</label>
                  <Select
                    className={styles.multiSelect}
                    name='livestockAndBirdsProfessions'
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    isMulti
                    options={livestockAndBirdsOptions}
                    isSearchable={true}
                    defaultValue={livestockAndBirdsProfessionsDefaultValue}
                    onChange={setLivestockAndBirdsProfessions}
                  />
                </div>
                <div className={styles.element}>
                  <label>دامپزشکی</label>
                  <Select
                    className={styles.multiSelect}
                    name='veterinaryProfessions'
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    isMulti
                    options={veterinaryProfessionsOptions}
                    isSearchable={true}
                    defaultValue={veterinaryProfessionsDefaultValue}
                    onChange={setVeterinaryProfessions}
                  />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.element}>
                  <label>حرف جامع</label>
                  <Select
                    className={styles.multiSelect}
                    name='comprehensiveProfessions'
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    isMulti
                    options={comprehensiveProfessionsOptions}
                    isSearchable={true}
                    defaultValue={comprehensiveProfessionsDefaultValue}
                    onChange={setComprehensiveProfessions}
                  />
                </div>
              </div>
            </div>
          )
        } else {
          if (editableTitle === 'avatar' || editableTitle === 'cover') {
            return (
              <div className={styles.imageSelectorContainer}>
                {cropedFile ? (
                  <img
                    className={
                      editableTitle === 'avatar' ? styles.avatar : styles.cover
                    }
                    src={cropedFile}
                  />
                ) : selectedFile ? (
                  <>
                    <Cropper
                      image={selectedFile}
                      crop={crop}
                      zoom={zoom}
                      aspect={editableTitle === 'avatar' ? 1 : 13 / 4}
                      onCropChange={setCrop}
                      onCropComplete={onCropComplete}
                      onZoomChange={setZoom}
                    />
                    <button
                      className={styles.cropButton}
                      onClick={showCroppedImage}
                    >
                      اعمال
                    </button>
                  </>
                ) : (
                  <>
                    <img
                      className={
                        editableTitle === 'avatar'
                          ? styles.avatar
                          : styles.cover
                      }
                      src={'https://s3.ir-thr-at1.arvanstorage.ir/' + editableValue}
                    />
                    <label for='file-upload' className={styles.fileUpload}>
                      آپلود فایل جدید
                    </label>
                    <input
                      className={styles.inputFile}
                      id='file-upload'
                      type='file'
                      accept='.jpg,.jpeg,.png'
                      multiple={false}
                      onChange={onChangeHandler}
                    />
                  </>
                )}
              </div>
            )
          } else if (
            editableTitle === 'identityDocument' ||
            editableTitle === 'studentCard' ||
            editableTitle === 'engineeringSystemCard'
          ) {
            return (
              <div className={styles.imageSelectorContainer}>
                {privateLink ? (
                  <a href={privateLink} target='_blank'>
                    دانلود فایل
                  </a>
                ) : (
                  <p
                    onClick={getPrivateLink}
                    className={styles.filePreviewLink}
                  >
                    مشاهده فایل
                  </p>
                )}
                <label for='file-upload' className={styles.fileUpload}>
                  آپلود فایل جدید
                </label>
                <input
                  className={styles.inputFile}
                  id='file-upload'
                  type='file'
                  accept='.jpg,.jpeg,.png'
                  multiple={false}
                  onChange={onPrivateAndNonCroppedFilesChangeHandler}
                />
              </div>
            )
          } else if (editableTitle === 'resume') {
            return (
              <div className={styles.imageSelectorContainer}>
                <a
                  href={'https://s3.ir-thr-at1.arvanstorage.ir/' + editableValue}
                  target='_blank'
                >
                  دانلود فایل
                </a>
                <label for='file-upload' className={styles.fileUpload}>
                  آپلود فایل جدید
                </label>
                <input
                  className={styles.inputFile}
                  id='file-upload'
                  type='file'
                  accept='.pdf'
                  multiple={false}
                  onChange={onPrivateAndNonCroppedFilesChangeHandler}
                />
              </div>
            )
          } else if (editableTitle === 'academicDegreeDocument') {
            return (
              <div className={styles.imageSelectorContainer}>
                {privateLink ? (
                  <a href={privateLink} target='_blank'>
                    دانلود فایل
                  </a>
                ) : (
                  <p
                    onClick={getPrivateLink}
                    className={styles.filePreviewLink}
                  >
                    مشاهده فایل
                  </p>
                )}
                <label for='file-upload' className={styles.fileUpload}>
                  آپلود فایل جدید
                </label>
                <input
                  className={styles.inputFile}
                  id='file-upload'
                  type='file'
                  accept='.pdf, .jpg'
                  multiple={false}
                  onChange={onPrivateAndNonCroppedFilesChangeHandler}
                />
              </div>
            )
          } else {
            return (
              <input
                className={styles.centerInput}
                type='text'
                defaultValue={editableValue}
                onChange={onChangeHandler}
              />
            )
          }
        }
      // select option
      // multi select
      default:
        break
    }
  }

  function returnRelatedComponentForQuestionnaires() {
    let elemetns = editableValue.map((ev, index) => {
      switch (ev.type) {
        case EDIT_TEXT_TEXT:
          return (
            <Fragment>
              <p>{ev.text}</p>
              <input
                className={styles.centerInput}
                type='text'
                defaultValue={ev.answer}
                onChange={(event) => queOnChangeHandler(event, ev.id)}
              />
            </Fragment>
          )
        case EDIT_TEXT_NUMBER:
          return (
            <Fragment>
              <p>{ev.text}</p>
              <input
                className={styles.centerInput}
                type='number'
                defaultValue={ev.answer}
                onChange={(event) => queOnChangeHandler(event, ev.id)}
              />
            </Fragment>
          )
        case DATE:
          return (
            <Fragment>
              <p>{ev.text}</p>
              <DatePicker
                ev={ev}
                queEditedValue={queEditedValue}
                setQueEditedValue={setQueEditedValue}
              />
            </Fragment>
          )
        case RADIOBUTTON:
          return (
            <Fragment>
              <p>{ev.text}</p>
              <div className={styles.radioButtonContainer}>
                <div>
                  <input
                    type='radio'
                    value={ev.list[0]}
                    name={ev.id}
                    defaultChecked={ev.answer === ev.list[0]}
                    onChange={(event) => queOnChangeHandler(event, ev.id)}
                  />
                  {ev.list[0]}
                </div>
                <div>
                  <input
                    type='radio'
                    value={ev.list[1]}
                    name={ev.id}
                    defaultChecked={ev.answer === ev.list[1]}
                    onChange={(event) => queOnChangeHandler(event, ev.id)}
                  />
                  {ev.list[1]}
                </div>
              </div>
            </Fragment>
          )
        case SELECTION:
          return (
            <Fragment>
              <p>{ev.text}</p>
              <select
                defaultValue={ev.answer}
                onChange={(event) => queOnChangeHandler(event, ev.id)}
              >
                {ev.list.map((opt, index) => (
                  <option key={index} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Fragment>
          )
        case AREA:
          return (
            <Fragment>
              <p>{ev.text}</p>
              <input
                className={styles.centerInput}
                type='text'
                defaultValue={ev.answer}
                onChange={(event) => queOnChangeHandler(event, ev.id)}
              />
            </Fragment>
          )
        case WEIGHT:
          return (
            <Fragment>
              <p>{ev.text}</p>
              <input
                className={styles.centerInput}
                type='text'
                defaultValue={ev.answer}
                onChange={(event) => queOnChangeHandler(event, ev.id)}
              />
            </Fragment>
          )
        default:
          return alert(ev.type)
      }
    })

    return elemetns
  }

  const setAcademicDegree = () => {
    createAcademicDegree(academicDegreeIdValue)
    // setEdited({ [editableTitle + 'Id']: academicDegreeIdEditedValue })
    callBack({ [editableTitle + 'Id']: academicDegreeIdEditedValue })
  }

  const setAcademicField = () => {
    createAcademicField(academicFieldIdValue)
    // setEdited({ [editableTitle + 'Id']: academicFieldIdEditedValue })
    callBack({ [editableTitle + 'Id']: academicDegreeIdEditedValue })
  }

  const setAcademicRank = () => {
    createAcademicRank(academicRankIdValue)
    // setEdited({ [editableTitle + 'Id']: academicRankIdEditedValue })
    callBack({ [editableTitle + 'Id']: academicRankIdEditedValue })
  }

  const setActivityFields = () => {
    createActivities(activityFieldsValue)
    // setEdited({
    //   [editableTitle + 'Ids']: activityFieldsEditedValue.map((item) => item?.id)
    // })
    callBack({
      [editableTitle + 'Ids']: activityFieldsEditedValue.map((item) => item?.id)
    })
  }

  const setConsultingFields = () => {
    createConsultings(consultingFieldsValue)
    // setEdited({
    //   [editableTitle + 'Ids']: consultingFieldsEditedValue.map(
    //     (item) => item?.id
    //   )
    // })

    callBack({
      [editableTitle + 'Ids']: consultingFieldsEditedValue.map(
        (item) => item?.id
      )
    })
  }

  const setWorkplaceOrganizationPosition = () => {
    createWorkplaceOrganizationPosition(workplaceOrganizationPositionIdValue)
    // setEdited({
    //   [editableTitle + 'Id']: workplaceOrganizationPositionIdEditedValue
    // })
    callBack({
      [editableTitle + 'Id']: workplaceOrganizationPositionIdEditedValue
    })
  }

  const setWorkplaceOrganizationType = () => {
    createWorkplaceOrganizationType(workplaceOrganizationTypeIdValue)
    // setEdited({
    //   [editableTitle + 'Id']: workplaceOrganizationTypeIdEditedValue
    // })
    callBack({
      [editableTitle + 'Id']: workplaceOrganizationTypeIdEditedValue
    })
  }

  const setExpertises = () => {
    createExpertises(gardensValue)
    createExpertises(farmsValue)
    createExpertises(earthenGreenhouseValue)
    createExpertises(hydroponicGreenhouseValue)
    createExpertises(livestockAndBirdsValue)
    createExpertises(veterinaryValue)
    // setEdited({
    //   [editableTitle + 'Ids']: expertisesEditedValue.map((item) => item?.id)
    // })
    callBack({
      [editableTitle + 'Ids']: expertisesEditedValue.map((item) => item?.id)
    })
  }

  const setProfessions = () => {
    createProfessions(agricultureAndGardenValue)
    createProfessions(greenhouseValue)
    createProfessions(livestockAndBirdsProfessionsValue)
    createProfessions(veterinaryProfessionsValue)
    createProfessions(comprehensiveProfessionsValue)
    // setEdited({
    //   [editableTitle + 'Ids']: professionsEditedValue.map((item) => item?.id)
    // })
    callBack({
      [editableTitle + 'Ids']: professionsEditedValue.map((item) => item?.id)
    })
  }

  const onModalOk = () => {
    if (editableTitle === 'expertises') {
      setExpertises()
    } else if (editableTitle === 'professions') {
      setProfessions()
    } else if (editableTitle === 'activityFields') {
      setActivityFields()
    } else if (editableTitle === 'consultingFields') {
      setConsultingFields()
    } else if (editableTitle === 'academicDegree') {
      setAcademicDegree()
    } else if (editableTitle === 'academicField') {
      setAcademicField()
    } else if (editableTitle === 'academicRank') {
      setAcademicRank()
    } else if (editableTitle === 'workplaceOrganizationPosition') {
      setWorkplaceOrganizationPosition()
    } else if (editableTitle === 'workplaceOrganizationType') {
      setWorkplaceOrganizationType()
    } else if (editableTitle === 'avatar' || editableTitle === 'cover') {
      if (selectedFile) {
        if (cropedFile) {
          sendFileName()
        } else {
          alert('دکمه اعمال برش را بزنید')
        }
      } else {
        // setEdited('NOT_MODIFIED')
        callBack('NOT_MODIFIED')
        setModal(null)
        setIsOpen(false)
      }
    } else if (
      editableTitle === 'academicDegreeDocument' ||
      editableTitle === 'identityDocument' ||
      editableTitle === 'studentCard' ||
      editableTitle === 'engineeringSystemCard' ||
      editableTitle === 'resume'
    ) {
      if (selectedFile) {
        sendPrivateAndNonCroppedFileName()
      } else {
        // setEdited('NOT_MODIFIED')
        callBack('NOT_MODIFIED')
        setModal(null)
        setIsOpen(false)
      }
    } else if (forWhat === 'QUE') {
      setEdited({
        data: {
          [editableTitle]: queEditedValue
        }
      })
    } else {
      // setEdited({ [editableTitle]: editedValue })
      callBack({ [editableTitle]: editedValue })
    }
    if (
      editableTitle !== 'academicDegreeDocument' &&
      editableTitle !== 'avatar' &&
      editableTitle !== 'cover' &&
      editableTitle !== 'engineeringSystemCard' &&
      editableTitle !== 'resume' &&
      editableTitle !== 'studentCard' &&
      editableTitle !== 'nationalCard'
    ) {
      setIsOpen(false)
      setModal(null)
    }
  }

  return (
    <AntModal
      title='ویرایش'
      visible={true}
      onOk={onModalOk}
      onCancel={() => {
        setModal(null)
        setIsOpen(false)
      }}
    >
      {forWhat === 'EXP'
        ? returnRelatedComponentForExperts()
        : returnRelatedComponentForQuestionnaires()}
    </AntModal>
  )
}

export default Modal
