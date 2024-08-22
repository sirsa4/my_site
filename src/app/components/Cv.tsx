import { Download, DownloadIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaDownload } from 'react-icons/fa'

const CV = () => {
  return (
    <div className="">

      <Link href={"yahyeCV.pdf"} target="_blank" className="flex gap-x-1 rounded-t-sm bg-secondary-light text-2xl text-center">CV.pdf

        <Download></Download>
      </Link>
    </div>
  )
}

export default CV
