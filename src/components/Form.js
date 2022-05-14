import { useContext, useEffect, useState } from "react";
import { ItemsContext } from "../context/ItemsContext";
import { setItems, setPlacebo } from "../utils/itemsHandler";

function Form() {
    const [text, setText] = useState("");
    const [error, setError] = useState(null);
    const { dispatch } = useContext(ItemsContext);

    useEffect(() => {
        console.log("Rendering Form...")
    }, [])


    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (text.trim() === "") {
            setError("Don't leave it empty");
        } else {
            try {
                setError(null);
                console.log("Submitting...");
                const response = await setPlacebo(text);
                dispatch({ type: 'ADD_ITEM', payload: response })
                setText("");

            } catch (e) {
                setTimeout(() => setError("Ups! Something went wrong"), 3000);
                console.log(e)
            }
        }
    }

    return (

        <div className=" mx-auto w-full lg:max-w-xl md:max-w-lg  max-w-md">
            <form
                className="gradient shadow-2xl rounded mt-16 px-8 pt-6 pb-8 mb-4 mx-4"
                onSubmit={ handleSubmit }
            >
                <div>
                    <label className="block text-white text-2xl font-rubik m-4 text-center lg:text-left" htmlFor="name">
                        Enter Prompt
                    </label>
                    <textarea
                        onChange={ handleChange }
                        value={ text }
                        className=" bg-gray-700 bg-opacity-25 w-full h-64 p-4 mb-4 text-lg md:text-xl font-bold  text-white rounded-md"
                    />
                </div>
                { error && <div className="text-white text-md font-rubik font-bold m-2">{ error }</div> }
                <button className=" block rounded-md md:hover:text-xl m-auto lg:m-4  bg-gray-700 bg-opacity-25 text-white lg:text-2xl text-xl font-bold p-2">Submit</button>
            </form>
        </div>
    );
}

export default Form;
