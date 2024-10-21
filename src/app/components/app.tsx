"use client"

import React from "react";
export default function App() {
    return (
        <div>
            <footer className='flex flex-col space-y-10 justify-center m-32 mb-2'>
                <div className='flex justify-center space-x-5 transition-transorm duration-500 ease-in-out transform hover:scale-105'>
                    <img src='https://cdn-icons-png.flaticon.com/128/5968/5968764.png' alt='facebook logo' />
                    <img src='https://cdn-icons-png.flaticon.com/128/4494/4494497.png' alt='linkdin logo' />
                    <img src='https://cdn-icons-png.flaticon.com/128/4494/4494477.png' alt='instagram logo' />
                    <img src='https://cdn-icons-png.flaticon.com/128/1384/1384063.png' alt='instagram logo' />
                </div>
                <h3 className='text-center hover:text-cyan-600 text-white font-medium mb-8'>Created By Saira Nasir.
                    Create a footer and render it once so that it is available across all routes. </h3>
                <br />
                <br />
            </footer>
        </div>
    );
}