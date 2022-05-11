import { useContext, useState } from "react";
import { ItemsContext } from "../context/ItemsContext";
import { fetcher } from "../utils/fetcher";

function Form() {
    const [text, setText] = useState("");
    const [error, setError] = useState(null);
    const { dispatch } = useContext(ItemsContext);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (text.trim() === "") {
            setError("Don't leave it empty");
        } else {
            try {
                const data = await fetcher(text)
                const newItem = {
                    id: data.id,
                    createdAt: new Date().toISOString(),
                    prompt: text,
                    model: data.model,
                    object: data.object,
                    output: data.choices[0].text,
                }
                dispatch({ type: "ADD_ITEM", payload: newItem });
                setText("");
            } catch (e) {
                setError("Ups! Something went wrong");
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
                    <label className="block text-white text-lg font-rubik font-bold m-2 " htmlFor="name">
                        Enter Prompt
                    </label>
                    <textarea
                        onChange={ handleChange }
                        value={ text }
                        className="block bg-gray-700 bg-opacity-25 w-full h-64 p-4  text-white rounded-sm"
                    />
                </div>
                { error && <div className="text-white text-md font-rubik font-bold m-2">{ error }</div> }
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;
