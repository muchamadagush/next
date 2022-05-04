import Link from "next/link"

/* eslint-disable @next/next/no-img-element */
const Modal = (data: any) => {
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <figure>
                <img
                  src={data.data}
                  alt="Shoes"
                />
              </figure>
          <h3 className="text-lg font-bold">Congratulations random Interner user!</h3>
          <p className="py-4">You&apos;ve been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <Link href={'http://google.com'}>
            <a className="btn btn-sm btn-primary float-right">Go To Web</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Modal