import React, { useContext, useState } from 'react'
import { ItemsContext } from '../context/ItemsContext';


const InitialModal = () => {
    const [activeModal, setActiveModal] = useState(true)
    const { items } = useContext(ItemsContext);
    //Need to find the difference between "and" and "&&"
    const isInCache = () => {
        if (activeModal) {
            return !(items && items.length)
        }
}

    return (
        <>
            { isInCache() && (
                <div className=' absolute m-auto left-0 right-0  my-10  text-white p-10 gradient max-w-3xl absolute'>
                    <section className='text-2xl'  >
                        <h1 className='text-5xl mb-4'>Welcome</h1>

                        <p>This a space where you can create the start of a short story by just giving some words!</p>
                        <p>Here are some things you should know about this awesome webpage</p>
                        <ul className='my-4'>
                            <li className='mb-4'>
                                <h3 className='font-bold'>A good prompt is important </h3>
                                <p>
                                    Simply add the words you want your short story to be about.<br /> For example: "Create a short story about cats and snakes!" <br/> Don't forget to type "Create a short story about:"
                                </p>
                            </li>
                            <li className='mb-4'>
                                <h3 className='font-bold'>Swipe to delete </h3>
                                <p>
                                    You can use the x button to delete your stored prompts or you can simply just swipe left or right to remove them off the list!
                                </p>
                            </li>
                            <li>
                                <h3 className='font-bold'>Don't worry about loosing your saved prompts</h3>
                                <p>
                                    We store your short stories in cache! So you can leave and come back at anytime!
                                </p>
                            </li>
                        </ul>

                    </section>
                    <button className='block bg-white p-2 mt-10 rounded-md text-2xl text-black mx-auto text-center' onClick={ () => setActiveModal(false) }>
                        Got it!
                    </button>

                </div>) }

        </>
    )
}

export default InitialModal