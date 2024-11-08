"use client"; // Ensure this component is only rendered on the client side

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IoVolumeHighSharp, IoVolumeMuteSharp } from "react-icons/io5";

function TextToSpeech() {
    const [text, setText] = useState("");
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    const [isSpeaking, setIsSpeaking] = useState(false);

    const { tourPlan } = useSelector((state: any) => state.aiPlanning);

    useEffect(() => {
        if (tourPlan && tourPlan.itineraryData) {
            const itineraryText = Object.values(tourPlan.itineraryData).join('. ');
            setText(itineraryText);
        }
    }, [tourPlan]);

    useEffect(() => {
        if (!tourPlan) {
            setText("Oops! It seems there was an issue loading the content.");
        }
    }, [tourPlan]);

    useEffect(() => {
        const loadVoices = () => {
            const voices = speechSynthesis.getVoices();
            setVoices(voices);
        };

        speechSynthesis.addEventListener('voiceschanged', loadVoices);
        loadVoices(); // Initial load in case voices are already loaded

        return () => {
            speechSynthesis.removeEventListener('voiceschanged', loadVoices);
        };
    }, []);

    const startSpeaking = () => {
        if (voices.length > 0) {
            const speech = new SpeechSynthesisUtterance(text);
            speech.voice = voices[5];
            window.speechSynthesis.speak(speech);
            setIsSpeaking(true);

            speech.onend = () => {
                setIsSpeaking(false);
            };
        }
    };

    const stopSpeaking = () => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
    };

    return (
        <div className="cursor-pointer">
            {isSpeaking ? (
                <IoVolumeMuteSharp size={28} onClick={stopSpeaking} />
            ) : (
                <IoVolumeHighSharp size={28} onClick={startSpeaking} />
            )}
        </div>
    );
}

export default TextToSpeech;
