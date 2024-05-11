import React from 'react'
import {Button} from './ui/button'
import {Download} from 'lucide-react'

function Header({DownloadIcon}) {
    return (
        <div className='flex items-center justify-between border p-4 shadow-sm'>
            <img src='/logo.svg' className='w-[170px]'/>
            <Button className="flex items-center gap-2" onClick={() => DownloadIcon(Date.now())}>
                <Download className='h-4 w-4'/> Download</Button>
        </div>
    )
}

export default Header