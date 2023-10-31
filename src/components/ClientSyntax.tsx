'use client'

import React, { useState } from 'react'
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
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
      <div className='flex'>
        <div className='text-muted-foreground mb-2'>{value.filename}</div>
      </div>
      <div className='rounded-lg relative overflow-hidden'>
        <ReactSyntaxHighlighter language='javascript' style={anOldHope} wrapLines >
          {value.code}
        </ReactSyntaxHighlighter>
        <Button className='absolute text-foreground ml-2 bg-background hover:bg-accent border border-muted-foreground/30 rounded-md px-2 py-1 cursor-pointer top-0 right-0' onClick={copyToClipboard}>

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