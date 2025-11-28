import { useState, useEffect } from "react";
import './App.css'
export default function Advice() {
    const [quote, setQuote] = useState("Loading your quote");
    const [loading, setLoading] = useState(true);

    const getQuote = async () => {
        try {
            const res = await fetch("./json.json");
            const rdata = await res.json();
            console.log(rdata);

            const randomIndex = Math.floor(Math.random() * rdata.length);
            const randomQuote = rdata[randomIndex].quote; 

            setQuote(randomQuote);
            setLoading(false);
        } catch (error) {
            setQuote(" Failed to fetch quote ");
            setLoading(false);
        }
    };
    useEffect(() => {
        getQuote();
    }, []);

    return (
        <>
            <div className="kkk ">
                <div>
                    <h3>Quote for the Day</h3>
                    <p >"{ quote}"</p>
                </div>
            </div>
        </>
    );
}

