import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

const quotes = [
    "The secret of your success is found in your daily routine.",
    "Motivation is what gets you started. Habit is what keeps you going.",
    "Small daily improvements over time lead to stunning results.",
    "It's not what we do once in a while that shapes our lives. It's what we do consistently.",
    "The only way to do great work is to love what you do.",
];

export const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [quote, setQuote] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
    }, []);

    const handleSignIn = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(
                "https://iusekarma.pythonanywhere.com/login",
                {
                    username,
                    password,
                },
                { withCredentials: true } // This ensures cookies are included in the request
            );
            if (response.status === 200) {
                navigate("/dashboard");
            } else {
                setError("Login failed: No token received");
                console.log(response)
            }
        } catch (error) {
            if (error.response && error.response.status === 411) {
                setError(error.response.data.message || "Incorrect inputs");
            } else {
                setError("An error occurred during sign-in. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-blue-100 h-screen flex flex-col items-center justify-center">
            {quote && <div className="text-lg font-bold italic text-gray-700 mb-6 text-center">" {quote} "</div>}
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-blue-200 w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign in"} />
                    <SubHeading label={"Enter your credentials to access your account"} />
                    <InputBox
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                    <InputBox
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <div className="pt-4">
                        <Button
                            onClick={handleSignIn}
                            label={loading ? "Signing in..." : "Sign in"}
                            disabled={loading} // Disable the button while loading
                        />
                    </div>
                    {error && <div className="text-red-500 pt-2">{error}</div>}
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/"} />
                </div>
            </div>
        </div>
    );
};