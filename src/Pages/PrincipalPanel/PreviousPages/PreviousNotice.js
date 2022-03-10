import React, {Fragment,useRef, useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetingPreviousNotice, PrincipalNoticePublish, PublishImageNotice, DeleteNotice, PutEditNotice} from '../../../SchoolRedux/PrincipalSlice';
import { Dialog, Transition } from '@headlessui/react';
import { BsCalendarCheck } from 'react-icons/bs';
import useFirebase from '../../Shared/Authentication/Authentication';

const PreviousNotice = () => {
    const {user} = useFirebase()
    const [notice, setNotice] = useState({})
    const [img, setImg] = useState('')
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)
    const [editnotice, setEditnotice] = useState({})
    const cancelButtonRef = useRef(null);
    const [demo, setDemo] = useState([]);
    
    const OnChangeHandler = e => {
        const name = e.target.name;
        const val = e.target.value;

        const newdata = { ...editnotice};
        newdata[name] = val;
        setEditnotice(newdata)
    }
    useEffect(() => {
        dispatch(GetingPreviousNotice())
    }, [demo, dispatch]);

    const previousNotice = useSelector((state) => state.principalStore.notices);

    const DeleteHandler = (id) => {
        dispatch(DeleteNotice(id))
        setDemo(previousNotice)
    }
    const EditHandler = (id) => {
        fetch(`https://the-school-network.web.app/GetEditNotice/${id}`)
        .then(res => res.json()).then(data => {
            setEditnotice(data)
            setOpen(true)
        })
    }
    const SubmitEditNotice = () => {
        dispatch(PutEditNotice(editnotice))
        setDemo(previousNotice)
    }
  return (
    <div>
    {user.email === 'principal@gmail.com' ? <h1 className='text-center mt-8 text-5xl font-bold mb-8'>All Previous Notice</h1> : <h1 className='text-center mt-8 text-5xl font-bold mb-8'>Notice For All Teachers</h1>}
        <div className="previous_notice_section">
                {
                    previousNotice?.map(notice => 
                        <div className='previous_notice_div shadow-lg bg-gray-300'>
                            <h1 className='text-3xl font-bold text-center pb-12'>NOTICE</h1>
                            <h4 className='text-xl mt-4 font-bold text-center text-blue-900 pb-8'>{notice?.title}</h4>
                            <h4 className=' font-bold text-end mt-4 pb-4 text-grau-900 date_text'><BsCalendarCheck className='react__button_icons' size={20}/> {notice?.date}</h4>
                            <p className=''>{notice?.description}</p>
                            {
                                notice.img &&  <img className="notice_img" src={`data:image/jpeg;base64,${notice?.img}`} alt=""/>

                            }
                            <p className='text-xl font-bold  pt-8 text-blue-900'>{notice?.noticeFrom}</p>
                            <p className='text-xl font-bold   mb-4 text-blue-900'>The School Network</p>
                            {user?.email === 'principal@gmail.com' &&    <div className='button_div'>
                                <button onClick={() => DeleteHandler(notice._id)} className='delete_btn'>DELETE</button> <button onClick={() => EditHandler(notice._id)} className='edit_btn'>EDIT</button>
                            </div>}
                         
                        </div>
                    )
                }
        </div>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      EDIT NOTICE
                    </Dialog.Title>
                    <div  className='principal_notice_publish_form mx-auto mt-8 shadow-lg shadow-indigo-500/50'>
                <label className='principal_form_labels font-bold'>Upload Notice</label>
                <span className='principal_form_span'><input className='principal_file_input mt-2' onBlur={(e) => setImg(e.target.files[0])}  type="file" /></span>
                <h1 className='text-center mt-4 text-3xl font-bold text-gray-700'>OR</h1>
                <label className='principal_form_labels font-bold'>Notice Title</label>
                <input value={editnotice.title} name='title' onChange={OnChangeHandler} className='principal_form_inputs' type="text" placeholder='Notice Title' />

                <label className='principal_form_labels font-bold'>Write Notice</label>
                <textarea value={editnotice.description} name='description' onChange={OnChangeHandler}  className='principal_form_textarea' as="text" />
                <button onClick={SubmitEditNotice}  className='principal_notice_publish_btn shadow-lg shadow-indigo-500/50'>SUBMIT</button>
            </div>
                  </div>
                </div>
              </div>
             
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
    </div>
  )
}

export default PreviousNotice
