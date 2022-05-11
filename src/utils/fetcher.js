import fetch from 'isomorphic-fetch';
export const fetcher = async (prompt)=>{
    const payload = {
        prompt,
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }

    const url = process.env.REACT_APP_OPENAI_URL;
    console.log(url);
    const response = await fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`
            },
            body: JSON.stringify(payload)
        });
    const data = await response.json();
    console.log(data);
    return data;

}