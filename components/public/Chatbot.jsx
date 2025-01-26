'use client';

import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Assistance from '@/public/icons/assistance.png';

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [userMessage, setUserMessage] = useState([]);

  const chatbotClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  const onSendMessage = async () => {
    if (!userMessage.trim()) {
      return;
    }

    const messageData = {
      message: userMessage,
      timestamp: new Date().toISOString(),
    };

    try {
      await axios.post('/api/chatbot/sendMessage', messageData);
      setChatHistory((prev) => [
        ...prev,
        { sender: 'User', text: userMessage },
      ]);
      setUserMessage('');
    } catch (error) {
      console.error('Failed to save message: ', error);
    }
  };

  return (
    <>
      {isChatOpen && (
        <div
          className='z-50 fixed h-96 w-80 bottom-4 right-4 bg-white border border-gray-300 rounded-lg '
          onClick={(e) => e.stopPropagation()} // Prevent click propagation to close it accidentally
        >
          {/* Header Section */}
          <div className='bg-primary text-white flex items-center justify-between p-2 rounded-t-lg'>
            <p className='font-semibold text-sm'>How Can I Help You?</p>
            <button
              onClick={() => setIsChatOpen(false)}
              className='text-white text-xl leading-none hover:opacity-75'
            >
              &times;
            </button>
          </div>

          {/* Chat Body */}
          <div className='flex flex-col justify-between h-80'>
            <div className='flex-grow overflow-y-auto p-4 space-y-6'>
              {chatHistory.map((chat, index) => {
                <div
                  key={index}
                  className={`flex ${
                    chat.sender === 'User'
                      ? 'items-end justify-end'
                      : 'items-start'
                  } space-x-2`}
                >
                  {chat.sender !== 'User' && (
                    <div className='flex flex-row items-center space-x-2'>
                      <Image
                        src={Assistance}
                        alt='assistance'
                        width={25}
                        height={25}
                        className='rounded-3xl bg-primary border-2 border-gray-300 p-1'
                      />
                      <p className='text-ts font-semibold text-gray-700'>
                        DEYI
                      </p>
                    </div>
                  )}
                  <div
                    className={`${
                      chat.sender === 'User'
                        ? 'bg-blue-200 text-blue-700'
                        : 'bg-gray-200 text-gray-700'
                    } p-2 rounded-lg text-sm w-auto max-w-xs`}
                  >
                    {chat.text}
                  </div>
                </div>;
              })}
              {/* 
              <div className='flex flex-col items-start space-x-2'>
                <div className='flex flex-row  justify-center items-center p-0 mb-2'>
                  <Image
                    src={Assistance}
                    alt='assistance'
                    width={25}
                    height={25}
                    className='rounded-3xl bg-primary border-2 border-gray-300 p-1'
                  />
                  <p className='text-xs font-semibold text-gray-700 p-1'>
                    DEYI
                  </p>
                </div>
                <div className='bg-gray-200 text-gray-700 p-2 rounded-lg text-sm w-auto max-w-xs'>
                  Hi, I’m DEYI. I'm programmed to help you with questions about
                  this site. What would you like to ask me?
                </div>
              </div> */}
            </div>

            {/* Input Section */}
            <div className='p-3 border-t border-gray-300 flex items-center space-x-2'>
              <input
                type='text'
                placeholder='Type your message...'
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className='flex-grow border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring focus:ring-primary'
              />
              <button
                onClick={onSendMessage}
                className='bg-primary text-white px-4 py-2 text-sm rounded-lg hover:bg-primary-dark'
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {!isChatOpen && (
        <div
          className='z-50 fixed h-auto w-38 bottom-4 right-4 bg-secondary/50 border border-primary-foreground items-center flex flex-row rounded-3xl shadow-lg cursor-pointer'
          onClick={chatbotClick}
        >
          <Image
            src={Assistance}
            alt='assistance'
            width={40}
            height={40}
            className='rounded-3xl bg-primary border-2 border-gray-300 p-1'
          />
          <p className='text-pretty text-primary text-sm p-2 m-2'>
            Talk with DEYI
          </p>
        </div>
      )}
    </>
  );
};

export default Chatbot;
