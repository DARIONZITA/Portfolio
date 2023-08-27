"use client"
import { CopyToClipboard } from 'react-copy-to-clipboard';


import React, { useState } from 'react';
import Image from 'next/image';
import copy from '../../../public/copy.svg'
import copyDone from '../../../public/copy2.svg'
export function CopyEmail(){
    const [value, setValue] = useState('dariozongogarcianzita@gmail.com');
    const [copied, setCopied] = useState(false);

       const handleCopy = () => {
        setCopied(true);
      };
      return (
        <div className='animate-wiggle animate-twice animate-duration-1000 animate-delay-500 animate-ease-linear animate-alternate animate-fill-backwards text-sm flex copyEmail'>
        <input
          className='areacopy bg-contrast-300 p-3 w-[300px] rounded-s-xl text-lg hover:bg-contrast-200 hover:text-white transition-all'
          defaultValue={value}
          readOnly
          />

        <CopyToClipboard text={value} onCopy={handleCopy}>
            <div data-tip={copied ?'Copied':'Copy'} className='tooltip-success tooltip tooltip-right '>
                <div className='btn border-gray-500 shadow-md shadow-gray-100 rounded-e-xl border-spacing-3 border-2 border-dotted'>
                    <Image
                    src={copied ? copyDone : copy}
                    alt="copy"
                    width={30}
                    height={30}
                />
                </div>
                
            </div>
            
        </CopyToClipboard>

        </div>
      )
      
}