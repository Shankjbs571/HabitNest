import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const quotes = [
    "The secret of your success is found in your daily routine.",
    "Motivation is what gets you started. Habit is what keeps you going.",
    "Small daily improvements over time lead to stunning results.",
    "It's not what we do once in a while that shapes our lives. It's what we do consistently.",
    "The only way to do great work is to love what you do.",
];

export const Signup = () => {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [quote, setQuote] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
    }, []);

    return (
        <div className="bg-slate-300 h-screen flex flex-col items-center justify-center">
            {quote && <div className="text-lg font-bold italic text-gray-700 mb-6 text-center">" {quote} "</div>}
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign up"} />
                    <SubHeading label={"Enter your details to create an account"} />
                    <InputBox
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="John Doe"
                        label="Username"
                    />
                    <InputBox
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="123456"
                        label="password"
                    />
                    <div className="pt-4">
                        <Button
                            onClick={async () => {
                                const response = await axios.post("https://iusekarma.pythonanywhere.com/register", {
                                    username,
                                    password,
                                });
                                navigate("/signin");
                            }}
                            label={"Sign up"}
                        />
                    </div>
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
                </div>
            </div>
        </div>
    );
};