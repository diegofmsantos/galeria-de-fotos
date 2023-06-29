import { IoIosCloseCircleOutline } from "react-icons/io";

type Props = {
    image: string
    closeModal: () => void
}

export const Modal = ({image, closeModal}: Props) => {
    return(
        <div>
            <div onClick={closeModal} className="w-full h-full fixed top-0 right-0 bottom-48 left-0 flex justify-center items-center bg-black/90">
                <img src={`/assets/${image}`} alt="Foto" className="w-4/5 h-4/5" />
            </div>
            <div onClick={closeModal} className="fixed top-5 right-5">
                <IoIosCloseCircleOutline className="w-10 h-10 text-white cursor-pointer"/>
            </div>
        </div>
    )
}