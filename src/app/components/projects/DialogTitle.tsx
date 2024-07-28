import React from 'react'

const DialogTitle = ({ close }: { close: () => void }) => {
  return (
    <div className="py-4 p-4 bg-primary-light flex justify-end">
      <button
        type="button"
        className="bg-primary-dark text-primary-white hover:bg-accent font-semibold py-2 px-4 rounded transition duration-300 hidden md:block"
        onClick={close}
      >
        Close
      </button>
    </div>
  )
}

export default DialogTitle
