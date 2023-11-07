'use client'

import React, { useState } from 'react'
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ReactSyntaxHighlighter from 'react-syntax-highlighter';
import { Copy, Check } from 'lucide-react'
import { Button } from './ui/button';


const ClientSyntax = ({ value }: any) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value.code)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <>
      <div className='flex mt-5'>
        <div className='px-5 py-2 w-full rounded-t-lg bg-background border-t border-x text-foreground'>{value.filename}</div>
      </div>
      <div className='rounded-bl-lg relative overflow-hidden'>
        <ReactSyntaxHighlighter language='javascript' style={monokaiSublime} wrapLongLines >
          {value.code}
        </ReactSyntaxHighlighter>
        <Button className='absolute text-foreground ml-2 bg-background hover:bg-accent border border-muted-foreground/30 rounded-md px-2 py-1 cursor-pointer top-3 right-3' onClick={copyToClipboard}>

          <div className='flex items-center gap-2'>
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? 'Copied!' : 'Copy'}
          </div>
        </Button>
      </div>
    </>
  )
}

export default ClientSyntax