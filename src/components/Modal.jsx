import React, { useState } from 'react'
import styles from './styles.module.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { RiCloseLine } from "react-icons/ri";
import { useEffect } from 'react';

const Modal = ({ setModal, setIsOpen, setEdited, editableTitle, editableValue, staticData }) => {

  const animatedComponents = makeAnimated();
  const [editedValue, setEditedValue] = useState(editableValue)

  // jobField
  let jobFieldDefaultValue
  if (editableTitle === 'jobFiled') jobFieldDefaultValue = editableValue.map((item) => { return { value: item, label: item } }).filter(Boolean)

  const setJobField = (e) => {
    setEditedValue(e?.length === 0 ? jobFieldDefaultValue : e.map((item) => item.value))
  }

  // expertise
  let expertiseEditedValue = []

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

  if (editableTitle === 'expertise') {
    gardenDefaultValue = editableValue.map((item) => { if (item.parentName === 'باغات') { return { value: item.name, label: item.name, item: item } } }).filter(Boolean)
    farmsDefaultValue = editableValue.map((item) => { if (item.parentName === 'مزارع') { return { value: item.name, label: item.name, item: item } } }).filter(Boolean)
    earthenGreenhouseDefaultValue = editableValue.map((item) => { if (item.parentName === 'گلخانه خاکی') { return { value: item.name, label: item.name, item: item } } }).filter(Boolean)
    hydroponicGreenhouseDefaultValue = editableValue.map((item) => { if (item.parentName === 'گلخانه هیدروپونیک') { return { value: item.name, label: item.name, item: item } } }).filter(Boolean)
    livestockAndBirdsDefaultValue = editableValue.map((item) => { if (item.parentName === 'دام و طیور') { return { value: item.name, label: item.name, item: item } } }).filter(Boolean)
    veterinaryDefaultValue = editableValue.map((item) => { if (item.parentName === 'دامپزشکی') { return { value: item.name, label: item.name, item: item } } }).filter(Boolean)
  }


  const setGardens = (e) => {
    let items = e.map(e => e.item)
    setGardensValue(
      items
    )
  }

  const setFarms = (e) => {
    let items = e.map(e => e.item)
    setFarmsValue(
      items
    )
  }

  const setEarthenGreenhouse = (e) => {
    let items = e.map(e => e.item)
    setEarthenGreenhouseValue(
      items
    )
  }

  const setHydroponicGreenhouse = (e) => {
    let items = e.map(e => e.item)
    setHydroponicGreenhouseValue(
      items
    )
  }

  const setLivestockAndBirds = (e) => {
    let items = e.map(e => e.item)
    setLivestockAndBirdsValue(
      items
    )
  }

  const setVeterinary = (e) => {
    let items = e.map(e => e.item)
    setVeterinaryValue(
      items
    )
  }

  const createExpertise = (fieldName) => {
    fieldName?.length > 0 && fieldName?.map((item) => {
      expertiseEditedValue?.push({
        parentName: item?.parentName,
        id: item?.id,
        name: item?.name,
      })
    })
  }

  // professions
  let professionsEditedValue = []

  const [agricultureAndGardenValue, setAgricultureAndGardenValue] = useState([])
  const [greenhouseValue, setgreenhouseValue] = useState([])
  const [livestockAndBirdsProfessionsValue, setLivestockAndBirdsProfessionsValue] = useState([])
  const [veterinaryProfessionsValue, setVeterinaryProfessionsValue] = useState([])


  let agricultureAndGardenDefaultValue
  let greenhouseDefaultValue
  let livestockAndBirdsProfessionsDefaultValue
  let veterinaryProfessionsDefaultValue

  if (editableTitle === 'profession') {
    agricultureAndGardenDefaultValue = editableValue.map((item) => { if (item.parentName === 'زراعت و باغ') { return { value: item.name, label: item.name, item: item } } }).filter(Boolean)
    greenhouseDefaultValue = editableValue.map((item) => { if (item.parentName === 'گلخانه') { return { value: item.name, label: item.name, item: item } } }).filter(Boolean)
    livestockAndBirdsProfessionsDefaultValue = editableValue.map((item) => { if (item.parentName === 'حرفه های دام و طیور') { return { value: item.name, label: item.name, item: item } } }).filter(Boolean)
    veterinaryProfessionsDefaultValue = editableValue.map((item) => { if (item.parentName === 'دامپزشکی') { return { value: item.name, label: item.name, item: item } } }).filter(Boolean)
  }
  const setAgricultureAndGarden = (e) => {
    let items = e.map(e => e.item)
    setAgricultureAndGardenValue(
      items
    )
  }

  const setGreenhouse = (e) => {
    let items = e.map(e => e.item)
    setgreenhouseValue(
      items
    )
  }

  const setLivestockAndBirdsProfessions = (e) => {
    let items = e.map(e => e.item)
    setLivestockAndBirdsProfessionsValue(
      items
    )
  }

  const setVeterinaryProfessions = (e) => {
    let items = e.map(e => e.item)
    setVeterinaryProfessionsValue(
      items
    )
  }

  const createProfessions = (fieldName) => {
    fieldName?.length > 0 && fieldName?.map((item) => {
      professionsEditedValue?.push({
        parentName: item?.parentName,
        id: item?.id,
        name: item?.name,
      })
    })
  }

  // consultingField
  let consultingFieldDefaultValue
  if (editableTitle === 'consultingField') consultingFieldDefaultValue = editableValue.map((item) => { return { value: item, label: item } }).filter(Boolean)

  const setConsultingField = (e) => {
    console.log("e", e)
    setEditedValue(e?.length === 0 ? consultingFieldDefaultValue : e.map((item) => item.value))
  }


  // inputs, radioButtons and selections
  const onChangeHandler = (e) => {
    if (e.target.type === 'file') {
      setEditedValue(e.target.files[0])
    } else {
      setEditedValue(e.target.value)
    }
  }

  // true false radioButtons 
  const trueFalseOnChangeHandler = (e) => {
    setEditedValue(e)
  }

  // for communicationWays
  const setCommunicationWays = (e) => {
    const element = editedValue.find(x => x.title === e.target.name)
    if (element) {
      editedValue.splice(editedValue.indexOf(element), 1)
      if (e.target.type === "radio") {
        element.publicationStatus = e.target.value
      } else {
        element.value = e.target.value
      }
      setEditedValue([
        ...editedValue,
        element
      ])
    } else {
      const element = staticData.communicationWays.find(x => x.englishName === e.target.name)
      console.log("element: ", element)
      var newElement = {
        title: element.englishName,
        value: e.target.value,
        logoUrl: element.iconUrl,
        publicationStatus: true
      }
      setEditedValue([
        ...editedValue,
        newElement
      ])
    }
  }


  // show related component
  function returnRelatedComponent() {
    switch (typeof editableValue) {
      case 'string' :
        if (editableTitle === 'expectedPage') {
          return (
            <div className={styles.radioButtonContainer}>
              <div>
                <input type="radio" value="خبره" name="expectedPage" defaultChecked={editedValue === "خبره"} onChange={onChangeHandler} />خبره
              </div>
              <div>
                <input type="radio" value="متخصص" name="expectedPage" defaultChecked={editedValue === "متخصص"} onChange={onChangeHandler} />متخصص
              </div>
            </div>
          )
        } else if (editableTitle === 'degree') {
          return (
            <select value={editedValue} onChange={onChangeHandler}>
              <option value disabled>انتخاب کنید</option>
              <option value="دکتری">دکتری</option>
              <option value="کارشناسی ارشد">کارشناسی ارشد</option>
              <option value="کارشناسی">کارشناسی</option>
              <option value="دانشجوی دکتری">دانشجوی دکتری</option>
              <option value="دانشجوی کارشناسی ارشد">دانشجوی کارشناسی ارشد</option>
              <option value="دانشجوی کارشناسی">دانشجوی کارشناسی</option>
              <option value="فاقد تحصیلات دانشگاهی">فاقد تحصیلات دانشگاهی</option>
            </select>
          )
        } else if (editableTitle === 'workOrganizationType') {
          return (
            <select value={editedValue} onChange={onChangeHandler}>
              <option value disabled>انتخاب کنید</option>
              <option value="جهاد کشاورزی">جهاد کشاورزی</option>
              <option value="دانشگاه">دانشگاه</option>
              <option value="مرکز تحقیقات کشاورزی">مرکز  تحقیقات کشاورزی</option>
              <option value="سایر ارگان های دولتی">سایر ارگان های دولتی</option>
              <option value="شرکت خصوصی">شرکت خصوصی</option>
              <option value="شغل آزاد">شغل آزاد</option>
              <option value="سایر">سایر</option>
            </select>
          )
        }
        else if (editableTitle === 'major') {
          return (
            <select value={editedValue} onChange={onChangeHandler}>
              <option value disabled>انتخاب کنید</option>
              {staticData.majors.map(major => <option value={major}>{major}</option>)}
            </select>
          )
        } else if (editableTitle === 'avatarUrl' || editableTitle === 'studentCardUrl' || editableTitle === 'resumeUrl' || editableTitle === 'lastDegreeUrl' || editableTitle === 'engineeringSystemCardUrl')
        {
          return (
            <div className={styles.imageSelectorContainer}>
              <img className={styles.avatar} src={editableValue} />
              <label for="file-upload" className={styles.fileUpload}>
                آپلود فایل جدید
              </label>
              <input className={styles.inputFile} id="file-upload" type="file" accept=".jpg,.jpeg,.png" multiple={false} onChange={onChangeHandler}/>
            </div>
          )
        }
        else {
          return <input className={styles.centerInput} type='text' defaultValue={editableValue} onChange={onChangeHandler} />
        }
      case 'number':
        return <input className={styles.centerInput} type='number' defaultValue={editableValue} onChange={onChangeHandler} />
      case 'boolean':
        if (editableTitle === 'farmingStatus') {
          return (
            <div className={styles.radioButtonContainer}>
              <div>
                <input type="radio" value="true" name="farmingStatus" defaultChecked={editedValue} onChange={(e) => trueFalseOnChangeHandler(Boolean(e.target.value))} />بله
              </div>
              <div>
                <input type="radio" value="" name="farmingStatus" defaultChecked={!editedValue} onChange={(e) => trueFalseOnChangeHandler(Boolean(e.target.value))} />خیر
              </div>
            </div>
          )
        } else if (editableTitle == 'doesCollaborate') {
          return (
            <div className={styles.radioButtonContainer}>
              <div>
                <input type="radio" value="true" name="doesCollaborate" defaultChecked={editedValue} onChange={(e) => trueFalseOnChangeHandler(Boolean(e.target.value))} />بله
              </div>
              <div>
                <input type="radio" value="" name="doesCollaborate" defaultChecked={!editedValue} onChange={(e) => trueFalseOnChangeHandler(Boolean(e.target.value))} />خیر
              </div>
            </div>
          )
        } else if (editableTitle === 'hasVehicle') {
          return (
            <div className={styles.radioButtonContainer}>
              <div>
                <input type="radio" value="true" name="hasVehicle" defaultChecked={editedValue} onChange={(e) => trueFalseOnChangeHandler(Boolean(e.target.value))} />بله
              </div>
              <div>
                <input type="radio" value="" name="hasVehicle" defaultChecked={!editedValue} onChange={(e) => trueFalseOnChangeHandler(Boolean(e.target.value))} />خیر
              </div>
            </div>
          )
        } else if (editableTitle === 'isMemberOfAgriculturalOrganization') {
          return (
            <div className={styles.radioButtonContainer}>
              <div>
                <input type="radio" value="true" name="isMemberOfAgriculturalOrganization" defaultChecked={editedValue} onChange={(e) => trueFalseOnChangeHandler(Boolean(e.target.value))} />بله
              </div>
              <div>
                <input type="radio" value="" name="isMemberOfAgriculturalOrganization" defaultChecked={!editedValue} onChange={(e) => trueFalseOnChangeHandler(Boolean(e.target.value))} />خیر
              </div>
            </div>
          )
        }
      case 'object':
        if (editableTitle === 'communicationWays') {
          return (
            <form>
              <div className={styles.element}>
                <div className={styles.row}>
                  <div className={styles.rowChild}>
                    <label>شماره تماس کاری</label>
                    <input className={styles.leftInput} type='tel' name="officialPhoneNumber" defaultValue={editableValue.find(x => x.title === "officialPhoneNumber")?.value} onChange={setCommunicationWays}
                    />
                  </div>
                  <div className={styles.row}>
                    <label> شماره منتشر شود؟</label>
                    <div className={styles.row}>
                      <div>
                        <input className={styles.leftInput} type='radio' value='true' name="officialPhoneNumber" defaultChecked={editableValue.find(x => x.title === "officialPhoneNumber")?.publicationStatus} onChange={setCommunicationWays} /> بله
                      </div>
                      <div>
                        <input className={styles.leftInput} type='radio' value='false' name="officialPhoneNumber" defaultChecked={!editableValue.find(x => x.title === "officialPhoneNumber")?.publicationStatus} onChange={setCommunicationWays} />خیر
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.rowChild}>
                    <label>تلفن ثابت</label>
                    <input className={styles.leftInput} type='tel' name='landingNumber' defaultValue={editableValue.find(x => x.title === "landingNumber")?.value} onChange={setCommunicationWays} />
                  </div>
                  <div className={styles.rowChild}>
                    <label>آی دی تاک</label>
                    <input className={styles.leftInput} type='text' name='Tak' defaultValue={editableValue.find(x => x.title === "Tak")?.value} onChange={setCommunicationWays} />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.rowChild}>
                    <label>شماره  واتساپ (کاری)</label>
                    <input className={styles.leftInput} type='tel' name='Whatsapp' defaultValue={editableValue.find(x => x.title === "Whatsapp")?.value} onChange={setCommunicationWays} />
                  </div>
                  <div className={styles.rowChild}>
                    <label>آی دی اینستاگرام (کاری)</label>
                    <input className={styles.leftInput} type='text' name='instagram' defaultValue={editableValue.find(x => x.title === "instagram")?.value} onChange={setCommunicationWays} />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.rowChild}>
                    <label>آی دی تلگرام (کاری)</label>
                    <input className={styles.leftInput} type='text' name='Telegram' defaultValue={editableValue.find(x => x.title === "Telegram")?.value} onChange={setCommunicationWays} />
                  </div>
                  <div className={styles.rowChild}>
                    <label>لینک لینکدین</label>
                    <input className={styles.leftInput} type='text' name='Linkedin' defaultValue={editableValue.find(x => x.title === "Linkedin")?.value} onChange={setCommunicationWays} />
                  </div>
                </div>
                <div className={styles.row}>
                  {/* <div className={styles.rowChild}>
                    <label>لینک گوگل اسکولار</label>
                    <input className={styles.leftInput} type='text' name='GoogleScholar' defaultValue={editableValue.find(x => x.title === "GoogleScholar")?.value} onChange={setCommunicationWays} />
                  </div> */}
                  <div className={styles.rowChild}>
                    <label>نشانی پست الکترونیکی</label>
                    <input className={styles.leftInput} type='text' name='email' value='email' defaultValue={editableValue.find(x => x.title === "email")?.value} onChange={setCommunicationWays} />
                  </div>
                </div>
                {/*<div>
                <div>
                  <label><span>*</span>استان</label>
                  <select name='province' onChange={(e) => setFormValues({ ...formValues, province: e.target.value })} value={formValues?.province} onClick={handleFindProvinceID}>
                    {provinces?.provinces?.map((item, i) => (
                      <option key={i} value={item?.name}>{item?.name}</option>
                    ))}
                  </select>
                  {validator.current.message("province", formValues?.province, "required")}
                </div>
                <div>
                  <label>شهر</label>
                  <select name='city' onChange={(e) => setFormValues({ ...formValues, city: e.target.value })} value={formValues?.city}>
                    {cities?.length > 0 ? cities?.map((item, i) => (
                      <option key={i} value={item?.name}>{item?.name}</option>
                    )) : citiesList?.cities?.map((item, i) => (
                      <option key={i} value={item?.name}>{item?.name}</option>
                    ))}
                  </select>
                  {validator.current.message("city", formValues?.city, "required")}
                </div>
              </div>
              <div>
                <div>
                  <label>منطقه</label>
                  <input type='text'
                    value={formValues.zone}
                    name="zone"
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        zone: e.target.value,
                      });
                    }} />
                  </div> 
              </div> */}
              </div>
            </form>
          )
        } else if (editableTitle === 'jobFiled') {

          let jobFiledOptions = staticData.jobFiled?.map((item) => { return { value: item, label: item } })
          return (<Select className={styles.multiSelect} name='jobFiled' closeMenuOnSelect={true} components={animatedComponents} isMulti options={jobFiledOptions} isSearchable={true} defaultValue={jobFieldDefaultValue} onChange={setJobField} />)

        } else if (editableTitle === 'expertise') {

          useEffect(() => {
            setGardens(gardenDefaultValue)
            setFarms(farmsDefaultValue)
            setEarthenGreenhouse(earthenGreenhouseDefaultValue)
            setHydroponicGreenhouse(hydroponicGreenhouseDefaultValue)
            setLivestockAndBirds(livestockAndBirdsDefaultValue)
            setVeterinary(veterinaryDefaultValue)
          }, [])

          // garden
          let gardensOptions = staticData.gardens?.map((item) => { return { value: item.name, label: item.name, item: item } })

          // farm
          let farmsOptions = staticData.farms?.map((item) => { return { value: item.name, label: item.name, item: item } })

          // earthenGreenhouse
          let earthenGreenhouseOptions = staticData.earthenGreenhouse?.map((item) => { return { value: item.name, label: item.name, item: item } })

          // hydroponicGreenhouse
          let hydroponicGreenhouseOptions = staticData.hydroponicGreenhouse?.map((item) => { return { value: item.name, label: item.name, item: item } })

          // livestockAndBirds
          let livestockAndBirdsOptions = staticData.livestockAndBirds?.map((item) => { return { value: item.name, label: item.name, item: item } })

          // veterinary
          let veterinaryOptions = staticData.veterinary?.map((item) => { return { value: item.name, label: item.name, item: item } })

          return (
            <div className={styles.element}>
              <div className={styles.row}>
                <div className={styles.element}>
                  <label>باغات</label>
                  <Select className={styles.multiSelect} name='gardens' closeMenuOnSelect={true} components={animatedComponents} isMulti options={gardensOptions} isSearchable={true} defaultValue={gardenDefaultValue} onChange={setGardens} />
                </div>
                <div className={styles.element}>
                  <label>مزارع</label>
                  <Select className={styles.multiSelect} name='farms' closeMenuOnSelect={true} components={animatedComponents} isMulti options={farmsOptions} isSearchable={true} defaultValue={farmsDefaultValue} onChange={setFarms} />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.element}>
                  <label>گلخانه خاکی</label>
                  <Select className={styles.multiSelect} name='earthenGreenhouse' closeMenuOnSelect={true} components={animatedComponents} isMulti options={earthenGreenhouseOptions} isSearchable={true} defaultValue={earthenGreenhouseDefaultValue} onChange={setEarthenGreenhouse} />
                </div>
                <div className={styles.element}>
                  <label>گلخانه هیدروپونیک</label>
                  <Select className={styles.multiSelect} name='hydroponicGreenhouse' closeMenuOnSelect={true} components={animatedComponents} isMulti options={hydroponicGreenhouseOptions} isSearchable={true} defaultValue={hydroponicGreenhouseDefaultValue} onChange={setHydroponicGreenhouse} />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.element}>
                  <label>دام و طیور</label>
                  <Select className={styles.multiSelect} name='livestockAndBirds' closeMenuOnSelect={true} components={animatedComponents} isMulti options={livestockAndBirdsOptions} isSearchable={true} defaultValue={livestockAndBirdsDefaultValue} onChange={setLivestockAndBirds} />
                </div>
                <div className={styles.element}>
                  <label>دامپزشکی</label>
                  <Select className={styles.multiSelect} name='veterinary' closeMenuOnSelect={true} components={animatedComponents} isMulti options={veterinaryOptions} isSearchable={true} defaultValue={veterinaryDefaultValue} onChange={setVeterinary} />
                </div>
              </div>
            </div>
          )
        } else if (editableTitle === 'profession') {


          useEffect(() => {
            setAgricultureAndGarden(agricultureAndGardenDefaultValue)
            setGreenhouse(greenhouseDefaultValue)
            setLivestockAndBirdsProfessions(livestockAndBirdsProfessionsDefaultValue)
            setVeterinaryProfessions(veterinaryProfessionsDefaultValue)
          }, [])

          // agricultureAndGarden
          let agricultureAndGardenOptions = staticData.agricultureAndGarden?.map((item) => { return { value: item.name, label: item.name, item: item } })

          // greenhouse
          let greenhouseOptions = staticData.greenhouse?.map((item) => { return { value: item.name, label: item.name, item: item } })

          // livestockAndBirds
          let livestockAndBirdsOptions = staticData.livestockAndBirdsProfessions?.map((item) => { return { value: item.name, label: item.name, item: item } })

          // veterinaryProfessions
          let veterinaryProfessionsOptions = staticData.veterinaryOptions?.map((item) => { return { value: item.name, label: item.name, item: item } })

          return (
            <div className={styles.element}>
              <div className={styles.row}>
                <div className={styles.element}>
                  <label>زراعت و باغ</label>
                  <Select className={styles.multiSelect} name='agricultureAndGarden' closeMenuOnSelect={true} components={animatedComponents} isMulti options={agricultureAndGardenOptions} isSearchable={true} defaultValue={agricultureAndGardenDefaultValue} onChange={setAgricultureAndGarden} />
                </div>
                <div className={styles.element}>
                  <label>گلخانه</label>
                  <Select className={styles.multiSelect} name='greenhouse' closeMenuOnSelect={true} components={animatedComponents} isMulti options={greenhouseOptions} isSearchable={true} defaultValue={greenhouseDefaultValue} onChange={setGreenhouse} />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.element}>
                  <label>دام و طیور</label>
                  <Select className={styles.multiSelect} name='livestockAndBirdsProfessions' closeMenuOnSelect={true} components={animatedComponents} isMulti options={livestockAndBirdsOptions} isSearchable={true} defaultValue={livestockAndBirdsProfessionsDefaultValue} onChange={setLivestockAndBirdsProfessions} />
                </div>
                <div className={styles.element}>
                  <label>دامپزشکی</label>
                  <Select className={styles.multiSelect} name='veterinaryProfessions' closeMenuOnSelect={true} components={animatedComponents} isMulti options={veterinaryProfessionsOptions} isSearchable={true} defaultValue={veterinaryProfessionsDefaultValue} onChange={setVeterinaryProfessions} />
                </div>
              </div>
            </div>
          )
        }  
        else if (editableTitle === 'consultingField'){
          let consultingFieldOptions = staticData.consultingField?.map((item) => { return { value: item, label: item } })
          return (<Select className={styles.multiSelect} name='consultingField' closeMenuOnSelect={true} components={animatedComponents} isMulti options={consultingFieldOptions} isSearchable={true} defaultValue={consultingFieldDefaultValue} onChange={setConsultingField} />)
        } else {
          return <input className={styles.centerInput} type='text' defaultValue={editableValue} onChange={onChangeHandler} />
        }
      // select option
      // multi select
      default:
        break
    }
  }


  const setExpertise = () => {
    createExpertise(gardensValue);
    createExpertise(farmsValue);
    createExpertise(earthenGreenhouseValue);
    createExpertise(hydroponicGreenhouseValue)
    createExpertise(livestockAndBirdsValue);
    createExpertise(veterinaryValue);
    // createExpertise(gardensValue?.length === 0 ? gardenDefaultValue.map(x => x.item) : gardensValue);
    // createExpertise(farmsValue?.length === 0 ? farmsDefaultValue.map(x => x.item) : farmsValue);
    // createExpertise(earthenGreenhouseValue?.length === 0 ? earthenGreenhouseDefaultValue.map(x => x.item) : earthenGreenhouseValue);
    // createExpertise(hydroponicGreenhouseValue?.length === 0 ? hydroponicGreenhouseDefaultValue.map(x => x.item) : hydroponicGreenhouseValue)
    // createExpertise(livestockAndBirdsValue?.length === 0 ? livestockAndBirdsDefaultValue.map(x => x.item) : livestockAndBirdsValue);
    // createExpertise(veterinaryValue?.length === 0 ? veterinaryDefaultValue.map(x => x.item) : veterinaryValue);
    setEdited({ [editableTitle]: expertiseEditedValue })
  }

  const setProfessions = () => {
    createProfessions(agricultureAndGardenValue);
    createProfessions(greenhouseValue);
    createProfessions(livestockAndBirdsProfessionsValue);
    createProfessions(veterinaryProfessionsValue);
    setEdited({ [editableTitle]: professionsEditedValue })
  }

  return (
    <React.Fragment>
      <div className={styles.darkBG} onClick={() => {
        setModal(null)
        setIsOpen(false)
      }} />
      <div className={styles.centered}>
        <div className={styles.modal}>

          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{editableTitle} ویرایش</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => {
            setModal(null)
            setIsOpen(false)
          }}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <label>لطفا مقدار جدید را وارد کنید</label>
            {returnRelatedComponent()}
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.saveBtn} onClick={() => {
                if (editableTitle === 'expertise') {
                  setExpertise()
                } else if (editableTitle === 'profession') {
                  setProfessions()
                } else if (editableTitle === 'avatarUrl') {
                  let formData = new FormData()
                  formData.append('avatar', editedValue)
                  formData.append('resume', null)
                  formData.append('lastDegree', null)
                  formData.append('cover', null)
                  formData.append('studentCard', null)
                  formData.append('engineeringSystemCard', null)
                  setEdited(formData)
                } else if (editableTitle === 'resumeUrl') {
                  let formData = new FormData()
                  formData.append('avatar', null)
                  formData.append('resume', editedValue)
                  formData.append('lastDegree', null)
                  formData.append('cover', null)
                  formData.append('studentCard', null)
                  formData.append('engineeringSystemCard', null)
                  setEdited(formData)
                }else if (editableTitle === 'lastDegreeUrl') {
                  let formData = new FormData()
                  formData.append('avatar', null)
                  formData.append('resume', null)
                  formData.append('lastDegree', editedValue)
                  formData.append('cover', null)
                  formData.append('studentCard', null)
                  formData.append('engineeringSystemCard', null)
                  setEdited(formData)
                } else if (editableTitle === 'coverUrl') {
                  let formData = new FormData()
                  formData.append('avatar', null)
                  formData.append('resume', null)
                  formData.append('lastDegree', null)
                  formData.append('cover', editedValue)
                  formData.append('studentCard', null)
                  formData.append('engineeringSystemCard', null)
                  setEdited(formData)
                } else if (editableTitle === 'studentCardUrl') {
                  let formData = new FormData()
                  formData.append('avatar', null)
                  formData.append('resume', null)
                  formData.append('lastDegree', null)
                  formData.append('cover', null)
                  formData.append('studentCard', editedValue)
                  formData.append('engineeringSystemCard', null)
                  setEdited(formData)
                } else if (editableTitle === 'engineeringSystemCardUrl') {
                  let formData = new FormData()
                  formData.append('avatar', null)
                  formData.append('resume', null)
                  formData.append('lastDegree', null)
                  formData.append('cover', null)
                  formData.append('studentCard', null)
                  formData.append('engineeringSystemCard', editedValue)
                  setEdited(formData)
                } else {
                  setEdited({ [editableTitle]: editedValue })
                }
                setModal(null)
                setIsOpen(false)
              }}>
                ذخیره
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => {
                  setModal(null)
                  setIsOpen(false)
                }}
              >
                لغو
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Modal