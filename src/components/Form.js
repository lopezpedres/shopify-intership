import { useContext, useEffect, useRef, useState } from "react";
import { ItemsContext } from "../context/ItemsContext";
import { setItems } from "../utils/itemsHandler";

function Form({ setLoading }) {
    const initialText = "Create a short story about:";
    const [text, setText] = useState(initialText);
    const [error, setError] = useState(null);
    const { dispatch } = useContext(ItemsContext);
    const loadingRef = useRef(true);

    useEffect(() => {
        console.log("Rendering Form...")
            return () => {
                loadingRef.current = false;
            }
    }, [])


    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (text.trim() === "") {
            setError("Don't leave it empty")
            setTimeout(() => setError(null), 3000);
            return
        } else {
            try {
                setError(null);
                console.log("Submitting...");
                setLoading(true)
                const prompt= text.trim()
                const response = await setItems(prompt);
                dispatch({ type: 'ADD_ITEM', payload: response })
                setText(initialText);
                if (loadingRef.current) {
                    setLoading(false);
                }

            } catch (e) {
                setError("Ups! Something went wrong");
                setTimeout(() => setError(null), 3000);
                console.log(e)
            }
        }
    }

    return (

        <div className=" mx-auto w-full lg:max-w-xl md:max-w-lg  max-w-md">
            <form
                className="gradient shadow-2xl rounded-xl mt-16 px-8 pt-6 pb-8 mb-4 mx-4"
                onSubmit={ handleSubmit }
            >
                <div>
                    <label className="block text-white text-2xl font-rubik m-4 text-center lg:text-left" htmlFor="name">
                        Enter prompt here
                    </label>
                    <textarea
                        onChange={ handleChange }
                        value={ text }
                        className=" bg-gray-700 bg-opacity-25 w-full h-64 p-4 mb-4 text-lg md:text-xl font-bold  text-white rounded-md"
                    />
                </div>
                { error && <div className="text-white text-md font-rubik font-bold m-2">{ error }</div> }
                <button className=" block rounded-md  m-auto lg:m-4  bg-gray-700 bg-opacity-25 text-white lg:text-2xl text-xl font-bold p-2">Submit</button>
            </form>
        </div>
    );
}

export default Form;
