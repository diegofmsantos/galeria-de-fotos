import { Photo } from "@/types/Photo";

type Props = {
    photo: Photo
    onClick: () => void
}

export const PhotoItem = ({photo, onClick}: Props) => {

    return(
        <div onClick={onClick} className="cursor-pointer hover:opacity-80">
            <img src={`/assets/${photo.url}`} alt="Universo" className="w-full h-full border border-slate-700" />
        </div>
    )
}